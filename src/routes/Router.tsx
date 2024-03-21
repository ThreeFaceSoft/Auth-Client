import {createBrowserRouter, Navigate} from "react-router-dom";
import {RoutesPath} from "../config/routes.config.ts";
import {LoginForm} from "../containers/LoginForm/LoginForm.tsx";
import {RegistrationForm} from "../containers/RegistrationForm/RegistrationForm.tsx";

export const setupRouter = () => createBrowserRouter([
	{
		path: RoutesPath.signIn,
		element: <LoginForm/>
	},
	{
		path: RoutesPath.signUp,
		element: <RegistrationForm/>
	},
	{
		path: '*',
		element: <Navigate replace to={RoutesPath.signIn}/>
	}
])