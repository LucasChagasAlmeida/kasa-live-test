describe('See best moments from a League', () => {
  beforeEach(() => {
    cy.clearSession();
  });


  it('Should open a moment from a League', () => {
    cy.log('filter by a specific Championship/league')
    cy.apply_filter(null, 'Copa do Nordeste');
    cy.log('open the 1st video shown')
    cy.open_a_best_moment();

  })
})