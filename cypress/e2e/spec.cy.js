import { homeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    // const usuario ="random01";
    // const contrasena = "random01";
    // cy.visit('https://www.demoblaze.com/')
    // cy.get("a[data-target='#logInModal']").click()
    // LoginMethods.Login(usuario,contrasena)
    // cy.get('a#nameofuser').should("contain.text",usuario)
    // // cy.wait(5000)

    cy.visit('https://www.demoblaze.com/')
    homeMethods.clickOnProductLink("Iphone 6 32gb")
    cy.wait(5000)
    
  })
})