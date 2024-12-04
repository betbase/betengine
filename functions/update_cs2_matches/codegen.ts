import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.grid.gg/live-data-feed/series-state/graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ]
    },
    'src/generated/schema.graphql': {
      plugins: ['schema-ast']
    }
  }
};

export default config;
