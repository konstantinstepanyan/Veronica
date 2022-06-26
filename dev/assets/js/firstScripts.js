import { MenuToggler } from './libs/burger.js';
import { cancelWebp } from './libs/canUseWebp.js';
import { lazyLoad } from './libs/lazyLoad.js';


//всё импортируется, а в этом файле только инициализируется после загрузки ДОМ
document.addEventListener('DOMContentLoaded', () => {

    //quickFix alt + q (use js booster (default func to arrow etc))

    //отключаем перезагрузку стр на F5
    window.addEventListener('keydown', (e) => {

        //отключаем перезагрузку стр на F5
        if (e.keyCode == 116) {
            console.log(e.key);
            e.preventDefault();
            return false;
        }

    })

    //инициализация Бургер Меню
    /*
         const menuToggler1 = new MenuToggler({
             menuTriggerSelector: '.burger', //if burger, to onClick add class burger_close
             menuSelector: '.mobile-menu',
             transitionTime: '0.5s',
             transitionType: 'linear',
             menuDisplay: 'flex',
             type: 'slide', //appear OR slide, appear by default
             slideBegin: 'translate(160px, 20px)', // Обязательно добавлять px к любому числу (НЕ ДОЛЖНО БЫТЬ ТОЧКО С ЗАПЯТОЙ)
             slideEnd: 'translate(0px, 20px)',  // Обязательно добавлять px к любому числу (НЕ ДОЛЖНО БЫТЬ ТОЧКО С ЗАПЯТОЙ)
         });
    */

    //проверяем поддержку WEBP и меняем src у img на значенеи из data-ext, если не поддерживается WEBP
    //отменяем webp, если браузер не поддерживает
    cancelWebp();

    //подключаем ленивую загрузку
    lazyLoad();

    
    function add() {

    }


});