import { useState } from "react";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const safeInitial = Math.min(Math.max(initial, 1), stock || 1);
    const [count, setCount] = useState(safeInitial);

    const dec = () => setCount((c) => Math.max(1, c - 1));
    const inc = () => setCount((c) => Math.min(stock, c + 1));

    if (!stock || stock <= 0) return <p>Sin stock</p>;

    return (
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <button onClick={dec} style={{ padding: "6px 10px" }}>-</button>
            <span style={{ minWidth: 30, textAlign: "center" }}>{count}</span>
            <button onClick={inc} style={{ padding: "6px 10px" }}>+</button>

            <button
                onClick={() => onAdd?.(count)}
                style={{ padding: "8px 12px", borderRadius: 10, border: "none", cursor: "pointer" }}
            >
                Agregar
            </button>
        </div>
    );
}
