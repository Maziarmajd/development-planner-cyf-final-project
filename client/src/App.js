import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import NewPlan from "./pages/NewPlan";
import Plan from "./pages/Plan";
import { verifyUser } from "./utils/api";
import Signup from "./pages/Signup";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: ["Raleway ", "Arial"].join(","),
	},
});

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	console.log(isAuthenticated);

	useEffect(() => {
		verifyUser();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div>
				<Header />
				<hr />
				<Switch>
					<Route
						exact
						path="/"
						render={(props) =>
							!isAuthenticated ? (
								<Login {...props} setIsAuthenticated={setIsAuthenticated} />
							) : (
								<Redirect to="/dashboard" />
							)
						}
					/>
					<Route
						exact
						path="/signup"
						render={(props) =>
							!isAuthenticated ? (
								<Signup {...props} setIsAuthenticated={setIsAuthenticated} />
							) : (
								<Redirect to="/dashboard" />
							)
						}
					/>
					<Route path="/dashboard" exact>
						<Dashboard />
					</Route>
					<Route path="/newplan">
						<NewPlan />
					</Route>
					<Route path="/plan" exact>
						<Plan />
					</Route>
				</Switch>
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
