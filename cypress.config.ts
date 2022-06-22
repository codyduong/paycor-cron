import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'kf2qrx',
  e2e: {
    setupNodeEvents(on, config) {},
  },
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
});
