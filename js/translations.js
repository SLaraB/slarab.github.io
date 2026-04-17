const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_education: "Educación",
    nav_experience: "Experiencia",
    nav_achievements: "Logros",
    nav_skills: "Habilidades",
    about_title: '<span class="gradient-text">Sebastián Lara Barría</span>',
    about_location: "Santander, España",
    about_nationality: "Nacionalidad Chilena",
    about_license: "Licencia de Conducir Clase B",
    about_role1: "Ingeniero en Informática",
    about_role2: "Máster en Ciencia de Datos",
    about_role3: "Candidato a Doctor",
    about_contact: "Contactar",
    about_specialization_title: "Especialización",
    about_specialization_p1: `
      Me especializo en <strong class="text-primary">arquitectura de software</strong>, <strong class="text-primary">desarrollo full-stack</strong>, <strong class="text-primary">SQL y bases de datos relacionales</strong> e <strong class="text-primary">inteligencia artificial aplicada</strong>, con un enfoque particular en visión artificial y modelos predictivos para la resolución de problemas complejos. Mi experiencia técnica abarca desde el diseño de sistemas escalables hasta la implementación de soluciones de machine learning y deep learning en entornos de producción.
      <br><br>
      Domino tecnologías modernas como <strong class="text-primary">Next.js, React, Node.js y bases de datos como SQL y MongoDB</strong> para el desarrollo de aplicaciones web y móviles, así como frameworks especializados en IA como <strong class="text-primary">PyTorch, TensorFlow, Keras y Scikit-learn</strong> para la construcción de modelos predictivos robustos. Además, tengo amplia experiencia trabajando con servicios en la nube como <strong class="text-primary">AWS, Azure y Google Cloud Platform</strong>, implementando soluciones que requieren procesamiento a gran escala, almacenamiento distribuido y despliegue continuo de modelos de inteligencia artificial.
    `,
    about_experience_title: "Experiencia Profesional",
    about_experience_p1: `
      A lo largo de mi trayectoria profesional, he liderado y participado en <strong class="text-primary">proyectos de transformación digital y optimización de procesos</strong>, aplicando técnicas avanzadas de aprendizaje automático, deep learning y visión artificial para mejorar la eficiencia operativa y facilitar la toma de decisiones basada en datos en sectores estratégicos como la <strong class="text-primary">infraestructura vial</strong> y la <strong class="text-primary">sostenibilidad ambiental</strong>.
      <br><br>
      Mi experiencia incluye el desarrollo de <strong class="text-primary">sistemas de detección y clasificación automática</strong> de deterioros en pavimentos utilizando redes neuronales convolucionales, la implementación de plataformas de ciencia ciudadana para la recopilación y análisis de datos comunitarios, y la construcción de modelos predictivos multivariables para evaluar el impacto ambiental de materiales reciclados. He trabajado en entornos colaborativos e interdisciplinarios, coordinando equipos de desarrollo y adaptando soluciones tecnológicas a las necesidades específicas de cada proyecto.
    `,
    about_teaching_title: "Docencia",
    about_teaching_p1: `
      He sido <strong class="text-primary">tutor en diversos cursos de ciencias básicas y de ingeniería en informática en la Universidad Austral de Chile</strong>, ayudando también como docente en algunas asignaturas, donde he compartido conocimientos sobre desarrollo de aplicaciones modernas con tecnologías web (React, Node.js, Express), diseño y gestión de bases de datos relacionales y no relacionales, así como metodologías ágiles de desarrollo (Scrum, Kanban).
      <br><br>
      Mi enfoque pedagógico se centra en el <strong class="text-primary">aprendizaje basado en proyectos</strong>, combinando fundamentos teóricos sólidos con prácticas intensivas que replican escenarios reales de la industria. Fomento activamente el pensamiento crítico, la colaboración en equipo y el uso de herramientas modernas de control de versiones (Git/GitHub), integración continua y despliegue automatizado. Mi objetivo es preparar profesionales capaces de enfrentar los desafíos actuales del desarrollo de software con competencias técnicas y habilidades sociales bien desarrolladas.
    `,
    about_social_title: "Compromiso Social",
    about_social_p1: `
      Tengo un compromiso profundo con proyectos que <strong class="text-primary">generen un impacto positivo en la sociedad y el medio ambiente</strong>. Me intereso especialmente en iniciativas de <strong class="text-primary">ciencia ciudadana</strong>, donde la tecnología se pone al servicio de comunidades locales para empoderar a las personas en la recopilación, análisis y uso de datos que afectan directamente su entorno y calidad de vida.
      <br><br>
      He desarrollado plataformas que facilitan la participación ciudadana en proyectos de investigación ambiental y territorial, permitiendo que las voces de las comunidades sean escuchadas y consideradas en procesos de toma de decisiones. Creo firmemente en el <strong class="text-primary">uso ético, transparente y responsable de la inteligencia artificial</strong>, promoviendo el desarrollo de soluciones tecnológicas que sean inclusivas, accesibles y sostenibles, y que contribuyan a la equidad social y al cuidado del planeta para las generaciones futuras.
    `,
    achievements_title: "🏆 Logros y Reconocimientos",
    achievements_conferences_title: "Congresos y Publicaciones",
    achievements_conf_1_title: "Presentación de Tesis Máster",
    achievements_conf_1_event: "Jornadas Chilenas de la Computación",
    achievements_conf_1_location: "Concepción, Chile",
    achievements_conf_2_title: "Presentación en Conferencia IEEE",
    achievements_conf_2_event: "ChileCon IEEE",
    achievements_conf_2_location: "Valdivia, Chile",
    achievements_projects_title: "Proyectos Destacados",
    achievements_proj_1_location: "Madrid, España",
    achievements_proj_1_desc: "Plataforma de ciencia ciudadana que permite registrar y visualizar luchas sociales por el territorio en diferentes regiones del mundo.",
    achievements_proj_1_link: "🔗 vocesterritorios.com",
    achievements_proj_2_title: "Análisis de Medios de Comunicación de Incendios Forestales",
    achievements_proj_2_org: "Universidad Austral de Chile",
    achievements_proj_2_location: "Valdivia, Chile",
    achievements_proj_2_desc: "Análisis de la cobertura y tratamiento informativo de incendios forestales en medios de comunicación mediante técnicas de procesamiento de lenguaje natural.",
    achievements_proj_3_title: "Análisis de Percepción Comunitaria Territorial de Incendios Forestales",
    achievements_proj_3_org: "Universidad Austral de Chile",
    achievements_proj_3_location: "Valdivia, Chile",
    achievements_proj_3_desc: "Desarrollo de modelos de redes neuronales convolucionales para analizar imágenes de incendios forestales y evaluación de la percepción comunitaria territorial.",
    achievements_proj_4_title: "Desarrollo de Plataforma de Ciencia Ciudadana",
    achievements_proj_4_org: "Proyecto E-ncendio (FONDEF ID22I10072)",
    achievements_proj_4_location: "Valdivia, Chile",
    achievements_proj_4_desc: "Plataforma tecnológica para la percepción comunitaria del riesgo de incendios forestales utilizando ciencia ciudadana e inteligencia artificial.",
    achievements_awards_title: "Reconocimientos",
    achievements_award_1_title: "Reconocimiento por Participación en Congresos con Tesis de Magíster",
    achievements_award_1_org: "Magíster en Informática UACh",
    achievements_award_1_location: "Valdivia, Chile",
    achievements_award_2_title: "Reconocimiento por Liderazgo en Organización",
    achievements_award_2_org: "Workshop de Ingeniería en Informática UACh",
    achievements_award_2_location: "Valdivia, Chile",
    achievements_award_3_title: "Reconocimiento por Trayectoria en Política Estudiantil",
    achievements_award_3_org: "Escuela de Ingeniería en Informática UACh",
    achievements_award_3_location: "Valdivia, Chile",
    education_title: "🎓 Formación Académica",
    education_phd_title: "Doctorado en Ingeniería Civil",
    education_status_ongoing: "En curso",
    education_status_distinction: "Distinción",
    education_research_focus: "Enfoque de Investigación",
    education_phd_research_1: "Detección, clasificación y caracterización de pavimento reciclado con visión artificial y aprendizaje profundo",
    education_phd_research_2: "Participación en congresos internacionales de inteligencia artificial y pavimentos",
    education_technical_skills: "Habilidades Técnicas",
    education_social_skills: "Habilidades Sociales",
    education_master_title: "Máster en Informática, mención Ciencia de Datos",
    education_main_achievements: "Logros Principales",
    education_master_thesis_text: "Proyecto de tesis sobre análisis territorial y percepción comunitaria de imágenes en contexto de incendios forestales utilizando visión artificial e inteligencia artificial.",
    education_master_thesis_link: "🔗 Ver noticia de graduación",
    education_master_achievement_1: "Desarrollo de modelo de visión por computadora para identificación de objetos y categorización de incendios forestales",
    education_master_achievement_2: "Análisis comparativo entre conocimiento ciudadano y experto en percepción de riesgos de incendios",
    education_master_achievement_3: "Especialización en aprendizaje automático, redes neuronales convolucionales y análisis de grandes volúmenes de datos",
    education_master_achievement_4: "Participación en congresos internacionales de Informática",
    education_engineering_title: "Ingeniería en Informática",
    education_highlights: "Destacados",
    education_engineering_highlight_1: "Participación activa en proyectos interdisciplinarios y desarrollo de software",
    education_engineering_highlight_2: "Participación en Centro de Estudiantes de la Facultad de Ciencias de la Ingeniería",
    education_engineering_highlight_3: "Tutor en: Cálculo, Sistemas de Información, Investigación Operativa y POO",
    experience_title: "Experiencia Laboral",
    experience_role_1_title: "Arquitecto y Desarrollador de Software | Investigador en IA aplicada a Ingeniería Civil",
    experience_role_1_item_1: "Diseño e implementación de arquitecturas software y sistemas inteligentes para proyectos de investigación en pavimentos e infraestructuras viales.",
    experience_role_1_item_2: "Participación en proyectos como <strong>LIAISON</strong> (detección de grietas mediante visión artificial), <strong>RECICLAN</strong> (optimización económica y ambiental de materiales reciclados), y el proyecto de <strong>detección de señales de tráfico</strong> del Gobierno de Cantabria.",
    experience_role_1_item_3: "Desarrollo de modelos de <strong>deep learning</strong> y <strong>machine learning</strong> para clasificación, predicción y evaluación de deterioros en firmes.",
    experience_role_1_item_4: "Creación de la plataforma digital del <strong>Laboratorio de Mezclas Asfálticas (LabMezclas)</strong>, integrando gestión de ensayos, resultados y trazabilidad de probetas.",
    experience_role_1_item_5: "Análisis de datos experimentales del <strong>Simulador CRS</strong> y perfilómetro mediante técnicas de inteligencia artificial y modelos multicriterio.",
    experience_role_1_item_6: "Colaboración en la redacción de tres artículos científicos y desarrollo de la tesis doctoral en IA aplicada a ingeniería civil y materiales asfálticos.",
    experience_role_2_title: "Desarrollador de Software",
    experience_role_2_desc: "<strong>Voces Territorios:</strong> Plataforma de ciencia ciudadana que permite a comunidades de América Latina y Europa documentar y visibilizar transformaciones territoriales, luchas y resistencias frente al extractivismo, gentrificación y desposesión de tierras.",
    experience_role_2_project_link: "🔗 Sobre el proyecto",
    experience_role_2_item_1: "<strong>Aplicación móvil de ciencia ciudadana:</strong> Desarrollé una app móvil multiplataforma con React Native y Expo Go (disponible en Google Play y App Store) que permite a comunidades documentar transformaciones territoriales mediante fotografías, audios, videos y documentos, funcionando con y sin conexión a internet.",
    experience_role_2_item_2: "<strong>Atlas colaborativo interactivo:</strong> Implementé el sitio web oficial usando Next.js con un mapa colectivo donde usuarios de distintas regiones contribuyen a construir un Atlas de transformaciones, disputas y resistencias territoriales, fortaleciendo redes de solidaridad global.",
    experience_role_2_item_3: "<strong>Backend escalable y multimedia:</strong> Diseñé e implementé la arquitectura backend con MongoDB y APIs RESTful para gestionar datos de usuarios, testimonios comunitarios, contenido multimedia geolocalizado y permitir funcionamiento offline con sincronización posterior.",
    experience_role_2_item_4: "<strong>Plataforma participativa adaptable:</strong> Desarrollé una interfaz accesible que se adapta a las condiciones culturales de cada territorio, permitiendo que las comunidades propongan sus propios proyectos de investigación y plasmen sus saberes locales.",
    experience_role_2_item_5: "<strong>Colaboración interdisciplinaria:</strong> Trabajé con investigadores de la red Contested Territories y el proyecto Horizon 2020 Marie Sklodowska-Curie para crear un puente entre academia y movimientos populares, estableciendo colaboración horizontal.",
    experience_role_3_title: "Científico de Datos",
    experience_role_3_desc: "Investigación en inteligencia artificial aplicada a la detección y categorización de incendios forestales mediante análisis de imágenes comunitarias.",
    experience_role_3_project_link: "🔗 Ver proyecto",
    experience_role_3_item_1: "<strong>Modelo de identificación de objetos:</strong> Desarrollé un modelo de visión por computadora que identifica objetos específicos en imágenes relacionadas con incendios forestales (humo, llamas, vegetación, estructuras afectadas, etc.).",
    experience_role_3_item_2: "<strong>Categorización de incendios:</strong> Implementé un sistema de vinculación automática de objetos detectados a categorías de incendios forestales establecidas, permitiendo clasificación precisa del tipo y severidad del evento.",
    experience_role_3_item_3: "<strong>Comparativa ciudadanía vs expertos:</strong> Realicé análisis comparativo entre el conocimiento y percepción de la ciudadanía frente a criterios de expertos, identificando brechas de conocimiento y patrones de percepción del riesgo.",
    experience_role_3_item_4: "<strong>Deep Learning con CNN:</strong> Utilicé redes neuronales convolucionales con TensorFlow y PyTorch para análisis de imágenes y procesamiento de lenguaje natural.",
    experience_role_3_item_5: "<strong>Visualización y análisis:</strong> Creé dashboards interactivos con Matplotlib y Seaborn para presentar resultados de detección y análisis comparativo.",
    experience_role_4_title: "Desarrollador de Software",
    experience_role_4_desc: "Proyecto E-ncendio: Adaptación de aplicación web a plataforma móvil para seguimiento de percepción comunitaria del riesgo de incendios.",
    experience_role_4_news_link: "🔗 Ver noticia",
    experience_role_4_item_1: "<strong>Adaptación móvil:</strong> Realicé la migración y adaptación de la aplicación web E-ncendio a una aplicación móvil con React Native, mejorando la accesibilidad y experiencia de usuario en dispositivos móviles.",
    experience_role_4_item_2: "<strong>Blockchain para trazabilidad:</strong> Implementé tecnología blockchain para garantizar la trazabilidad y transparencia de las respuestas de usuarios, asegurando la integridad de los datos comunitarios recopilados sobre percepción de riesgo.",
    experience_role_4_item_3: "<strong>Integración con backend:</strong> Desarrollé la conexión entre la aplicación móvil y los sistemas backend existentes, asegurando sincronización de datos y funcionamiento offline.",
    skills_title: "💻 Tech Stack",
    skills_languages_frameworks: "Lenguajes y Frameworks",
    skills_databases: "Bases de Datos",
    skills_ai_ml_data_science: "AI/ML y Data Science",
    skills_cloud_devops: "Cloud y DevOps",
    skills_dev_tools: "Herramientas de Desarrollo",
    skills_design_multimedia: "Diseño y Multimedia",
    skills_others: "Otros",
    skills_social_skills: "Habilidades Sociales",
    skills_soft_1: "Gestión del tiempo",
    skills_soft_2: "Trabajo en equipo",
    skills_soft_3: "Resolución de problemas",
    skills_soft_4: "Pensamiento crítico",
    skills_soft_5: "Liderazgo técnico",
    skills_soft_6: "Comunicación efectiva",
    skills_soft_7: "Organización y planificación",
    skills_soft_8: "Creatividad e innovación",
    skills_soft_9: "Adaptabilidad",
    skills_soft_10: "Proactividad",
    skills_soft_11: "Empatía",
    skills_soft_12: "Atención al detalle",
    skills_soft_13: "Orientación a resultados",
    skills_soft_14: "Ética profesional",
    skills_soft_15: "Colaboración interdisciplinaria",
    skills_soft_16: "Visión estratégica",
    skills_soft_17: "Mentoría y enseñanza",
    skills_soft_18: "Aprendizaje continuo",
    skills_soft_19: "Integridad y confiabilidad",
    skills_soft_20: "Pasión por la tecnología",
    footer_rights: "&copy; 2025 Sebastián Lara Barría. Todos los derechos reservados.",
  },
  en: {
    nav_about: "About Me",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_achievements: "Achievements",
    nav_skills: "Skills",
    about_title: '<span class="gradient-text">Sebastián Lara Barría</span>',
    about_location: "Santander, Spain",
    about_nationality: "Chilean Nationality",
    about_license: "Class B Driving License",
    about_role1: "Computer Engineer",
    about_role2: "Master in Data Science",
    about_role3: "PhD Candidate",
    about_contact: "Contact",
    about_specialization_title: "Specialization",
    about_specialization_p1: `
      I specialize in <strong class="text-primary">software architecture</strong>, <strong class="text-primary">full-stack development</strong>, <strong class="text-primary">SQL and relational databases</strong>, and <strong class="text-primary">applied artificial intelligence</strong>, with a particular focus on computer vision and predictive models for solving complex problems. My technical experience ranges from designing scalable systems to implementing machine learning and deep learning solutions in production environments.
      <br><br>
      I master modern technologies such as <strong class="text-primary">Next.js, React, Node.js, and databases like SQL and MongoDB</strong> for web and mobile application development, as well as specialized AI frameworks like <strong class="text-primary">PyTorch, TensorFlow, Keras, and Scikit-learn</strong> for building robust predictive models. Additionally, I have extensive experience working with cloud services like <strong class="text-primary">AWS, Azure, and Google Cloud Platform</strong>, implementing solutions that require large-scale processing, distributed storage, and continuous deployment of artificial intelligence models.
    `,
    about_experience_title: "Professional Experience",
    about_experience_p1: `
      Throughout my professional career, I have led and participated in <strong class="text-primary">digital transformation and process optimization projects</strong>, applying advanced techniques of machine learning, deep learning, and computer vision to improve operational efficiency and facilitate data-driven decision-making in strategic sectors such as <strong class="text-primary">road infrastructure</strong> and <strong class="text-primary">environmental sustainability</strong>.
      <br><br>
      My experience includes developing <strong class="text-primary">automatic detection and classification systems</strong> for pavement deterioration using convolutional neural networks, implementing citizen science platforms for community data collection and analysis, and building multivariate predictive models to assess the environmental impact of recycled materials. I have worked in collaborative and interdisciplinary environments, coordinating development teams and adapting technological solutions to the specific needs of each project.
    `,
    about_teaching_title: "Teaching",
    about_teaching_p1: `
      I have been a <strong class="text-primary">tutor in various basic science and computer engineering courses at the Universidad Austral de Chile</strong>, also assisting as a teacher in some subjects, where I have shared knowledge about modern application development with web technologies (React, Node.js, Express), design and management of relational and non-relational databases, as well as agile development methodologies (Scrum, Kanban).
      <br><br>
      My pedagogical approach focuses on <strong class="text-primary">project-based learning</strong>, combining solid theoretical foundations with intensive practices that replicate real industry scenarios. I actively promote critical thinking, team collaboration, and the use of modern version control tools (Git/GitHub), continuous integration, and automated deployment. My goal is to prepare professionals capable of facing the current challenges of software development with well-developed technical competencies and social skills.
    `,
    about_social_title: "Social Commitment",
    about_social_p1: `
      I have a deep commitment to projects that <strong class="text-primary">generate a positive impact on society and the environment</strong>. I am particularly interested in <strong class="text-primary">citizen science</strong> initiatives, where technology is put at the service of local communities to empower people in the collection, analysis, and use of data that directly affect their environment and quality of life.
      <br><br>
      I have developed platforms that facilitate citizen participation in environmental and territorial research projects, allowing the voices of communities to be heard and considered in decision-making processes. I firmly believe in the <strong class="text-primary">ethical, transparent, and responsible use of artificial intelligence</strong>, promoting the development of technological solutions that are inclusive, accessible, and sustainable, and that contribute to social equity and the care of the planet for future generations.
    `,
    achievements_title: "🏆 Achievements and Recognition",
    achievements_conferences_title: "Conferences and Publications",
    achievements_conf_1_title: "Master's Thesis Presentation",
    achievements_conf_1_event: "Chilean Computing Conference",
    achievements_conf_1_location: "Concepcion, Chile",
    achievements_conf_2_title: "IEEE Conference Presentation",
    achievements_conf_2_event: "ChileCon IEEE",
    achievements_conf_2_location: "Valdivia, Chile",
    achievements_projects_title: "Featured Projects",
    achievements_proj_1_location: "Madrid, Spain",
    achievements_proj_1_desc: "Citizen science platform that allows people to document and visualize social struggles over territory in different regions of the world.",
    achievements_proj_1_link: "🔗 vocesterritorios.com",
    achievements_proj_2_title: "Forest Fire Media Coverage Analysis",
    achievements_proj_2_org: "Austral University of Chile",
    achievements_proj_2_location: "Valdivia, Chile",
    achievements_proj_2_desc: "Analysis of media coverage and framing of forest fires using natural language processing techniques.",
    achievements_proj_3_title: "Community Territorial Perception Analysis of Forest Fires",
    achievements_proj_3_org: "Austral University of Chile",
    achievements_proj_3_location: "Valdivia, Chile",
    achievements_proj_3_desc: "Development of convolutional neural network models to analyze forest fire images and evaluate community territorial perception.",
    achievements_proj_4_title: "Citizen Science Platform Development",
    achievements_proj_4_org: "E-ncendio Project (FONDEF ID22I10072)",
    achievements_proj_4_location: "Valdivia, Chile",
    achievements_proj_4_desc: "Technological platform for community perception of forest fire risk using citizen science and artificial intelligence.",
    achievements_awards_title: "Recognitions",
    achievements_award_1_title: "Recognition for Conference Participation with Master's Thesis",
    achievements_award_1_org: "Master in Computer Science UACh",
    achievements_award_1_location: "Valdivia, Chile",
    achievements_award_2_title: "Recognition for Organizational Leadership",
    achievements_award_2_org: "Computer Engineering Workshop UACh",
    achievements_award_2_location: "Valdivia, Chile",
    achievements_award_3_title: "Recognition for Student Politics Career",
    achievements_award_3_org: "School of Computer Engineering UACh",
    achievements_award_3_location: "Valdivia, Chile",
    education_title: "🎓 Academic Education",
    education_phd_title: "PhD in Civil Engineering",
    education_status_ongoing: "Ongoing",
    education_status_distinction: "Distinction",
    education_research_focus: "Research Focus",
    education_phd_research_1: "Detection, classification, and characterization of recycled pavement using computer vision and deep learning",
    education_phd_research_2: "Participation in international conferences on artificial intelligence and pavements",
    education_technical_skills: "Technical Skills",
    education_social_skills: "Social Skills",
    education_master_title: "Master in Computer Science, Data Science track",
    education_main_achievements: "Main Achievements",
    education_master_thesis_text: "Thesis project on territorial analysis and community perception of images in forest fire contexts using computer vision and artificial intelligence.",
    education_master_thesis_link: "🔗 View graduation news",
    education_master_achievement_1: "Development of a computer vision model for object identification and forest fire categorization",
    education_master_achievement_2: "Comparative analysis between citizen and expert knowledge in wildfire risk perception",
    education_master_achievement_3: "Specialization in machine learning, convolutional neural networks, and large-scale data analysis",
    education_master_achievement_4: "Participation in international Computer Science conferences",
    education_engineering_title: "Computer Engineering",
    education_highlights: "Highlights",
    education_engineering_highlight_1: "Active participation in interdisciplinary projects and software development",
    education_engineering_highlight_2: "Participation in the Student Center of the Faculty of Engineering Sciences",
    education_engineering_highlight_3: "Tutor in: Calculus, Information Systems, Operations Research, and OOP",
    experience_title: "Work Experience",
    experience_role_1_title: "Software Architect and Developer | AI Researcher applied to Civil Engineering",
    experience_role_1_item_1: "Design and implementation of software architectures and intelligent systems for research projects in pavements and road infrastructures.",
    experience_role_1_item_2: "Participation in projects such as <strong>LIAISON</strong> (crack detection through computer vision), <strong>RECICLAN</strong> (economic and environmental optimization of recycled materials), and the Government of Cantabria's <strong>traffic sign detection</strong> project.",
    experience_role_1_item_3: "Development of <strong>deep learning</strong> and <strong>machine learning</strong> models for classification, prediction, and pavement deterioration assessment.",
    experience_role_1_item_4: "Creation of the digital platform for the <strong>Asphalt Mixes Laboratory (LabMezclas)</strong>, integrating test management, results, and specimen traceability.",
    experience_role_1_item_5: "Analysis of experimental data from the <strong>CRS Simulator</strong> and profilometer using artificial intelligence techniques and multicriteria models.",
    experience_role_1_item_6: "Collaboration in drafting three scientific papers and development of a doctoral thesis on AI applied to civil engineering and asphalt materials.",
    experience_role_2_title: "Software Developer",
    experience_role_2_desc: "<strong>Voces Territorios:</strong> Citizen science platform that allows communities in Latin America and Europe to document and make visible territorial transformations, struggles, and resistance against extractivism, gentrification, and land dispossession.",
    experience_role_2_project_link: "🔗 About the project",
    experience_role_2_item_1: "<strong>Citizen science mobile app:</strong> Developed a cross-platform mobile app with React Native and Expo Go (available on Google Play and App Store) that allows communities to document territorial transformations through photos, audio, videos, and documents, both online and offline.",
    experience_role_2_item_2: "<strong>Interactive collaborative atlas:</strong> Implemented the official website using Next.js with a collective map where users from different regions contribute to building an atlas of territorial transformations, disputes, and resistance, strengthening global solidarity networks.",
    experience_role_2_item_3: "<strong>Scalable multimedia backend:</strong> Designed and implemented backend architecture with MongoDB and RESTful APIs to manage user data, community testimonies, geolocated multimedia content, and offline-first synchronization.",
    experience_role_2_item_4: "<strong>Adaptable participatory platform:</strong> Developed an accessible interface adapted to the cultural conditions of each territory, allowing communities to propose their own research projects and represent local knowledge.",
    experience_role_2_item_5: "<strong>Interdisciplinary collaboration:</strong> Worked with researchers from the Contested Territories network and the Horizon 2020 Marie Sklodowska-Curie project to build a bridge between academia and grassroots movements through horizontal collaboration.",
    experience_role_3_title: "Data Scientist",
    experience_role_3_desc: "Research in artificial intelligence applied to forest fire detection and categorization through community image analysis.",
    experience_role_3_project_link: "🔗 View project",
    experience_role_3_item_1: "<strong>Object identification model:</strong> Developed a computer vision model that identifies specific objects in images related to forest fires (smoke, flames, vegetation, affected structures, etc.).",
    experience_role_3_item_2: "<strong>Fire categorization:</strong> Implemented an automatic linking system from detected objects to defined forest fire categories, enabling accurate classification of event type and severity.",
    experience_role_3_item_3: "<strong>Citizens vs experts comparison:</strong> Performed comparative analysis between citizen knowledge/perception and expert criteria, identifying knowledge gaps and risk perception patterns.",
    experience_role_3_item_4: "<strong>Deep Learning with CNN:</strong> Used convolutional neural networks with TensorFlow and PyTorch for image analysis and natural language processing.",
    experience_role_3_item_5: "<strong>Visualization and analysis:</strong> Built interactive dashboards with Matplotlib and Seaborn to present detection and comparative analysis results.",
    experience_role_4_title: "Software Developer",
    experience_role_4_desc: "E-ncendio project: adaptation of a web application to a mobile platform for monitoring community perception of wildfire risk.",
    experience_role_4_news_link: "🔗 View news",
    experience_role_4_item_1: "<strong>Mobile adaptation:</strong> Migrated and adapted the E-ncendio web application to a mobile app with React Native, improving accessibility and user experience on mobile devices.",
    experience_role_4_item_2: "<strong>Blockchain for traceability:</strong> Implemented blockchain technology to guarantee traceability and transparency of user responses, ensuring integrity of collected community risk perception data.",
    experience_role_4_item_3: "<strong>Backend integration:</strong> Developed connectivity between the mobile app and existing backend systems, ensuring data synchronization and offline operation.",
    skills_title: "💻 Tech Stack",
    skills_languages_frameworks: "Languages and Frameworks",
    skills_databases: "Databases",
    skills_ai_ml_data_science: "AI/ML and Data Science",
    skills_cloud_devops: "Cloud and DevOps",
    skills_dev_tools: "Development Tools",
    skills_design_multimedia: "Design and Multimedia",
    skills_others: "Others",
    skills_social_skills: "Soft Skills",
    skills_soft_1: "Time management",
    skills_soft_2: "Teamwork",
    skills_soft_3: "Problem solving",
    skills_soft_4: "Critical thinking",
    skills_soft_5: "Technical leadership",
    skills_soft_6: "Effective communication",
    skills_soft_7: "Organization and planning",
    skills_soft_8: "Creativity and innovation",
    skills_soft_9: "Adaptability",
    skills_soft_10: "Proactivity",
    skills_soft_11: "Empathy",
    skills_soft_12: "Attention to detail",
    skills_soft_13: "Results orientation",
    skills_soft_14: "Professional ethics",
    skills_soft_15: "Interdisciplinary collaboration",
    skills_soft_16: "Strategic vision",
    skills_soft_17: "Mentoring and teaching",
    skills_soft_18: "Continuous learning",
    skills_soft_19: "Integrity and reliability",
    skills_soft_20: "Passion for technology",
    footer_rights: "&copy; 2025 Sebastián Lara Barria. All rights reserved.",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-lang-key]").forEach((elem) => {
    const key = elem.getAttribute("data-lang-key");
    if (translations[lang] && translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  document.body.setAttribute('data-lang', lang);
  const langBtn = document.getElementById('lang-btn');
  if (lang === 'es') {
    langBtn.textContent = 'EN';
  } else {
    langBtn.textContent = 'ES';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-btn');
  langBtn.addEventListener('click', () => {
    const currentLang = document.body.getAttribute('data-lang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    // Aquí necesitarás recargar el contenido de las secciones con el nuevo idioma.
    // Esto dependerá de cómo se genera el contenido dinámicamente.
    // Por ahora, solo cambia el idioma de la navegación.
  });

  // Set initial language
  setLanguage('es');
});
