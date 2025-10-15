import React from 'react';

const Solutions = () => {
    const solutions = [
        {
            title: "Transformación Digital",
            description: "Modernizamos tu empresa con las últimas tecnologías",
            icon: "💻"
        },
        {
            title: "Automatización",
            description: "Optimizamos tus procesos con automatización inteligente",
            icon: "⚡"
        },
        {
            title: "Analítica Avanzada",
            description: "Toma decisiones basadas en datos en tiempo real",
            icon: "📊"
        }
    ];

    return (
        <main className="page-solutions">
            <div className="container">
                <h1>Soluciones Integrales</h1>
                <p>Ofrecemos soluciones personalizadas para cada necesidad empresarial</p>

                <div className="solutions-list">
                    {solutions.map((solution, index) => (
                        <div key={index} className="solution-item">
                            <div className="solution-icon">{solution.icon}</div>
                            <div className="solution-content">
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Solutions;