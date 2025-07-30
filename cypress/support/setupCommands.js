Cypress.Commands.add('clearSession', () => {
  cy.clearCookies();
  cy.clearLocalStorage();

  // Deleta IndexedDB (ex: usado por Firebase)
  indexedDB.deleteDatabase('firebaseLocalStorageDb');

  // Limpa cache do navegador (Service Workers)
  cy.window().then((win) => {
    if ('caches' in win) {
      caches.keys().then((keys) => {
        return Promise.all(keys.map((key) => caches.delete(key)));
      });
    }
  });
});


Cypress.Commands.add('register', (userName, email, password, shouldFail=false) => {
  cy.visit('/')
  cy.get('[data-cy="btn-trigger-profile"]').click();
  
  cy.get('[data-cy="login-createAccount"]').click();

  cy.get('[data-cy="register-name"]').type(userName);

  cy.get('[data-cy="register-email"]').type(email);

  cy.get('[data-cy="register-password"]').type(password);

  cy.get('[data-cy="register-confirmPassword"]').type(password);

  cy.get('[data-cy="register-submit"]').click();

  if(shouldFail){
    cy.get('.Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--error').should('be.visible').and('contain', 'Este endereço de email ja esta sendo utilizado, tente outro.');
        
  }
  else{
    cy.get('.Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--success').should('be.visible').and('contain', 'Cadastro realizado com sucesso! Verifique seu e-mail para ativar sua conta.');
  
  }
    
})

Cypress.Commands.add('login', (email,password,shouldFail=false) => {

  cy.log('opening the webapp');
  cy.visit('/');
  
  cy.log('opening the profile menu')
  cy.get('[data-cy="btn-trigger-profile"]').click();

  cy.log('waiting for the login field be displayed');
  cy.get('[data-cy="login-email"]', { timeout: 10000}).should('be.visible')

  cy.log('entering the email');
  cy.get('[data-cy="login-email"]').type(email);

  cy.log('entering the email');
  cy.get('[data-cy="login-password"]').type(password);

  cy.log('clicking to login');
  cy.get('[data-cy="login-submit"]').click();

  if(shouldFail){
    cy.log('Checking for fail toast');
    cy.get('.Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--error', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Não foi possivel fazer o login! Verifique se o email e a senha estão corretos.');
  }
  else{
    cy.log('waiting for the profile picture to load.');
    cy.get('[data-cy="btn-trigger-profile"]').wait(3000);
    cy.log('login successfully done');
  }
  
})


Cypress.Commands.add('logout', () => {
  cy.get('[data-cy="btn-trigger-profile"]').click();

  cy.get('[data-cy="btn-logout-profile"]').click();

  cy.get('[data-cy="btn-trigger-profile"]').should('be.visible').and('contain', 'Entrar');
})

Cypress.Commands.add('delete_account', () => {

  cy.get('[data-cy="btn-trigger-profile"]', {timeout: 10000}).click();

  cy.get('[data-cy="btn-delete-profile"]').click();

  cy.get('[data-cy="alert-dialog-submit"]').click();

  cy.get('.Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--success', {timeout: 10000}).should('be.visible').and('contain', 'Conta deletada com sucesso!')

})

Cypress.Commands.add('register_n_logout', (userName, email, password) => {
  cy.register(userName, email, password);
  cy.get('.Toastify__toast.Toastify__toast-theme--colored.Toastify__toast--success', { timeout: 10000 }).should('not.exist'); 
  cy.logout();
})
