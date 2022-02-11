// cy.fixture('users').as('usersJson') // load data from users.json
// cy.fixture('logo.png').then((logo) => {
//     // load data from logo.png
// })


describe('Main view page', () => {

    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
    });

    it('Should be able to visit the page and render a header', () => {
        cy.visit('http://localhost:3001')
            .get('header')
            .contains('Rancid Tomatillos')
    })

    it('Should be able to check all movie card information', () => {
        cy.visit('http://localhost:3001')
            .get('[data-cy=movie-cards]').should('have.length', 40)
            .get('[data-cy=card-image]').should('have.length', 40)
            .get('[data-cy=card-title]').should('have.length', 40)
            .get('[data-cy=card-rating]').should('have.length', 40)
    })

    it('Should be able to check individual movie card information and click on it', () => {
        cy.visit('http://localhost:3001')
            .get('[data-cy=movie-cards]').first()
            .should('have.id', '694919')
            .get('img').first().should('be.visible')
            .get('[data-cy=card-title]').first().contains('Money Plane')
            .get('[data-cy=card-rating]').first().contains(6.6)
            .click()
    })
});