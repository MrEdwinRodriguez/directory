import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  // networks = [{name: "Brian Jenkins", orginization: "Phi Beta Sigma", chapter: "Iota Rho", occupation: 'Event Planning', major: "Event Planning", industry: 'Events', location:"Spain", canIHelp: "no", canIHire: 'no', willingToMentor: 'yes'},
  // {name: "Matt Shaw", orginization: "Phi Beta Sigma", chapter: "Iota Rho", occupation: 'Business Owner', major: "Marketing", industry: 'Sales', location:"Orlando", canIHelp: "yes", canIHire: 'yes', willingToMentor: 'yes'}]

  @Input() networks = [];

  constructor(public networkService: NetworkService) { }

  ngOnInit() {
    this.networks = this.networkService.getNetworks()

  }

}
