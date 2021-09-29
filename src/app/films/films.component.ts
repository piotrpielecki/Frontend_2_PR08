import { Component, OnInit } from '@angular/core';
import { Film } from '../domain/Film';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {
  public filmList = Array<Film>();

  constructor(private swapiService: SwapiClientService) {
    this.filmList = swapiService.getFilmList();
  }

  ngOnInit(): void {

  }

}
