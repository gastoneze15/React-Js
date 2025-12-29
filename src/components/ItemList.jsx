import Item from "./Item";

export default function ItemList({ items = [] }) {
    return (
        <div className="productsPage">
            <div className="productsTop">
                <div className="productsTitle">
                    <h2>Productos</h2>
                    <p>Elegí tu favorito y mirá el detalle.</p>
                </div>
            </div>

            <div className="gridProducts">
                {items.map((prod) => (
                    <Item key={prod.id} prod={prod} />
                ))}
            </div>
        </div>
    );
}
