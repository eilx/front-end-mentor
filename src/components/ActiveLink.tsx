import { Link, useRoute } from "wouter"
import css from "./ActiveLink.module.css"

export const ActiveLink = (props: React.ComponentPropsWithRef<typeof Link>) => {
	const [isActive] = useRoute(props.to)

	return (
		<Link
			{...props}
			className={`${css.link} ${isActive ? css.active : undefined}`}
		>
			{props.children}
		</Link>
	)
}
