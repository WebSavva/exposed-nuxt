import ExposedNuxtModule from '../../../src/module';

export default defineNuxtConfig({
  modules: [
    [
      ExposedNuxtModule,
      {
        globalName: 'customNuxt',
      },
    ],
  ],

  runtimeConfig: {
    public: {
      isCustomName: true,
    },
  },
});
