Cypress.Commands.add('fillPersonalInfo', (nombres, apellidos, telefono, dni) => {
  cy.get('[data-cy="input-nombres"]').clear().type(nombres)
  cy.get('[data-cy="input-apellido"]').clear().type(apellidos)
  cy.get('[data-cy="input-telefono"]').clear().type(telefono)
  cy.get('[data-cy="input-dni"]').clear().type(dni)
})

Cypress.Commands.add('selectLocation', (provincia, localidad) => {
  cy.get('[data-cy="select-provincia"]').clear().type(provincia)
  cy.get('ul > li > span').contains(provincia).click()
  cy.get('[data-cy="select-localidad"]').clear().type(localidad)
  cy.get('ul > li > span').contains(localidad).click()
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
