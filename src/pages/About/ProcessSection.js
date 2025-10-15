import React from 'react';

const ProcessSection = () => {
    const processSteps = [
        {
            number: "01",
            image: "assets/img/process/process_1_1.jpg",
            title: "Consultation & Site Assessment",
            description: "We begin with an in-depth consultation to understand your energy needs and goals. Our team then conducts."
        },
        {
            number: "02",
            image: "assets/img/process/process_1_2.jpg",
            title: "Custom System Design & Planning",
            description: "Custom system design and planning typically involves creating tailored solutions to meet specific needs"
        },
        {
            number: "03",
            image: "assets/img/process/process_1_3.jpg",
            title: "Professional Solar Installation",
            description: "Assess roof space, tilt, and orientation (for rooftop installations). Evaluate ground space and shading"
        },
        {
            number: "04",
            image: "assets/img/process/process_1_4.jpg",
            title: "Monitoring & Ongoing Support",
            description: "Effective monitoring and ongoing support are critical for ensuring a solar energy systems optimal"
        }
    ];

    return (
        <section className="space overflow-hidden position-relative space overflow-hidden bg-smoke2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-7">
                        <div className="title-area text-center pe-xl-5 ps-xl-5">
                            <span className="sub-title">Our Working Process</span>
                            <h2 className="sec-title">How We Work Process In Solar Energy</h2>
                        </div>
                    </div>
                </div>
                <div className="step-wrap">
                    <div className="process-card_wrapp">
                        {processSteps.map((step, index) => (
                            <div className="process-card" key={index}>
                                <div className="process-image">
                                    <div className="box-img global-img">
                                        <img src={step.image} alt="Process" />
                                    </div>
                                    <span className="number">{step.number}</span>
                                </div>
                                <div className="box-content">
                                    <h2 className="box-title">{step.title}</h2>
                                    <p className="box-text">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;