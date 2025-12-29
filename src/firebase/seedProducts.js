import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseconfig";
import { productos } from "../components/data/Productos"; 

export async function seedProducts() {
    const ref = collection(db, "products");

    for (const p of productos) {
        const clean = {
            nombre: p.nombre,
            categoria: p.categoria,
            talle: p.talle,
            precio: p.precio,
            descripcion: p.descripcion,
            img: p.img,
            stock: p.stock ?? 10,
        };
        await addDoc(ref, clean);
    }

    console.log(" Seed listo: productos cargados");
}
