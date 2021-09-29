export class Film {
    title: string;
    opening_crawl: string;
    director: string;
    producer: string;
    episode_id: Number;
    release_date: Date;
    species: Array<string>;
    starships: Array<string>;
    vehicles: Array<string>;
    characters: Array<string>;
    planets: Array<string>;

    constructor() {
        this.title = "";
        this.opening_crawl = "";
        this.director = "";
        this.producer = "";
        this.episode_id = 0;
        this.release_date = new Date();
        this.species = [];
        this.starships = [];
        this.vehicles = [];
        this.characters = [];
        this.planets = [];
    }
}