'use strict';

const switcher = document.querySelector('.themeswitch');

switcher.addEventListener('change', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    
    const className = document.body.className;
    if (className == "dark-theme") {
        document.getElementById("github").src="github-mark-white.png";
    } else {
        document.getElementById("github").src="github-mark.png";
    }
    console.log('current theme: ' + className);

});


const APILINK = "";
const IMG_PATH = "";
const SEARCHAPI = "";

let name = "Leon";
let search = "";


console.log(name);
