import React from "react";
import styled from "react-emotion";

type Props = {
    name: string;
};

const PokemonListItem: React.SFC<Props> = ({ name }) => (
    <li>{name}</li>
);

export default PokemonListItem;
