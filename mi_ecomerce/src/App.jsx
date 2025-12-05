// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home.jsx";
import Categorias from "./pages/Categorias.jsx";
import Productos from "./pages/Productos.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* listado general de productos */}
        <Route path="/productos" element={<Productos />} />

        {/* página de filtros */}
        <Route path="/categoria" element={<Categorias />} />

        {/* detalle de producto */}
        <Route path="/detalle" element={<ProductoDetalle />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
