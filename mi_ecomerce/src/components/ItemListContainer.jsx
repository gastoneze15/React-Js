
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProductos, getProductosPorCategoria } from "./data/Productos";

const ItemListContainer = ({ titulo, categoriaFilter }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchFn = categoriaFilter
            ? () => getProductosPorCategoria(categoriaFilter)
            : getProductos;

        fetchFn()
            .then((res) => setItems(res))
            .finally(() => setLoading(false));
    }, [categoriaFilter]);

    if (loading) {
        return <p style={{ padding: "2rem" }}>Cargando productos...</p>;
    }

    return (
        <main style={{ padding: "2rem" }}>
            {titulo && <h1>{titulo}</h1>}
            <ItemList products={items} />
        </main>
    );
};

export default ItemListContainer;
