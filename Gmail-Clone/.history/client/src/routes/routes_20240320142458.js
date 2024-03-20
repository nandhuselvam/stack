import { lazy } from "react";

const Main = lazy(() => import('../'))

const routes ={

	main: {
		path: '/',
		element: Main
	},
	emails: {
		path: '/emails',
		element: Emails
	},
	invalid: {
		path: '/*',
		element: Emails
	},
	view: {
		path: '/view',
		element: Emails
	},
}

export { routes };