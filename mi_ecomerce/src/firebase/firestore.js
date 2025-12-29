
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 800);
    });
};

export const getProductosPorCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtrados = productos.filter(
                (prod) => prod.categoria === categoria
            );
            resolve(filtrados);
        }, 800);
    });
};