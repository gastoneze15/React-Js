import { useCart } from "../context/Cartcontext.jsx";

export default function CartItem({ item }) {
    const { removeOne, removeItem } = useCart();

    const subtotal = item.price * item.qty;

    return (
        <div className="cartItem">
            <img
                src={item.img}
                alt={item.title}
                className="cartItem__img"
            />

            <div className="cartItem__info">
                <h4 className="cartItem__title">{item.title}</h4>

                <p className="cartItem__meta">
                    Categoría: <b>{item.category}</b>
                </p>

                <p className="cartItem__meta">
                    Talle: <b>{item.selectedSize || "Único"}</b> — Cant:{" "}
                    <b>{item.qty}</b>
                </p>

                <p className="cartItem__meta">
                    Precio: <b>${item.price}</b> — Subtotal:{" "}
                    <b>${subtotal}</b>
                </p>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
                <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() =>
                        removeOne(item.id, item.selectedSize)
                    }
                >
                    Quitar 1
                </button>

                <button
                    type="button"
                    className="btn btn--danger"
                    onClick={() =>
                        removeItem(item.id, item.selectedSize)
                    }
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
