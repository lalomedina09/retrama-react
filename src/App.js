import React, { useEffect } from 'react';
import { BrowserRouter as Router, useNavigate, Routes, Route } from 'react-router-dom';

import SideMenu from './components/layout/SideMenu';
import MobileMenu from './components/layout/MobileMenu';
import SearchBox from './components/ui/SearchBox';
import CursorFollower from './components/ui/CursorFollower';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';

import Industrie1 from './pages/Industries/Industrie1/Industrie';
import Industrie2 from './pages/Industries/Industrie2/Industrie';
import Industrie3 from './pages/Industries/Industrie3/Industrie';
import Industrie4 from './pages/Industries/Industrie4/Industrie';
import Industrie5 from './pages/Industries/Industrie5/Industrie';
import Industrie6 from './pages/Industries/Industrie6/Industrie';
import Industrie7 from './pages/Industries/Industrie7/Industrie';
import Industrie8 from './pages/Industries/Industrie8/Industrie';
import './App.css';

const RedirectToProductSection = ({ hash }) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate({ pathname: '/productos', hash }, { replace: true });
    }, [hash, navigate]);

    return null;
};

/**
 * @component App
 * @description Componente principal de la aplicación que maneja el enrutamiento y la estructura base.
 * Las rutas antiguas de productos redirigen a anclas de la landing /productos.
 */
function App() {
    return (
        <Router>
            <div className="App">
                <SideMenu />
                <MobileMenu />
                <SearchBox />
                <CursorFollower />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/soluciones" element={<Solutions />} />
                    <Route path="/nosotros" element={<About />} />
                    <Route path="/preguntas-frecuentes" element={<FAQ />} />
                    <Route path="/contacto" element={<Contact />} />

                    <Route path="/productos/tarimas-nuevas" element={<RedirectToProductSection hash="#tarimas-nuevas" />} />
                    <Route path="/productos/tarimas-medida" element={<RedirectToProductSection hash="#tarimas-medida" />} />
                    <Route path="/productos/tarimas-reacondicionadas" element={<RedirectToProductSection hash="#tarimas-reacondicionadas" />} />
                    <Route path="/productos/tarimas-hibridas" element={<RedirectToProductSection hash="#tarimas-hibridas" />} />

                    <Route path="/industrias/alimenticia" element={<Industrie1 />} />
                    <Route path="/industrias/aeronautica" element={<Industrie2 />} />
                    <Route path="/industrias/automotriz" element={<Industrie3 />} />
                    <Route path="/industrias/construccion" element={<Industrie4 />} />
                    <Route path="/industrias/electronica" element={<Industrie5 />} />
                    <Route path="/industrias/energia" element={<Industrie6 />} />
                    <Route path="/industrias/sector-medico" element={<Industrie7 />} />
                    <Route path="/industrias/telecomunicaciones" element={<Industrie8 />} />
                </Routes>

                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
