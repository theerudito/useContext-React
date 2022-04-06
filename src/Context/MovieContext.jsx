import { createContext } from "react";
import { initialMovies } from "../Componets/Complement/InicialMovies";

export const MovieContext = createContext();

const data = { movies: initialMovies };

export const MovieProvider = ({ children }) => {
	return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};
