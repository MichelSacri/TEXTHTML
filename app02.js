
'use strict'

const switcherl = document.querySelector('.btnl');

switcherl.addEventListener('click', function() {
    document.body.classList.toggle('light-theme')

    var className = document.body.className;
    if(className == "mi-theme") {
        this.textContent = "Light";
    }
    else {
        this.textContent = "Michel";
    }

    console.log('Classe courant : ' + className);
});