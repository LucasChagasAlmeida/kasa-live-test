describe('template spec', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  
  
  const randomEmail = `user_${Date.now()}@test.com`; 

  it('Should favorite the 1st team', () => {
    cy.register('test',randomEmail, '123456');
    cy.favorite_1st_Team();
  });

  it('Should un-favorite the 1st team', () => {
    cy.login(randomEmail, '123456');
    cy.un_favorites_1st_Team()
  });
  
  it('Should delete the account', () => {
    cy.login(randomEmail, '123456')
    cy.delete_account();
  })
})