import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../domain/Person';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  public activePersonDetails: any;
  private personId: number;

  constructor(private swapiService: SwapiClientService, private router: Router, private route: ActivatedRoute) {
    this.activePersonDetails = new Person();
    this.personId = 0;
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personId = params.personId;
    });

    this.swapiService.getPersonById(this.personId).then( (result) => {
      this.activePersonDetails = result;
    });
  }

}
