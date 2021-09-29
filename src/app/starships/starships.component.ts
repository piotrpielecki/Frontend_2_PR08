import { Component, OnInit } from '@angular/core';
import { Starship } from '../domain/Starship';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  public starshipList = Array<Starship>();

  constructor(private swapiService: SwapiClientService) { 
    this.starshipList = swapiService.getStarshipsList();
  }

  ngOnInit(): void {
  }

}
