import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemcount.jsx"; 
import { useCart } from "../context/Cartcontext.jsx";
import "./itemdetail.css";

export default function ItemDetail({ prod }) {
    const {
        title = "Sin título",
        category = "sin-categoria",
        description = "",
        price = 0,
        img = "",
        stock = 0,
        sizes = [],
    } = prod || {};

    const safeImg =
        img && img.trim() !== ""
            ? img
            : "https://placehold.co/900x700?text=Sin+imagen";

    const sizeOptions = useMemo(() => {
        if (!Array.isArray(sizes)) return [];
        return sizes.map((s) => String(s));
    }, [sizes]);

    const isOneSize =
        sizeOptions.length === 0 ||
        (sizeOptions.length === 1 && sizeOptions[0].toLowerCase() === "unico");

    const [selectedSize, setSelectedSize] = useState(
        isOneSize ? "Único" : sizeOptions[0] || ""
    );

    const [addedQty, setAddedQty] = useState(0);

    const { addItem } = useCart();

    const handleAdd = (qty) => {
        addItem(
            {
                id: prod?.id,
                title,
                price,
                img: safeImg,
                category,
                selectedSize,
                stock,
            },
            qty
        );
        setAddedQty(qty); // ✅ oculta ItemCount
    };

    return (
        <div className="detailPage">
            <div className="detailWrap">
                <div className="detailBreadcrumb">
                    <Link to="/productos">Productos</Link>
                    <span>›</span>
                    <span className="detailCrumbCurrent">{title}</span>
                </div>

                <div className="detailCard">
                    <div className="detailMedia">
                        <img className="detailImg" src={safeImg} alt={title} />
                    </div>

                    <div className="detailInfo">
                        <div className="detailBadges">
                            <span className="badgeCat">{category}</span>
                            {stock > 0 ? (
                                <span className="badgeStock ok">En stock</span>
                            ) : (
                                <span className="badgeStock no">Sin stock</span>
                            )}
                        </div>

                        <h1 className="detailTitle">{title}</h1>

                        <div className="detailPriceRow">
                            <div className="detailPrice">${price}</div>
                            <div className="detailMeta">
                                <span>Stock: <b>{stock}</b></span>
                            </div>
                        </div>

                        {description ? (
                            <p className="detailDesc">{description}</p>
                        ) : (
                            <p className="detailDesc muted">Sin descripción por el momento.</p>
                        )}

                        <div className="detailDivider" />

                        <div className="detailSize">
                            <div className="detailLabel">Talle</div>

                            {isOneSize ? (
                                <div className="pill">Único</div>
                            ) : (
                                <select
                                    className="select"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                >
                                    {sizeOptions.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                        <div className="detailActions">
                            {stock <= 0 ? (
                                <div className="noStockBox">Este producto no tiene stock.</div>
                            ) : addedQty > 0 ? (
                                <div className="addedBox">
                                    <div className="addedText">
                                        ✅ Agregaste <b>{addedQty}</b> al carrito
                                    </div>
                                    <div className="addedBtns">
                                        <Link className="btnPrimary" to="/cart">
                                            Ir al carrito
                                        </Link>
                                        <Link className="btnGhost" to="/productos">
                                            Seguir comprando
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="countBox">
                                    <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
                                </div>
                            )}
                        </div>

                        <div className="detailNote">
                            💳 3 cuotas sin interés • 🚚 Envíos a todo el país
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
