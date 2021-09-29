import { Component, OnInit } from '@angular/core';
import { Person } from '../domain/Person';
import { SwapiClientService } from '../services/swapi-client.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public peopleList = Array<Person>();

  constructor(private swapiService: SwapiClientService) { 
      this.peopleList = swapiService.getPeopleList();
  }

  ngOnInit(): void {
  }

}
