// src/components/ItemCard.jsx
// src/components/ItemCard.jsx
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
    return (
        <article
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                width: "250px",
            }}
        >
            <img
                src={product.img}
                alt={product.nombre}
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0"
                }}
            />
            <h3>{product.nombre}</h3>
            <p>Categoría: {product.categoria}</p>
            <p>Precio: ${product.precio}</p>

            {/* Le pasamos el producto seleccionado por state */}
            <Link to="/detalle" state={{ product }}>
                Ver detalle
            </Link>
        </article>
    );
};

export default ItemCard;
