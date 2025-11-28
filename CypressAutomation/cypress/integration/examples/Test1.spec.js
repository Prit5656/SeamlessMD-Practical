import { goToSurvey, answerSurveyQuestions, submitSurvey } from '../../support/survey-helpers'

describe('Post-Surgery Symptom Survey', () => {
  beforeEach(() => {
    cy.visit('https://ca-qa.seamless.md/#/login')
  })

  it('completes symptom survey and redirects to dashboard', () => {
    cy.login('patient@example.com', 'password@123')
    goToSurvey()
    answerSurveyQuestions()
    submitSurvey()

    cy.get('.success-message')
      .should('be.visible')
      .and('contain', 'Survey submitted')

    cy.url().should('include', '/dashboard')
    cy.contains('Welcome').should('be.visible')
  })
})
