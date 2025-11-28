describe('SeamlessMD Login Page', () => {
  beforeEach(() => {
    cy.visit('https://ca-qa.seamless.md/#/login')
  })

  it('should display login form with all required elements', () => {
    cy.verifyLoginFormElements()
  })

  it('should show validation error for empty email field', () => {
    cy.fillLoginForm(null, 'password123')
    cy.attemptLogin()
    cy.verifyEmailError()
  })

  it('should show validation error for empty password field', () => {
    cy.fillLoginForm('patient@example.com', null)
    cy.attemptLogin()
    cy.verifyPasswordError()
  })

  it('should show error message for invalid email and password', () => {
    cy.fillLoginForm('invalid@example.com', 'wrongpassword')
    cy.attemptLogin()
    cy.verifyInvalidCredentials()
  })

   it('should have proper labels and ARIA attributes for accessibility', () => {
    cy.verifyAccessibilityAttributes()
  })

  it('should support keyboard navigation', () => {
    cy.get('input[name="email"]').type('patient@example.com')
    cy.focused().tab()
    cy.get('input[name="password"]').type('password123')
    cy.focused().tab()
    cy.focused().should('match', 'button')
    cy.focused().tab()
    cy.focused().should('contain.text', 'Login')             
   
  })

  it('should be responsive on mobile viewport', () => {
    cy.verifyResponsiveLayout('iphone-x')
  })

  it('should be responsive on tablet viewport', () => {
    cy.verifyResponsiveLayout('ipad-2')
  })
})
