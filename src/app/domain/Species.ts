export class Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: Array<string>;
    films: Array<string>;

    constructor() {
        this.name = "";
        this.classification = "";
        this.designation = "";
        this.average_height = "";
        this.skin_colors = "";
        this.name = "";
        this.hair_colors = "";
        this.eye_colors = "";
        this.average_lifespan = "";
        this.language = "";
        this.homeworld = "";
        this.films = [];
        this.people = [];
    }
}