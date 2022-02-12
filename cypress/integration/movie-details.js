describe('Movie details view', () => {

    it('Should be able to visit the selected movie view, render a header and all the information about the movie', () => {

        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'singleMovieData.json' })

        cy.visit('http://localhost:3000/694919')

        cy.get('header')
            .contains('Rancid Tomatillos')

        cy.get('img')
            .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')

        cy.get('h2')
            .should('have.text', 'Money Plane')

        cy.get('p')
            .eq(0)
            .should('have.text', 'Rating: 6.6')

        cy.get('p')
            .eq(1)
            .should('have.text', 'Release Date: 09/29/2020')

        cy.get('p')
            .eq(2)
            .should('have.text', 'Duration: 82 minutes')

        cy.get('p')
            .eq(3)
            .should('have.text', 'A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')

        cy.get('p')
            .eq(4)
            .should('have.text', 'Budget: Not Available')

        cy.get('p')
            .eq(5)
            .should('have.text', 'Revenue: Not Available')

        cy.get('p')
            .eq(6)
            .should('have.text', 'Genres: Action')


        cy.get('button')
            .should('have.text', 'Back to Main')
            .should('have.css', 'transform')

        // cy.get('button').click()
    })

    it('Should be able to click back to Home page', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { fixture: 'moviesData.json' })

        cy.get('button').click()
        cy.get('[data-cy=movie-cards]').should('have.length', 6)
    })
})