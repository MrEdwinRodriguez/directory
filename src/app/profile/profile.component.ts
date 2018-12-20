import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editProfile = false;

  constructor() { }
  
  onSelectProfile(feature: string){

    if(this.editProfile){
      this.editProfile = false;  
    }else{
      this.editProfile = true;
    }
    
  }


  ngOnInit() {
  }

}