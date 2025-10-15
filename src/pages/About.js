import React from 'react';

const About = () => {
    return (
        <main className="page-about">
            <div className="container">
                <h1>Sobre Nosotros</h1>

                <section className="about-content">
                    <div className="about-text">
                        <h2>Nuestra Historia</h2>
                        <p>
                            En Retrama, nos dedicamos a proporcionar soluciones tecnológicas
                            innovadoras desde 2010. Nuestro equipo de expertos trabaja
                            incansablemente para ayudar a las empresas a alcanzar su máximo
                            potencial digital.
                        </p>

                        <h2>Misión</h2>
                        <p>
                            Transformar negocios mediante tecnología de vanguardia,
                            ofreciendo soluciones personalizadas que generen valor real
                            para nuestros clientes.
                        </p>

                        <h2>Visión</h2>
                        <p>
                            Ser líderes en innovación tecnológica, reconocidos por nuestra
                            excelencia y compromiso con el éxito de nuestros clientes.
                        </p>
                    </div>

                    <div className="team-section">
                        <h2>Nuestro Equipo</h2>
                        <div className="team-stats">
                            <div className="stat">
                                <h3>50+</h3>
                                <p>Proyectos Completados</p>
                            </div>
                            <div className="stat">
                                <h3>15+</h3>
                                <p>Años de Experiencia</p>
                            </div>
                            <div className="stat">
                                <h3>30+</h3>
                                <p>Clientes Satisfechos</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;