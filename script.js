let noButtonClickCount = 0;
let noButtonState = 0;

// Configuración del carrusel
const slides = [
    {
        image: "images/1.jpeg",
        text: "¡Feliz San Valentín, mi cariño bonito! ❤️ Hoy quería hacer algo diferente para decirte lo importante que eres para mí. Es nuestro primer San Valentín juntos y quería que fuera especial. Espero que te guste este pequeño regalo. ¡Eres mi persona favorita en el mundo! 🌎💕"
    },
    {
        image: "images/2.jpeg",
        text: "Eres mi niña, mi reina hermosa y la razón por la que sonrío cada vez que miro el celular. 😍 Aunque a veces somos loquitos jajaja pero todo es más hermoso cuando estamos juntos 💕"
    },
    {
        image: "images/3.jpeg",
        text: "Contigo cada día es especial. Gracias por llenar mi vida de felicidad y momentos únicos. Eres mi mejor regalo. 🎁"
    },
    {
        image: "images/4.jpeg",
        text: "No importa si hay bugs en el código o días difíciles, contigo todo tiene solución. Eres mi mejor equipo. 💑 el equipo Gabuby 😍"
    },
    {
        image: "images/5.jpeg",
        text: "Quiero seguir coleccionando momentos contigo, hoy, mañana y siempre. 🌹 Y no tienes escapatoria ok? Siempre serás mi Nuby. 💞"
    },
    {
        image: "images/6.jpeg",
        text: "Te quiero muchísimo, mi Nuby. ¡Saranghae! 💞 Gracias por ser mi San Valentín."
    }
];

let currentSlideIndex = 0;
let slideInterval;

// --- INICIALIZAR CORAZONES DE FONDO ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's'; // Entre 4 y 7 segundos
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';

    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Crear un corazón cada 300ms
setInterval(createHeart, 300);


// --- LÓGICA DEL BOTÓN SÍ ---
document.getElementById('siBtn').addEventListener('click', function () {

    // 1. Lanzar CONFETI (Efecto especial)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
    });

    // 2. Ocultar interfaz previa
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // 3. Reproducir música
    var audio = document.getElementById("bgMusic");
    audio.play();
    audio.volume = 0.5;

    // 4. Mostrar Carrusel
    const slideshowContainer = document.getElementById('slideshowContainer');
    slideshowContainer.style.display = 'flex';
    slideshowContainer.classList.remove('hidden');

    // 5. Iniciar lógica carrusel
    createDots();
    showSlide(currentSlideIndex);
    startAutoPlay();
});


// --- LÓGICA DEL BOTÓN NO (IGUAL QUE ANTES) ---
document.getElementById('noBtn').addEventListener('click', function () {
    if (noButtonState === 0) {
        document.getElementById('gifContainer').style.display = 'none';
    }

    switch (noButtonState) {
        case 0:
            document.getElementById('sadGifContainer').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segura? 🥲';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('noBtn').style.color = '#FFF';
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
            noButtonState++;
            break;
        case 1:
            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas segura?! 🥲';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
            noButtonState++;
            break;
        case 2:
            document.getElementById('noBtn').innerHTML = 'Estás segura de verdad, ¿eh? 🥲';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
            noButtonState++;
            break;
        case 3:
            document.getElementById('noBtn').innerHTML = 'Ya vieron, ya no me quieres 🫠';
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
            noButtonState++;
            break;
        case 4:
            document.getElementById('noBtn').innerHTML = 'Di que sshiiiiii 🥺';
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
            noButtonState++;
            break;
        case 5:
            document.getElementById('noBtn').innerHTML = 'Tu ya no me quieres 🥲';
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';
            noButtonState++;
            break;
        case 6:
            document.getElementById('noBtn').innerHTML = 'Si, dices que no estaré muy triste';
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            noButtonState++;
            break;
        case 7:
            document.getElementById('noBtn').innerHTML = 'Ya me voy mejor a llorar 🥲';
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
            noButtonState++;
            break;
        case 8:
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy triste 🥲';
            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
            noButtonState++;
            break;
        case 9:
            document.getElementById('noBtn').innerHTML = 'Me quedaré solito, ta bien 🥺';
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
            noButtonState++;
            break;
        case 10:
            document.getElementById('noBtn').innerHTML = 'Oki, ya dejaré de preguntar... 🥺';
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
            noButtonState++;
            break;
        case 11:
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SÍ';
            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            noButtonState++;
            break;
        case 12:
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy muy muy triste.';
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';
            noButtonState++;
            break;
        case 13:
            document.getElementById('noBtn').innerHTML = 'Estás rompiendo mi corazón 💔';
            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
            noButtonState++;
            break;
        case 14:
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si 😡';
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            noButtonState++;
            break;
        case 15:
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii 😍';
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';
            noButtonState++;
            break;
        case 16:
            document.getElementById('noBtn').innerHTML = 'por favooooooor 👉👈';
            document.getElementById('noBtn').style.backgroundColor = '#FF5733';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';
            document.getElementById('siBtn').style.fontSize = '18px';
            document.getElementById('siBtn').style.padding = '12px 25px';
            noButtonState = 0;
            break;
        default:
            break;
    }
});

// --- FUNCIONES DEL CARRUSEL ---
function createDots() {
    const dotsContainer = document.getElementById('dotsContainer');
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = () => currentSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;

    const imgElement = document.getElementById('slideImg');
    const textElement = document.getElementById('slideText');
    const dots = document.getElementsByClassName('dot');

    imgElement.style.opacity = 0;

    setTimeout(() => {
        imgElement.src = slides[currentSlideIndex].image;
        textElement.innerHTML = slides[currentSlideIndex].text;
        imgElement.style.opacity = 1;
    }, 200);

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].className += " active";
    }
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlide(n);
}

function startAutoPlay() {
    slideInterval = setInterval(() => {
        showSlide(currentSlideIndex + 1);
    }, 5000);
}