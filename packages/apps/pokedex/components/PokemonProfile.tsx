import React from "react";
import { PokemonDetailQuery_getPokemon } from "models/schema/PokemonDetailQuery";
import { Typography } from "@smooth-ui/core-em";

const PokemonProfile: React.SFC<PokemonDetailQuery_getPokemon> = ({
    id,
    name,
    weight,
    height,
    sprites,
}) => (
    <>
        <Typography variant="h1">{`#${id} ${name.charAt(0).toUpperCase() + name.substring(1)}`}</Typography>
        <img src={sprites.front_default}/>
        <Typography variant="h4">Height: {height}m</Typography>
        <Typography variant="h4">Weight: {weight}kg</Typography>
    </>
);

export default PokemonProfile;
