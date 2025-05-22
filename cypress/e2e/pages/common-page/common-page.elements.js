export class CommonPageElements{
    static get topMenu(){
        return {
            get home(){
                return cy.contains("a","Home");
            },
            get Contact(){
                return cy.contains("a","Contact");
            },
              get AboutUS(){
                return cy.contains("a","About us");
            },
              get Cart(){
                return cy.contains("a","Cart");
            },
              get LogIn(){
                return cy.contains("a","Log in");
            },
              get SignUp(){
                return cy.contains("a","Sign up");
            },
            get logout(){
              return cy.get('#logout2')
            }
        };
    }

    static get signedUser(){
      return cy.get("a#nameofuser");
    }  
}