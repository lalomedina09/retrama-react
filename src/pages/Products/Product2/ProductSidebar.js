import React from 'react';

const ProductSidebar = () => {
    const services = [
        "Wave Energy Solution",
        "Empower Sustainability",
        "Solar Installation",
        "Green Energy Solution",
        "Hydropower Solutions",
        "Integrated Water Energy"
    ];

    const downloads = [
        {
            title: "Download Brochures",
            link: "about.html"
        },
        {
            title: "Download Doc.",
            link: "about.html"
        }
    ];

    return (
        <aside className="sidebar-area">
            <div className="widget widget_search">
                <form className="search-form">
                    <input type="text" placeholder="Enter Keyword" />
                    <button type="submit"><i className="far fa-search"></i></button>
                </form>
            </div>

            <div className="widget widget_nav_menu">
                <h3 className="widget_title style2">All Services</h3>
                <div className="menu-all-pages-container">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>
                                <a href="blog.html">{service}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="widget widget_download">
                <h4 className="widget_title style2">Downloads</h4>
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
        </aside>
    );
};

export default ProductSidebar;