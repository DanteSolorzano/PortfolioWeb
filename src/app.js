// --- Diccionario de Traducciones ---
const translations = {
  en: {
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    title_hi: "Hi, I'm ",
    header_desc: "Web developer focused on creating efficient solutions. I am currently in my seventh semester of the Information Systems program at the University of Guanajuato and working as a backend .NET developer intern for the state government (Secretaría de Finanzas). I am passionate about blending creativity and logic, whether I'm building full-stack web projects, participating in <a href='gallery.html' style='color: var(--aquaLigth); text-decoration: underline; font-weight: bold;'>hackathons</a>, or designing robust systems.",    
    header_cv: "This is my CV",
    cv_link: "src/files/CV_DanteSolorzano.pdf",
    projects_title: "This is what I've doing",
    projects_personal: "Personal projects",
    projects_school: "School projects",
    projects_it: "IT Experiences",
    skills_title: "What I have learned during my career",
    skills_subtitle: "Skills & Tools",
    skills_lang: "Languages:",
    skills_frameworks: "Frameworks & Libraries:",
    skills_tools: "Tools:",
    skills_db: "Databases:",
    skills_other: "Other:",
    skills_ai: "AI & Automation:",
    skills_tools: "Tools & Cloud:", 
    other_ui: "UI Design",
    other_responsive: "Responsive Development",
    other_data: "Clean Architecture",    
    contact_title: "Contact Me!",
    contact_social: "Social media",
    contact_form_title: "Get in touch",
    contact_name: "Name",
    contact_name_ph: "Your name",
    contact_msg: "Message",
    contact_msg_ph: "Your message",
    contact_send: "Send",
    footer_copy: "© 2025 Dante Solorzano. All rights reserved."
  },
  es: {
    nav_projects: "Proyectos",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    title_hi: "Hola, soy ",
    header_desc: "Desarrollador web enfocado en crear soluciones eficientes. Actualmente curso mi séptimo semestre en la Universidad de Guanajuato y trabajo como desarrollador backend .NET en la Secretaría de Finanzas del Estado de Guanajuato. Me apasiona combinar creatividad y lógica, ya sea construyendo proyectos web full-stack, participando en <a href='gallery.html' style='color: var(--aquaLigth); text-decoration: underline; font-weight: bold;'>hackatones</a> o diseñando sistemas robustos.",
    header_cv: "Este es mi CV",
    cv_link: "src/files/CV_DanteSolorzanoFerrer.pdf",
    projects_title: "Esto es en lo que he trabajado",
    projects_personal: "Proyectos personales",
    projects_school: "Proyectos escolares",
    projects_it: "Experiencias TI",
    skills_title: "Qué aprendí durante mi carrera",
    skills_subtitle: "Skills & Software",
    skills_lang: "Lenguajes:",
    skills_frameworks: "Frameworks & Librerías:",
    skills_tools: "Herramientas de Desarrollo:",
    skills_db: "Bases de datos:",
    skills_other: "Otros:",
    skills_ai: "IA y Automatización:",
    skills_tools: "Herramientas y Nube:",
    other_ui: "Diseño UI",
    other_responsive: "Desarrollo Responsivo",
    other_data: "Clean Architecture",
    contact_title: "¡Contáctame!",
    contact_social: "Redes Sociales",
    contact_form_title: "Pongámonos en contacto",
    contact_name: "Nombre",
    contact_name_ph: "Tu nombre",
    contact_msg: "Mensaje",
    contact_msg_ph: "Tu mensaje",
    contact_send: "Enviar",
    footer_copy: "© 2025 Dante Solorzano. Todos los derechos reservados."
  }
};

// Variable Global para el idioma
let currentLang = localStorage.getItem('lang') || 'en';

document.addEventListener('DOMContentLoaded', function(){
    //createGallery();
    fixNav();
    highlightLink();
    initTranslation(); // Inicializa las traducciones al cargar
})

function initTranslation() {
    const translateBtn = document.querySelector('.translate');
    if(!translateBtn) return;

    // Aplicar el idioma guardado inicialmente
    applyTranslation(currentLang);

    // Cambiar de idioma al hacer click
    translateBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('lang', currentLang); // Guardarlo en caché
        applyTranslation(currentLang);
    });
}

function applyTranslation(lang) {
    const texts = translations[lang];

    // CAMBIO AQUÍ: Usamos innerHTML en lugar de textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(texts[key]) el.innerHTML = texts[key]; 
    });

    // Cambiar Placeholders (inputs)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(texts[key]) el.setAttribute('placeholder', texts[key]);
    });

    // Cambiar Valores (botón Submit)
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
        const key = el.getAttribute('data-i18n-value');
        if(texts[key]) el.value = texts[key];
    });

    // Cambiar Enlaces (href del CV)
    document.querySelectorAll('[data-i18n-href]').forEach(el => {
        const key = el.getAttribute('data-i18n-href');
        if(texts[key]) el.href = texts[key];
    });
}

// --- Funciones Anteriores Originales ---
function fixNav(){
    const nav = document.querySelector('.nav-bar_fixed');
    const gap = document.querySelector('.gap');

    window.addEventListener('scroll', function(){
        if(gap.getBoundingClientRect().bottom < 115){
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    })
}

function createGallery(){
    const gallery = document.querySelector('.image-gallery');

    for(let i = 2; i<=5; i++){
        const listItem = document.createElement('li');
        const image = document.createElement('IMG');
        image.src = `src/img/gallery/${i}.jpeg`;
        image.alt = 'Galery Image';

        //Event Handler
        image.onclick = function(){
            showImage(i);
        }

        listItem.appendChild(image);
        gallery.appendChild(listItem);
    }
}

// function showImage(i){
//     const image = document.createElement('IMG');
//     image.src = `src/img/gallery/${i}.jpeg`;
//     image.alt = 'Galery Image';

//     //Generate Modal
//     const modal = document.createElement('DIV');
//     modal.classList.add('modal');
//     modal.onclick = closeModal;
    
//     modal.append(image);

//     //add to html
//     const body = document.querySelector('body');
//     body.classList.add('overflow-hidden');
//     body.appendChild(modal);
// }

// function closeModal(){
//     const modal = document.querySelector('.modal');
//     modal.classList.add('fadeOut');

//     setTimeout(() => {
//         modal?.remove();
//         const body = document.querySelector('body');
//         body.classList.remove('overflow-hidden');
//     }, 500);
// }

function highlightLink(){
    document.addEventListener('scroll', function(){
        //for mobile >= 768px
        if(window.innerWidth < 768) return;

        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-bar a');

        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(window.scrollY >= (sectionTop - sectionHeight / 3.5) ) {
                actual = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active');
            }
        })
    })
}