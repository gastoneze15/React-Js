
import { useLocation, Navigate, useNavigate } from "react-router-dom";

const ProductoDetalle = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;

    if (!product) {
        return <Navigate to="/productos" replace />;
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>Detalle del producto</h1>

            <button
                onClick={() => navigate(-1)}
                style={{
                    margin: "1rem 0",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    border: "1px solid #4f46e5",
                    background: "white",
                    color: "#4f46e5",
                    cursor: "pointer",
                    fontWeight: "600",
                }}
            >
                ← Volver
            </button>

            <section
                style={{
                    marginTop: "1.5rem",
                    padding: "1.5rem",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    maxWidth: "420px",
                }}
            >
                {/* 👇 Usamos SIEMPRE "product" */}
                {product.img && (
                    <img
                        src={product.img}
                        alt={product.nombre}
                        style={{
                            width: "100%",
                            borderRadius: "10px",
                            marginBottom: "1rem",
                            objectFit: "cover",
                            maxHeight: "260px",
                        }}
                    />
                )}

                <h2>{product.nombre}</h2>
                <p>
                    <strong>Categoría:</strong> {product.categoria}
                </p>
                <p>
                    <strong>Precio:</strong> ${product.precio}
                </p>
                {product.descripcion && (
                    <p>
                        <strong>Descripción:</strong> {product.descripcion}
                    </p>
                )}

                <button
                    style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1.2rem",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Agregar al carrito
                </button>
            </section>
        </main>
    );
};

export default ProductoDetalle;
