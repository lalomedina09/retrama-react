import React from 'react';

const ProductSidebar = () => {
    const services = [
        "Tarimas Estándar",
        "Tarimas para Exportación",
        "Tarimas para Alimentos",
        "Tarimas de Alta Carga",
        "Tarimas Personalizadas",
        "Tarimas con Tratamientos Especiales",
        "Tarimas Europeas",
        "Tarimas Display",
        "Tarimas Cerradas",
        "Tarimas Abiertas"
    ];

    const downloads = [
        {
            title: "Catálogo de Productos",
            link: "catalogo-tarimas.pdf"
        },
        {
            title: "Ficha Técnica",
            link: "ficha-tecnica-tarimas.pdf"
        },
        {
            title: "Normas de Calidad",
            link: "normas-calidad.pdf"
        }
    ];

    return (
        <aside className="sidebar-area">
            <div className="widget widget_search">
                <form className="search-form">
                    <input type="text" placeholder="Buscar producto..." />
                    <button type="submit"><i className="far fa-search"></i></button>
                </form>
            </div>

            <div className="widget widget_nav_menu">
                <h3 className="widget_title style2">Nuestros Productos</h3>
                <div className="menu-all-pages-container">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>
                                <a href="productos.html">{service}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="widget widget_download">
                <h4 className="widget_title style2">Descargas</h4>
                <div className="donwload-media-wrap">
                    {downloads.map((download, index) => (
                        <div className="download-media" key={index}>
                            <div className="download-media_info">
                                <h5 className="download-media_title">{download.title}</h5>
                            </div>
                            <a href={download.link} className="download-media_btn">
                                <i className="far fa-arrow-right"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/*<div className="widget widget_contact">
                <h4 className="widget_title style2">¿Necesita Asesoría?</h4>
                <div className="contact-widget">
                    <p>Nuestros expertos están listos para ayudarle a elegir la tarima ideal para sus necesidades.</p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="far fa-phone"></i>
                            <span>+52 55 1234 5678</span>
                        </div>
                        <div className="contact-item">
                            <i className="far fa-envelope"></i>
                            <span>ventas@retrama.com</span>
                        </div>
                    </div>
                    <a href="contacto.html" className="th-btn">Contactar Ahora</a>
                </div>
            </div>*/}
        </aside>
    );
};

export default ProductSidebar;