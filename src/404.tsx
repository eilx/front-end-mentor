import { Link, useRoute, useLocation } from "wouter"

export default function Error() {
	const [location, setLocation] = useLocation()

	return (
		<>
			<main
				style={{
					minHeight: "100vh",
					display: "grid",
					placeItems: "center",
					textAlign: "center",
					fontFamily: "sans",
					background: "yellow",
				}}
			>
				<div>
					<h1 style={{ marginBottom: "1em" }}>Error: 404</h1>
					<Link
						to={location}
						style={{
							border: "solid 1px black",
							padding: ".5em 1em",
							backgroundColor: "black",
							color: "white",
							fontWeight: "bold",
							borderRadius: "3px",
						}}
					>
						Try this?
					</Link>
					<p style={{ marginTop: "2em" }}>
						Otherwise, try the navigation in the corner!
					</p>
				</div>
			</main>
		</>
	)
}
