describe('Navigation', () => {
  it('should get around', () => {
    cy.visit('/pokemon');

    cy.get('a[data-testid="bulbasaur"]').click();

    cy.url().should('contain', '/pokemon');
    cy.url().should('eq', 'http://localhost:8002/pokemon/1');
    cy.location('pathname').should('eq', '/pokemon/1');

    cy.get('a[data-testid="pokemon-index"]').click();
  });
});
