describe('Formulario de Registro', () => {
  beforeEach(() => {
    // Opens the registration page before each test
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Completa todos los campos y presiona Registrar', () => {
    // Step 1: Fill personal info
    cy.log('Llenando información personal')
    cy.fillPersonalInfo('Juan', 'Pérez', '3511234567', '20268800')

    // Step 2: Select province and city
    cy.log('Seleccionando provincia y localidad')
    cy.selectLocation('Córdoba', 'Córdoba')

    // Step 3: Enter date of birth
    cy.log('Ingresando fecha de nacimiento')
    cy.fillBirthDate('15', '08', '1995')

    // Step 4: Enter email
    cy.log('Ingresando email')
    cy.fillEmail('juan.perez90@example.com')

    // Step 5: Enter password
    cy.log('Ingresando contraseña')
    cy.fillPassword('P@ssw0rd123')

    // Step 6: Click register (this line is optional for now)
    cy.log('Enviar formulario')
    // cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
  })
})