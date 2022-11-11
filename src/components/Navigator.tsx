import { ReactNode } from "react"

import { useHover } from "../hooks"
import css from "./Navigator.module.css"

export const Navigator = ({ children }: { children: ReactNode }) => {
	const cannotHover = matchMedia("(hover: none)").matches
	const [hoverRef, isHovered] = useHover()

	return (
		<nav ref={hoverRef} className={css.nav}>
			{isHovered || cannotHover ? children : "Navigation"}
		</nav>
	)
}
