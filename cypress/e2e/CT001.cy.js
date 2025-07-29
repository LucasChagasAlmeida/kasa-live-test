describe('testing login function', () => {
  beforeEach(() => {
    cy.clearSession();
  });
  
  it('should login', () => {
    cy.login('lalmeidateste@yopmail.com', 'Lucas123')
    cy.log('Login validated.')
  })
})