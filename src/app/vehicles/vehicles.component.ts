import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../domain/Vehicle';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vehiclesList = Array<Vehicle>();

  constructor(private swapiService: SwapiClientService) { 
    this.vehiclesList = swapiService.getVehiclesList();
  }

  ngOnInit(): void {
  }

}
