import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function NavBar() {
    const linkClass = ({ isActive }) =>
        `nav__link ${isActive ? "nav__link--active" : ""}`;

    const [openCats, setOpenCats] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target)) setOpenCats(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setOpenCats(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    const closeMenu = () => setOpenCats(false);

    return (
        <header className="nav">
            <div className="nav__inner">
                <Link to="/" className="nav__brand" onClick={closeMenu}>
                    <span className="nav__logo">AB</span>
                    <span className="nav__brandText">Ainara Boutique</span>
                </Link>

                <nav className="nav__menu" aria-label="Navegación principal">
                    <NavLink to="/" className={linkClass} onClick={closeMenu}>
                        Inicio
                    </NavLink>

                    <NavLink to="/productos" className={linkClass} onClick={closeMenu}>
                        Productos
                    </NavLink>

                    <div className="nav__dropdown" ref={dropdownRef}>
                        <button
                            className="nav__dropBtn"
                            type="button"
                            onClick={() => setOpenCats((v) => !v)}
                            aria-expanded={openCats}
                            aria-haspopup="menu"
                        >
                            Categorías <span className="nav__chev">▾</span>
                        </button>

                        <div
                            className={`nav__dropPanel ${openCats ? "is-open" : ""}`}
                            role="menu"
                        >
                            <Link className="nav__dropItem" to="/categoria/remeras" role="menuitem" onClick={closeMenu}>
                                👕 Remeras
                            </Link>
                            <Link className="nav__dropItem" to="/categoria/pantalones" role="menuitem" onClick={closeMenu}>
                                👖 Pantalones
                            </Link>
                            <Link className="nav__dropItem" to="/categoria/camperas" role="menuitem" onClick={closeMenu}>
                                🧥 Camperas
                            </Link>
                            <Link className="nav__dropItem" to="/categoria/calzado" role="menuitem" onClick={closeMenu}>
                                👟 Calzado
                            </Link>
                            <Link className="nav__dropItem" to="/categoria/accesorios" role="menuitem" onClick={closeMenu}>
                                👜 Accesorios
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="nav__right">
                    <Link to="/cart" className="nav__cartBtn" aria-label="Ir al carrito" onClick={closeMenu}>
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </header>
    );
}
