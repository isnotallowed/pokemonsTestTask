import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Pokemon() {
	const [pokemon, setPokemon] = useState({
		sprites: [],
		abilities: [],
		stats: [],
	});
	let { id } = useParams();

	async function getPokemon() {
		const { data } = await Axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
		setPokemon(data);
	}

	useEffect(() => {
		getPokemon();
	});

	return (
		<div className="container">
			<div className="pokemonInformation">
				<div className="pokemonInformation__row">
					<div className="pokemonInformation__row__block">
						<img
							className="pokemonInformation__row__block__image"
							src={pokemon.sprites.front_default}
							alt={pokemon.name + " image"}
						/>
					</div>
					<div className="pokemonInformation__row__block">
						<p className="pokemonInformation__row__block__title">Information</p>
						<p className="pokemonInformation__row__block__item">
							Name: {pokemon.name}
						</p>
						<p className="pokemonInformation__row__block__item">
							Height: {pokemon.height}"
						</p>
						<p className="pokemonInformation__row__block__item">
							Weight: {pokemon.weight} lbs.
						</p>
					</div>
					<div className="pokemonInformation__row__block">
						<p className="pokemonInformation__row__block__title">Abilities</p>
						<div className="abilities">
							{pokemon.abilities.map((item) => {
								return (
									<p key={item.ability.name} className="abilities__item">
										{item.ability.name}
									</p>
								);
							})}
						</div>
					</div>
				</div>
				<div class="pokemonStats">
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>Stat</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							{pokemon.stats.map((item, i) => {
								return (
									<tr claassName="table__item">
										<th>{i + 1}</th>
										<td className="table__item__stat">{item.stat.name}</td>
										<td>{item.base_stat}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Pokemon;
