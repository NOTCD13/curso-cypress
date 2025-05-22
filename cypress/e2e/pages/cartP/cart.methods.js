import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should("be.visible")
    }

    static verifyCartPageIsShown(){
        cy.url().should("include","cart.html")
    }

    static clicOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click()
    }
    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            cy.wait(1000)
        })
    }

    static emptyCart(username,password){
        Logger.subStep("Navigate to demoblaze application")
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep("Log out")
        CommonPageMethods.logout();
        Logger.subStep("click on home option")
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep("click on login option")
        CommonPageMethods.clickOnLogInOption();
        Logger.subStep(`Login with this credentials ${username,password}`)
        LoginMethods.Login(username,password);
        Logger.subStep("click on cart option")
        CommonPageMethods.clickOnCartOption();
        Logger.subStep("Delete products from cart")
        this.deleteProducts();


    }
    
}