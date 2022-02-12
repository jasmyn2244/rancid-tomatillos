describe('Movie details view', () => {

    it('Should be able to visit the selected movie view, render a header and all the information about the movie', () => {

        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', { fixture: 'singleMovieData.json' })
        cy.visit('http://localhost:3001/694919')

        cy.get('header')
            .contains('Rancid Tomatillos')

        cy.get('[data-cy=gen-movie]')
            .should('exist')

        cy.get('img')
            .should('be.visible')
            .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')

        cy.get('h2')
            .


    })
})