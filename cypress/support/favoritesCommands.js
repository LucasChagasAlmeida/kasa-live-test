Cypress.Commands.add('navigate_to_favorites_manually', (shouldFail=false) => {
    cy.visit('/')
    if(shouldFail)
    {
        cy.get('[data-cy="link/favoritos"]', {timeout: 10000}).should('not.exist');
    }
    else{
        cy.get('[data-cy="link/favoritos"]', {timeout: 10000}).click();
        cy.url().should('include', '/favoritos');
    }
    
});


Cypress.Commands.add('favorite_1st_Team', () => {
    cy.visit('/favoritos');
    cy.get('[data-cy="btn-favorite-team"]', {timeout: 10000}).click();
    cy.contains('Add').first().click({ force: true });
    cy.get('[data-cy="btn-submit-teams"]', {timeout: 10000}).click()
})

Cypress.Commands.add('un_favorites_1st_Team', () => {
    cy.visit('/favoritos');
    cy.get('[data-cy="btn-edit-teams"]', {timeout: 10000}).click();
    cy.get('button.chakra-button.css-di3rc').first().click({ force: true });
    cy.get('[data-cy="btn-save-teams"]').click();
})

Cypress.Commands.add('favorite_a_Match', () => {
    cy.visit('/');
    cy.get('img[alt="lista"]').click();
    cy.get('[aria-label="Favoritar Partida"]', {timeout: 20000}).first().should('be.visible')
    cy.get('[aria-label="Favoritar Partida"]', {timeout: 20000}).first().click();
})


Cypress.Commands.add('check_Favorite_Match', (shouldFail=false) => {
    cy.visit('/favoritos');
    if(shouldFail){
        cy.get('img[alt="logo"]', {timeout:10000}).should('not.exist');  
    }
    else{
        cy.get('img[alt="logo"]', {timeout:10000}).should('be.visible');    
    }
})