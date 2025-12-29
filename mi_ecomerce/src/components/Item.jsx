import { Link } from "react-router-dom";

export default function Item({ prod }) {
    if (!prod) return null;

    const {
        id,
        title = "Sin título",
        category = "sin-categoria",
        price = 0,
        img = "",
    } = prod;

    const safeImg =
        img && img.trim() !== ""
            ? img
            : "https://placehold.co/800x500?text=Sin+imagen";

    return (
        <div className="card">
            <img className="cardImg" src={safeImg} alt={title} />

            <div className="cardBody">
                <span className="badge">{category}</span>

                <h3>{title}</h3>

                <p className="price">${price}</p>

                <Link className="linkBtn" to={`/item/${id}`}>
                    Ver detalle
                </Link>
            </div>
        </div>
    );
}
