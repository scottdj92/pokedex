import PokemonMove from "./PokemonMove";
import PokemonSprites from "./PokemonSprites";
import PokemonStats from "./PokemonStats";
import PokemonType from "./PokemonType";

type Pokemon = {
    id: number;
    name: string;
    height: number;
    weight: number;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    stats: PokemonStats[];
    types: PokemonType[];
};

export default Pokemon;
