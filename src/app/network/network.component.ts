import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  network = []

  constructor(public networkService: NetworkService) { }

  ngOnInit() {
    this.network = this.networkService.getNetworks()
  }

}
