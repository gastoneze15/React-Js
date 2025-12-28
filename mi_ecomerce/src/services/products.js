import {
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

const productsRef = collection(db, "products");

const normalizeProduct = (id, data) => {
    return {
        id,
        title: data.title ?? data.nombre ?? "Sin título",
        category: data.category ?? data.categoria ?? "sin-categoria",
        price: Number(data.price ?? data.precio ?? 0),
        img: data.img ?? data.image ?? data.imagen ?? "",
        description: data.description ?? data.descripcion ?? "",
        stock: Number(data.stock ?? 0),
        sizes: data.sizes ?? data.talle ?? [], // si es "talle"
    };
};

export const getProducts = async () => {
    const snap = await getDocs(productsRef);
    return snap.docs.map((d) => normalizeProduct(d.id, d.data()));
};

export const getProductsByCategory = async (categoryId) => {
    const q = query(productsRef, where("category", "==", categoryId));
    const snap = await getDocs(q);
    return snap.docs.map((d) => normalizeProduct(d.id, d.data()));
};

export const getProductById = async (id) => {
    const ref = doc(db, "products", id);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return normalizeProduct(snap.id, snap.data());
};
