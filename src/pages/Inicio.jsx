import { Link } from "react-router-dom";
import "./inicio.css";

export default function Inicio() {
    const categorias = [
        { id: "remeras", label: "Remeras", emoji: "👕" },
        { id: "pantalones", label: "Pantalones", emoji: "👖" },
        { id: "camperas", label: "Camperas", emoji: "🧥" },
        { id: "calzado", label: "Calzado", emoji: "👟" },
        { id: "accesorios", label: "Accesorios", emoji: "👜" },
    ];

    return (
        <div className="home">
            <section className="hero">
                <div className="hero__content">
                    <span className="hero__badge">Nuevo • Temporada 2026</span>

                    <h1 className="hero__title">Ainara Boutique</h1>

                    <p className="hero__subtitle">
                        Encontrá lo que más te gusta en nuestro catálogo.
                        Comprá fácil, rápido y sin vueltas.
                    </p>

                    <div className="hero__actions">
                        <Link className="btn btn--primary" to="/productos">
                            Ver productos
                        </Link>
                    </div>

                    <div className="hero__stats">
                        <div className="stat">
                            <div className="stat__num">+50</div>
                            <div className="stat__label">Productos</div>
                        </div>
                        <div className="stat">
                            <div className="stat__num">24/7</div>
                            <div className="stat__label">Online</div>
                        </div>
                        <div className="stat">
                            <div className="stat__num">🔥</div>
                            <div className="stat__label">Nuevos ingresos</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section__head">
                    <h2 className="section__title">Categorías</h2>
                    <p className="section__desc">
                        Explorá rápido por tipo de producto.
                    </p>
                </div>

                <div className="grid">
                    {categorias.map((c) => (
                        <Link
                            key={c.id}
                            to={`/categoria/${c.id}`}
                            className="catCard"
                        >
                            <div className="catCard__emoji">{c.emoji}</div>
                            <div className="catCard__label">{c.label}</div>
                            <div className="catCard__cta">Ver →</div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="banner">
                <div>
                    <h3 className="banner__title">Envíos y promos</h3>
                    <p className="banner__text">
                        Armá tu carrito y finalizá tu compra en el checkout.
                    </p>
                </div>

                <Link className="btn btn--primary" to="/cart">
                    Ir al carrito
                </Link>
            </section>

            <footer className="footer">
                <p>
                    © {new Date().getFullYear()} Ainara Boutique — Proyecto React / Coderhouse
                </p>
            </footer>
        </div>
    );
}
