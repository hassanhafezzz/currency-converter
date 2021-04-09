import { latest } from '../../src/dataMock';
describe('converter', () => {
  it('should convert form amount to amount bidirectional conversion (user can input either source or target amount)', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/*`,
      status: 200,
      response: latest,
    });
    cy.visit('/');
    cy.typeInNumberInput(/from amount field/i, '900');
    cy.findByTestId('from-currency-select').type('USD{enter}');
    cy.findByLabelText(/to amount field/i).should('have.value', 3305.88);
    cy.typeInNumberInput(/to amount field/i, '900');
    cy.findByLabelText(/from amount field/i).should('have.value', 245.02);
    cy.findByTestId('to-currency-select').type('EGP{enter}');
    cy.findByLabelText(/to amount field/i).should('have.value', 3857.42);
    cy.findByTestId('to-currency-select').type('GBP{enter}');
    cy.findByLabelText(/to amount field/i).should('have.value', 178.22);
    cy.findByTestId('from-currency-select').type('GBP{enter}');
    cy.findByLabelText(/from amount field/i).should('have.value', 245.02);
  });

  it('should show error in case the API responded with error message)', () => {
    const message = 'we face an error trying to get your data';
    cy.server();
    cy.route({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/*`,
      status: 400,
      response: {
        error: { message },
      },
    });
    cy.visit('/');
    cy.assertErrorMessage(message);
  });

  it('should show error in case the API is down', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/*`,
      status: 500,
      response: {},
    });
    cy.visit('/');
    cy.assertErrorMessage(/something went wrong/i);
  });
});
