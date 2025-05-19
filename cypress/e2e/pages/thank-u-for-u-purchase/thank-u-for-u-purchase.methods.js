import { ThankYouForYourPurcharseElements } from "./thank-u-for-u-purchase.elements"

export class ThankYouForYourPurcharseMethods{
    static clickOnOkbutton(){
     ThankYouForYourPurcharseElements.buttons.ok.click()   
    }

    static verifyGreenCheckMarkisDisplayed(){
        ThankYouForYourPurcharseElements.icons.greenCheckMark.should("exist")
    }
}