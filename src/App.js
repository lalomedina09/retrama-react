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

// Componentes de páginas temporales
const Home = () => <main><h1>Página de Inicio</h1></main>;
const Products = () => <main><h1>Productos</h1></main>;
const Contact = () => <main><h1>Contacto</h1></main>;
const Solutions = () => <main><h1>Soluciones</h1></main>;
const About = () => <main><h1>Nosotros</h1></main>;

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