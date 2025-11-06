describe('Formulario de Registro - Redirección exitosa', () => {
beforeEach(() => {
cy.visit('https://ticketazo.com.ar/auth/registerUser')
})

it('Redirige a login después de registrarse exitosamente', () => {
// Fill personal info
cy.fillPersonalInfo('Lucia', 'Fernandez', '3511112233', '30456789')

// Select province and city
cy.selectLocation('Córdoba', 'Córdoba')

// Fill birth date
cy.fillBirthDate('05', '03', '1992')

// Fill email
cy.fillEmail('lucia.fernandez@example.com') // Use a new email

// Fill password
cy.fillPassword('P@ssw0rd123')

// Submit the form
cy.get('[data-cy="btn-registrarse"]').click().wait(2000) // wait 2 seconds for redirect

// Assertion: check that URL is exactly the login page
cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
})
})