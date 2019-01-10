import { Injectable } from "@angular/core";
import { Profile } from "../profile/profile.model";
import { HttpClient } from '@angular/common/http';

import {Subject } from 'rxjs';
 
 @Injectable({providedIn: 'root'})
 export class NetworkService{
    //  private networks = [{name: "Brian Jenkins", orginization: "Phi Beta Sigma", chapter: "Iota Rho", occupation: 'Event Planning', major: "Event Planning", industry: 'Events', location:"Spain", canIHelp: "no", canIHire: 'no', willingToMentor: 'yes'},
    //  {name: "Matt Shaw", orginization: "Phi Beta Sigma", chapter: "Iota Rho", occupation: 'Business Owner', major: "Marketing", industry: 'Sales', location:"Orlando", canIHelp: "yes", canIHire: 'yes', willingToMentor: 'yes'}]
    private networks = [];
    
    constructor(private http: HttpClient){}

     getNetworks(){
         this.http.get<{message: string, profiles: []}>('http://localhost:3000/api/profiles')
         .subscribe((profileData)=>{
             this.networks = profileData.profiles;
         });
     }
 }