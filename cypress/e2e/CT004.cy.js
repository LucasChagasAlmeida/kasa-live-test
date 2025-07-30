describe('testing login - fail', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  const randomEmail = `user_${Date.now()}@test.com`; 

  it('Should create an account', () => {
    cy.register_n_logout('test',randomEmail, '123456')
  });


  it('should login', () => {
    cy.login(randomEmail, 'WrongPassword', true)
    cy.log('Login failed.')

    cy.login('wrongEmail@test.com', '123456', true)
    cy.log('Login failed.')

  })
})