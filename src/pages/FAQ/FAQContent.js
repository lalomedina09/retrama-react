import React from 'react';

const FAQContent = () => {
    const faqItems = [
        {
            id: "collapse-1",
            itemId: "collapse-item-1",
            question: "Can solar panels work on cloudy or rainy days?",
            answer: "Yes, solar panels still generate electricity on cloudy days, though their efficiency may be reduced. Modern solar panels are designed to capture sunlight even in low-light conditions. Solar systems generate power close to where it is consumed, minimizing energy loss from long-distance grid transmission. Solar panels can be installed in urban, rural, and remote areas, making solar energy accessible to a wide range of users.",
            active: false
        },
        {
            id: "collapse-2",
            itemId: "collapse-item-2",
            question: "What is the lifespan of a solar panel?",
            answer: "Yes, solar panels still generate electricity on cloudy days, though their efficiency may be reduced. Modern solar panels are designed to capture sunlight even in low-light conditions. Solar systems generate power close to where it is consumed, minimizing energy loss from long-distance grid transmission. Solar panels can be installed in urban, rural, and remote areas, making solar energy accessible to a wide range of users.",
            active: true
        },
        {
            id: "collapse-3",
            itemId: "collapse-item-3",
            question: "How much does it cost to install solar panels?",
            answer: "Yes, solar panels still generate electricity on cloudy days, though their efficiency may be reduced. Modern solar panels are designed to capture sunlight even in low-light conditions. Solar systems generate power close to where it is consumed, minimizing energy loss from long-distance grid transmission. Solar panels can be installed in urban, rural, and remote areas, making solar energy accessible to a wide range of users.",
            active: false
        },
        {
            id: "collapse-4",
            itemId: "collapse-item-4",
            question: "Do solar panels require a lot of maintenance?",
            answer: "Yes, solar panels still generate electricity on cloudy days, though their efficiency may be reduced. Modern solar panels are designed to capture sunlight even in low-light conditions. Solar systems generate power close to where it is consumed, minimizing energy loss from long-distance grid transmission. Solar panels can be installed in urban, rural, and remote areas, making solar energy accessible to a wide range of users.",
            active: false
        },
        {
            id: "collapse-5",
            itemId: "collapse-item-5",
            question: "Are there government incentives for installing solar panels?",
            answer: "Yes, solar panels still generate electricity on cloudy days, though their efficiency may be reduced. Modern solar panels are designed to capture sunlight even in low-light conditions. Solar systems generate power close to where it is consumed, minimizing energy loss from long-distance grid transmission. Solar panels can be installed in urban, rural, and remote areas, making solar energy accessible to a wide range of users.",
            active: false
        },
        {
            id: "collapse-6",
            itemId: "collapse-item-6",
            question: "Can solar panels power my entire home?",
            answer: "Yes, solar panels still generate electricity on cloudy days, though their efficiency may be reduced. Modern solar panels are designed to capture sunlight even in low-light conditions. Solar systems generate power close to where it is consumed, minimizing energy loss from long-distance grid transmission. Solar panels can be installed in urban, rural, and remote areas, making solar energy accessible to a wide range of users.",
            active: false
        }
    ];

    return (
        <div className="overflow-hidden space" id="faq-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="me-xl-5 pe-xl-3">
                            <div className="title-area mb-30 text-center text-xl-start">
                                <span className="sub-title sub-title2">FAQS</span>
                                <h2 className="sec-title">Have Any Questions for Solar Energy?</h2>
                                <p>
                                    We identify the most relevant and high-traffic keywords for your business. Our team conducts thorough research to understand your industry, competitors, and target audience to ensure your website ranks for terms that matter.
                                </p>
                            </div>
                            <div className="text-center text-xl-start">
                                <a href="contact.html" className="th-btn th-icon">
                                    <span className="btn-text" data-back="Ask a Question" data-front="Ask a Question"></span>
                                    <i className="fa-regular fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mt-35 mt-xl-0">
                        <div className="accordion-area accordion" id="faqAccordion">
                            {faqItems.map((faq, index) => (
                                <div className={`accordion-card style2 ${faq.active ? 'active' : ''}`} key={index}>
                                    <div className="accordion-header" id={faq.itemId}>
                                        <button
                                            className={`accordion-button ${faq.active ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${faq.id}`}
                                            aria-expanded={faq.active ? "true" : "false"}
                                            aria-controls={faq.id}
                                        >
                                            {faq.question}
                                        </button>
                                    </div>
                                    <div
                                        id={faq.id}
                                        className={`accordion-collapse collapse ${faq.active ? 'show' : ''}`}
                                        aria-labelledby={faq.itemId}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">
                                            <p className="faq-text">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQContent;