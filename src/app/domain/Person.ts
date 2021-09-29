export class Person {
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: Number;
    homeworld: string;
    films: Array<string>;
    mass: string;
    name: string;
    skin_color: string;
    species: Array<string>;
    starships: Array<string>;
    vehicles: Array<string>;

    constructor() {
        this.birth_year = "";
        this.eye_color = "";
        this.gender = "";
        this.hair_color = "";
        this.mass = "";
        this.name = "";
        this.skin_color = "";
        this.height = 0;
        this.homeworld = "";
        this.films = [];
        this.starships = [];
        this.vehicles = [];
        this.species = [];
    }
}