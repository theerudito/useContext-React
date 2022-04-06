import { useContext } from "react";
import UserContext from "../Context/UserContext";

export const NavbarApp = () => {
	console.log("navbar");
	const { user, login, logout } = useContext(UserContext);

	return (
		<nav className="navbar navbar-dark bg-dark mb-4">
			<div className="container">
				<span className="navbar-brand">
					<h4>{user ? `Hola ${user.name}` : "Bienvenid@"} </h4>
				</span>
				{user ? (
					<button className="btn btn-outline-primary" onClick={logout}>
						Cerrar Seccion
					</button>
				) : (
					<button className="btn btn-primary" onClick={login}>
						Iniciar Seccion
					</button>
				)}
			</div>
		</nav>
	);
};
