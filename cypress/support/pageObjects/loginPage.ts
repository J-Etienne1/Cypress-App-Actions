export class LoginPage{
    openSignup(){
        cy.get('[data-cy=login-menu]').click();
        cy.contains('Sign up here').click();

    }

    signUpAndLogin(){
        cy.get('[data-cy=signup-email]').type("jason1@mail.com")
        cy.get('[data-cy=signup-password]').type("pw12345");
        cy.get('[data-cy=signup]').click();
    }
}