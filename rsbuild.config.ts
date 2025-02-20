import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_consumer',
      remotes: {
        federation_button_provider: 'federation_button_provider@http://localhost:3000/mf-manifest.json',
        federation_docs_provider: 'federation_docs_provider@http://localhost:3001/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  server: {
    port: 2000,
  },
});
