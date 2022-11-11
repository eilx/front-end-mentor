import { lazy, Suspense, ReactNode } from "react"
import { Router, Switch, Route } from "wouter"

import { ActiveLink } from "./components"
import { useHover } from "./hooks"
import css from "./App.module.css"

const pages = {
	"": lazy(() => import("./Index")),
	"news-homepage": lazy(() => import("../news-homepage")),
	"404": lazy(() => import("./404")),
}

const Navigator = ({ children }: { children: ReactNode }) => {
	const cannotHover = matchMedia("(hover: none)").matches
	const [hoverRef, isHovered] = useHover()

	return (
		<nav ref={hoverRef} className={css.nav}>
			{isHovered || cannotHover ? children : "Navigation"}
		</nav>
	)
}

export default function App() {
	return (
		<Router base="/front-end-mentor">
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
