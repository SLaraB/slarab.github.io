// Datos de los proyectos
const projects = [
    {
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        image: 'https://via.placeholder.com/300x200',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        image: 'https://via.placeholder.com/300x200',
        tags: ['React', 'Node.js'],
        link: '#'
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        image: 'https://via.placeholder.com/300x200',
        tags: ['Python', 'Django'],
        link: '#'
    }
];

// Cargar proyectos dinámicamente
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fadeIn';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn" target="_blank">Ver Proyecto</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Efecto de escritura para el texto del hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log({ name, email, message });
    
    // Limpiar el formulario
    this.reset();
    alert('¡Mensaje enviado con éxito!');
});

// Navegación responsive
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    const typingText = document.querySelector('.typing-text');
    typeWriter(typingText, 'Desarrollador Web');
});
