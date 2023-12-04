import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Msliders = () => {
    const containerStyle = {
        width: 'auto', //  ajustar el tamaño según tus necesidades
        height: '400px', //  ajustar la altura según tus necesidades
        margin: '0 auto', // Para centrar el slider
    };

    const sliderStyle = {
        height: '100%', // O ajusta la altura directamente aquí
    };

    return (
        <div style={containerStyle}>
            <AwesomeSlider animation="cubeAnimation" style={sliderStyle}>
                <div data-src="https://www.qloud.ar/SITES/IMG/ryr-computacion-01-2021/206_10-04-2023-11-04-25-banner-principal-discontinuos-100.jpg" />
                <div data-src="https://www.qloud.ar/SITES/IMG/ryr-computacion-01-2021/206_19-07-2023-12-07-31-corsair_banner_1600x340.jpg" />
            </AwesomeSlider>
        </div>
    );
};

export default Msliders;
