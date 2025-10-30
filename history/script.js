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
        // only replace when we have a translation for this key + language
        if (translations[key] && translations[key][currentLanguage] !== undefined) {
            elem.innerHTML = translations[key][currentLanguage];
        }
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
        "en": "<b>The Peruvian Student Association</b> brings together Peruvian and non-Peruvian students at Hunter College and across CUNY.Through food festivals, cultural dance workshops, and more, we build community by sharing the beauty of Peruvian culture while serving as a connector and encouraging other campuses to create their own PSAs.<br><br>And yes. We all <b>LOVE</b> Peruvian food!",
        "es": "<b>Peruvian Student Association</b> reúne a estudiantes peruanos y no peruanos de Hunter College y de todo CUNY. A través de festivales de comida, talleres de danza cultural y más, construimos comunidad al compartir la belleza de la cultura peruana, mientras servimos de puente y animamos a otros campus a crear sus propios capítulos de la PSA.<br><br>¡Y sí, <b>AMAMOS</b> la comida peruana!"
    },
    "upcomingevents": {
        "en": "<span>Upcoming Events</span>",
        "es": "<span>Próximos Eventos</span>"
    },
    "kickoff_eventp": {
        "en": "Event on: Oct. 10th, 2025<br>2:15 PM",
        "es": "Evento el: 10 de Octubre del 2025<br>2:15 PM"
    },
    "kickoff_eventl": {
        "en": "Location: Hunter North 537, Hunter College",
        "es": "Ubicación: Hunter North 537, Hunter College"
    },
    "nothingyet": {
        "en": "Nothing here yet",
        "es": "Aún no hay nada"
    },
    "become": {
        "en": "<span>Become a Member</span>",
        "es": "<span>Vuélvete un Miembro</span>"
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
        "en": "<span>Contact Us</span>",
        "es": "<span>Contáctanos</span>"
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
    "history": {
        "en": "HISTORY",
        "es": "HISTORIA"
    },
    "historylogotitle": {
        "en": "<span>History of the Logo</span>",
        "es": "<span>Historia del Logotipo</span>"
    },
    "historylogocontent": {
        "en": "The logo was designed by the first president and founder, Cesar Iglesias, together with the first vice president, Sofia Zevallos. It seeks to unite in a single emblem symbols widely recognized across Peru. At the center is a tumi, a ceremonial knife native to the northern coast, present in the Chimú culture, chosen to represent the Coast. It is framed by the Andean trilogy: the serpent (underworld), the puma (human world), and the condor (world of the gods or the sky), which, when arranged, form a chakana, an ancestral symbol that connects the three worlds and, at the same time, encompasses the Coast, Highlands, and Jungle of the Tahuantinsuyo.",
        "es": "El logotipo fue diseñado por el primer presidente y fundador, Cesar Iglesias, junto con la primera vicepresidenta, Sofia Zevallos. Busca unir en un solo emblema símbolos ampliamente reconocidos en todo el Perú. En el centro hay un tumi, un cuchillo ceremonial originario de la costa norte, presente en la cultura Chimú, elegido para representar la Costa. Está enmarcado por la tríada andina: la serpiente (inframundo), el puma (mundo humano) y el cóndor (mundo de los dioses o el cielo), que, al disponerse, forman una chakana, un símbolo ancestral que conecta los tres mundos y, al mismo tiempo, abarca la Costa, Sierra y Selva del Tahuantinsuyo."
    },
    "historymascottitle": {
        "en": "<span>History of the Mascot</span>",
        "es": "<span>Historia de la Mascota</span>"
    },
    "historymascotcontent": {
        "en": "The Peruvian Student Association is proud to be the first club at Hunter College with an official mascot. Its name is Tumi, and, as the name suggests, it is inspired by the tumi, a ceremonial knife from the pre-Inca cultures of Peru's northern coast. The mascot was chosen because its gold and turquoise colors reflect the country's cultural and natural richness, and also as a nod to the founding president, who is from Trujillo.",
        "es": "La Peruvian Student Association se enorgullece de ser el primer club en Hunter College con una mascota oficial. Su nombre es Tumi y, como sugiere el nombre, está inspirada en el tumi, un cuchillo ceremonial de las culturas preincaicas de la costa norte del Perú. La mascota fue elegida porque sus colores dorado y turquesa reflejan la riqueza cultural y natural del país, y también como un guiño al presidente fundador, que es de Trujillo."
    },
    "historyideatitle": {
        "en": "<span>History of the Idea</span>",
        "es": "<span>Historia de la Idea</span>"
    },
    "historyideacontent": {
        "en": "The idea was born with Jose Vasquez, a Peruvian who moved to New York at age two and wanted to reconnect with his culture. After meeting Cesar Iglesias and noticing that Hunter College lacked representation for the Peruvian community, they decided to bring others on board and bring to life the Peruvian Student Association at Hunter College, the first Peruvian club in the entire CUNY system. <br><br>This project seeks to inspire other campuses and more Peruvians to celebrate and strengthen our culture and community.",
        "es": "La idea nació con Jose Vasquez, un peruano que se mudó a Nueva York a los dos años y quiso reconectarse con su cultura. Tras conocer a Cesar Iglesias y notar que Hunter College carecía de representación para la comunidad peruana, decidieron sumar a otras personas y dar vida a la Peruvian Student Association en Hunter College, el primer club peruano en todo el sistema CUNY. <br><br>Este proyecto busca inspirar a otros campus y a más peruanos a celebrar y fortalecer nuestra cultura y comunidad."
    },
    "derechos": {
        "en": "&copy; 2024 Peruvian Student Association - Hunter College. All Rights Reserved.",
        "es": "&copy; 2024 Peruvian Student Association - Hunter College. Todos los Derechos Reservados."
    }
};
