import { Profile } from './profile.model';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class ProfileService {
    private profiles: Profile[] = [{
        id: 'dfafafdafa',
          name: "Edwin Rodriguez",
          email: 'edwin@aol.com',
          telephone: '407-956-4837',
          occupation:  'Web Developer',
          industry: "Web Development",
          location: "Orlando",
          orginization: 'Phi Beta Sigma',
          chapter: "Iota Rho",
          whoiknow: "Ben, Edmund",
          businessname: 'Integral Component',
          businesswebsite: 'www.ic.com',
          businessdescription: 'IC is a recruiting company that specializes in recruiting web developers',
          info: 'I am a web developer with 2 years experience.  I have a few connections.'
        }];

    getProfile(){
        return [...this.profiles];
    }

    // addProfile(name: string, email:string, telephone: string, orginization: string, chapter: string) {
    //     const profile: Profile = { name: name, email: email, telephone: telephone, orginization: orginization, chapter: chapter};
    //     this.profiles.push(profile);
    // }
}

