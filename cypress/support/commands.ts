/// <reference types="cypress" />

import { Temporal } from '@js-temporal/polyfill';

/* eslint-disable @typescript-eslint/no-namespace */

declare namespace Cypress {
  interface Chainable {
    verifyNotHoliday(): Chainable<Element>;
    login(): Chainable<Element>;
  }
}

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('verifyNotHoliday', () => {
  cy.fixture('calendar').then((calendarData) => {
    // const todayDate = Temporal.PlainDate.from('2022-07-04').toString();
    const todayDate = Temporal.Now.plainDate(
      'iso8601',
      'America/Chicago'
    ).toString();
    const daysOff = calendarData.daysOff;
    console.log(daysOff, todayDate);
    if (daysOff.includes(todayDate)) {
      throw new Error('Holiday!');
    }
  });
});

// -- This is a parent command --
Cypress.Commands.add('login', () => {
  cy.visit('https://hcm.paycor.com/authentication/signin');
  cy.get('[id$=Username]').fill(Cypress.env('USER'));
  cy.get('[id$=Password]').fill(Cypress.env('PASS'));
  cy.get('.sign-in-button').click();
  cy.wait(500);
  cy.url().should('include', 'hcm.paycor.com/Portal');
});
