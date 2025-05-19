// import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./sign.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke("val",username)
    }
    static insertPassword(password){
        SignupElements.textboxes.username.invoke("val",password)
    }

    static clickOnSignButton(){
        SignupElements.buttons.signup.click()
    }

    static signup(username,password){
        this.insertPassword(password)
        this.insertUsername(username)
        this.clickOnSignButton();
    }
    
    static verifySignupSuccesfulMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("Sign up successful.")
    }
   
}