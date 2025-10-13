import React from 'react';

const Process = () => {
    const processes = [
        {
            image: "assets/img/process/paso-1.jpg",
            title: "Selección y preparación de la madera",
            text: "Seleccionamos materia prima de alta calidad y origen sostenible."
        },
        {
            image: "assets/img/process/paso-2.jpg",
            title: "Corte y armado preciso",
            text: "Utilizando maquinaria de última tecnología, cortamos cada componente con medidas milimétricas."
        },
        {
            image: "assets/img/process/paso-3.jpg",
            title: "Acabado y control de calidad",
            text: "Realizamos un lijado minucioso para eliminar astillas y asegurar una superficie perfectamente lisa."
        },
        {
            image: "assets/img/process/paso-4.jpg",
            title: "Embalaje y distribución",
            text: "Empaquetamos las tarimas de forma segura para evitar daños durante el transporte."
        }
    ];

    return (
        <section className="position-relative bg-smoke4 overflow-hidden space" style={{ background: '#e9f5ed' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-xxl-4">
                        <div className="title-area text-center">
                            <span className="sub-title sub-title2">Nuestro Proceso</span>
                            <h2 className="sec-title">Producción <br />Eficiente y Sostenible</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-5">
                    {processes.map((process, index) => (
                        <div key={index} className="col-md-6 col-lg-3 process-box-wrap">
                            <div className="process-box">
                                <div className="box-img">
                                    <img src={process.image} alt={process.title} />
                                </div>
                                <div className="box-content">
                                    <h2 className="box-title">{process.title}</h2>
                                    <p className="box-text">{process.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;