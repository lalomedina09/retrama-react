import React from 'react';

const ProductContent = () => {
    const serviceProcess = [
        {
            icon: "assets/img/icon/process_2_1.svg",
            title: "Project Planning",
            description: "Keep your solar system in top condition with our maintenance and repair services."
        },
        {
            icon: "assets/img/icon/process_2_2.svg",
            title: "Start Work",
            description: "Keep your solar system in top condition with our maintenance and repair services."
        },
        {
            icon: "assets/img/icon/process_2_3.svg",
            title: "Project Finished",
            description: "Keep your solar system in top condition with our maintenance and repair services."
        }
    ];

    return (
        <div className="page-single">
            <div className="page-img global-img mb-35">
                <img src="assets/img/service/service_details.jpg" alt="Service Image" />
            </div>
            <div className="page-content">
                <h2 className="h2 page-title mb-20">Solar Panel Energy Installation</h2>
                <p className="blog-text">
                    We provide turnkey solar solutions, from design and installation to
                    monitoring and maintenance. Whether for homes, businesses, or communities, our solar energy
                    systems offer a sustainable, cost-effective power source that reduces carbon footprints and
                    energy bills. Our advanced energy storage solutions allow you to store excess energy
                    generated from renewable sources like solar and wind. This enables a constant, uninterrupted
                    power supply, providing energy independence and resilience even during outages. Capture the
                    Earth's natural heat with our geothermal energy systems. We offer expert design,
                    installation, and maintenance of geothermal heating and cooling systems that are
                    energy-efficient, eco-friendly, and cost-effective over time.
                </p>
                <p className="blog-text mb-30">
                    Our team of experts provides in-depth consultations to help you
                    explore the best renewable energy options for your property. We assess energy needs, budget,
                    and location to develop customized, sustainable solutions for homes, businesses, and public
                    institutions. Maximize your energy efficiency with our smart energy management systems. We
                    offer tools.
                </p>

                <h4 className="mt-35">Service Benefits</h4>
                <p className="blog-text mb-30">
                    We offer carbon offset services to help individuals and businesses
                    reduce their carbon footprint. By investing in certified renewable energy projects, you can
                    offset emissions and contribute to a cleaner, more sustainable environment. Support
                    sustainable transportation with our EV charging station installation service. Our team
                    provides home, business, and public charging station solutions powered by renewable energy,
                    promoting greener mobility.
                </p>

                <div className="row gy-4 gx-40">
                    <div className="col-xl-4">
                        <div className="checklist style6">
                            <ul>
                                <li>Expertise and Experience</li>
                                <li>Cost Efficiency</li>
                                <li>Time Savings</li>
                                <li>Quality Assurance</li>
                                <li>Regulatory Compliance</li>
                                <li>Customization and Flexibility</li>
                                <li>Post-Solar Support</li>
                                <li>Single Point of Accountability</li>
                                <li>Safety Protocols</li>
                                <li>Innovative Solutions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/service_inner_1.jpg" alt="service" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/service_inner_2.jpg" alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mt-20">Work Process</h4>
                <p className="blog-text mb-35">
                    Our commercial solar solutions help businesses save on energy costs and reduce carbon footprints. We handle complex, large-scale installations tailored to each company's unique energy needs, helping businesses become more sustainable and energy-efficient. Solar inverters convert the DC electricity generated by solar panels into AC power that's usable in your home or business.
                </p>

                <div className="service-process-wrap">
                    {serviceProcess.map((process, index) => (
                        <div className="service-process" key={index}>
                            <div className="service-process_img">
                                <img src={process.icon} alt={process.title} />
                            </div>
                            <div className="service-process_centent">
                                <h5 className="service-process_title">{process.title}</h5>
                                <p className="service-process_text">{process.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductContent;