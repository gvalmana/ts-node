import { Pokemon } from "./decorators/pokemon";

const chamander: Pokemon = new Pokemon("charmander");

//(Pokemon.prototype  as any).customName = "Pikachu";

chamander.apiUrl = "https://google.com";
console.log(chamander);
//console.log(chamander.savePokemonToDatabase(799));