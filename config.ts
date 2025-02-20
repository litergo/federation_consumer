const config = {
    development: {
      remotes: {
        button_provider: "federation_button_provider@http://localhost:3000/mf-manifest.json",
        docs_provider: "federation_docs_provider@http://localhost:3001/mf-manifest.json",
      },
    },
    production: {
      remotes: {
        button_provider: "federation_button_provider@https://federation-button-provider.onrender.com/mf-manifest.json",
        docs_provider: "federation_docs_provider@https://federation-docs-provider.onrender.com/mf-manifest.json",
      },
    },
  };
  
  export default config;