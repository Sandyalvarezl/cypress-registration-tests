describe('Formulario de Registro - Redirección exitosa', () => {
beforeEach(() => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
})

it('Redirige a login después de registrarse exitosamente', () => {

cy.fillPersonalInfo('Lucia', 'Fernandez', '3511112233', '30456775')


cy.selectLocation('Córdoba', 'Córdoba')


cy.fillBirthDate('05', '03', '1992')


cy.fillEmail('lucia.fernandezd@example.com') 


cy.fillPassword('P@ssw0rd123')


cy.get('[data-cy="btn-registrarse"]').click().wait(2000) 


cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
})
})