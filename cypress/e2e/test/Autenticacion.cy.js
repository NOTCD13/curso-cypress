import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.Autenticacion,()=>{
    it("inicio de sesion valido",()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer clic en 'Log in' en la barra de navegación")
        CommonPageMethods.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step("Ingresar un nombre de usuario y contraseña validos")
        LoginMethods.insertUsername(LoginData.validcredentilas.username)
        LoginMethods.insertPassword(LoginData.validcredentilas.password)

        Logger.stepNumber(4)
        Logger.step("Hacer clic en 'log in' para iniciar sesión")
        LoginMethods.clickOnLoginButton();
        Logger.verification("Verificar que se redirige al usuario a la página de inicio")
        CommonPageMethods.verifySignedUser(LoginData.validcredentilas.username)
        Logger.postCondicion("Log out")
        CommonPageMethods.logout();
        
    });

        it("inicio de sesion invalido",()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Hacer clic en 'Log in' en la barra de navegación")
        CommonPageMethods.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step("Ingresar un nombre de usuario y contraseña invalidos")
        LoginMethods.insertUsername(LoginData.validcredentilas.username)
        LoginMethods.insertPassword("contraseñainvalida")

        Logger.stepNumber(4)
        Logger.step("Hacer clic en 'log in' para iniciar sesión")
        LoginMethods.clickOnLoginButton();
        Logger.verification("Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado")
        LoginMethods.verifyWrongPasswordMessage()

        

        
    });
})