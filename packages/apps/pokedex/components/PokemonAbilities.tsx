import React from "react";
import { PokemonDetailQuery_getPokemon_abilities } from "models/schema/PokemonDetailQuery";
import styled from "react-emotion";
import { theme, Typography } from "@smooth-ui/core-em";

type AbilityIsHidden = {
    is_hidden: boolean;
};

const Ability = styled("li")`
    list-style: none;
    display: inline-block;
    margin: 0 5px;
    color: ${(props: AbilityIsHidden) => props.is_hidden ? "goldenrod" : "white"};
    background-color: ${theme.dark};
    padding: 5px 10px;
`;

const Wrapper = styled("ul")`
    margin: 0;
    padding: 0;
`;

type Props = {
    abilities: PokemonDetailQuery_getPokemon_abilities[];
};

const PokemonAbilities: React.SFC<Props> = ({ abilities }) => (
    <Wrapper>
        <Typography variant="h1">Abilities</Typography>
        {
            abilities.map((ability) => (
                <Ability key={ability.ability.name}
                    is_hidden={ability.is_hidden}
                >
                    {ability.ability.name}
                </Ability>
            ))
        }
    </Wrapper>
);

export default PokemonAbilities;
