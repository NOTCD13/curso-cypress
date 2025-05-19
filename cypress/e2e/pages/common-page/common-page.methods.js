import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.visit(CommonPageData.url);
    }
    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }
    static clickOnContactOption(){
        CommonPageElements.topMenu.Contact.click();
    }
    static clickOnAboutOption(){
        CommonPageElements.topMenu.home.click();
    }
    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.AboutUS.click();
    }
    static clickOnLogInOption(){
        CommonPageElements.topMenu.LogIn.click();
    }
    static clickOnSignUpOption(){
        CommonPageElements.topMenu.SignUp.click();
    }
    
     static verifyAlert(expectedMessage){
        cy.on("window:alert",(str)=>{
            expert(str).to.equal(expectedMessage)
        });
    }
    

}