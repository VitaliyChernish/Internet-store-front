
import React, { useEffect } from "react";
import L from "leaflet"; // Імпортуємо об'єкт L з Leaflet
import s from './animatedPage.module.scss';
import './animatedPage.scss';
import ukraineMapMain from './static/ukraineMapMain.webp'

const AnimatedPage = () => {
    // Додайте ваш код для ініціалізації карти
    const map = L.map('map').setView([51.505, -0.09], 13); // Приклад для Leaflet.js

    // Функція для анімації масштабування карти
    function animateZoomIn() {
        map.zoomIn(); // Приклад функції збільшення масштабу в Leaflet.js
    }

    function animateZoomOut() {
        map.zoomOut(); // Приклад функції зменшення масштабу в Leaflet.js
    }

    useEffect(() => {
        document.getElementById('zoomInButton').addEventListener('click', animateZoomIn);
        document.getElementById('zoomOutButton').addEventListener('click', animateZoomOut);
    }, [map]); // Додайте map в залежності, щоб уникнути помилок оновлення

    return (
        <>
            <div className={s.mapMain} id="map">
                <img src={ukraineMapMain} alt="" />
            </div>
        </>
    )
}

export default AnimatedPage;