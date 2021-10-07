import "./header.scss"
import React from 'react'
import Logo from '../Logo/Logo'

function Header() {
    return (
        <header className="header">
            <div className="logo"><Logo /></div>
            <h1>Furkan Topaloğlu - Rick and Morty</h1>
        </header>
    )
}

export default Header
