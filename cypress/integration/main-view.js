describe('Main view page', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { fixture: 'moviesData.json' })
        cy.visit('http://localhost:3000')
    })

    it('Should be able to visit the page and render a header', () => {
        cy.get('header')
            .should('exist')

        cy.get('[data-cy=logo]')
            .should('have.attr', 'src', '/static/media/LongLogo.b3bf23c04fc580c30a6c.png')
    })

    it('Should have a search bar and button', () => {
        cy.get('input')
            .should('have.attr', 'placeholder', 'MOVIE TITLE')
        cy.get('button')
            .should('have.text', 'SEARCH')
    })

    it('Should be able to check all movie card information', () => {
        cy.get('[data-cy=movie-cards]')
            .should('have.length', 6)
        cy.get('[data-cy=card-image]')
            .should('have.length', 6)
        cy.get('[data-cy=card-title]')
            .should('have.length', 6)
        cy.get('[data-cy=card-rating]')
            .should('have.length', 6)
    })

    it('Should be able to check individual movie card information and click on it', () => {
        cy.get('[data-cy=movie-cards]')
            .first()
            .should('have.id', '694919')
        cy.get('img')
            .eq(1)
            .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
        cy.get('[data-cy=card-title]')
            .first()
            .should('have.text', 'Money Plane')
        cy.get('[data-cy=card-rating]')
            .first()
            .should('have.text', '6.7')
    });

    it('Should be able to click to Movie Details page', () => {
        cy.get('[data-cy=movie-cards]')
            .first()
            .click()
        cy.get('h2')
            .should('have.text', 'Money Plane')
    })
})