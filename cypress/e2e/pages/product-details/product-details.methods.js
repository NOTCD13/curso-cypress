import { CommonPageMethods } from "../common-page/common-page.methods"
import { ProductDetails } from "./product-details.elements"

export class ProductdetailsMethods{
    static clickOnAddToCart(){
        ProductDetails.buttons.addToCart.click()
    }

    static verifyProductDetailsPageDisplayed(){
        ProductDetails.buttons.addToCart.should("be.visible")
    }

    static verifyProductAddedMessage(){
        CommonPageMethods.verifyAlert("Product added.")
    }
}