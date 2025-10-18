import React from 'react';
import IndustrieSidebar from './IndustrieSidebar'; // Agregar esta importación

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "96",
            unit: "MW",
            label: "Capacity"
        },
        {
            number: "160",
            unit: "HE",
            label: "Total Area"
        },
        {
            number: "2023",
            unit: "YR",
            label: "Year Built"
        },
        {
            number: "16",
            unit: "M",
            label: "USD Dollar Budget"
        }
    ];

    const benefits = [
        "Renewable Energy Source",
        "Reduces Electricity Bills",
        "Low Maintenance Costs",
        "Environmentally Friendly",
        "Energy Independence",
        "Diverse Applications",
        "Increases Property Value",
        "Government Incentives",
        "Adaptable to Varied Locations"
    ];

    const projectImages = [
        "assets/img/project/project_inner_1.jpg",
        "assets/img/project/project_inner_2.jpg",
        "assets/img/project/project_inner_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/project_details.jpg" alt="Project Image" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title">Bay Area Solar Farm</h2>
                                <p>
                                    We offer customized solar systems for homes of all sizes, helping households reduce
                                    electricity bills and environmental impact. Our team handles every step, from planning and
                                    permitting to installation and post-installation support. Combine wind energy with other
                                    renewable sources like solar or hydropower for a balanced, reliable energy mix tailored to
                                    your needs. Comprehensive wind turbine installation services, including site preparation,
                                    turbine assembly, and connection to the power grid.
                                </p>
                                <p>
                                    Detailed analysis of wind conditions at your site using advanced tools and data modeling.
                                    This service helps determine the feasibility and potential energy output of wind power
                                    systems.
                                </p>

                                <div className="project-box-details">
                                    <div className="counter-grid_wrapp style2">
                                        {projectStats.map((stat, index) => (
                                            <div className="counter-grid" key={index}>
                                                <h3 className="counter-grid-title">
                                                    <span className="counter-number">{stat.number}</span>{stat.unit}
                                                </h3>
                                                <p className="counter-text mb-0">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h4 className="mt-40 mb-20">Benefits of Project</h4>
                                <p className="mb-10">
                                    Our team of experts provides in-depth consultations to help you explore the
                                    best renewable energy options for your property. We assess energy needs, budget, and
                                    location to develop customized, sustainable solutions for homes, businesses, and public
                                    institutions. Maximize your energy efficiency with our smart energy management systems. We
                                    offer tools and software to monitor, analyze, and optimize your energy consumption, helping
                                    you make the most of your renewable energy investment.
                                </p>

                                <p className="mb-40">
                                    Our advanced energy storage solutions allow you to store excess energy
                                    generated from renewable sources like solar and wind. This enables a constant, uninterrupted
                                    power supply, providing energy independence and resilience even during outages.
                                </p>

                                <div className="checklist style1 list-three-column mb-20">
                                    <ul>
                                        {benefits.map((benefit, index) => (
                                            <li key={index}>
                                                <i className="fa-light fa-circle-check"></i> {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4">
                        <IndustrieSidebar />
                    </div>
                </div>

                <h4 className="mt-40 mb-20">The Challenge Of Project</h4>
                <p className="mb-40">
                    We provide turnkey solar solutions, from design and installation to monitoring and maintenance.
                    Whether for homes, businesses, or communities, our solar energy systems offer a sustainable, cost-effective
                    power source that reduces carbon footprints and energy bills. Harness the power of the wind with our
                    customized wind energy solutions. From site assessment to turbine installation, we offer end-to-end
                    services, including maintenance, to ensure reliable and efficient wind energy production for residential and
                    commercial clients.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt="Project Image" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;