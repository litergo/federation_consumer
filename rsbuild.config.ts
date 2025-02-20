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
        // federation_button_provider: 'federation_button_provider@http://localhost:3000/mf-manifest.json',
        // federation_docs_provider: 'federation_docs_provider@http://localhost:3001/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  server: {
    port: process.env.PORT || 4000,
  },
});
