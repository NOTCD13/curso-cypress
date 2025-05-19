import { CartMethods } from "./pages/cartP/cart.methods";
// import { homeMethods } from "./pages/home/home.methods"
// import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    // const usuario ="random01";
    // const contrasena = "random01";
    // cy.visit('https://www.demoblaze.com/')
    // cy.get("a[data-target='#logInModal']").click()
    // LoginMethods.Login(usuario,contrasena)
    // cy.get('a#nameofuser').should("contain.text",usuario)
    // // cy.wait(5000)
    //--------------------------------------------------------------------------/
    // cy.visit('https://www.demoblaze.com/')
    // homeMethods.clickOnProductLink("Iphone 6 32gb")
    // cy.wait(5000)
    //--------------------------------------------------------------------------/
    cy.visit('https://www.demoblaze.com/')
    cy.wait(30000)
    CartMethods.clickOnDeleteLink("Nokia lumia 1520")
    cy.wait(10000)
  })
})