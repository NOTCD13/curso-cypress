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
        CommonPageElements.topMenu.AboutUS.click();
    }
    static clickOnCartOption(){
        CommonPageElements.topMenu.Cart.click();
    }
    static clickOnLogInOption(){
        CommonPageElements.topMenu.LogIn.click();
    }
    static clickOnSignUpOption(){
        CommonPageElements.topMenu.SignUp.click();
    }
    
    static verifyAlert(expectedMessage){
        cy.on('window:alert',(str)=>{
            expect(str).to.equal(expectedMessage)
        });
    }
    
    static generateRandomString(length=10){
        let result=" ";
        const characters="abcdefghijklmnopqrstuvmxyz0123456789";
        const charactersLength =characters.length;
        let counter =0;
        while (counter < length){
            result += characters.charAt(Math.floor(Math.random()* charactersLength));
            counter +=1;
        }
        return result;
    }

    static verifySignedUser(username){
        CommonPageElements.signedUser.should('have.text',`Welcome ${username}`)
    }
}