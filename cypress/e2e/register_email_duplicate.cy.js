describe('Formulario de Registro - Email ya registrado', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Muestra error cuando el email ya está registrado', () => {
    // Fill personal info
    cy.fillPersonalInfo('Maria', 'Gomez', '3519876543', '20345678')

    // Select province and city
    cy.selectLocation('Córdoba', 'Córdoba')

    // Fill birth date
    cy.fillBirthDate('10', '05', '1990')

    // Fill email that is already registered
   cy.fillEmail('juan.perez90@example.com')  // This email is already used

    // Fill password
    cy.fillPassword('P@ssw0rd123')

    // Submit the form
    cy.get('[data-cy="btn-registrarse"]').click()

    // Assertion: check for error message
    cy.contains('Ya existe un usuario registrado con ese correo electrónico')
      .should('be.visible')
  })
})
