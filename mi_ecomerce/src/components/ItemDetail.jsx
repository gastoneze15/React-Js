

function ItemDetail({ producto }) {
    if (!producto) return null;

    return (
        <article>
            <h2>{producto.nombre}</h2>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <p>{producto.descripcion}</p>
        </article>
    );
}

export default ItemDetail;
