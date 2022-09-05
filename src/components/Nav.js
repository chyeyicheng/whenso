import { useSelector, useDispatch } from "react-redux";
import { tokenActions } from "../store";
import classes from "./Nav.module.css";
import logo from "../assets/whenso-logo.webp";
import toast from "react-hot-toast";

const Nav = () => {
	const isLoggin = useSelector((state) => state.isLoggin);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		localStorage.removeItem("token");
		console.log("logout");
		dispatch(tokenActions.removeToken());
		toast.success("Logout Success");
	};

	return (
		<div className={classes.nav}>
			<h1>
				<img src={logo} alt="logo" />
			</h1>
			{isLoggin && (
				<button onClick={logoutHandler} className={classes.button}>
					Logout
				</button>
			)}
		</div>
	);
};

export default Nav;
