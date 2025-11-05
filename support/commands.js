Cypress.Commands.add('fillBasicInfo', (firstName, lastName, phone, dni) => {
  cy.get('[data-cy="input-nombres"]').clear().type(firstName)
  cy.get('[data-cy="input-apellido"]').clear().type(lastName)
  cy.get('[data-cy="input-telefono"]').clear().type(phone)
  cy.get('[data-cy="input-dni"]').clear().type(dni)
})

Cypress.Commands.add('selectProvinceAndLocality', (province, locality) => {
  cy.get('[data-cy="select-provincia"]').clear().type(province)
  cy.get('ul > li > span').contains(province).click()
  cy.get('[data-cy="select-localidad"]').clear().type(locality)
  cy.get('ul > li > span').contains(locality).click()
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

Cypress.Commands.add('submitForm', () => {
  cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
})