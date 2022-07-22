import { a, Slider } from './vars.js';
import { Popup } from './libs/popupClass.js';
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
        overlaySelector: '.popup_overlay',
        windowSelector: '.popup__window',

        //если один селектор, всё равно в массиве отправить его. 
        //Массив, потому что их может быть несколько
        //для closeBtnSelectors и closeOnKeys тоже самое

        //триггеры:
        triggerSelectors: ['.popup-trigger'], //эементы вызывающие появление попапа
        closeBtnSelectors: ['.popup__close', '.popup__send'], //элементы закрывающие попап (крестик, кнопка Отправить в попапе)
        openOnKeys: [], //клавиши по которым должен открываться попап. должен быть массивом кнопок
        closeOnKeys: [27], //esc 27, должен быть массивом кнопок
        appearType: 'slide', //slide или reveal: выкатиться или появиться

        //autocloseTime: 2000, //ms
    });


    $('.slider').slick({
        dots: true, arrows: true
    });
});