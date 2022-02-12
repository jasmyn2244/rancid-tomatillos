describe('Main view page', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { fixture: 'moviesData.json' })
        cy.visit('http://localhost:3001')
    })

    it('Should be able to visit the page and render a header', () => {
        cy.get('header')
            .contains('Rancid Tomatillos')
    })

    it('Should be able to check all movie card information', () => {
        cy.get('[data-cy=movie-cards]').should('have.length', 6)
            .get('[data-cy=card-image]').should('have.length', 6)
            .get('[data-cy=card-title]').should('have.length', 6)
            .get('[data-cy=card-rating]').should('have.length', 6)
    })

    it('Should be able to check individual movie card information and click on it', () => {
        cy.get('[data-cy=movie-cards]').first()
            .should('have.id', '694919')
            .get('img').first().should('be.visible').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
            .get('[data-cy=card-title]').first().contains('Money Plane').should('be.visible')
            .get('[data-cy=card-rating]').first().contains('6.7').should('be.visible')
            .click()
    })
});


// describe('Main view page', () => {

//     it('Should be able to visit the page, render a header and movie cards, and check the card information', () => {
//         cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { fixture: 'moviesData.json' })
//         cy.visit('http://localhost:3001')
        
//         cy.get('header')
//             .contains('Rancid Tomatillos')
        
//         cy.get('[data-cy=movie-cards]').should('have.length', 6)
//             .get('[data-cy=card-image]').should('have.length', 6)
//             .get('[data-cy=card-title]').should('have.length', 6)
//             .get('[data-cy=card-rating]').should('have.length', 6)
        
//         cy.get('[data-cy=movie-cards]').first()
//             .should('have.id', '694919')
//             .get('img').first().should('be.visible').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
//             .get('[data-cy=card-title]').first().contains('Money Plane')
//             .get('[data-cy=card-rating]').first().contains('6.7')
//             .click()
//     })
// });