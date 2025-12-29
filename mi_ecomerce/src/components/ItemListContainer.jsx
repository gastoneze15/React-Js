import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../services/products";
import "../pages/productos.css";

export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const fn = id ? getProductsByCategory : getProducts;



        fn(id)
            .then((data) => {
                setItems(data);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));

    }, [id]);

    if (loading) return <p>Cargando...</p>;

    return <ItemList items={items} />;
}
