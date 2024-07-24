import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "<HASURA_ENDPOINT>": {
      headers: {
        // Add your Hasura admin secret here
        "x-hasura-admin-secret": "<HASURA_ADMIN_SECRET>", 
      },
    },
  },
  documents: "src/**/*.graphql",
  generates: {
    "src/lib/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
    }
  },
};

export default config;
