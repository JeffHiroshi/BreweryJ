import { useState, useEffect } from "react";


export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) 
        return JSON.parse(jsonValue)

        if (initialValue)
        return initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}