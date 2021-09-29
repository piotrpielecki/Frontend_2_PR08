import { Injectable } from '@angular/core';
import { Film } from '../domain/Film';
import { RestConfig } from './rest-config';
import { HttpClient } from '@angular/common/http';
import { ReturnData } from '../domain/ReturnData';
import { Person } from '../domain/Person';
import { Planet } from '../domain/Planets';
import { Species } from '../domain/Species';
import { Starship } from '../domain/Starship';
import { Vehicle } from '../domain/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class SwapiClientService {

  constructor(private http: HttpClient) { }

  getFilmList(): Array<Film> {
    let filmList: Array<Film | any> = new Array<Film>();

    this.http.get<ReturnData>(`${RestConfig.apiUrl}/films`).subscribe((data: ReturnData) => {
      for (let i = 0; i < data.results.length; i++) {
        filmList.push(data.results[i]);
      }
    });

    return filmList;
  }

  getPeopleList(): Array<Person> {
    let peopleList: Array<Person | any> = new Array<Person>();

    this.http.get<ReturnData>(`${RestConfig.apiUrl}/people`).subscribe((data: ReturnData) => {
      for (let i = 0; i < data.results.length; i++) {
        peopleList.push(data.results[i]);
      }
    });

    return peopleList;
  }

  getPlanetsList(): Array<Planet> {
    let planetList: Array<Planet | any> = new Array<Planet>();

    this.http.get<ReturnData>(`${RestConfig.apiUrl}/planets`).subscribe((data: ReturnData) => {
      for (let i = 0; i < data.results.length; i++) {
        planetList.push(data.results[i]);
      }
    });

    return planetList;
  }

  getSpeciesList(): Array<Species> {
    let planetList: Array<Species | any> = new Array<Species>();

    this.http.get<ReturnData>(`${RestConfig.apiUrl}/species`).subscribe((data: ReturnData) => {
      for (let i = 0; i < data.results.length; i++) {
        planetList.push(data.results[i]);
      }
    });

    return planetList;
  }

  getStarshipsList(): Array<Starship> {
    let planetList: Array<Starship | any> = new Array<Starship>();

    this.http.get<ReturnData>(`${RestConfig.apiUrl}/starships`).subscribe((data: ReturnData) => {
      for (let i = 0; i < data.results.length; i++) {
        planetList.push(data.results[i]);
      }
    });

    return planetList;
  }

  getVehiclesList(): Array<Vehicle> {
    let planetList: Array<Vehicle | any> = new Array<Vehicle>();

    this.http.get<ReturnData>(`${RestConfig.apiUrl}/vehicles`).subscribe((data: ReturnData) => {
      for (let i = 0; i < data.results.length; i++) {
        planetList.push(data.results[i]);
      }
    });

    return planetList;
  }

  async getFilmById(filmId: number) {
    const response = await this.http.get<Film>(`${RestConfig.apiUrl}/films/${filmId}`).toPromise();

    return response;
  }

  async getPersonById(personId: number) {
    const response = await this.http.get<Person>(`${RestConfig.apiUrl}/people/${personId}`).toPromise();

    return response;
  }

  async getPlanetById(planetId: number) {
    const response = await this.http.get<Planet>(`${RestConfig.apiUrl}/planets/${planetId}`).toPromise();

    return response;
  }

  async getSpeciesById(speciesId: number) {
    const response = await this.http.get<Species>(`${RestConfig.apiUrl}/species/${speciesId}`).toPromise();

    return response;
  }

  async getStarshipById(starshipId: number) {
    const response = await this.http.get<Starship>(`${RestConfig.apiUrl}/starships/${starshipId}`).toPromise();

    return response;
  }

  async getVehicleById(vehicleId: number) {
    const response = await this.http.get<Vehicle>(`${RestConfig.apiUrl}/vehicles/${vehicleId}`).toPromise();

    return response;
  }

}
