import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../domain/Vehicle';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public activeVehicleDetails: any;
  private vehicleId: number;

  constructor(private swapiService: SwapiClientService, private router: Router, private route: ActivatedRoute) {
    this.activeVehicleDetails = new Vehicle();
    this.vehicleId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vehicleId = params.vehicleId;
    });

    this.swapiService.getVehicleById(this.vehicleId).then((result) => {
      this.activeVehicleDetails = result;
    });
  }
}
