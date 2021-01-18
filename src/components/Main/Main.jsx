import React, { useEffect, useState } from "react";
import Axios from "axios";
import PokemonItem from "./PokemonItem/PokemonItem";

function Main() {
	const [pokemonsList, setPokemonsList] = useState([]);
	const [viewMoreUrl, setViewMoreUrl] = useState(null);

	async function getPokemons() {
		const { data } = await Axios.get(
			viewMoreUrl ?? "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0",
		);
		setViewMoreUrl(data.next);
		data.results.forEach(async (item) => {
			const { data } = await Axios.get(item.url);
			setPokemonsList((pokemonsList) => [...pokemonsList, data]);
		});
	}

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<div className="container">
			<div className="pokemonsList">
				{pokemonsList.map((item, i) => (
					<PokemonItem key={i} item={item} />
				))}
			</div>
			<button className="showMore" onClick={getPokemons}>
				Show more
			</button>
		</div>
	);
}

export default Main;
