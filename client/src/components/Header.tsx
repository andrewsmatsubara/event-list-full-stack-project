import React from "react";
import '../style/Header.css';

export const Header = () => {
    return (
        <header className="header">
            <h1>Site</h1>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <button>Início</button>
                    </li>
                    <li>
                        <button>Meus eventos</button>
                    </li>
                    <li>
                        <button>Eventos privados</button>
                    </li>
                    <li>
                        <button>Eventos públicos</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
