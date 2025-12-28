import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../services/products";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [prod, setProd] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getProductById(id)
            .then((data) => setProd(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (!prod) return <p>Producto no encontrado</p>;

    return <ItemDetail prod={prod} />;
}
