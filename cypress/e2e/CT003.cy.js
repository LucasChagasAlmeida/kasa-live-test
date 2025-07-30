describe('testing login - success', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  const randomEmail = `user_${Date.now()}@test.com`; 

  it('Should create an account', () => {
    cy.register_n_logout('test',randomEmail, '123456')
  });

  it('should login', () => {
    cy.login(randomEmail, '123456')
    cy.log('Login validated.')
  })
})