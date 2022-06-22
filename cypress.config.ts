import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: Cypress.env('PRO_ID'),
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
