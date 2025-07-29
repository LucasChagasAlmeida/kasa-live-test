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



Cypress.Commands.add('login', (email,password) => {

  cy.log('opening the webapp')
  cy.visit('/')
  
  cy.log('opening the profile menu')
  cy.get('[data-cy="btn-trigger-profile"]').click();

  cy.log('entering the email')
  cy.get('[data-cy="login-email"]').type('lalmeidateste@yopmail.com')

  cy.log('entering the email')
  cy.get('[data-cy="login-password"]').type('Lucas123')

  cy.log('clicking to login')
  cy.get('[data-cy="login-submit"]').click()

  cy.log('waiting for the profile picture to load.')
  cy.get('[data-cy="btn-trigger-profile"]').wait(3000)

  cy.log('login successfully done')
})
