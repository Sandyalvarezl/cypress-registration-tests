// cypress/support/commands.js
// Custom Cypress commands for registration form

Cypress.Commands.add('fillPersonalInfo', (firstName, lastName, phone, dni) => {
  cy.get('[data-cy="input-nombres"]').clear().type(firstName)
  cy.get('[data-cy="input-apellido"]').clear().type(lastName)
  cy.get('[data-cy="input-telefono"]').clear().type(phone)
  cy.get('[data-cy="input-dni"]').clear().type(dni)
})

Cypress.Commands.add('selectLocation', (province, city) => {
  cy.get('[data-cy="select-provincia"]').clear().type(province)
  cy.get('ul > li > span').contains(province).click()
  cy.get('[data-cy="select-localidad"]').clear().type(city)
  cy.get('ul > li > span').contains(city).click()
})

Cypress.Commands.add('fillBirthDate', (day, month, year) => {
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type(day)
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type(month)
  cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type(year)
})

Cypress.Commands.add('fillEmail', (email) => {
  cy.get('[data-cy="input-email"]').clear().type(email)
  cy.get('[data-cy="input-confirmar-email"]').clear().type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
  cy.get('[data-cy="input-password"]').clear().type(password)
  cy.get('[data-cy="input-repetir-password"]').clear().type(password)
})