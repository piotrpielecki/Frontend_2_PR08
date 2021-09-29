import { Component, OnInit } from '@angular/core';
import { Planet } from '../domain/Planets';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  public planetList = Array<Planet>();

  constructor(private swapiService: SwapiClientService) {
    this.planetList = swapiService.getPlanetsList();
  }

  ngOnInit(): void {
  }

}
