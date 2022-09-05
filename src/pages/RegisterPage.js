import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { tokenActions } from "../store/index";

import { useHistory } from "react-router-dom";

import { auth } from "../firebase";

import classes from "../components/Login.module.css";

import toast from "react-hot-toast";

const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [password, setPassword] = useState();
	const [email, setEmail] = useState();

	// get token
	const token = localStorage.getItem("token");
	if (token) {
		history.replace("/success");
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				dispatch(tokenActions.addToken(user.accessToken));
				localStorage.setItem("token", user.accessToken);
				// history.replace("/success");

				toast.success("Register Success");

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);

				toast.error("Register Failed");
				// ..
			});
	};

	return (
		<div className={classes.wrap}>
			<h1>Register</h1>
			<form className={classes.form}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" onClick={handleSubmit}>
					Register
				</button>

				<button type="button" onClick={() => history.replace("/login")}>
					Login Instead
				</button>
			</form>
		</div>
	);
};

export default Register;
