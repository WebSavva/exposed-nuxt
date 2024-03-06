import { nextTick } from '#imports';
import { defineNuxtPlugin } from '#app';

type OnNuxtReadyCallback = (...args: any[]) => any;

export default defineNuxtPlugin((nuxtApp) => {
  const nuxtReadyCallbacks: OnNuxtReadyCallback[] = [];

  let isNuxtAppMounted = false;

  nuxtApp.hook('app:suspense:resolve', () => {
    nextTick(() => {
      isNuxtAppMounted = true;

      nuxtReadyCallbacks.forEach((cb) => cb());
    });
  });

  // @ts-ignore
  window['<%= options.globalName %>'] = nuxtApp;

  window.onNuxtReady = (cb) => {
    if (isNuxtAppMounted) {
      cb();
    } else {
      nuxtReadyCallbacks.push(cb);
    }
  };
});
