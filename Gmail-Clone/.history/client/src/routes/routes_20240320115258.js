import Main from "../pages/Main"
import Emails from "../components/Emails";

const routes ={

	main: {
		path: '/',
		element: Main
	},
	emails: {
		path
	}
	invalid: {
		path: '/*',
		element: Emails
	}
}

export { routes };