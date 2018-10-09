import client from "./client";
import { Pokemon, GameGeneration } from "pokemon-models";

export const getPokemon = async (name: string): Promise<Pokemon> => {
    try {
        const result = await client.get(`/pokemon/${name.toLowerCase()}`);
        return result.data;
    } catch (error) {
        return error;
    }
};

export const getPokemonGeneration = async (name: string): Promise<GameGeneration> => {
    try {
        const result = await client.get(`/generation/${name.toLowerCase()}`);
        return result.data;
    } catch (error) {
        return error;
    }
};
