import { generate } from '@graphql-codegen/cli';

async function _generate() {
  const generatedFiles = await generate(
    {
      schema: './_ado/_person.schema.graphql',
      generates: {
        [process.cwd() + '/_ado/_person.tsx']: {
          plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
        },
      },
			config: {
				withHOC: true
			}
    },
    true
  )
}

_generate()