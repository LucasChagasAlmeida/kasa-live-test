describe('Open a Best Moment', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  it('Should open the 1st video on "Melhores Momentos"', () => {
    cy.navigate_to_best_moments_manually();
    cy.open_a_best_moment();
    })
})