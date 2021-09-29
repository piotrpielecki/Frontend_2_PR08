import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from '../domain/Starship';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  public activeStarshipDetails: any;
  private starshipId: number;

  constructor(private swapiService: SwapiClientService, private router: Router, private route: ActivatedRoute) {
    this.activeStarshipDetails = new Starship();
    this.starshipId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.starshipId = params.starshipId;
    });

    this.swapiService.getStarshipById(this.starshipId).then((result) => {
      this.activeStarshipDetails = result;
    });
  }
}
