describe('Search for a League name', () => {
  beforeEach(() => {
    cy.clearSession();
  });

  const randomEmail = `user_${Date.now()}@test.com`; 

  it('Should find a League', () => {
    cy.register('test',randomEmail, '123456');
    cy.search_Team(null, 'AFC Champions League');
  })

  it('Should delete the account', () => {
    cy.login(randomEmail, '123456')
    cy.delete_account();
  })

})