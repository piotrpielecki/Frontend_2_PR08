import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Species } from '../domain/Species';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {

  public activeSpeciesDetails: any;
  private speciesId: number;

  constructor(private swapiService: SwapiClientService, private router: Router, private route: ActivatedRoute) {
    this.activeSpeciesDetails = new Species();
    this.speciesId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.speciesId = params.speciesId;
    });

    this.swapiService.getSpeciesById(this.speciesId).then((result) => {
      this.activeSpeciesDetails = result;
    });
  }
}

