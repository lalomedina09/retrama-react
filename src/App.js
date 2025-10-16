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
//import Products from './pages/Products';
import Solutions from './pages/Solutions';

import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';

//Products
import Product1 from './pages/Products/Product1/Product';

//Industries


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
                    
                    <Route path="/soluciones" element={<Solutions />} />
                    <Route path="/nosotros" element={<About />} />
                    <Route path="/preguntas-frecuentes" element={<FAQ />} />
                    <Route path="/contacto" element={<Contact />} />


                    {/* Rutas de productos */}
                    <Route path="/productos/producto1" element={<Product1 />} />
                    
                    
                    {/* Rutas de industrias */}

                </Routes>

                {/* Componentes globales del footer */}
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;