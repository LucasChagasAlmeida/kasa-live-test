Cypress.Commands.add('navigate_to_best_moments_manually', () => {
    cy.visit('/');
    cy.get('[data-cy="link/melhores-momentos"]', {timeout: 10000}).click()
    cy.url().should('include', '/melhores-momentos');

})

Cypress.Commands.add('open_a_best_moment', () => {
    cy.log('clicking on the 1st child');
    cy.get('.card-highlight-overlay').first().click();

    cy.log('checking if the Iframe is going to be displayed');
    cy.get('iframe').should('have.attr', 'src').and('include', 'youtube.com')
})


Cypress.Commands.add('apply_filter', (team=null, league=null) => {
    var searched
    var filter
        
    if(team!=null){
        searched = team; 
        filter = '[id="accordion-button-:R1ijalalltm:"]'
    }
    else if(league!=null){
        searched = league
        filter = '[id="accordion-button-:R2ijalalltm:"]'
    }


    cy.visit('/melhores-momentos')
    cy.get(filter, {timeout:10000}).click()
    cy.get('[class="chakra-input css-qrzyz6"]').first().type(searched)
    cy.get('.css-1lekzkb > .chakra-checkbox', {timeout: 10000}).first().click({force:true});
})