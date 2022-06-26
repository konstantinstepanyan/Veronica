export function lazyLoad(
    selector = '[data-src]',
    //берём все элементы с этим селектором и применяем к ним lazyLoad, 
    dataAttr = 'data-src', //здесь хранится истинный путь до картинки/видео
    config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0,

        // rootMargin и threshold - это два свойства, предоставляемые интерфейсом
    }
) {


    // регистрируем объект config с экземпляром
    // intersectionObserver
    let observer = new IntersectionObserver(function (entries, self) {
        //функция замены src на нужный атрибут
        function preloadImage(el) {
            const attr = el.getAttribute(dataAttr);
            el.setAttribute('src', attr)

        }

        // перебираем все элементы
        entries.forEach(entry => {
            // обрабатываем только изображения, которые пересекаются.
            // isIntersecting - это свойство, предоставляемое интерфейсом

            //entry.target - сама картинка

            if (entry.isIntersecting) {

                // пользовательская функция, которая копирует путь к img
                // из data-src в src
                preloadImage(entry.target);
                // теперь изображение размещено, прекращаем наблюдение
                self.unobserve(entry.target);
            }
        });
    }, config);

    const imgs = document.querySelectorAll(selector);
    imgs.forEach(img => {
        observer.observe(img);
    });
}

