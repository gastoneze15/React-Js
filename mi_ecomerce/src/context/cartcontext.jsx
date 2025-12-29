import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
    return ctx;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, qty) => {
        if (!item?.id) return;

        setCart((prev) => {
            const existing = prev.find(
                (p) => p.id === item.id && p.selectedSize === item.selectedSize
            );

            if (existing) {
                return prev.map((p) =>
                    p.id === item.id && p.selectedSize === item.selectedSize
                        ? { ...p, qty: p.qty + qty }
                        : p
                );
            }

            return [...prev, { ...item, qty }];
        });
    };

    const removeOne = (id, selectedSize) => {
        setCart((prev) =>
            prev.flatMap((p) => {
                const isSame =
                    p.id === id &&
                    (p.selectedSize || "Único") === (selectedSize || "Único");

                if (!isSame) return [p];

                if (p.qty > 1) {
                    return [{ ...p, qty: p.qty - 1 }];
                }

                return [];
            })
        );
    };

    const removeItem = (id, selectedSize) => {
        setCart((prev) =>
            prev.filter(
                (p) =>
                    !(
                        p.id === id &&
                        (p.selectedSize || "Único") ===
                            (selectedSize || "Único")
                    )
            )
        );
    };

    const clearCart = () => setCart([]);

    const totalQty = useMemo(
        () => cart.reduce((acc, p) => acc + p.qty, 0),
        [cart]
    );

    const totalPrice = useMemo(
        () => cart.reduce((acc, p) => acc + p.qty * Number(p.price), 0),
        [cart]
    );

    const value = {
        cart,
        addItem,
        removeOne,  
        removeItem,  
        clearCart,
        totalQty,
        totalPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

