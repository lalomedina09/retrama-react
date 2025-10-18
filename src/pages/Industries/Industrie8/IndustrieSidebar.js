import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-user",
            subtitle: "Clients:",
            title: "Michel Miller"
        },
        {
            icon: "fa-regular fa-folder-open",
            subtitle: "Category:",
            title: "Digital Marketing"
        },
        {
            icon: "fa-solid fa-calendar-days",
            subtitle: "Date:",
            title: "21 Jun, 2025"
        },
        {
            icon: "fa-sharp fa-solid fa-location-dot",
            subtitle: "Address:",
            title: "42 Hangston, USA"
        }
    ];

    return (
        <aside className="sidebar-area">
            <div className="widget widget_info">
                <h3 className="widget_title">Project Information</h3>
                {projectInfo.map((info, index) => (
                    <div className="project-info" key={index}>
                        <div className="project-info_icon">
                            <i className={info.icon}></i>
                        </div>
                        <div className="project-info_content">
                            <p className="project-info_subtitle">{info.subtitle}</p>
                            <h6 className="project-info_title">{info.title}</h6>
                        </div>
                    </div>
                ))}
            </div>

            <div className="widget widget_offer" data-bg-src="assets/img/bg/offer_bg_1.jpg">
                <div className="offer-banner">
                    <span className="sub-title style1">Contact for inquery</span>
                    <h5 className="banner-title">Need Help? We Are Here To Help You</h5>
                    <Link to="/contacto" className="th-btn style1 th-icon">
                        <span className="btn-text" data-back="Contact Us" data-front="Contact Us"></span>
                        <i className="fa-regular fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default IndustrieSidebar;