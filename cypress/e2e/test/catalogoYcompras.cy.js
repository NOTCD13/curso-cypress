
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { homeMethods } from "../pages/homeP/home.methods";

const user = LoginData.validcredentilas.username
const password = LoginData.validcredentilas.password

describe(CommonPageData.testSuites.CatalogoYCompras, ()=>{
    it("navegacion por categorias",()=>{
        Logger.stepNumber(1)
        Logger.step("Iniciar sesion como usuario registrado")
        Logger.subStep("Navegate to Demoblaze application")
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep("click on 'Log in' link")
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.Login(user,password)
        
        Logger.stepNumber(2)
        Logger.step("navegar a la pagina de inicio")
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step("Seleccionar una categoría de productos en el menú de navegación")
        homeMethods.clickOnMonitorsOption();
        Logger.verification("Verificar que se muestra la lista de productos correspondiente a la categoria seleccionada")
        homeMethods.verifyProductDisplayed("Apple monitor 24");
        homeMethods.verifyProductDisplayed("ASUS Full HD");

    })
})