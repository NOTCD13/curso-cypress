
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
       LoginElements.textboxes.username.type(username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }
    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static Login(username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}