describe('Movie details view', () => {

    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
    });

    it('Should be able to render details for a specific movie', () => {
        cy.visit('http://localhost:3001')
            .get()
    })
})