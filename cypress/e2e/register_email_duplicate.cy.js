describe('Formulario de Registro - Email ya registrado', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Muestra error cuando el email ya está registrado', () => {

    cy.fillPersonalInfo('Maria', 'Gomez', '3519876543', '20345678')

  
    cy.selectLocation('Córdoba', 'Córdoba')

    
    cy.fillBirthDate('10', '05', '1990')

    
   cy.fillEmail('juan.perez90@example.com')  // This email is already used

    
    cy.fillPassword('P@ssw0rd123')

    
    cy.get('[data-cy="btn-registrarse"]').click()

    
    cy.contains('Ya existe un usuario registrado con ese correo electrónico')
      .should('be.visible')
  })
})
