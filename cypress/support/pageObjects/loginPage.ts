export class LoginPage{
    openSignup(){
        cy.get('[data-cy=login-menu]').click();
        cy.contains('Sign up here').click();

    }

    signUpAndLogin(){
        cy.get('[data-cy=signup-email]').type("jason@mail.com")
        cy.get('[data-cy=signup-password]').type("pw1234");
        cy.get('[data-cy=signup]').click();
    }
}