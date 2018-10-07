import React from "react";
import { PokemonDetailQuery_getPokemon_moves } from "models/schema/PokemonDetailQuery";
import styled from "react-emotion";
import { theme, Typography } from "@smooth-ui/core-em";

const MoveWrapper = styled("ul")`
    padding: 0;
    max-height: 200px;
    overflow: scroll;
`;

const Move = styled("li")`
    list-style: none;
    padding: 5px 10px;
    background-color: ${theme.dark};
    color: white;
    margin-bottom: 5px;
`;

type Props = {
    moves: PokemonDetailQuery_getPokemon_moves[];
};

const PokemonMoves: React.SFC<Props> = ({ moves }) => (
    <section>
        <Typography variant="h1">Moves</Typography>
        <MoveWrapper>
            {
                moves.map((move) => <Move>{move.move.name}</Move>)
            }
        </MoveWrapper>
    </section>
);

export default PokemonMoves;
