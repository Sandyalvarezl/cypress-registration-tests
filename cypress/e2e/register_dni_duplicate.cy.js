describe('Formulario de Registro - DNI ya registrado', () => {
beforeEach(() => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
})

it('Muestra error cuando el DNI ya está registrado', () => {

cy.fillPersonalInfo('Carlos', 'Ramirez', '3515551234', '20268800') // 20268800 is already used


cy.selectLocation('Córdoba', 'Córdoba')


cy.fillBirthDate('20', '07', '1985')


cy.fillEmail('carlos.ramirez@example.com') 


cy.fillPassword('P@ssw0rd123')


cy.get('[data-cy="btn-registrarse"]').click()



cy.contains('Ya existe un usuario registrado con ese DNI')
.should('be.visible')
})
})