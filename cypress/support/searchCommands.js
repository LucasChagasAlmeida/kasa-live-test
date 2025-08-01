Cypress.Commands.add('search_Team', (team=null, league=null) =>{
    var searched;
    var filter;
    var timing;

    if(team!=null){
        searched = team; 
        filter = '[id="filter-team"]'
        timing = 10000 
    }
    else if(league!=null){
        searched = league
        filter = '[id="filter-championship"]'
        timing = 20000
    }
    cy.log('Clicking on the filter field');
    cy.get(filter).click();

    cy.log('Typing the filtering criteria');
    cy.get(filter).type(searched);

    cy.log('waiting for the popup to load')
    cy.get('[id="popover-content-custom-popover"]', {timeout: 10000}).should('be.visible');
    
    cy.log('waiting for the result to load')
    cy.get('[id="popover-content-custom-popover"]').contains('div', searched).click();
    
    cy.log('clicking on the searched element')
    cy.contains('p', searched).click();
    
    
    cy.get(':nth-child(1) > .css-5prxxc', {timeout:timing}).should('contain', searched);
})



