document.addEventListener('DOMContentLoaded', () => {
    const lost = 10;

    console.log(lost);

    //quickFix alt + q (use js booster (default func to arrow etc))

    //prevent reload F5
    window.addEventListener('keydown', (e) => {

        if (e.keyCode == 116) {
            console.log(e.key);
            e.preventDefault();
            return false;
        }

    })

    function add() {

    }

});