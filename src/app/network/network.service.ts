import { Injectable } from "@angular/core";

 
 @Injectable({providedIn: 'root'})
 export class NetworkService{
     private networks: [{name: "Brian Jenkins", Orginization: "Phi Beta Sigma", Chapter: "Iota Rho", Occupation: 'Event Planning', Major: "Event Planning", Industry: 'Events', Location:"Spain", canIHelp: "no", canIHire: 'no', willingToMento: 'yes'},
     {name: "Matt Shaw", Orginization: "Phi Beta Sigma", Chapter: "Iota Rho", Occupation: 'Business Owner', Major: "Marketing", Industry: 'Sales', Location:"Orlando", canIHelp: "yes", canIHire: 'yes', willingToMentor: 'yes'}]

     getNetworks(){
         return [...this.networks];
     }
 }