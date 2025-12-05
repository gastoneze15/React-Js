
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header style={{ padding: "1rem 2rem" }}>
            <nav>
                <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/categoria">Categorías</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
