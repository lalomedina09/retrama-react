import React from 'react';

const Preloader = () => {
    const handlePreloaderClose = () => {
        console.log('Preloader cerrado');
        // Aquí puedes agregar lógica para ocultar el preloader
    };

    return (
        <div className="preloader">
            <button className="th-btn style1 preloaderCls" onClick={handlePreloaderClose}>
                Cancelar preloader
            </button>
            <div className="preloader-inner">
                <img src="/assets/img/logo.png" alt="RETRAMA" />
                <span className="loader"></span>
            </div>
        </div>
    );
};

export default Preloader;