import { MovieListApp } from "./Componets/MovieList";
import { NavbarApp } from "./Componets/Navbar";
import { MovieProvider } from "./Context/MovieContext";
import { UserProvider } from "./Context/UserContext";

import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<UserProvider>
				<h1>Context App</h1>
				<MovieProvider>
					<NavbarApp />
					<MovieListApp />
				</MovieProvider>
			</UserProvider>
		</div>
	);
}
