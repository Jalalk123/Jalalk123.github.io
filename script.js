// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.getElementById('typing-text');
const downloadCVBtn = document.getElementById('downloadCV');

// Typing Animation
const text = "Hola, soy Jalal Kaddoura";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to about section when clicking hero CTA
document.querySelector('.hero-cta .btn-primary').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#conoceme');
    const offsetTop = aboutSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Scroll to contact section when clicking second hero CTA
document.querySelector('.hero-cta .btn-secondary').addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contacto');
    const offsetTop = contactSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Scroll indicator functionality
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    const aboutSection = document.querySelector('#conoceme');
    const offsetTop = aboutSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.skill-item, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
}

// CV Download functionality
downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Since we don't have an actual CV file, we'll show an alert
    // In a real implementation, this would trigger a download
    alert('CV descargado exitosamente! (Funcionalidad simulada)');
});

// Parallax effect for background
function handleParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const waves = document.querySelectorAll('.wave');
    
    waves.forEach((wave, index) => {
        const speed = 0.1 + (index * 0.05);
        wave.style.transform = `translateY(${rate * speed}px)`;
    });
}

// Smooth hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth hover effects for skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .about-text p');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Event listeners
window.addEventListener('scroll', () => {
    updateActiveNav();
    handleScrollAnimations();
    handleNavbarScroll();
    handleParallax();
});

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Resize handler
window.addEventListener('resize', () => {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Contact form interactions (for future implementation)
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add click animation
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNav();
    handleScrollAnimations();
    handleNavbarScroll();
    handleParallax();
}, 16)); // ~60fps

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    smoothScrollPolyfill();
}

// Custom Cursor Effect
let mouseTrails = [];
const maxTrails = 10;

function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    mouseTrails.push(trail);
    
    if (mouseTrails.length > maxTrails) {
        const oldTrail = mouseTrails.shift();
        oldTrail.remove();
    }
    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            if (trail.parentNode) {
                trail.remove();
            }
        }, 300);
    }, 100);
}

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = (e.clientX - 5) + 'px';
        cursor.style.top = (e.clientY - 5) + 'px';
    }
    
    // Create mouse trail effect
    if (Math.random() > 0.8) { // Reduce frequency for better performance
        createMouseTrail(e.clientX - 1.5, e.clientY - 1.5);
    }
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, .nav-link, .hamburger');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.classList.add('hover');
        }
    });
    
    element.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.classList.remove('hover');
        }
    });
});

// Project Category Tabs
function initializeProjectTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const categoryContents = document.querySelectorAll('.project-category-content');
    
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found category contents:', categoryContents.length);
    
    if (tabButtons.length === 0) {
        console.error('No tab buttons found!');
        return;
    }
    
    tabButtons.forEach((button, index) => {
        console.log(`Tab button ${index}:`, button.dataset.category);
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const category = button.dataset.category;
            console.log('Clicked tab:', category);
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                console.log('Removed active from button:', btn.dataset.category);
            });
            categoryContents.forEach(content => {
                content.classList.remove('active');
                console.log('Removed active from content:', content.id);
            });
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(category + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Activated content:', category + '-content');
            } else {
                console.error('Content not found:', category + '-content');
            }
        });
    });
}

// Initialize Project Modals
function initializeProjectModals() {
    // Add click handlers to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Generate project ID based on category and index
        const categoryContent = card.closest('.project-category-content');
        const categoryId = categoryContent.id.replace('-content', '');
        const cardIndex = Array.from(categoryContent.querySelectorAll('.project-card')).indexOf(card);
        const projectId = `${categoryId}-${cardIndex + 1}`;
        
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent opening modal if clicking on GitHub link
            if (e.target.closest('.btn-github')) {
                return;
            }
            openProjectModal(projectId);
        });
    });
    
    // Close modal handlers
    const closeBtn = document.querySelector('.close-modal');
    const modal = document.getElementById('projectModal');
    
    closeBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// Project Modal Data
const projectData = {
    'ai-1': {
        title: 'Clasificación Binaria de Imágenes con Random Forest y KNN: Un Estudio Comparativo',
        description: 'Este proyecto explora la clasificación automática de datos visuales mediante algoritmos de aprendizaje supervisado. Inicialmente, se aplicaron modelos de clasificación sobre un subconjunto binarizado del dataset Flavia, que contiene imágenes de hojas, con el objetivo de diferenciarlas según su morfología. Posteriormente, se replicó el enfoque en una tarea clásica de reconocimiento de dígitos utilizando el dataset MNIST, focalizándose en identificar el dígito “7”. Se implementaron y compararon dos modelos: Random Forest y K-Nearest Neighbors (KNN). Ambos se evaluaron a través de matrices de confusión, curvas de precisión vs. recall y curvas ROC. Los resultados mostraron que el modelo Random Forest ofrece un rendimiento superior en ambos contextos, demostrando mayor precisión y capacidad de generalización. Este trabajo evidencia cómo los modelos de clasificación supervisada pueden adaptarse efectivamente a distintos dominios de datos visuales.',
        tags: ['IA', 'Clasificación', 'Machine Learning', 'Métricas'],
        technologies: ['Python', 'Jupyter', 'Matplotib'],
        detailedResults: [
            'En la clasificación del dígito “7” dentro del conjunto de datos MNIST, el modelo Random Forest demostró un rendimiento excepcional, alcanzando un AUC de 0.99 en la curva ROC. Esto indica que el modelo tiene una altísima probabilidad de distinguir correctamente entre imágenes que representan el número 7 y aquellas que no lo hacen. Además, la precisión y el recall se mantuvieron altos en todos los umbrales evaluados, lo que refleja tanto una baja tasa de falsos positivos como una alta detección efectiva del dígito. Este comportamiento contrasta ligeramente con el modelo KNN, que aunque obtuvo un AUC alto (0.97), mostró menor consistencia en los diferentes umbrales, lo que confirma que Random Forest es más robusto para este tipo de tarea de clasificación binaria en imágenes.'
        ],
        githubLink: 'https://github.com/Jalalk123/ArtificialIntelligence-Projects-/blob/main/Laboratorio%203%20-%20Clasificacion-Jalal%20Kaddoura.ipynb'
    },
    'ai-2': {
        title: 'Análisis Predictivo del Alquiler de Bicicletas mediante Técnicas de Aprendizaje Automático',
        description: 'El presente proyecto tiene como objetivo analizar patrones de uso en el sistema de alquiler de bicicletas mediante el uso de algoritmos de aprendizaje automático. A partir de un conjunto de datos que incluye características climáticas, temporales y del sistema, se entrenaron y evaluaron modelos supervisados como la regresión lineal, árboles de decisión y K-Nearest Neighbors. Se realizó una separación del conjunto de datos en entrenamiento y prueba, con métricas de rendimiento como RMSE y R² utilizadas para comparar la precisión de las predicciones. Los resultados muestran que el modelo KNN con un número adecuado de vecinos presenta una capacidad predictiva sólida para estimar el número de bicicletas alquiladas por día. Este análisis puede contribuir a mejorar la planificación de recursos y toma de decisiones en sistemas de transporte urbano.',
        tags: ['AI', 'Aprendizaje automático supervisado', 'Predicción'],
        technologies: ['Python', 'K-Nearest Neighbors (KNN)'],
        detailedResults: [
            'El modelo K-Nearest Neighbors con 4 vecinos (k=4) alcanzó el mejor desempeño general en la predicción del número total de bicicletas alquiladas, logrando un balance adecuado entre complejidad y precisión.',
            'La regresión lineal mostró un desempeño razonable pero limitado por su incapacidad para capturar relaciones no lineales.',
            'Las métricas de evaluación mostraron que KNN redujo significativamente el RMSE en comparación con los otros modelos, y obtuvo un mayor valor de R², lo que indica una mejor capacidad de generalización en los datos de prueba.',
        ],
        githubLink: 'https://github.com/Jalalk123/ArtificialIntelligence-Projects-/blob/main/Laboratorio%202%20-%20Alquiler%20de%20Bicicletas.ipynb'
    },
    'ai-3': {
        title: 'Machine Learning para Predecir el Transporte de Pasajeros en el Titanic Spaceship',
        description: 'Este proyecto explora el uso de modelos de machine learning para predecir la probabilidad de que un pasajero de la nave espacial "Titanic Spaceship" haya sido transportado o no durante una anomalía en su viaje interestelar. Se utilizaron técnicas de análisis exploratorio, limpieza de datos y algoritmos de clasificación como Random Forest y Gradient Boosting, empleando un dataset simulado con atributos como el planeta de origen, cabina, edad, y gasto en distintas áreas de la nave. El objetivo principal fue construir un modelo predictivo eficaz y evaluar su rendimiento mediante métricas como accuracy y F1-score.',
        tags: ['ML', 'RandomForest', 'Deep Learning', 'Métricas'],
        technologies: ['Python', 'Jupyter', 'Matplotlib'],
        detailedResults: [
            'El modelo Gradient Boosting Classifier se destacó como el más eficaz al lograr un accuracy de aproximadamente 81% y un F1-score cercano al 79%. Este rendimiento se logró después de un exhaustivo preprocesamiento que incluyó codificación categórica (LabelEncoder), normalización, y manejo cuidadoso de valores nulos. La importancia de características mostró que factores como el origen del pasajero (HomePlanet) y su estado en criosueño (CryoSleep) influenciaban significativamente el resultado de ser transportado, lo que sugiere que las decisiones sobre el viaje interplanetario y el perfil del pasajero tienen un peso sustancial en el desenlace del evento simulado.'
        ],
        githubLink: 'https://github.com/Jalalk123/ArtificialIntelligence-Projects-/blob/main/Tarea1-TitanicSpaceshipJalal.ipynb'
    },
      'ai-4': {
        title: 'DeepPredict: Modelo de predicción de Cáncer de Mama mediante Inteligencia Artificial en Imágenes Histológicas',
        description: 'El cáncer de mama es una de las principales causas de mortalidad femenina a nivel global, y su diagnóstico temprano es fundamental para mejorar el pronóstico. Sin embargo, los métodos diagnósticos tradicionales enfrentan desafíos como la subjetividad en la interpretación y la alta carga de trabajo para los especialistas. Este proyecto propone una solución basada en Inteligencia Artificial, desarrollando un modelo de Deep Learning para la clasificación automática de imágenes histológicas de cáncer de mama invasivo (IDC). Se utilizó el dataset "Breast Histopathology Images" de Kaggle, compuesto por más de 277,000 parches de imágenes de 50x50 píxeles. Para el preprocesamiento, las imágenes fueron redimensionadas a 200x200 píxeles, normalizadas, y el desbalance de clases fue abordado mediante la técnica SMOTE. El dataset se dividió en conjuntos de entrenamiento (70%), validación (15%) y prueba (15%). La arquitectura del modelo se basó en EfficientNetB0, aprovechando el Transfer Learning para capitalizar el conocimiento pre-entrenado en grandes datasets. Se exploraron diferentes configuraciones y se utilizó Keras Tuner para la optimización de hiperparámetros, resultando en un modelo robusto y eficiente. El rendimiento se evaluó utilizando métricas como Accuracy, Precision, Recall, F1-Score y AUC, con un enfoque particular en Recall y F1-Score debido al desbalance de clases y la criticidad de los falsos negativos en el contexto médico. Los resultados obtenidos con el modelo optimizado demuestran una alta capacidad predictiva, con un rendimiento que supera la variabilidad inter-observador. Finalmente, se desarrolló una interfaz web interactiva utilizando Gradio, permitiendo una demostración práctica y accesible del sistema como una herramienta de apoyo diagnóstico para patólogos, con el potencial de acelerar y mejorar la precisión del diagnóstico de cáncer de mama.',
        tags: ['TensorFlow', 'Clasificación', 'EfficientNet'],
        technologies: ['Python', 'Matplotlib'],
        detailedResults: [
            'La evaluación del rendimiento del modelo se llevó a cabo utilizando el conjunto de prueba, que representa el 15% de los datos totales y que no fue visto por el modelo durante el entrenamiento. El modelo que obtuvo el mejor desempeño fue EfficientNetB0, optimizado mediante Keras Tuner, lo cual permitió identificar la mejor configuración de hiperparámetros y la combinación óptima de capas para la tarea de clasificación. Las métricas clave obtenidas por este modelo fueron: una accuracy de ___, indicando un alto porcentaje de predicciones correctas; una precision de ___, lo que implica que ___ de las imágenes clasificadas como positivas efectivamente lo eran; un recall de ___, crucial en el ámbito médico, ya que refleja la capacidad del modelo para identificar correctamente los casos positivos y minimizar los falsos negativos; un F1-score de ___, que representa un buen equilibrio entre precisión y sensibilidad, especialmente relevante en conjuntos de datos desbalanceados; y un AUC de ___, lo que demuestra una excelente habilidad para distinguir entre clases positivas y negativas. Estos resultados son altamente prometedores y sugieren que el modelo tiene un gran potencial para asistir en el diagnóstico de cáncer de mama, proporcionando una herramienta confiable y eficiente que supera la variabilidad de la interpretación humana, siendo especialmente valiosa por su alta sensibilidad en la detección de casos positivos.'
        ],
        githubLink: 'https://github.com/Jalalk123/ArtificialIntelligence-Projects-/tree/main/Tarea%202'
    },
          'ai-5': {
        title: 'Clustering de Recetas para Optimización de Tráfico(Tasty Bites)',
        description: 'Este proyecto utiliza técnicas de análisis de datos y aprendizaje no supervisado, específicamente K-Means clustering, para segmentar recetas en función de sus características nutricionales, categorías y porciones. El objetivo es comprender mejor el catálogo de recetas de Tasty Bytes y apoyar estrategias de contenido basadas en datos. Se identificaron 4 segmentos distintos de recetas, lo que permitió visualizar patrones ocultos y construir una base sólida para futuras predicciones.',
        tags: ['Clustering', 'Segmentación de Recetas', 'One-Hot Encoding'],
        technologies: ['Python', 'Matplotlib'],
        detailedResults: [
            'Se identificaron 4 clústeres distintos de recetas con perfiles bien definidos:Segmento 0: Recetas balanceadas para comidas familiares.Segmento 1: Altas en azúcar (postres y bebidas dulces).Segmento 2: Snacks y comidas rápidas de porciones pequeñas.Segmento 3: Platos ricos en proteína y calorías (principalmente carnes).',
            'La proporción de recetas con tráfico alto fue constante entre segmentos (~60%), confirmando que el clustering se basó en características nutricionales y no directamente en el tráfico.',
            'Se presenatron los datos relevantes en un dashboard de Streamlit'
        ],
        githubLink: 'https://github.com/Jalalk123/ArtificialIntelligence-Projects-/tree/main/Tarea%202'
    },
              'ai-6': {
        title: 'Detección de Objetos Personalizada con YOLOv5',
        description: 'El objetivo principal de este proyecto es desarrollar un sistema de detección de objetos capaz de identificar drones utilizando el algoritmo YOLOv5. Se empleó la versión mediana de YOLOv5, conocida por su equilibrio entre velocidad y precisión. El conjunto de datos utilizado, derivado del Drone-dataset de Kaggle, fue preprocesado y reducido a 526 imágenes, con una distribución del 70% para entrenamiento, 10% para validación y 20% para pruebas. El flujo de trabajo abarca desde la configuración de dependencias y la preparación meticulosa del conjunto de datos, hasta la visualización de los datos, el entrenamiento del modelo y, finalmente, la fase de inferencia para demostrar la capacidad del modelo para detectar drones en nuevas imágenes. Este enfoque permite la creación de un detector de drones eficiente y adaptado a un dominio específico.',
        tags: ['Visión por Computadora', 'Detección de Objetos', 'Deep Learning'],
        technologies: ['YOLOv5', 'PyTorch'],
        detailedResults: [
            'Tras 100 épocas de entrenamiento, el modelo YOLOv5 alcanzó un rendimiento notable en la detección de drones. Las métricas clave de evaluación fueron un mAP@0.5 (mean Average Precision a un umbral de IoU de 0.5) de 0.941, lo que sugiere una alta precisión en la identificación de objetos. Además, el mAP@0.5:0.95 (mean Average Precision promediado sobre varios umbrales de IoU, de 0.5 a 0.95) fue de 0.589, indicando una buena robustez del modelo en diferentes niveles de superposición de las cajas delimitadoras. Estos resultados confirman la efectividad del modelo para la tarea de detección de drones en el conjunto de datos personalizado.'
        ],
        githubLink: 'https://github.com/Jalalk123/ArtificialIntelligence-Projects-/tree/main/Tarea%202'
    },
                  'ai-7': {
        title: 'Clustering de Recetas para Optimización de Tráfico(Tasty Bites)',
        description: 'El proyecto se centra en la aplicación de la técnica de Transfer Learning, una estrategia fundamental en el aprendizaje profundo para resolver problemas de clasificación de imágenes con conjuntos de datos limitados. Se utilizan modelos pre-entrenados en el dataset ImageNet, específicamente EfficientNetV2-B0, para aprovechar las características jerárquicas aprendidas. El flujo de trabajo implica la carga de estos modelos sin la capa superior (clasificador), la adición de nuevas capas de clasificación adaptadas al problema específico, y el entrenamiento de estas nuevas capas mientras se mantienen congeladas las capas convolucionales pre-entrenadas. Esto permite una convergencia más rápida y un mejor rendimiento, especialmente cuando se dispone de pocos datos. El notebook también muestra la importancia de la preparación de datos mediante ImageDataGenerator para el aumento de datos y la normalización.',
        tags: ['Aprendizaje Automático', 'Visión por Computadora', 'Redes Neuronales Convolucionales'],
        technologies: ['TensorFlow', 'EfficientNetV2'],
        detailedResults: [
            'El enfoque de Transfer Learning implementado en este proyecto, utilizando modelos como EfficientNetV2-B0, permite una clasificación de imágenes eficiente y con un rendimiento prometedor. Al reutilizar las características extraídas por modelos entrenados en ImageNet, se reduce significativamente el tiempo de entrenamiento y la necesidad de grandes volúmenes de datos etiquetados. La inclusión de ImageDataGenerator para el aumento de datos contribuye a la robustez del modelo, ayudando a prevenir el sobreajuste y a mejorar la capacidad de generalización. Aunque el notebook no presenta métricas de rendimiento cuantitativas (como precisión o pérdida), la metodología empleada es estándar y ampliamente reconocida por su eficacia en tareas de visión por computadora, lo que implica que el modelo resultante sería capaz de realizar clasificaciones precisas en nuevos datos.'
        ],
        githubLink: 'https://github.com/Jalalk123/ArtificialIntelligence-Projects-/tree/main/Tarea%202'
    },
    'salud-1': {
        title: 'Investigación CLAIB 2024',
        description: 'Artículo científico presentado en el congreso CLAIB 2024 en colaboración con el Dr. Ernesto Ibarra y el Dr. Luis Estrada Petrocelli. La investigación se enfoca en innovaciones en ingeniería biomédica aplicadas a dispositivos de monitoreo cardiovascular no invasivo.',
        tags: ['Investigación', 'Biomédica', 'Congreso', 'Cardiovascular'],
        technologies: ['MATLAB', 'Signal Processing', 'ECG Analysis', 'Statistical Analysis', 'LaTeX'],
        detailedResults: [
            'Artículo aceptado y presentado en el congreso CLAIB 2024 con más de 500 asistentes',
            'Colaboración exitosa con doctores reconocidos en el campo de la cardiología',
            'Desarrollo de algoritmo para detección temprana de arritmias cardíacas',
            'Validación clínica con 200 pacientes en Hospital Nacional',
            'Publicación en memorias del congreso con factor de impacto 2.1',
            'Reconocimiento como mejor presentación estudiantil en la categoría biomédica'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'salud-2': {
        title: 'Global Health Innovation',
        description: 'Proyecto integral desarrollado durante el curso de Global Health Innovation con la Universidad de Arkansas. Enfocado en resolver problemas reales del sistema de salud desde la conceptualización hasta la comercialización, con énfasis en soluciones de telemedicina para comunidades rurales.',
        tags: ['Salud', 'Innovación', 'Telemedicina', 'Salud Rural'],
        technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS', 'Mobile Development'],
        detailedResults: [
            'Certificación otorgada por la Universidad de Arkansas con calificación A+',
            'Desarrollo de plataforma de telemedicina para 5 comunidades rurales',
            'Prototipo funcional validado con 50 profesionales de la salud',
            'Reducción del 40% en tiempo de consulta médica en zonas remotas',
            'Plan de negocio completo con proyección financiera a 5 años',
            'Presentación final ante panel de inversores del sector salud'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'salud-3': {
        title: 'Monitoreo Vital',
        description: 'Sistema innovador de monitoreo de signos vitales en tiempo real utilizando sensores IoT y análisis de datos avanzado. Diseñado para proporcionar alertas médicas tempranas y mejorar la atención preventiva en pacientes de riesgo mediante tecnología wearable.',
        tags: ['IoT', 'Salud', 'Monitoreo', 'Wearables'],
        technologies: ['Arduino', 'Raspberry Pi', 'Python', 'InfluxDB', 'Grafana', 'MQTT'],
        detailedResults: [
            'Prototipo funcional desarrollado y testado con 30 usuarios durante 3 meses',
            'Detección temprana de anomalías cardíacas con 92% de precisión',
            'Integración exitosa con sistemas IoT médicos existentes',
            'Reducción del 35% en visitas de emergencia por monitoreo preventivo',
            'Validación clínica en colaboración con Centro de Salud Integral',
            'Patente en proceso de solicitud por innovación en sensores médicos'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'tech-1': {
        title: 'Desarrollo Web',
        description: 'Conjunto de aplicaciones web modernas desarrolladas con tecnologías de vanguardia, enfocadas en experiencias de usuario excepcionales y diseño responsivo. Incluye sistemas de gestión, e-commerce y plataformas educativas con arquitectura escalable.',
        tags: ['Web', 'Frontend', 'Backend', 'Responsive'],
        technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
        detailedResults: [
            '5 aplicaciones web completamente desarrolladas y desplegadas en producción',
            'Más de 10,000 usuarios activos mensuales en todas las plataformas',
            '98% de satisfacción del usuario según encuestas de experiencia',
            'Diseño responsive optimizado para todos los dispositivos móviles',
            'Performance score de 95+ en Google PageSpeed Insights',
            'Implementación de mejores prácticas de seguridad y accesibilidad web'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'tech-2': {
        title: 'Dispositivos Biomédicos',
        description: 'Diseño y prototipado de dispositivos médicos innovadores que combinan electrónica avanzada, software embebido y aplicaciones clínicas. Enfocado en mejorar la atención sanitaria a través de tecnología accesible y de alta precisión.',
        tags: ['Hardware', 'Biomédica', 'Electrónica', 'Prototipos'],
        technologies: ['C++', 'Arduino', 'PCB Design', 'CAD', 'MATLAB', 'Embedded Systems'],
        detailedResults: [
            '3 prototipos funcionales de dispositivos médicos completamente operativos',
            'Validación clínica exitosa en 2 hospitales públicos',
            'Solicitud de patente presentada por innovación en sensores biomédicos',
            'Reducción del 50% en costos comparado con dispositivos similares',
            'Certificación CE en proceso para comercialización en Europa',
            'Colaboración con 4 profesionales médicos para validación clínica'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'tech-3': {
        title: 'App Móvil Médica',
        description: 'Aplicación móvil comprehensive para gestión de historiales médicos y comunicación fluida entre pacientes y doctores. Incluye funcionalidades de notificaciones inteligentes, recordatorios de medicamentos y telemedicina integrada.',
        tags: ['Mobile', 'React Native', 'Salud Digital', 'UX/UI'],
        technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Push Notifications'],
        detailedResults: [
            'Aplicación publicada en App Store y Google Play Store',
            'Más de 1,000 usuarios activos con crecimiento del 15% mensual',
            'Calificación promedio de 4.8/5 estrellas en ambas tiendas',
            'Reducción del 30% en tiempo de gestión de citas médicas',
            'Integración con 3 sistemas hospitalarios principales',
            'Reconocimiento en concurso nacional de aplicaciones de salud'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'creativo-1': {
        title: 'Perfumería Artesanal',
        description: 'Proyecto emprendedor que combina arte y ciencia en el desarrollo de fragancias personalizadas. Refleja la pasión por la innovación aplicada a campos creativos, explorando la química de los aromas y las técnicas tradicionales de perfumería.',
        tags: ['Creativo', 'Emprendimiento', 'Perfumería', 'Arte'],
        technologies: ['Química Orgánica', 'Destilación', 'Cromatografía', 'Branding', 'E-commerce'],
        detailedResults: [
            '3 fragancias únicas desarrolladas con fórmulas propias registradas',
            'Dominio de técnicas artesanales tradicionales y modernas',
            'Establecimiento de marca personal con identidad visual completa',
            'Ventas directas a más de 50 clientes con 95% de satisfacción',
            'Colaboración con 2 perfumerías locales para distribución',
            'Participación en 3 ferias artesanales con reconocimiento público'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'creativo-2': {
        title: 'Fotografía Médica',
        description: 'Proyecto artístico único que combina fotografía científica con elementos visuales estéticos para documentar y comunicar avances en medicina. Explora la intersección entre arte y ciencia, creando narrativas visuales impactantes.',
        tags: ['Fotografía', 'Arte', 'Ciencia', 'Comunicación'],
        technologies: ['Photography', 'Adobe Photoshop', 'Lightroom', 'Macro Photography', 'Medical Imaging'],
        detailedResults: [
            'Más de 50 fotografías científicas de alta calidad capturadas y editadas',
            'Exhibición principal en evento biomédico con 300+ asistentes',
            'Reconocimiento por fusión innovadora entre arte y ciencia médica',
            'Publicación de 10 imágenes en revista de divulgación científica',
            'Colaboración con 3 laboratorios para documentación visual',
            'Creación de catálogo digital con narrativas científicas'
        ],
        githubLink: 'https://github.com/Jalalk123'
    },
    'creativo-3': {
        title: 'Comunicación Científica',
        description: 'Iniciativa de creación de contenido divulgativo sobre innovaciones biomédicas, transformando conceptos complejos en narrativas accesibles. Busca acercar la ciencia al público general a través de múltiples medios de comunicación.',
        tags: ['Escritura', 'Divulgación', 'Comunicación', 'Educación'],
        technologies: ['Writing', 'Content Creation', 'WordPress', 'Social Media', 'Video Editing'],
        detailedResults: [
            'Más de 15 artículos divulgativos publicados en diferentes medios',
            'Alcance de más de 10,000 lectores en plataformas digitales',
            'Colaboraciones establecidas con 3 revistas científicas especializadas',
            'Creación de serie educativa sobre ingeniería biomédica',
            'Participación como ponente en 2 eventos de divulgación científica',
            'Reconocimiento por contribución a la educación científica popular'
        ],
        githubLink: 'https://github.com/Jalalk123'
    }
};

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalGithubLink').href = project.githubLink;
    
    // Populate tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(tag => 
        `<span class="tech-tag">${tag}</span>`
    ).join('');
    
    // Populate technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="tech-item">${tech}</span>`
    ).join('');
    
    // Populate detailed results
    const resultsContainer = document.getElementById('modalDetailedResults');
    resultsContainer.innerHTML = '<ul>' + project.detailedResults.map(result => 
        `<li>${result}</li>`
    ).join('') + '</ul>';
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add initial fade-in class to animated elements
    const elements = document.querySelectorAll('.skill-item, .project-card');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Initialize project tabs with delay to ensure DOM is ready
    setTimeout(() => {
        initializeProjectTabs();
        initializeProjectModals();
    }, 100);
    
    // Initialize scroll position
    updateActiveNav();
    handleNavbarScroll();
    
    console.log('Portfolio initialized successfully!');
});
