import React, { createContext, useState } from "react";

const UserContext = createContext();

const inicialState = { id: 1, name: "Jorge", favorite: [1, 2, 3] };

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(inicialState);

	const login = () => {
		setUser(inicialState);
	};

	const logout = () => {
		setUser(null);
	};

	const favoriteMovies = (movieId) => {
		const isfavorite = user.favorite.includes(movieId);
		const favorite = isfavorite
			? user.favorite.filter((favMovieId) => favMovieId !== movieId)
			: [...user.favorite, movieId];
		setUser({
			...user,
			favorite
		});
	};

	const data = { user, login, logout, favoriteMovies };

	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export { UserProvider };
export default UserContext;
