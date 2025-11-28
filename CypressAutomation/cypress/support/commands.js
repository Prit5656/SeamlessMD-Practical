

Cypress.Commands.add('login', (email, password) => {
  cy.get('input[name="email"]').should('be.visible').type(email)
  cy.get('input[name="password"]').should('be.visible').type(password)
  cy.contains('button', 'Login').click()
  cy.url().should('not.include', '/login')
})

import 'cypress-plugin-tab'

