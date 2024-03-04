import { nextTick } from "#imports";
import { defineNuxtPlugin } from "#app";

type OnNuxtReadyCallback = (...args: any[]) => any;

const globalName = "$<%= options.globalName %>";

export default defineNuxtPlugin((nuxtApp) => {
  const nuxtReadyCallbacks: OnNuxtReadyCallback[] = [];

  nuxtApp.hook("app:suspense:resolve", () => {
    nextTick(() => {
      // @ts-ignore
      window[globalName]._isMounted = true;

      nuxtReadyCallbacks.forEach((cb) => cb());
    });
  });

  // @ts-ignore
  window[globalName] = nuxtApp;

  window.onNuxtReady = (cb) => {
    // @ts-ignore
    if (window[globalName]._isMounted) {
      cb();
      return;
    }

    nuxtReadyCallbacks.push(cb);
  };
});
