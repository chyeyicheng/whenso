import classes from "../components/Login.module.css";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

import { tokenActions } from "../store/index";
import toast from "react-hot-toast";

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				dispatch(tokenActions.addToken(user.accessToken));

				localStorage.setItem("token", user.accessToken);

				toast.success("Login Success");

				history.replace("/success");

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log(errorCode, errorMessage);
			});
	};

	return (
		<div className={classes.wrap}>
			<h1>Login</h1>
			<form className={classes.form}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email"
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter your password"
				/>
				<button
					type="submit"
					onClick={handleSubmit}
					className={classes.loginButton}
				>
					Login
				</button>

				<button
					type="button"
					onClick={() => {
						history.replace("/register");
					}}
					className={classes.registerButton}
				>
					Signup Instead
				</button>
			</form>
		</div>
	);
};

export default Login;
