import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import config from './config'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_consumer',
      remotes: {
        federation_button_provider: config[process.env.NODE_ENV].remotes.button_provider,
        federation_docs_provider: config[process.env.NODE_ENV].remotes.docs_provider,
      },
      shared: ['react', 'react-dom'],
    })
  ],
  server: {
    port: process.env.PORT || 4000,
  },
});
