describe('Error page', () => {

    it('Should handle 404 Errors on Main Page', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { statusCode: 404 })

        cy.visit('http://localhost:3000')

        cy.get('h2').should('have.text', 'Sorry you smell like the rancidest of the Rancid Tomatillos. Try again or smell you later.')

        cy.get('button')
            .should('have.text', 'Back to Main')
            .should('have.css', 'transform')

        cy.get('button').click()
    })

    it('Should handle 500 Errors on Main Page', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { statusCode: 500 })

        cy.visit('http://localhost:3000')

        cy.get('h2').should('have.text', 'Sorry you smell like the rancidest of the Rancid Tomatillos. Try again or smell you later.')

        cy.get('button')
            .should('have.text', 'Back to Main')
            .should('have.css', 'transform')

        cy.get('button').click()
    })

    it('Should handle 404 Errors on Movie Details Page', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { statusCode: 404 })

        cy.visit('http://localhost:3000/694919')

        cy.get('h2').should('have.text', 'Sorry you smell like the rancidest of the Rancid Tomatillos. Try again or smell you later.')

        cy.get('button')
            .should('have.text', 'Back to Main')
            .should('have.css', 'transform')

        cy.get('button').click()
    })

    it('Should handle 500 Errors from a non-existant path', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { statusCode: 500 })

        cy.visit('http://localhost:3000/694919')

        cy.get('h2').should('have.text', 'Sorry you smell like the rancidest of the Rancid Tomatillos. Try again or smell you later.')

        cy.get('button')
            .should('have.text', 'Back to Main')
            .should('have.css', 'transform')

    })

    it('Should be able to click back to Home page', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { fixture: 'moviesData.json' })

        cy.get('button').click()
        cy.get('[data-cy=movie-cards]').should('have.length', 6)
    })
})
