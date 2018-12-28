import { Component, OnInit} from '@angular/core';
import { Profile } from '../profile.model';

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

  constructor() { }

  ngOnInit() {
  }

}
