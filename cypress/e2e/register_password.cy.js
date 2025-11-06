describe('Formulario de Registro - Validación de contraseña', () => {
beforeEach(() => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
})

it('Muestra errores cuando la contraseña no cumple con los requisitos', () => {

cy.fillPersonalInfo('Ana', 'Lopez', '3511239876', '30567890')


cy.selectLocation('Córdoba', 'Córdoba')


cy.fillBirthDate('12', '11', '1993')


cy.fillEmail('ana.lopez@example.com') 


cy.fillPassword('password')


cy.get('[data-cy="btn-registrarse"]').click()


cy.contains('La contraseña debe tener al menos 8 caracteres')
.should('be.visible')

cy.contains('La contraseña debe incluir al menos una letra mayúscula')
.should('be.visible')

cy.contains('La contraseña debe incluir al menos un número')
.should('be.visible')

cy.contains('La contraseña debe incluir al menos un carácter especial')
.should('be.visible')
})
})
