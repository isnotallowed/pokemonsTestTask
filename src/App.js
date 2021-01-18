import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";
import Pokemon from "./components/Pokemon/Pokemon";
import Header from "./components/generalComponents/Header/Header";
import PokemonsTable from "./components/PokemonsTable/PokemonsTable";

function App() {
	return (
		<Router>
			<Header />
			<div className="content">
				<Switch>
					<Route path="/pokemon/:id">
						<Pokemon />
					</Route>
					<Route path="/pokemons">
						<PokemonsTable />
					</Route>
					<Route path="/">
						<Main />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
