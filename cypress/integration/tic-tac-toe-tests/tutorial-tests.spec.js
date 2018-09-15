context("Tic-Tac-Toe Tests", () => {

    it("Go to All", () => {
        cy.visit("http://localhost:3000")
    });

    it("Should display Find Game button", () => {
        cy.get(".find-game-button").should("be.visible");
        cy.wait(1000);
    });

    it("Should display Looking for Game text after clicking Find Game button", () => {
        cy.get(".find-game-button").click();
        cy.get(".looking-for-game-text").should("be.visible");
    });

    it("Should show game grid eventually", () => {
        cy.get(".Game").should("be.visible");
        cy.get(".Game-Board").should("be.visible");
    });

    it("Should place an X sign when square is clicked", () => {
        cy.get(".Game-square").eq(5).should("be.empty");
        cy.get(".Game-square").eq(5).click();
        cy.get(".Game-square").eq(5).contains("X");
        cy.wait(1000);
    });

    it("Should place an O sign when a square is clicked next", () => {
        cy.get(".Game-square").eq(7).should("be.empty");
        cy.get(".Game-square").eq(7).click();
        cy.get(".Game-square").eq(7).contains("O");
        cy.wait(1000);
    });

});