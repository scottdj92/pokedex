import client from "./client";
import { Pokemon } from "pokemon";

export const getPokemon = (name: string): Promise<Pokemon> => {
    return client.get(`/pokemon/${name.toLowerCase()}`)
        .then((result) => result.data)
        .catch((error) => error);
};
