const { userData } = require("../support/userData");

const {email, name, pass, search} = userData();

describe('Login module', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should allow to log in with registered creds', () => {
    cy.get('[data-id="current-profile"]').click();
    cy.contains('button', 'Увійти').click()
    cy.get('#loginDialogContainer').get('[placeholder = "Ваше e-mail"]').click().type(email)
    cy.get('#loginDialogContainer').get('[placeholder = "Пароль"]').first().click().type(pass)
    cy.get('#loginDialogContainer').contains('button', 'Увійти').click()
    cy.get('[data-id="current-profile"]').click();
    cy.get('#current-profile').should('contain.text', name)
  });

  it('should not allow to log in with invalid email', () => {
    cy.get('[data-id="current-profile"]').click();
    cy.contains('Увійти').click()
    cy.get('#loginDialogContainer').get('[placeholder = "Ваше e-mail"]').click().type('a' + email)
    cy.get('#loginDialogContainer').get('[placeholder = "Пароль"]').first().click().type(pass)
    cy.get('#loginDialogContainer').contains('button', 'Увійти').click()
    cy.get('#loginDialogContainer').should('contain.html', 'gui-field-error').and('contain.text', 'Ви не ввели правильний логін/пароль, або не активували свій профіль.')
  });

  it('should not allow to log in with invalid password', () => {
    cy.get('[data-id="current-profile"]').click()
    cy.contains('Увійти').click()
    cy.get('#loginDialogContainer').get('[placeholder = "Ваше e-mail"]').click().type(email)
    cy.get('#loginDialogContainer').get('[placeholder = "Пароль"]').first().click().type('a' + pass)
    cy.get('#loginDialogContainer').contains('button', 'Увійти').click()
    cy.get('#loginDialogContainer').should('contain.html', 'gui-field-error').and('contain.text', 'Ви не ввели правильний логін/пароль, або не активували свій профіль.')
  });

});
