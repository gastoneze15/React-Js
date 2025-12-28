import { useCart } from "../context/Cartcontext.jsx";

export default function CartWidget() {
    const { totalQty = 0 } = useCart();

    return (
        <div style={{ textDecoration: "none", position: "relative" }}>
            🛒
            {totalQty > 0 && (
                <span
                    style={{
                        position: "absolute",
                        top: -10,
                        right: -12,
                        background: "crimson",
                        color: "white",
                        borderRadius: "999px",
                        padding: "2px 7px",
                        fontSize: 12,
                    }}
                >
                    {totalQty}
                </span>
            )}
        </div>
    );
}
