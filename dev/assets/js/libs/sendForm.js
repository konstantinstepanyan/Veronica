

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".footer-form .form");
    console.log(form);
    const regEx = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;


    const popup1 = new Popup({
        targetSelector: '.popup-trigger',
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



    form.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.querySelector(".footer-form__input_name").value.trim(),
            phone = document.querySelector(".footer-form__input_phone").value.trim(),
            textArea = document.querySelector(".footer-form__input_textarea").value.trim();
        console.log(s);
        const n = {
            name: name,
            tel: phone,
            description: textArea,
            toString() {
                return `name=${this.name}&tel=${this.tel}&description=${this.description}`
            }
        }.toString();
        if ("" != name && "" != phone && "" != textArea && regEx.test(phone)) {
            console.log(`inputPhoneValue: ${phone}`);
            const scriptPhp = "/amoapi_landing/script.php";
            return popup1.appearance("Ваши данные успешно отправлены!"),
                function (e, t, i = null) {
                    return new Promise((s, o) => {
                        const p = new XMLHttpRequest;
                        p.open(e, t), p.responseType = "json", p.setRequestHeader("Content-Type", "application/json"), p.onerror = (() => {
                            console.log(p.response)
                        }), p.onload = (() => {
                            p.status >= 400 ? o(p.response) : s(p.response)
                        }), p.send(i)
                    })
                }("POST", scriptPhp, n).then(e => console.log(e)).catch(e => console.log(e)), document.querySelector(".footer-form__input_name").value = "", document.querySelector(".footer-form__input_phone").value = "", document.querySelector(".footer-form__input_textarea").value = "", e.preventDefault(), !1
        }
        return popup1.appearance("Заполните все поля!"), e.preventDefault(), !1
    })
});