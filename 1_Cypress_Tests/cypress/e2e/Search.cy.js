/// <reference types='cypress' />

const { userData } = require("../support/userData");

const {email, name, pass, searchInput} = userData();

describe('Search module', () => {

  it('should allow user to find products by name', () => {
    cy.visit('/')
    cy.get('#header-search-form').click().get('#header-search-field').type(searchInput + '{enter}')
    cy.url().should('contain', 'search').and('contain', searchInput)
    cy.get('#load-catalog').contains('a', searchInput).click()
    cy.get('h1').should('contain.text', searchInput)
  });
  
});
