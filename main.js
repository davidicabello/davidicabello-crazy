AOS.init();

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developer')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('signer')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Freelancer')
    .pauseFor(2500)
    .start();

var app = document.getElementById('app2');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Mis habilidades:')
    .pauseFor(1000)
    .deleteAll()
    .typeString('HTML5')
    .pauseFor(1000)
    .deleteAll()
    .typeString('CSS3')
    .pauseFor(1000)
    .deleteAll()
    .typeString('JavaScript')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Visual Studio Code')
    .pauseFor(1000)
    .deleteAll()
    .typeString('GitHub')
    .pauseFor(1000)
    .deleteAll()
    .typeString('git')
    .pauseFor(1000)
    .start();

window.onload = function () {
    let contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}