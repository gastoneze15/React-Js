
import ItemCard from "./ItemCard";

const ItemList = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No hay productos para mostrar.</p>;
    }

    return (
        <div
            style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "1rem",
            }}
        >
            {products.map((prod) => (
                <ItemCard key={prod.id} product={prod} />
            ))}
        </div>
    );
};

export default ItemList;
