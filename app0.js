
'use strict'

const switcher = document.querySelector('.btnm');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('mi-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Michel";
    }
    else {
        this.textContent = "Light";
    }

    console.log('Classe courant : ' + className);
});