
import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
       LoginElements.textboxes.username.invoke("val",username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke("val",password)
    }
    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static Login(username,password){
        Logger.subStep("Insertar username")
        this.insertUsername(username)
        Logger.subStep("insertar password")
        this.insertPassword(password)
        Logger.subStep("Click on Login Button")
        this.clickOnLoginButton()
    }
}