import { Injectable } from "@angular/core";
import { Profile } from "../profile/profile.model";
import { HttpClient } from '@angular/common/http';

import {Subject } from 'rxjs';
 
 @Injectable({providedIn: 'root'})
 export class NetworkService{
  
    private networks: Profile[] = [];

    constructor(private http: HttpClient){}

     getNetworks(){
         return this.http.get<{message: string, profiles: Profile []}>('http://localhost:3000/api/profiles');
     }
 }