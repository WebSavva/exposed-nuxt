[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

# Exposed Nuxt

Nuxt module that attaches `NuxtApp` and `onNuxtReady` to \
window object on client.

## Setup

```sh
npm i exposed-nuxt # npm
yarn add exposed-nuxt # yarn
npm add exposed-nuxt # pnpm
```

## Usage

The only thing you need to do to use the module in the default configuration is to register the module in the `modules` array in `nuxt.config.ts`:

```javascript
// nuxt.config.js
{
  modules: [
    "exposed-nuxt",
  ],

  exposedNuxt: { // optional
    // global name for NuxtApp
    globalName: '$nuxt',

    // plugin's order
    order: 0,
  }
}
```

```javascript
window.$nuxt.$router.getRoutes();

window.onNuxtReady(() => console.log('Nuxt is up and running !'));
```

[npm-version-src]: https://img.shields.io/npm/v/exposed-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/exposed-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dt/exposed-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/exposed-nuxt
[license-src]: https://img.shields.io/npm/l/@nuxt/image.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/exposed-nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
