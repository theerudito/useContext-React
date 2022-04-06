import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

import { MovieApp } from "./Movie";

export const MovieListApp = () => {
	console.log("movielis");

	const { movies } = useContext(MovieContext);
	return (
		<div>
			<h4>Movie List</h4>
			<div className="container">
				<div className="row">
					{movies.map((movies) => (
						<div className="col-md-4" key={movies.id}>
							<MovieApp movie={movies} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
