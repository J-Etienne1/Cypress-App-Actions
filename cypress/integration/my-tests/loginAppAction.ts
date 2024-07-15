it("Login App Action", () => {
    cy.visit("/");
    cy.window().then(({app}) => {
        console.log("I am here : " + app)
        app.loggedIn.active = true;
    });
})