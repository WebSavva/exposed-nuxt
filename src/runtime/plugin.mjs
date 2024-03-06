import { nextTick } from '#imports';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const nuxtReadyCallbacks = [];

  let isNuxtAppMounted = false;

  nuxtApp.hook('app:suspense:resolve', () => {
    nextTick(() => {
      isNuxtAppMounted = true;

      nuxtReadyCallbacks.forEach((cb) => cb());
    });
  });

  window['<%= options.globalName %>'] = nuxtApp;

  window.onNuxtReady = (cb) => {
    if (isNuxtAppMounted) {
      cb();
    } else {
      nuxtReadyCallbacks.push(cb);
    }
  };
});
