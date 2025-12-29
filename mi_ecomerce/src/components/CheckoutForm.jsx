import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig.js";
import { useCart } from "../context/Cartcontext.jsx";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
    const { cart, totalPrice, clearCart } = useCart();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        email2: "",
    });

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        if (!form.name.trim() || !form.phone.trim()) {
            alert("Completá nombre y teléfono.");
            return;
        }

        if (!isValidEmail(form.email)) {
            alert("Email inválido.");
            return;
        }

        if (form.email !== form.email2) {
            alert("Los emails no coinciden.");
            return;
        }

        const order = {
            buyer: {
                name: form.name.trim(),
                phone: form.phone.trim(),
                email: form.email.trim(),
            },
            items: cart.map((i) => ({
                id: i.id,
                title: i.title,
                price: i.price,
                qty: i.qty,
                selectedSize: i.selectedSize,
            })),
            total: totalPrice,
            createdAt: serverTimestamp(),
        };

        try {
            setLoading(true);
            const ref = await addDoc(collection(db, "orders"), order);
            setOrderId(ref.id);
            clearCart();
        } catch (err) {
            console.error(err);
            alert("Error creando la orden. Revisá permisos/reglas de Firestore.");
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="container checkout">
                <h1 className="h1">Compra realizada</h1>

                <div className="card checkoutCard">
                    <span className="badgeOk">✅ Listo</span>

                    <p className="p-muted" style={{ marginTop: 12, marginBottom: 6 }}>
                        Tu ID de orden es:
                    </p>

                    <p style={{ fontWeight: 900, fontSize: 20, letterSpacing: ".02em", margin: 0 }}>
                        {orderId}
                    </p>

                    <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <Link className="btn btn--primary" to="/productos">
                            Volver a productos
                        </Link>
                        <Link className="btn btn--ghost" to="/">
                            Ir al inicio
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container checkout">
            <h1 className="h1">Checkout</h1>

            <div className="checkout__wrap">
                <div className="card checkoutCard">
                    <h3 className="checkoutCard__title">Datos del comprador</h3>

                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            className="input"
                            name="name"
                            placeholder="Nombre"
                            value={form.name}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="phone"
                            placeholder="Teléfono"
                            value={form.phone}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />

                        <input
                            className="input"
                            name="email2"
                            placeholder="Confirmar email"
                            value={form.email2}
                            onChange={handleChange}
                        />

                        <p className="form__hint">Revisá tus datos antes de confirmar.</p>

                        <button className="btn btn--primary btn--block" type="submit" disabled={loading}>
                            {loading ? "Creando orden..." : "Finalizar compra"}
                        </button>
                    </form>
                </div>

                <aside className="card checkoutSummary">
                    <h3 className="checkoutCard__title">Resumen</h3>

                    <div className="cartSummary__row">
                        <span className="p-muted">Total</span>
                        <strong>${totalPrice}</strong>
                    </div>

                    <p className="form__hint" style={{ marginTop: 12 }}>
                        Al confirmar, se genera la orden de compra con su numero de ID.
                    </p>

                    <div style={{ marginTop: 12 }}>
                        <Link className="btn btn--ghost btn--block" to="/cart">
                            Volver al carrito
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
