describe('Register - success', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  it('Should create an account', () => {
    const randomEmail = `user_${Date.now()}@test.com`;
    cy.register('lucas', randomEmail, '123456');
  })
})