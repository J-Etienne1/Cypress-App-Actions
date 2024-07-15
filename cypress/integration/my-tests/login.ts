
it('login test', () => {
  cy.visit('/');
  cy.get('[data-cy=login-menu]').click();
  //cy.get(':nth-child(2) > .LoginModule_logSignSwitch > a')
  cy.contains('Sign up here').click();
  cy.get('[data-cy=signup-email]').type("jason@mail.com")
  cy.get('[data-cy=signup-password]').type("pw1234");
  cy.get('[data-cy=signup]')

})