import { lazy, Suspense } from "react"
import { Router, Switch, Route } from "wouter"

import { ActiveLink, Navigator } from "./components"
import { useHashLocation } from "./hooks"
import "./App.css"

const pages = {
	"": lazy(() => import("./Index")),
	"news-homepage": lazy(() => import("../news-homepage")),
	"404": lazy(() => import("./404")),
}

export default function App() {
	return (
		<Router base="/front-end-mentor" hook={useHashLocation}>
			<Suspense>
				<Switch>
					<Route
						path="/news-homepage"
						component={pages["news-homepage"]}
					/>
					<Route path="/" component={pages[""]} />
					<Route component={pages["404"]} />
				</Switch>
			</Suspense>

			<Navigator>
				<ActiveLink to="/">Index</ActiveLink>
				<ActiveLink to="/news-homepage">News Homepage</ActiveLink>
			</Navigator>
		</Router>
	)
}
