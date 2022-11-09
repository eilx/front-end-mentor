import { lazy, Suspense, ReactNode } from "react"
import { Route } from "wouter"

import { ActiveLink } from "./components"
import { useHover } from "./hooks"
import css from "./App.module.css"

const pages = {
	"": lazy(() => import("./Index")),
	"news-homepage": lazy(() => import("../news-homepage")),
}

const Navigator = ({ children }: { children: ReactNode }) => {
	const [hoverRef, isHovered] = useHover()

	return (
		<nav ref={hoverRef} className={css.nav}>
			{isHovered ? children : "Navigation"}
		</nav>
	)
}

const RouteTo = ({ href }: { href: keyof typeof pages }) => (
	<Route path={`/${href}`} component={pages[href]} />
)

// TODO: Mobile navigation for bottom-right

export default function App() {
	return (
		<>
			<Suspense>
				<RouteTo href="" />
				<RouteTo href="news-homepage" />
			</Suspense>

			<Navigator>
				<ActiveLink to="/">Index</ActiveLink>
				<ActiveLink to="/news-homepage">News Homepage</ActiveLink>
			</Navigator>
		</>
	)
}
