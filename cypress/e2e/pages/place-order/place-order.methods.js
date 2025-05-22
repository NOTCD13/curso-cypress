import { PlaceorderElements } from "./place-order.elemets";

export class PlaceorderMethods{
    static insertName(name){
        PlaceorderElements.textboxes.name.invoke("val",name)
    }
    static insertCountry(country){
        PlaceorderElements.textboxes.country.invoke("val",country)
    }
    static insertCity(city){
        PlaceorderElements.textboxes.city.invoke("val",city)
    }
    static insertCreditCard(CreditCard){
        PlaceorderElements.textboxes.CreditCard.invoke("val",CreditCard)
    }
     static insertMonth(Month){
        PlaceorderElements.textboxes.Month.invoke("val",Month)
    }
     static insertYear(year){
        PlaceorderElements.textboxes.year.invoke("val",year)
    }
    static clickOnClosebutton(){
        PlaceorderElements.buttons.close.click()
    }
     static clickOnPurchaseButton(){
        PlaceorderElements.buttons.purchase.click()
    }
    static InsertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditCardNumber)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }
}