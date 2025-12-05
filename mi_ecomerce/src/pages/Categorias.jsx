// src/pages/Categorias.jsx
// src/pages/Categorias.jsx
import { useEffect, useState } from "react";
import { getProductos } from "../components/data/Productos";
import ItemList from "../components/ItemList";

const Categorias = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoriaActiva, setCategoriaActiva] = useState("todos");

    useEffect(() => {
        setLoading(true);

        getProductos()
            .then((res) => setProductos(res))
            .finally(() => setLoading(false));
    }, []);

    const obtenerProductosFiltrados = () => {
        const cat = categoriaActiva.toLowerCase();

        if (cat === "todos") return productos;


        if (cat === "remeras") {
            return productos.filter((p) =>
                ["remeras","tops" , "vestidos"].includes(p.categoria.toLowerCase())
            );
        }


        if (cat === "pantalones") {
            return productos.filter((p) =>
                ["pantalones", "jeans"].includes(p.categoria.toLowerCase())
            );
        }

        if (cat === "camperas") {
            return productos.filter((p) =>
                ["camperas", "buzos", "sweaters", "sweater", "eco-cuero"].includes(
                    p.categoria.toLowerCase()
                )
            );
        }

        if (cat === "otros") {
            const principales = ["remeras", "pantalones", "jeans", "camperas", "buzos", "sweaters","tops" , "vestidos"];
            return productos.filter(
                (p) => !principales.includes(p.categoria.toLowerCase())
            );
        }

        return productos;
    };

    const productosFiltrados = obtenerProductosFiltrados();

    if (loading) return <p style={{ padding: "2rem" }}>Cargando productos...</p>;

    return (
        <main style={{ padding: "2rem" }}>
            <h1>Categorías</h1>

            {/* botones */}
            <div style={{ margin: "1rem 0", display: "flex", gap: "0.8rem" }}>
                <button onClick={() => setCategoriaActiva("todos")}>Todos</button>
                <button onClick={() => setCategoriaActiva("remeras")}>Remeras</button>
                <button onClick={() => setCategoriaActiva("pantalones")}>Pantalones</button>
                <button onClick={() => setCategoriaActiva("camperas")}>Camperas</button>
                <button onClick={() => setCategoriaActiva("otros")}>Otros</button>
            </div>

            {/* lista filtrada */}
            <ItemList products={productosFiltrados} />
        </main>
    );
};

export default Categorias;
