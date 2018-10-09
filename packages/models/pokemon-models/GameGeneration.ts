import GameGenerationPokemon from "./GameGenerationPokemon";

type GameGeneration = {
    id: number;
    main_region: {
        name: string;
    };
    name: string;
    pokemon_species: GameGenerationPokemon[];
};

export default GameGeneration;
