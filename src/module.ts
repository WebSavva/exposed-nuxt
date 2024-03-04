import {
  defineNuxtModule,
  createResolver,
  addPluginTemplate,
  addTypeTemplate,
} from '@nuxt/kit';

export interface ModuleOptions {
  globalName?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'exposedNuxt',
    configKey: 'exposedNuxt',
  },
  defaults: {
    globalName: 'nuxt',
  },
  setup(options) {
    const resolver = createResolver(import.meta.url);

    addPluginTemplate({
      src: resolver.resolve('./runtime/plugin.ts'),
      mode: 'client',
      options,
    });

    addTypeTemplate({
      src: resolver.resolve('./runtime/types.d.ts'),
      filename: 'exposed-nuxt.d.ts',
      options,
    });
  },
});
