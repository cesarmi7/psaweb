document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Thank you for joining the Peruvian Student Association!");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const joinSection = document.querySelector('.join-section');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Replace form with a thank-you message
        joinSection.innerHTML = `
            <h2>Thank you!</h2>
            <p>We have received your information, we will get in contact with you!</p>
        `;

        // Optionally, you can scroll to the join section after submission
        joinSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        // This assumes you have a 'menu-icon' id on your burger menu and 'navbar' class on your nav
        const navbar = document.querySelector('.navbar');
        const menuIcon = document.querySelector('#menu-icon');
        const isOpen = navbar.classList.contains('open');

        // Check if navbar is open and if the menu icon is visible
        if (isOpen && window.getComputedStyle(menuIcon).display !== 'none') {
            // Close the navbar by removing 'open' class
            navbar.classList.remove('open');
            // If you're toggling the icon to an 'X' or similar, toggle this back
            menuIcon.classList.remove('bx-x');
        }
    });
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

let currentLanguage = 'en'; 

function toggleLanguage(currentLanguage) {
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute("data-key");
        elem.innerHTML = translations[key][currentLanguage]; 
    });
}
function changeLanguageEn() {
    if(currentLanguage == 'es'){
        currentLanguage = 'en'; 
        toggleLanguage(currentLanguage);
    }
}
function changeLanguageEs() {
    if(currentLanguage == 'en'){
        currentLanguage = 'es'; 
        toggleLanguage(currentLanguage);
    }
}
const translations = {
    "home": {
        "en": "Home",
        "es": "Inicio"
    },
    "about": {
        "en": "About Us",
        "es": "Nosotros"
    },
    "events": {
        "en": "Events",
        "es": "Eventos"
    },
    "join": {
        "en": "Join Us",
        "es": "Únete"
    },
    "contactus": {
        "en": "Contact Us",
        "es": "Contactos"
    },
    "celebrating": {
        "en": "Celebrating Peruvian Culture at Hunter College",
        "es": "Celebrando la Cultura Peruana en Hunter College"
    },
    "joinourmission": {
        "en": "Join us in our mission to share the beauty of Peruvian culture with the Hunter College community.",
        "es": "Únete a nuestra misión de compartir la belleza de la cultura peruana con la comunidad de Hunter College."
    },
    "becomebutton": {
        "en": "Become a Member",
        "es": "Hazte Miembro"
    },
    "aboutustitle": {
        "en": "<span>About Us</span>",
        "es": "<span>Sobre Nosotros</span>"
    },
    "aboutuscontent": {
        "en": "We are a passionate group of students dedicated to celebrating and sharing Peruvian culture at Hunter College. From food festivals to cultural dance workshops, we strive to build a strong community through shared experiences. <br><br>And we love to eat!!!",
        "es": "Somos un grupo apasionado de estudiantes dedicados a celebrar y compartir la cultura peruana en Hunter College. Desde festivales de comida hasta talleres de danza cultural, nos esforzamos por construir una comunidad fuerte a través de experiencias compartidas. <br><br>¡Y nos encanta comer!"
    },
    "upcomingevents": {
        "en": "Upcoming Events",
        "es": "Próximos Eventos"
    },
    "nothingyet": {
        "en": "Nothing here yet",
        "es": "Aún no hay nada"
    },
    "become": {
        "en": "Become a Member",
        "es": "Hazte Miembro"
    },
    "ready": {
        "en": "Ready to join us? Fill out the form below and become part of our vibrant community!",
        "es": "¿Listo para unirte? Rellena el formulario a continuación y sé parte de nuestra vibrante comunidad."
    },
    "sign": {
        "en": "Sign Up",
        "es": "Regístrate"
    },
    "contactuss": {
        "en": "Contact Us",
        "es": "Contáctanos"
    },
    "ifyou": {
        "en": "If you have any questions or would like more information, feel free to reach out!",
        "es": "Si tienes alguna pregunta o deseas más información, ¡no dudes en contactarnos!"
    },
    "president": {
        "en": "President",
        "es": "Presidente"
    },
    "vicepresident": {
        "en": "Vice President",
        "es": "Vicepresidente"
    },
    "treasurer": {
        "en": "Treasurer",
        "es": "Tesorero"
    },
    "secretary": {
        "en": "Secretary",
        "es": "Secretaria"
    },
    "derechos": {
        "en": "&copy; 2024 Peruvian Student Association - Hunter College. All Rights Reserved.",
        "es": "&copy; 2024 Peruvian Student Association - Hunter College. Todos los Derechos Reservados."
    }
};
