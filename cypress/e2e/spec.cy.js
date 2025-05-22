// import { CartMethods } from "./pages/cartP/cart.methods";
import { LoginMethods } from "./pages/login/login.methods";
import { Logger } from "./util/logger";
// import { homeMethods } from "./pages/home/home.methods"
// import { LoginMethods } from "./pages/login/login.methods"

xdescribe('template spec', () => {
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
    // cy.visit('https://www.demoblaze.com/')
    // cy.wait(30000)
    // CartMethods.clickOnDeleteLink("Nokia lumia 1520")
    // cy.wait(10000)
     //--------------------------------------------------------------------------/
    const usuario ="random01";
    const contrasena = "random01";

    Logger.stepNumber(1)
    Logger.step("Navigate to Demoblaze page")
    cy.visit("https://www.demoblaze.com/index.html")

    Logger.stepNumber(2)
    Logger.step("click on 'login' link")
    cy.get("a[data-target='#logInModal']").click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${usuario}/${contrasena}"`)
    LoginMethods.Login(usuario,contrasena)
    
    Logger.verification(`the home should show "Welcome ${usuario}" text`)
    cy.get("a#nameofuser").should("contain.text",usuario)



  })
}) 

//  "ejecutar-pruebas": "cypress run --headed --env allure=true --spec 'cypress/e2e/test/Autenticacion.cy.js'"
//Para ejecutar un caso de prueba especifico