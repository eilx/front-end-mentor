import { ReactNode, Children, useState, Suspense } from "react"

import { hamburgerOpen, hamburgerClose } from "../assets/images"
import css from "./Navigation.module.css"

export const Navigation = ({ children }: { children: ReactNode }) => {
	const [toggled, setToggled] = useState(false)

	return (
		<nav>
			<label className={css.hamburger} data-checked={toggled}>
				<img
					src={toggled ? hamburgerClose : hamburgerOpen}
					alt="Navigation menu icon"
				/>
				<input
					type="checkbox"
					hidden
					checked={toggled}
					onChange={() => setToggled(!toggled)}
				/>
			</label>

			<ul className={css.nav}>
				{Children.map(children, (child, i) => (
					<li key={i}>{child}</li>
				))}
			</ul>

			<div
				className={css.backdrop}
				onClick={() => setToggled(false)}
			></div>
		</nav>
	)
}
