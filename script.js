document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //alert("Thank you for joining the Peruvian Student Association!");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const joinSection = document.querySelector('.join-section');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Detect current language
        const message = translations["thankyou"][currentLanguage];  // Retrieve translation based on the selected language

        // Replace form with the thank-you message in the correct language
        joinSection.innerHTML = `
            <h2>${translations["thankyou_title"][currentLanguage] || "Thank you!"}</h2>
            <p>${message}</p>
        `;

        // Optionally, scroll to the join section after submission
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
    "thankyou": {
        "en": "Thank you for joining the Peruvian Student Association! We encourage you to join our WhatsApp group chat and follow us on Instagram!<br>Links are located next to the 'Contact Us' button; you can check them by simply clicking on the symbol",
        "es": "¡Gracias por unirte a Peruvian Student Association! ¡Te animamos a unirte a nuestro grupo de WhatsApp y seguirnos en Instagram!<br>Los enlaces están ubicados junto al botón de 'Contactos'; puedes verificarlos haciendo clic simplemente en el símbolo"
    },
    "thankyou_title": {
        "en": "Thank you!",
        "es": "¡Gracias!"
    },
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
        "es": "Vuélvete un Miembro"
    },
    "eventsbutton": {
        "en": "Next Event",
        "es": "Próximo Evento"
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
    "kickoff_eventp": {
        "en": "Event on: May 6, 2025<br>3:00 PM",
        "es": "Evento el: 6 de Mayo del 2025<br>3:00 PM"
    },
    "kickoff_eventl": {
        "en": "Location: Location: 205TH | Thomas Hunter Building",
        "es": "Ubicación: Location: 205TH | Thomas Hunter Building"
    },
    "nothingyet": {
        "en": "Nothing here yet",
        "es": "Aún no hay nada"
    },
    "become": {
        "en": "Become a Member",
        "es": "Vuélvete un Miembro"
    },
    "ready": {
        "en": "It would make us very happy if you joined us in this movement to spread our beautiful culture.<br>No matter where you are from, you are totally invited to be part of the family!<br>Please complete the form so we can get your information.<br><br>",
        "es": "Nos haría muy felices si te unieras a nosotros en este movimiento para difundir nuestra hermosa cultura.<br>No importa de dónde seas, ¡estás totalmente invitado a ser parte de la familia!<br>Por favor, completa el formulario para que podamos obtener tu información.<br><br>"
    },
    "form": {
        "en": "Form",
        "es": "Formulario"
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
