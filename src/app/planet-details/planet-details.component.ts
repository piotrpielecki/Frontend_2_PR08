import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from '../domain/Planets';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  public activePlanetDetails: any;
  private planetId: number;

  constructor(private swapiService: SwapiClientService, private router: Router, private route: ActivatedRoute) {
    this.activePlanetDetails = new Planet();
    this.planetId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.planetId = params.planetId;
    });

    this.swapiService.getPlanetById(this.planetId).then((result) => {
      this.activePlanetDetails = result;
    });
  }
}

