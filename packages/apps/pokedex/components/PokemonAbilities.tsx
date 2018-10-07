import React from "react";
import { PokemonDetailQuery_getPokemon_abilities } from "models/schema/PokemonDetailQuery";
import styled from "react-emotion";

type AbilityIsHidden = {
    is_hidden: boolean;
};

const Ability = styled("li")`
    list-style: none;
    display: inline-block;
    margin: 0 5px;
    color: ${(props: AbilityIsHidden) => props.is_hidden ? "goldenrod" : "inherit"};
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
        {
            abilities.map((ability) => (
                <Ability key={ability.ability.name}
                    is_hidden={ability.is_hidden}>
                    {ability.ability.name}
                </Ability>
            ))
        }
    </Wrapper>
);

export default PokemonAbilities;
