import { a, Slider } from './vars.js';
import { Popup } from './libs/popup.js';
import { appendToHead } from './libs/appendToHead.js';

//в JS можно использовать импорты, чтобы переменные, объекты и классы хранить в одном файле,
//а использовать их - в другом

//такая запись работает если запускать через OpenServer, если залить на хостинг 
//ИЛИ если запустить через браузер с отключённым CORS.
//Включённый CORS блокирует импорты в локальных файлах и разрешает импорты только через http или другие схемы.
//Отключать CORS не безопасно
//в файл, в который идёт импорт другого файла, добавить type='module'
document.addEventListener('DOMContentLoaded', () => {


    //подключаем маску телефона для поля с телефоном
    //imask подключается по CDN до secondScripts
    const phone = document.querySelector('.form__input_phone');
    const mask = IMask(phone, { mask: '+{7}(000)000-00-00' });

    //активируем попап
    const popup = new Popup({
        targetSelector: '.btn_cart',
        overlaySelector: '.popup',
        windowSelector: '.popup__window',
        closeBtnSelector: '.popup__close',
        displayPopup: 'flex',
        popupHeight: '100vh',
        popupWidth: '100%',
        disappearingTime: 600, //ms transition disappearing time
        disappearingType: 'linear', //default val: ease transition disappearing type
        slidingTime: 500, //ms transition sliding time
        slidingType: 'linear', //default val: ease transition sliding type
        slidingDir: 'top', //default: left
        //autocloseTime: 2000, //ms
        closeOnMiss: true,
        closeOnKeys: '27, 67, 88' //esc 27, c - 67, x - 88
    });

    $('.slider').slick({
        dots: true, arrows: true
    });
});