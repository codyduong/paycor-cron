import { defineConfig } from 'cypress';
import 'dotenv/config';

export default defineConfig({
  projectId:
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    process?.env?.CYPRESS_PRO_ID ?? require('./cypress.env.json')?.PRO_ID,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
