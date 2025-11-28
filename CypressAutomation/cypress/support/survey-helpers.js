
export const goToSurvey = () => {
  cy.get('[data-testid="survey-link"]').should('be.visible').click()
  cy.url().should('include', '/survey')
}


export const answerSurveyQuestions = () => {
  cy.get('[data-testid="question-1"]').should('be.visible').click()
  cy.get('[data-testid="question-2"]').should('be.visible').type('I feel great!')
  cy.get('[data-testid="question-3"]').should('be.visible').click()
}


export const submitSurvey = () => {
  cy.intercept('POST', '/api/survey').as('submitSurvey')
  cy.contains('button', 'Submit').should('be.enabled').click()
  cy.wait('@submitSurvey').its('response.statusCode').should('eq', 200)
}

