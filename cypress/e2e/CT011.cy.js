describe('Check access to Favorites while not-logged', () => {
  beforeEach(() => {
    cy.clearSession();
  });

  it('Should have content on the favorite match', () => {
    cy.navigate_to_favorites_manually(true);
  })
})