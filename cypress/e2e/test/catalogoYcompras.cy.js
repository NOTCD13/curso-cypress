
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { homeMethods } from "../pages/homeP/home.methods";
import { ProductdetailsMethods } from "../pages/product-details/product-details.methods";
import { CartMethods } from "../pages/cartP/cart.methods";
import { PlaceorderMethods } from "../pages/place-order/place-order.methods";
import { PlaceorderData } from "../pages/place-order/place-order.data";
import { ThankYouForYourPurcharseMethods } from "../pages/thank-u-for-u-purchase/thank-u-for-u-purchase.methods";

const user = LoginData.validcredentilas.username
const password = LoginData.validcredentilas.password
const product="ASUS Full HD"

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

        Logger.postCondicion("Log out")
        CommonPageMethods.logout();
    })


     it("Agregar producto al carrito",()=>{
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

        Logger.stepNumber(4)
        Logger.step("Hacer click en un producto especifico")
        homeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification("Verificar que se muestra la página de detalles del producto")
        ProductdetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step("Hacer clic en el botón 'Add to cart'")
        ProductdetailsMethods.clickOnAddToCart();

        Logger.stepNumber(7)
        Logger.verification("Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito")
        ProductdetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.postCondicion("empty card and logout")
        CartMethods.emptyCart(user,password);
        CommonPageMethods.logout();

    })





     it("Realizar una compra",()=>{
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

        Logger.stepNumber(4)
        Logger.step("Hacer click en un producto especifico")
        homeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification("Verificar que se muestra la página de detalles del producto")
        ProductdetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step("Hacer clic en el botón 'Add to cart'")
        ProductdetailsMethods.clickOnAddToCart();

        Logger.stepNumber(7)
        Logger.verification("Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito")
        ProductdetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.stepNumber(8)
        Logger.step("Hacer clic en la opcion cart en barra de navegación")
        CommonPageMethods.clickOnCartOption();

        Logger.stepNumber(9)
        Logger.step("Verificar que la pagina se muestra")
        CartMethods.verifyCartPageIsShown()

        Logger.stepNumber(10)
        Logger.step("Hacer clic en el boton place order")
        CartMethods.clicOnPlaceOrderButton();

        Logger.stepNumber(11)
        Logger.step("Completar todos los campos obligatorios en la pagina de informacion de envio")
        PlaceorderMethods.InsertOrderInformation(PlaceorderData.testdata)

        Logger.stepNumber(12)
        Logger.step("Hacer clic en el boton 'Purchase'")
        PlaceorderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13)
        Logger.step("Verificar que se  muestra un mensaje de confirmacion y se redirige al usuario a la pagina de inicio'")
        ThankYouForYourPurcharseMethods.verifyGreenCheckMarkisDisplayed();
        cy.wait(3000)
        ThankYouForYourPurcharseMethods.clickOnOkbutton();
        homeMethods.verifyHomePageIsShown();

        Logger.postCondicion("log out")
        CommonPageMethods.logout();



    })
})