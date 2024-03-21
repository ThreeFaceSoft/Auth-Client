import {RouterProvider} from "react-router-dom";
import { setupRouter} from "./routes/Router.tsx";

const router = setupRouter();

const App = () => {
	return (
		<RouterProvider router={router}/>
	)
}

export default App