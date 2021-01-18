import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function PokemonsList() {
	const [pokemonsList, setPokemonsList] = useState([]);
	const [viewMoreUrl, setViewMoreUrl] = useState(null);

	async function getPokemons() {
		const { data } = await Axios.get(
			viewMoreUrl ?? "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
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
			<div className="wrap">
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Height</th>
							<th>Weight</th>
						</tr>
					</thead>
					<tbody>
						{pokemonsList.map((item) => {
							return (
								<tr className="table__item">
									<td>
										<Link
											className="table__item__name"
											to={`/pokemon/${item.id}`}
										>
											{item.name}
										</Link>
									</td>
									<td>{item.height}"</td>
									<td>{item.weight} lbs.</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<button className="showMore tableShowMore" onClick={getPokemons}>
					Show more
				</button>
			</div>
		</div>
	);
}

export default PokemonsList;
