import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header class="site-header">
        <nav>
            <Link to="/"className="link-home">Emotion data</Link>
            <Link to="/webcam"className="link-home">Ajustement webcam</Link>
            <Link to="/data"className="link-home">Datas</Link>
        </nav>
    </header>
    )
}

export default Header;