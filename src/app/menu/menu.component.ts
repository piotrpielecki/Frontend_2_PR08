import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userName: string;
  appName: string;
  menuFilmsIsActive: boolean;
  menuPeopleIsActive: boolean;
  menuPlanetsIsActive: boolean;
  menuSpeciesIsActive: boolean;
  menuStarshipsIsActive: boolean;
  menuVehiclesIsActive: boolean;

  @Output()
  activateMenuItemEvent: EventEmitter<String> = new EventEmitter();


  constructor() {
    this.userName = "nie zalogowano";
    this.appName = "SWAPI - PP28098";
    this.menuFilmsIsActive = false;
    this.menuPeopleIsActive = false;
    this.menuPlanetsIsActive = false;
    this.menuSpeciesIsActive = false;
    this.menuStarshipsIsActive = false;
    this.menuVehiclesIsActive = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.userName = "Piotr Pielecki";
    }, 5000);
  }

  deactivateMenu() {
    this.menuFilmsIsActive = false;
    this.menuPeopleIsActive = false;
    this.menuPlanetsIsActive = false;
    this.menuSpeciesIsActive = false;
    this.menuStarshipsIsActive = false;
    this.menuVehiclesIsActive = false;
  }

  activateMenuItem(itemName: string) {
    this.deactivateMenu();
    switch (itemName) {
      case "FILMS":
        this.menuFilmsIsActive = true;
        break;
      case "PEOPLE":
        this.menuPeopleIsActive = true;
        break;
      case "PLANETS":
        this.menuPlanetsIsActive = true;
        break;
      case "SPECIES":
        this.menuSpeciesIsActive = true;
        break;
      case "STARSHIPS":
        this.menuStarshipsIsActive = true;
        break;
      case "VEHICLES":
        this.menuVehiclesIsActive = true;
        break;
    }

    this.activateMenuItemEvent.emit(itemName);
  }
}
