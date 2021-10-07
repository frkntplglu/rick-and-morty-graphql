import React from 'react'
import "./footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <ul className="social">
                <li><a href="https://github.com/frkntplglu" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                <li><a href="https://twitter.com/frkntplglu" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer"><i className="fas fa-heart"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer
