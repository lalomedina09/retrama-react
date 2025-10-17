import React from 'react';

const ProcessSection = () => {
    const processSteps = [
        {
            number: "01",
            image: "assets/img/process/process_1_1.jpg",
            title: "Consulta y Evaluación de Necesidades",
            description: "Iniciamos con una consulta detallada para entender sus requerimientos específicos de almacenamiento y logística. Nuestro equipo evalúa el tipo de productos, peso, medidas y condiciones de uso para recomendar la tarima ideal."
        },
        {
            number: "02",
            image: "assets/img/process/process_1_2.jpg",
            title: "Diseño y Cotización Personalizada",
            description: "Desarrollamos un diseño a medida según sus necesidades específicas. Cotizamos tarimas estándar o personalizadas, considerando tipo de madera, tratamientos especiales y medidas requeridas para su operación."
        },
        {
            number: "03",
            image: "assets/img/process/process_1_3.jpg",
            title: "Fabricación y Control de Calidad",
            description: "Procesamos la madera seleccionada con los más altos estándares. Aplicamos tratamientos térmicos y de fumigación cuando sea necesario, garantizando durabilidad y cumplimiento de normas internacionales de calidad."
        },
        {
            number: "04",
            image: "assets/img/process/process_1_4.jpg",
            title: "Entrega y Soporte Continuo",
            description: "Coordinamos la logística de entrega en toda la República Mexicana. Brindamos seguimiento post-venta y asesoría técnica para asegurar el máximo rendimiento de sus tarimas en sus operaciones diarias."
        }
    ];

    return (
        <section className="space overflow-hidden position-relative space overflow-hidden bg-smoke2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-7">
                        <div className="title-area text-center pe-xl-5 ps-xl-5">
                            <span className="sub-title">Nuestro Proceso de Trabajo</span>
                            <h2 className="sec-title">Cómo Trabajamos en la Fabricación de Tarimas</h2>
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