import { useState } from "react"

export const useUser = () => {
    const [user1, setUser1] = useState()

    return {user1,setUser1}
}