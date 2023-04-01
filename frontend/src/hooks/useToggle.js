import { useState } from "react"

export const useToggle = () => {
    const [active, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!active)
    }

    return { active, handleToggle }
}