import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'species', component: SpeciesComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'film/:filmId', component: FilmDetailsComponent},
  {path: 'people/:personId', component: PersonDetailsComponent},
  {path: 'planets/:planetId', component: PlanetDetailsComponent},
  {path: 'species/:speciesId', component: SpeciesDetailsComponent},
  {path: 'starships/:starshipId', component: StarshipDetailsComponent},
  {path: 'vehicles/:vehicleId', component: VehicleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
