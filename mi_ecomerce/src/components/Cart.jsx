import { Link } from "react-router-dom";
import { useCart } from "../context/Cartcontext.jsx";
import CartItem from "./CartItem";

export default function Cart() {
    const { cart, totalQty, totalPrice, clearCart } = useCart();

    if (!cart || cart.length === 0) {
        return (
            <div className="container cart">
                <h1 className="h1">Carrito</h1>

                <div className="card empty">
                    <div className="empty__emoji">🛒</div>
                    <h3 className="empty__title">Tu carrito está vacío</h3>
                    <p className="empty__text">Sumá productos y volvé acá para finalizar.</p>

                    <div style={{ marginTop: 14 }}>
                        <Link className="btn btn--primary" to="/productos">
                            Ir a productos
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (

        
        
        <div className="container cart">
            <h1 className="h1">Carrito</h1>

            <div className="cart__grid">
                <div className="card cartList">
                    {cart.map((p) => (
                        <CartItem key={`${p.id}-${p.selectedSize || "u"}`} item={p} />
                    ))}
                </div>

                <aside className="card cartSummary">
                    <h3 className="cartSummary__title">Resumen</h3>

                    <div className="cartSummary__row">
                        <span>Total productos</span>
                        <strong>{totalQty}</strong>
                    </div>

                    <div className="cartSummary__total">
                        <span className="p-muted">Total a pagar</span>
                        <strong>${totalPrice}</strong>
                    </div>

                    <div className="cartSummary__cta">
                        <button className="btn btn--danger btn--block" onClick={clearCart}>
                            Vaciar carrito
                        </button>

                        <Link className="btn btn--primary btn--block" to="/checkout">
                            Finalizar compra
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
