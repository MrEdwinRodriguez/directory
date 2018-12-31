import { Component, OnInit} from '@angular/core';
import { Profile } from '../profile.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentProfile : Profile = {
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

  onSaveProfile(form: NgForm){

    // if(form.invalid){
    //   return;
    // }
    const profile: Profile ={
      name: form.value.title,
      email: form.value.email,
      telephone: form.value.telephone,
      occupation: form.value.occupation,
      industry: form.value.industry,
      location: form.value.location,
      orginization: form.value.orginization,
      chapter: form.value.chapter,
      whoiknow: form.value.whoiknow,
      businessname: form.value.businessname,
      businesswebsite: form.value.businesswebsite,
      businessdescription: form.value.businessdescription,
      info: form.value.info

    }

  }
  constructor() { }

  ngOnInit() {
  }

}
