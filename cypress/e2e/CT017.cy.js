describe('See best moments from a team', () => {
  beforeEach(() => {
    cy.clearSession();
  });

  it('passes', () => {
    cy.apply_filter('Madrid');
    cy.open_a_best_moment();

  })
})