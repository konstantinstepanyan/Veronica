# Мой Стартовый Шаблон Вёрстки

1. Скачать этот репозиторий архивом ИЛИ в пустой папке написать git init, затем git clone _ссылка на этот репозиторий_ ИЛИ в пустой папке написать git init, затем git pull _ссылка на этот репозиторий_;

2. Написать в консоли: npm i (это сокращение от: npm install). Пойдет загрузка папки нужных зависимостей:
   node_modules;

3. Затем в консоли написать gulp;

4. Изначально в html все картинки должны быть в формате .webp. А потом скрипт canUseWebp.js поменяет их на старые расширения (они указаны в атрибуте data-ext у тэгов img, image и т.д.) если webp не поддерживается ос или браузером.

Картинки должны быть ИЗНАЧАЛЬНО в формате .webp, иначе Google PageSpeed их не увидит, если их вставить после загрузки DOM.

В папке IMG создавать папку для каждого блока html-вёрстки и там будут лежать картинки для этого блока.

А в папке каждого блока будет папка webp, в которой будут эти же картинки в формате webp. Такая идеология.

Для каждого тэга img, image, picture и т.д. задавать атрибут data-ext, в котором писать расширение картинки по умолчанию (в каком формате картинка лежит в папке блока) НА ТОТ СЛУЧАЙ, если браузер не поддерживает webp

5. в dev - версия разработки, в prod - продакшен версия.
   папка img, и всё её содержимое копируется галпом в prod/img.
   папка js, и всё её содержимое копируется и минимизируется (но не периеменовывается) галпом в prod/js.

6. Gulp следит за картинками и шрифтами и в случае изменений добавляет изменения в production. Надо научить ещё удалять вслед за удалением картинки или шрифта соответствующий элемент в production.

7. Теперь в IMG есть 2 папки webp и nowebp, и там и там иерархия одинаковая.
   В Gulpfile таск toWebp берёт файлы из './dev/img/noWebp/\*_/_.{png,gif,jpg}' и преобразует их в webp в './dev/img/webp'. А скрипт canUseWebp.js теперь если видит, что webp не поддерживается и картинка в .webp, то меняет img/webp на `img/nowebp/${нужнаяподпапка}/${имяФайла}.${расширениеФайла(указано в аттрибуте img тэга data-ext)}`
8. Работать!

(Пока временно закомментировал BrowserSync.Reload)