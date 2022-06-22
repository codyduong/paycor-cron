import { Temporal } from '@js-temporal/polyfill';

describe('Cron job', () => {
  afterEach(function () {
    if (this.currentTest?.state === 'failed') {
      Cypress.runner.stop();
    }
  });
  it('Verify not holiday', () => {
    cy.verifyNotHoliday();
  });
  it('Login', () => {
    cy.setCookie('paycorMFProduction', Cypress.env('PAY_MF_PRO'));
    cy.login();
    cy.get('.btn-create-punch').click();
    cy.get('.success-banner').should('be.visible');
    cy.screenshot();
  });
});
