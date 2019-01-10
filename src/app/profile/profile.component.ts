import { Component, OnInit, Input } from '@angular/core';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
// export class ProfileComponent implements OnInit{
export class ProfileComponent{
  // currentProfile = [] 
  currentProfile : Profile = {
    id: null,
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
  }

  // @Input() profiles: Profile[] = []
 

  editProfile = false;

  // constructor(public profileServie: ProfileService){}
  // constructor(private http: HttpClient) {}

  // getMyProfile(){
  //   this.http.get('http://localhost:3000/api/profiles')
  //   .subscribe((profileData) =>{
  //     console.log('hello')
  //     this.currentProfile = [{ name: 'Edwin'}]
  //     // this.currentProfile = profileData.profiles
  //   });
  // }
  
  onSelectProfile(feature: string){
    if(this.editProfile){
      this.editProfile = false;  
    }else{
      this.editProfile = true;
    }
  }

  


  // ngOnInit() {
  //   this.currentProfile = this.ProfileService.getProfile();
  // }

}