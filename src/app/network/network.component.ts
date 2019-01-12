import { Component, OnInit, Input } from '@angular/core';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  @Input() networks = [];
  testing = []

  constructor(public networkService: NetworkService) { }


  ngOnInit() {
    this.networkService
      .getNetworks()
      .subscribe(networks => this.networks = networks.profiles);   // Subscribe and Initialize the networks variable
    console.log(networks)
    }
}
