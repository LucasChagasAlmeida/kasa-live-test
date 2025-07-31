describe('Register - success', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  const randomEmail = `user_${Date.now()}@test.com`;


  it('Should create an account', () => {
    cy.register('lucas', randomEmail, '123456');
  })

  it('Should delete the account', () => {
    cy.login_n_delete(randomEmail, '123456');
  })
})