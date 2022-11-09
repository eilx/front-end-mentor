import { useState, useRef, useEffect, RefObject } from "react"

export function useHover(): [RefObject<HTMLElement>, boolean] {
	const [hovered, setHovered] = useState(false)
	const ref = useRef<HTMLElement>(null)

	const handleMouseOver = () => setHovered(true)
	const handleMouseOut = () => setHovered(false)

	useEffect(() => {
		const node = ref.current
		if (!node) return

		node.addEventListener("mouseover", handleMouseOver)
		node.addEventListener("mouseout", handleMouseOut)
		return () => {
			node.removeEventListener("mouseover", handleMouseOver)
			node.removeEventListener("mouseout", handleMouseOut)
		}
	}, [ref.current])

	return [ref, hovered]
}
