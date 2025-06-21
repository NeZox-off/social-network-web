"use client"
import { useCallback, useState } from 'react'

export function useDisplayAnimation() {
	const [stateShow, setStateShow] = useState(false)

	let timer

	const handleShowAnimation = useCallback(() => {
		timer = setTimeout(() => setStateShow(true), 0)
		console.log(timer, stateShow)
	}, [stateShow])
	return { handleShowAnimation, stateShow }
}
