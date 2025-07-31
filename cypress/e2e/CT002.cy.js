describe('Register - Fail', () => {
  beforeEach(() => {
    cy.clearSession();
  });

  const randomEmail = `user_${Date.now()}@test.com`;

  it('Should create an account', () => {
    cy.register_n_logout('test',randomEmail, '123456')
  });

  it('Should NOT create an account', () => {
    cy.register('test', randomEmail, '123456', true);
  });

  it('Should delete the account', () => {
    cy.login_n_delete(randomEmail, '123456');
  })
});