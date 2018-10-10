import React from "react";
import styled from "react-emotion";
import { Link } from "@reach/router";

type Props = {
    name: string;
};

const PokemonListItem: React.SFC<Props> = ({ name }) => (
    <li>
        <Link to={`/${name}`}>{name.charAt(0).toUpperCase() + name.substr(1)}</Link>
    </li>
);

export default PokemonListItem;
