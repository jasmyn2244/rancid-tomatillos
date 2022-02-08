describe('Main view page', () => {

    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
    });

    it('Should be able to visit the page and render and see all the movies', () => {
        cy.visit('http://localhost:3001')
            .get('header')
            .contains('Rancid Tomatillos')
            .get('.movie-cards').should('have.length', 40)
    })
    //We may need a router test for click here
    // it('should display a movie details view when a movie card is clicked', () => {
    //     cy.get('button').click()
    //     cy.contains('Please fill out both inputs')
    // });
});