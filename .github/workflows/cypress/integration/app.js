/*global cy */

describe("Pokedex", function(){
    it("frompage can be opened", function(){
        cy.visit("http//localhost:5000")
        cy.constains("picachu")
        cy.constains("Pokémon and Pókemon character names are trademarks of Nintendo")
    })
})