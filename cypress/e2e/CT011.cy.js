describe('Search for a Team name', () => {
  beforeEach(() => {
    cy.clearSession();
  });

  const randomEmail = `user_${Date.now()}@test.com`; 

  it('Should find a team', () => {
    cy.register('test',randomEmail, '123456');
    cy.search_Team('Sport Recife');
  })

  it('Should delete the account', () => {
    cy.login(randomEmail, '123456');
    cy.delete_account();
  })

})