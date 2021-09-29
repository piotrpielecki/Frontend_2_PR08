import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../domain/Film';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  public activeFilmDetails: any;
  private filmId: number;

  constructor(private swapiService: SwapiClientService, private router: Router, private route: ActivatedRoute) {
    this.activeFilmDetails = new Film();
    this.filmId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filmId = params.filmId;
    });

    this.swapiService.getFilmById(this.filmId).then( (result) => {
      this.activeFilmDetails = result;
    });

  }

}
