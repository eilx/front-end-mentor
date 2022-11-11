import { useState, useEffect } from "react"
import { BaseLocationHook } from "wouter"

const currentLocation = () => window.location.hash.replace(/^#/, "") || "/"

const navigate = (to: string) => (window.location.hash = to)

export const useHashLocation: BaseLocationHook = () => {
	const [location, setLocation] = useState(currentLocation())
	const handler = () => setLocation(currentLocation())

	useEffect(() => {
		window.addEventListener("hashchange", handler)
		return () => window.removeEventListener("hashchange", handler)
	}, [])

	return [location, navigate]
}
