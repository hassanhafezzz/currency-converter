// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('typeInNumberInput', (label, value) => {
  cy.findByLabelText(label).invoke('val', '').clear().type(value).blur();
});

Cypress.Commands.add('assertErrorMessage', (message) => {
  cy.findByRole('alert').should('be.visible');
  cy.findByRole('alert').contains(message);
  cy.findByText('close').click();
  cy.findByRole('alert').should('not.exist');
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
