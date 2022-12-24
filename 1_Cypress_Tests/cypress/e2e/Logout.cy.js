const { userData } = require("../support/userData");

const {email, name, pass, search} = userData();

describe('Logout button', () => {

  it('should allow to log out', () => {
    cy.loginAPI(email, pass)
    cy.visit('/')
    cy.get('[data-id="current-profile"]').click()
    cy.contains('a', 'Вихід').click()
    cy.get('#current-profile').should('contain.html', 'login-trigger')
  });
  
});
