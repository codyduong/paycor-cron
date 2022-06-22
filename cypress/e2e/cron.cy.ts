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
    cy.wait(500);
    cy.login();
    //cy.get('.btn-create-punch').click();
    console.log(
      Temporal.Now.plainDateTime('iso8601', 'America/Chicago').toString()
    );
  });
});
