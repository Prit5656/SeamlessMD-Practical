# Cypress Automation Test Suite

This repository contains Cypress end-to-end tests for SeamlessMD Pratical Test.

## Project Structure

```
cypress/
  ├── integration/
  │   └── examples/
  │       ├── Test1.spec.js      # Post-Surgery Symptom Survey tests
  │       └── Test2B.spec.js     # Login page validation tests
  └── support/
      ├── commands.js            # Custom login command
      ├── login-commands.js      # Login page specific commands
      ├── survey-helpers.js      # Survey helper functions
      └── e2e.js                 # Support file configuration
```


## Test Files

### Test1.spec.js
- Post-Surgery Symptom Survey end-to-end test
- Tests login, survey navigation, question answering, and submission

### Test2B.spec.js
- Login page validation tests
- Form validation
- Error handling
- Accessibility checks
- Responsive design tests

## Custom Commands

- `cy.login(email, password)` - Login with credentials
- `cy.fillLoginForm(email, password)` - Fill login form
- `cy.attemptLogin()` - Click login button
- `cy.verifyLoginFormElements()` - Verify form elements
- `cy.verifyEmailError()` - Verify email error message
- `cy.verifyPasswordError()` - Verify password error message
- `cy.verifyInvalidCredentials()` - Verify invalid credentials error

## Helper Functions

- `goToSurvey()` - Navigate to survey page
- `answerSurveyQuestions()` - Answer survey questions
- `submitSurvey()` - Submit survey and validate API

