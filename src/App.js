import logo from './logo.svg'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import BIRDS from 'vanta/dist/vanta.birds.min'

function App() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: myRef.current,
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div id="app-background" className="app">
            <header className="app__header" ref={myRef}>
                <img src={logo} className="app__logo" alt="logo" />
                <div className="app__content">
                    <h1>Vanta.js</h1>
                    <h4>
                        Animated website backgrounds in a few lines of code.
                    </h4>
                    <p> Reactjs With Vantajs </p>
                </div>
            </header>
        </div>
    )
}

export default App
