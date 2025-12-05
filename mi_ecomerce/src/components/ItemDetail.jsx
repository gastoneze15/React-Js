// src/components/ItemDetail.jsx

function ItemDetail({ producto }) {
    if (!producto) return null;

    return (
        <article>
            <h2>{producto.nombre}</h2>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <p>{producto.descripcion}</p>

            {/* Acá después podes agregar ItemCount para el carrito */}
        </article>
    );
}

export default ItemDetail;
