Cypress.Commands.add('fillLoginForm', (email, password) => {
  if (email) {
    cy.get('input[name="email"]').should('be.visible').clear().type(email)
  }
  if (password) {
    cy.get('input[name="password"]').should('be.visible').clear().type(password)
  }
})

Cypress.Commands.add('attemptLogin', () => {
  cy.contains('button', 'Login').should('be.visible').click()
})

Cypress.Commands.add('verifyLoginFormElements', () => {
  cy.get('input[name="email"]').should('be.visible')
  cy.get('input[name="password"]').should('be.visible')
  cy.contains('button', 'Login').should('be.visible').and('be.enabled')
  cy.get('input[name="email"]').should('have.attr', 'type', 'text')
  cy.get('input[name="password"]').should('have.attr', 'type', 'password')
})

Cypress.Commands.add('verifyEmailError', () => {
  cy.contains('Please enter your username', { timeout: 5000 }).should('be.visible')
})

Cypress.Commands.add('verifyPasswordError', () => {
  cy.contains('Please enter your password', { timeout: 5000 }).should('be.visible')
})

Cypress.Commands.add('verifyLoginSuccess', () => {
  cy.url().should('not.include', '/login')
})

Cypress.Commands.add('clickSubmit', () => {
  cy.get('button[type="submit"]').should('be.visible').click()
})
Cypress.Commands.add('verifyAccessibilityAttributes', () => {
  cy.get('input[name="email"]').should('have.attr', 'name', 'email')
  cy.get('input[name="password"]').should('have.attr', 'name', 'password')
  cy.get('input[name="email"]').should('have.attr', 'type', 'text')
  cy.get('input[name="password"]').should('have.attr', 'type', 'password')
})

Cypress.Commands.add('verifyResponsiveLayout', (viewport) => {
  cy.viewport(viewport)
  cy.get('input[name="email"]').should('be.visible')
  cy.get('input[name="password"]').should('be.visible')
  cy.contains('button', 'Login').should('be.visible')
})

