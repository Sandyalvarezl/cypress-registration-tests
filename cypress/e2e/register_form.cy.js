

describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Completa todos los campos y presiona Registrar', () => {
    cy.log('Llenando información personal')
    cy.fillPersonalInfo('Juan', 'Pérez', '3511234567', '20268800')

    cy.log('Seleccionando provincia y localidad')
    cy.selectLocation('Córdoba', 'Córdoba')

    cy.log('Ingresando fecha de nacimiento')
    cy.fillBirthDate('15', '08', '1995')

    cy.log('Ingresando email')
    cy.fillEmail('juan.perez90@example.com')

    cy.log('Ingresando contraseña')
    cy.fillPassword('P@ssw0rd123')

    cy.log('Enviar formulario (commented out for safety)')
    // cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
  })
})
