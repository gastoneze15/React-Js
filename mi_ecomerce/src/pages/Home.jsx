// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main style={{ padding: "2rem" }}>
            <section style={{ maxWidth: "700px", marginBottom: "2rem" }}>
                <h1>Bienvenido a la tienda</h1>
                <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
                    Encontrá remeras, pantalones, camperas y mucho más.
                    Usá el catálogo de productos o filtrá por categorías para ver solo lo que te interesa.
                </p>

                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                    <Link
                        to="/productos"
                        style={{
                            padding: "0.7rem 1.4rem",
                            borderRadius: "999px",
                            backgroundColor: "#4f46e5",
                            color: "white",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                    >
                        Ver todos los productos
                    </Link>

                    <Link
                        to="/categoria"
                        style={{
                            padding: "0.7rem 1.4rem",
                            borderRadius: "999px",
                            border: "1px solid #4f46e5",
                            color: "#4f46e5",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                    >
                        Filtrar por categorías
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
