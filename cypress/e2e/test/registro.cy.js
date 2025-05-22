
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/signUp/sign.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password=CommonPageMethods.generateRandomString(7);
const existingUser=LoginData.validcredentilas.username


xdescribe(CommonPageData.testSuites.Registro,()=>{
    it("Registro de usuario invalido",()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información inválida')
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickOnSignButton()
        Logger.verification("Verificar que se muestre un mensaje de error indicando los campos invalidos")
        SignupMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed();
       

    });
    /*
    Paso 1: Navegar a la página de inicio.
    Paso 2: Hacer clic en "Sign up" en la barra de navegación.
    Paso 3: Completar todos los campos obligatorios con información válida.
    Paso 4: Hacer clic en "Sign up" para registrar el usuario.
    Paso 4.1: Verificar que se redirige al usuario a la página de inicio de sesión
    */ 



      it("Registro de usuario invalido",()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(password)
        
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickOnSignButton()
        Logger.verification("Verificar que se muestre el mensaje 'Sign up successful'")
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed();
        

    });
});