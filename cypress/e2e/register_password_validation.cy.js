describe('Formulario de Registro - Validación de contraseña', () => {
beforeEach(() => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
})

it('Muestra error cuando la contraseña no cumple los requisitos', () => {
const random = Date.now() // For unique email/DNI


cy.get('[data-cy="input-nombres"]').clear().type('Ana')
cy.get('[data-cy="input-apellido"]').clear().type('Lopez')
cy.get('[data-cy="input-telefono"]').clear().type('3511239876')
cy.get('[data-cy="input-dni"]').clear().type(random)


cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
cy.get('ul > li > span').contains('Córdoba').click()
cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
cy.get('ul > li > span').contains('Córdoba').click()


cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('12')
cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('11')
cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1993')


cy.get('[data-cy="input-email"]').clear().type(`ana.lopez${random}@example.com`)
cy.get('[data-cy="input-confirmar-email"]').clear().type(`ana.lopez${random}@example.com`)


cy.get('[data-cy="input-password"]').clear().type('password')
cy.get('[data-cy="input-repetir-password"]').clear().type('password')


cy.get('[data-cy="btn-registrarse"]').click()


cy.get('p.text-red-500.text-center.mt-2')
.should('be.visible')
.and('contain.text', 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.')
})
})