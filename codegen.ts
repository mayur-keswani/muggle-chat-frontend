import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "http://localhost:8080/v1/graphql": {
      headers: {
        // Add your Hasura admin secret here
        "x-hasura-admin-secret": "myadminsecretkey",
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
