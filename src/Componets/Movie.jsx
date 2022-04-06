import { useContext } from "react";
import UserContext from "../Context/UserContext";

export const MovieApp = ({ movie }) => {
	const { user, favoriteMovies } = useContext(UserContext);
	console.log("movie");

	const imgStyles = {
		height: "260px",
		width: "200px",
		borderRadius: "10px",
		border: "2px solid black",
		objectFit: "cover"
	};

	const isFavorite = user?.favorite?.includes(movie.id);

	return (
		<div className="car">
			<h4>Movie </h4>
			<img
				src={movie.imageUrl}
				alt={movie.title}
				className="card-img-top"
				style={imgStyles}
			/>
			<div className="card-body">
				<h4>{movie.title} </h4>
				{user?.id && (
					<button
						className={`btn ${
							isFavorite ? "btn-danger" : "btn-outline-primary"
						}`}
						onClick={() => favoriteMovies(movie.id)}>
						{" "}
						Favorite
					</button>
				)}
			</div>
		</div>
	);
};
