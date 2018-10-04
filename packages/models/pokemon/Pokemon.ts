import PokemonMove from "./PokemonMove";

type Pokemon = {
    id: number;
    name: string;
    height: number;
    moves: PokemonMove[];
};

export default Pokemon;
