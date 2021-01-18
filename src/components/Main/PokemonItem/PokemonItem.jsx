import React from "react";
import { Link } from "react-router-dom";

function PokemonItem(props) {
	return (
		<div className="pokemonsList__item">
			<img
				className="pokemonsList__item__image"
				alt={`${props.item.name}`}
				src={props.item.sprites.front_default}
			/>
			<p className="pokemonsList__item__name">{props.item.name}</p>
			<Link
				className="pokemonsList__item__button"
				to={`pokemon/${props.item.id}`}
			>
				Read more
			</Link>
		</div>
	);
}

export default PokemonItem;
