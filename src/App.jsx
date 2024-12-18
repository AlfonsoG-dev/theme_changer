import { useState } from 'react'
import './App.css'

export default function App() {
    const get_initial_theme = () => localStorage.getItem('theme') || 'light'
    const [isLightTheme, setIsLightTheme] = useState(get_initial_theme() === 'light')

    const handle_change_theme = () => {
        setIsLightTheme((prev) => {
            const new_theme = !prev
            localStorage.setItem('theme', new_theme ? 'light' : 'dark')
            return new_theme
        })
    }
    return (
        <div className={`container-${isLightTheme ? 'light':'dark'} container`}>
            <button onClick={handle_change_theme}>
                {isLightTheme ? 'light':'dark'}
            </button>
            <h1>This is random title</h1>
            <p>This is random text</p>
        </div>
    )
}
