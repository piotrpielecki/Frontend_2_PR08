export class Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: Array<string>;
    films: Array<string>;

    constructor() {
        this.name = "";
        this.rotation_period = "";
        this.orbital_period = "";
        this.diameter = "";
        this.climate = "";
        this.gravity = "";
        this.terrain = "";
        this.surface_water = "";
        this.population = "";
        this.films = [];
        this.residents = [];
    }
}