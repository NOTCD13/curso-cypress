export class Logger{
    static stepNumber(number){
        const text=`Step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }

    static step(description){
        const text=`Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static verification(description){
        const text=`Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
     static subStep(description){
        const text=`subStep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
     static subVerificacion(description){
        const text=`subStep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static postCondicion(description){
        const text=`POSTCONDITION - ${description}`
        cy.log(text);
        cy.allure().step(text);
    }
}

