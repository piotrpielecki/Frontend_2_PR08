import { Component, OnInit } from '@angular/core';
import { Species } from '../domain/Species';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  public speciesList = Array<Species>();

  constructor(private swapiService: SwapiClientService) { 
    this.speciesList = swapiService.getSpeciesList();
  }

  ngOnInit(): void {
  }

}
