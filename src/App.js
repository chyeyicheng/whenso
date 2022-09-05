import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import { useSelector } from "react-redux";

import Nav from "./components/Nav";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
	const isLoggin = useSelector((state) => state.isLoggin);
	const token = useSelector((state) => state.token);

	const localToken = localStorage.getItem("token");

	return (
		<div>
			<Nav />
			<Switch>
				<Route path="/" exact component={LoginPage} />
				<Route path="/register" component={RegisterPage} />

				{localToken && (
					<Route path="/success">
						<SuccessPage />
					</Route>
				)}

				{!localToken && <Redirect to="/" />}

				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
