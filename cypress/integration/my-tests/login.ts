import {LoginPage} from "../../support/pageObjects/loginPage";

const login = new LoginPage;

it('login test', () => {
  cy.visit('/');
  login.openSignup()
  login.signUpAndLogin()


})