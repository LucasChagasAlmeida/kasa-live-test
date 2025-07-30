describe('delete - success', () => {
  beforeEach(() => {
    cy.clearSession();
  });

  const randomEmail = `user_${Date.now()}@test.com`; 

  it('Should create an account', () => {
    cy.register_n_logout('test',randomEmail, '123456');
  });


it('Should delete the account', () => {
  cy.login(randomEmail, '123456')
  cy.delete_account();
})

})