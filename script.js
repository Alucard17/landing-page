import 'particles.js';
import Typed from 'typed.js';


particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});
var removeCursor = function() {
    document.querySelectorAll(".typed-cursor").forEach(el => {
        el.remove();
    })
}

var options = {
    strings: [
        "Hi,",
        "Myself",
        "Karan Yadav"
    ],
    typeSpeed: 40,
    onComplete: function() {
        new Typed(".sub-header", {
            strings: ["Full Stack Web Developer"],
            typeSpeed: 20,
            onComplete: () => {
                removeCursor();
                document.querySelector('.links').classList.add('fade-in')
                document.querySelector('.card.center').classList.add('border');
            }
        });
    }
}

var typed = new Typed(".header", options);