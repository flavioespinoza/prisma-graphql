import { generate } from '@graphql-codegen/cli';

async function _generate() {
  const generatedFiles = await generate(
    {
      schema: 'http://localhost:4466/',
      documents: './generated/**/*.graphql',
      generates: {
        [process.cwd() + '/_ado/']: {
          plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
        },
      },
			config: {
				withHOC: false
			}
    },
    true
  )
}

