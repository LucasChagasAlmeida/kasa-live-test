describe('template spec', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  const randomEmail = `user_${Date.now()}@test.com`; 

  it('Should Favorite the Match', () => {
    cy.register('test',randomEmail, '123456');
    cy.favorite_a_Match();
  })

  it('Should have content on the favorite match', () => {
    cy.login(randomEmail, '123456');
    cy.check_Favorite_Match();
  })

  it('Should delete the account', () => {
    cy.login(randomEmail, '123456')
    cy.delete_account();
  })
})