import { defineConfig } from 'cypress';

export default defineConfig({
  projectId:
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    process?.env?.CYPRESS_PRO_ID ?? require('./cypress.env.json')?.PRO_ID,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
