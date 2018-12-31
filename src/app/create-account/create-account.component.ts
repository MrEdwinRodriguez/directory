import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile/profile.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  onCreateProfile(form: NgForm){

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
