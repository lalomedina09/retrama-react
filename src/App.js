import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes de layout
import Preloader from './components/layout/Preloader';
import SideMenu from './components/layout/SideMenu';
import MobileMenu from './components/layout/MobileMenu';
import SearchBox from './components/ui/SearchBox';
import CursorFollower from './components/ui/CursorFollower';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/layout/Footer';

// Páginas (ahora importando los componentes reales)
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import About from './pages/About';

// Importar estilos globales
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Componentes globales */}
                <Preloader />
                <SideMenu />
                <MobileMenu />
                <SearchBox />
                <CursorFollower />

                {/* Rutas de la aplicación */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/soluciones" element={<Solutions />} />
                    <Route path="/nosotros" element={<About />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>

                {/* Componentes globales del footer */}
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;