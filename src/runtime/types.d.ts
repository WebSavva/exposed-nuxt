import type { NuxtApp } from '#app';

type OnNuxtReadyCallback = (...args: any[]) => any;

declare global {
  interface Window {
    onNuxtReady: (callback: OnNuxtReadyCallback) => void;
    $<%= options.globalName %>: NuxtApp;
  }
}
