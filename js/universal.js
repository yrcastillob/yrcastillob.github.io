/*************************** VARIABLES ***************************/
// Cookies Names
const themeName = "theme";
const languageName = "language";
const zoomName = "zoom";
const es = "es";
const en = "en";
const fr = "fr";
const pt = "pt";
let theme;
let language;

// Managing Theme
const indexCss = document.getElementById("stylesheet");
const themeIcon = document.getElementById("themeicon");
const logos = document.getElementsByClassName("logoimage");

// Language HTML Elements

const htmlContent = {
    //List with html content to change language
    menuOptions: {
        about: {
            es: "Acerca de mí",
            en: "About me",
            fr: "À propos de moi",
            pt: "Sobre mim"
        },
        projects: {
            es: "Proyetos",
            en: "Projects",
            fr: "Projets",
            pt: "Projetos"
        },
        writings: {
            es: "Escritos",
            en: "Writings",
            fr: "Écrits",
            pt: "Escritos"
        }
    },
    contactMeIcon: {
        es: "Envíame un correo",
        en: "Send me an email",
        fr: "Envoyez-moi un email",
        pt: "Envie-me um email"
    },
    welcomemessage: {
        es: `
        ¡Bienvenido a mi página web personal!
                <p class="welcomemessage--title">Recomendaciones</p>
                <ul>
                    <li>Utiliza la bandera redonda en el menú superior para cambiar el idioma.</li>
                    <li>La luna/sol en el menú superior cambia entre el modo oscuro y claro.</li>
                    <li>Accede a las opciones de accesibilidad en el símbolo ubicado a tu mano derecha.</li>
                </ul>
                <p class="welcomemessage--title">Selecciona una opción en la barra inferior para obtener más información sobre mí.</p>
        `,
        en: `
        Welcome to my personal website!
        <p class="welcomemessage--title">Recommendations</p>
        <ul class="welcomemessage--list">
            <li>Use the round flag in the top menu to change the language.</li>
            <li>The moon/sun icon in the top menu toggles between dark and light mode.</li>
            <li>Access accessibility options using the symbol located to your right.</li>
        </ul>
        <p class="welcomemessage--title">Select an option in the bottom bar for more information about me.</p>
        `,
        fr: `
        Bienvenue sur mon site web personnel !
        <p class="welcomemessage--title">Recommandations</p>
        <ul class="welcomemessage--list">
            <li>Utilisez le drapeau rond dans le menu supérieur pour changer de langue.</li>
            <li>L'icône lune/soleil dans le menu supérieur bascule entre le mode sombre et clair.</li>
            <li>Accédez aux options d'accessibilité en utilisant le symbole situé à votre droite.</li>
        </ul>
        <p class="welcomemessage--title">Sélectionnez une option dans la barre inférieure pour plus d'informations sur moi.</p>
        `,
        pt: `
        Bem-vindo ao meu site pessoal!
        <p class="welcomemessage--title">Recomendações</p>
        <ul class="welcomemessage--list">
            <li>Use a bandeira redonda no menu superior para mudar o idioma.</li>
            <li>O ícone de lua/sol no menu superior alterna entre o modo escuro e claro.</li>
            <li>Acesse as opções de acessibilidade usando o símbolo localizado à sua direita.</li>
        </ul>
        <p class="welcomemessage--title">Selecione uma opção na barra inferior para mais informações sobre mim.</p>
        `
    }
}

// Interactive CV

const responsesInteractiveCV = {
    education: {
        title: {
            es: "Educación",
            en: "Education",
            fr: "Éducation",
            pt: "Educação"
        },
        es:`<p>Esta es mi educación: </p>
        <br> 
        <strong>💻 Ingeniería de Sistemas.</strong>
        <p>Universidad Ean.</p>
        <p>2024<p>
        <br> 
        <strong>📖 Lenguas Modernas, énfasis en Comunicación Organizacional.</strong>
        <p>Universidad Ean.</p>
        <p>2020<p>`,
        en:`<p>This is my education: </p>
        <br> 
        <strong>💻 Bachelor's degree in System Engineering.</strong>
        <p>Ean University</p>
        <p>2024<p>
        <br> 
        <strong>📖 Bachelor's degree in Modern Languages, major in Organizational Communication.</strong>
        <p>Ean University</p>
        <p>2020<p>`,
        pt:`<p>Esta é a minha educação:</p>
        <br> 
        <strong>💻 Bacharelado em Engenharia de Sistemas.</strong>
        <p>Universidade Ean</p>
        <p>2024<p>
        <br> 
        <strong>📖 Bacharelado em Línguas Modernas, com ênfase em Comunicação Organizacional.</strong>
        <p>Universidade Ean</p>
        <p>2020<p>`,
        fr:`<p>Mon éducation :</p>
        <br> 
        <strong>💻 Diplôme de licence en Ingénierie des Systèmes.</strong>
        <p>Université Ean</p>
        <p>2024<p>
        <br> 
        <strong>📖 Diplôme de licence en Langues Modernes, spécialisation en Communication Organisationnelle. </strong>
        <p>Université Ean</p>
        <p>2020<p>`
    },
    profile:{
        title: {
            es: "Perfil",
            en: "Profile",
            fr: "Profil",
            pt: "Perfil"
        },
        es: `<p>Soy un <strong>desarrollador junior full stack</strong>, graduado en <strong>Ingeniería de Sistemas</strong> en 2024 por la Universidad Ean. Además, soy <strong>profesional de Lenguas Modernas</strong> con énfasis en comunicación organizacional, obteniendo mi título en 2020. Mi interés se centra en el desarrollo tanto del front end como del back end con miras a convertirme en un full stack senior.</p>
        <br>
        <p>Apasionado por el mundo del desarrollo web, busco alinear mi trayectoria profesional con esta área, buscando oportunidades que me permitan crecer y aplicar mis habilidades de manera efectiva. Me caracterizo por mi constante búsqueda de conocimiento, mi capacidad de investigación y mi dedicación para realizar todas mis tareas con diligencia, responsabilidad y excelencia.</p>`,
        en: `<p>I am a <strong>junior full stack developer</strong>, graduated in <strong>Systems Engineering</strong> in 2024 from Ean University. Additionally, I am a <strong>Modern Languages professional</strong> with a focus on organizational communication, having obtained my degree in 2020. My interest lies in both front end and back end development with the aim of becoming a senior full stack developer.</p>
        <br>
        <p>Passionate about the world of web development, I seek to align my career path with this area, looking for opportunities that allow me to grow and apply my skills effectively. I am characterized by my constant pursuit of knowledge, my research skills, and my dedication to performing all my tasks with diligence, responsibility, and excellence.</p>`,
        pt: `<p>Sou um <strong>desenvolvedor júnior full stack</strong>, formado em <strong>Engenharia de Sistemas</strong> em 2024 pela Universidade Ean. Além disso, sou um <strong>profissional de Línguas Modernas</strong> com ênfase em comunicação organizacional, tendo obtido meu diploma em 2020. Meu interesse está tanto no desenvolvimento front end quanto no back end, com o objetivo de me tornar um desenvolvedor full stack sênior.</p>
        <br>
        <p> Apaixonado pelo mundo do desenvolvimento web, busco alinhar minha trajetória profissional com essa área, procurando oportunidades que me permitam crescer e aplicar minhas habilidades de forma eficaz. Sou caracterizado pela minha constante busca por conhecimento, minhas habilidades de pesquisa e meu compromisso em realizar todas as minhas tarefas com diligência, responsabilidade e excelência.</p>`,
        fr: `<p>Je suis un <strong>développeur junior full stack</strong>, diplômé en <strong>Ingénierie des Systèmes</strong> en 2024 de l'Université Ean. De plus, je suis un <strong>professionnel des Langues Modernes</strong> avec une spécialisation en communication organisationnelle, ayant obtenu mon diplôme en 2020. Mon intérêt se porte à la fois sur le développement front end et back end dans le but de devenir un développeur full stack senior.</p>
        <br>
        <p>Passionné par le monde du développement web, je cherche à aligner mon parcours professionnel avec ce domaine, à la recherche d'opportunités qui me permettent de croître et d'appliquer mes compétences de manière efficace. Je me caractérise par ma quête constante de connaissance, mes compétences en recherche et mon dévouement à accomplir toutes mes tâches avec diligence, responsabilité et excellence.</p>`
    },
    workExperience: { title: {
        es: "Experiencia Profesional",
        en: "Professional Experience",
        fr: "Expérience Professionnelle",
        pt: "Experiência Profissional"
    },
    es: `
    <strong>Enel Colombia</strong>
    <p>Pasante</p>
    <p>6 meses</p>
    <ul>
        <li>Actualización de base de datos e informes.</li>
        <li>Apoyo en la creación de consultas correspondientes al centro de control.</li>
        <li>Proyecto unificar enlaces KML GPS en QGIS utilizando Python.</li>
    </ul>

    <strong>EXL SERVICE COLOMBIA</strong>
    <p>Analista de calidad<p>
    <p>1.5 Años</p>
    <ul>
        <li>Auditoría de llamadas para aseguramiento de calidad.</li> 
        <li>Sesiones de entrenamiento para llenar vacíos conceptuales. </li>
        <li>Actividades de apoyo para mejoramiento del rendimiento de los agentes.</li>
    </ul>

    <p>Service Advisor<p>
    <p>1 Años</p>
    <ul>
        <li>Atención al cliente de manera telefónica (Inglés).</li> 
    </ul>

    <strong>Concentrix CVG Customer Management Colombia S.A.S</strong>
    <p>Asesor de servicios </p>
    <p>10 Meses </p>
    <ul>
        <li>Atención al cliente de manera telefónica (Inglés).</li> 
    </ul>

    <strong>Ministerio Relaciones Exteriores – GIT UNESCO</strong>
    <p>Pasante</p>
    <p>6 meses<p> 
    <ul>
        <li>Monitoreo diario de medios con las noticias más relevantes para las áreas y temas que se trabajan en el Grupo Interno de Trabajo UNESCO en cancillería. </li>
        <li>Proyección de oficios, memorandos, correos electrónicos, fichas informativas y ayudas de memoria en el idioma que le sea solicitado. </li>
        <li>Actualización de las bases de datos de contactos de las entidades para: difusión de convocatorias; redes (cátedras, ciudades creativas, ciudades de aprendizaje), entre otros.</li> 
        <li>Apoyo en el proceso de actualización de los contenidos de la página web de la Comisión Nacional de Cooperación con la UNESCO. </li>
        <li>Gestión de archivo y elaboración de inventario. </li>
        <li>Apoyo logístico en la realización de las diferentes reuniones o eventos. </li>
    </ul>
    `,
    en: `<strong>Enel Colombia</strong>
    <p>Intern</p>
    <p>6 months</p>
    <ul>
        <li>Database and report updates.</li>
        <li>Support in creating queries for the control center.</li>
        <li>Project to unify GPS KML links in QGIS using Python.</li>
    </ul>
    
    <strong>EXL SERVICE COLOMBIA</strong>
    <p>Quality Analyst</p>
    <p>1.5 Years</p>
    <ul>
        <li>Call auditing for quality assurance.</li> 
        <li>Training sessions to fill conceptual gaps.</li>
        <li>Support activities to improve agent performance.</li>
    </ul>
    
    <p>Service Advisor</p>
    <p>1 Year</p>
    <ul>
        <li>Customer service over the phone (English).</li> 
    </ul>
    
    <strong>Concentrix CVG Customer Management Colombia S.A.S</strong>
    <p>Service Advisor</p>
    <p>10 Months</p>
    <ul>
        <li>Customer service over the phone (English).</li> 
    </ul>
    
    <strong>Ministry of Foreign Affairs - GIT UNESCO</strong>
    <p>Intern</p>
    <p>6 months</p> 
    <ul>
        <li>Daily media monitoring with the most relevant news for the areas and topics worked on in the UNESCO Internal Working Group at the Foreign Ministry.</li>
        <li>Drafting letters, memoranda, emails, briefing notes, and memory aids in the requested language.</li>
        <li>Updating contact databases of entities for: dissemination of calls; networks (chairs, creative cities, learning cities), among others.</li> 
        <li>Support in updating the content of the National Commission for Cooperation with UNESCO website.</li>
        <li>File management and inventory preparation.</li>
        <li>Logistical support in organizing various meetings or events.</li>
    </ul>
    `,
    fr: `<strong>Enel Colombia</strong>
    <p>Stagiaire</p>
    <p>6 mois</p>
    <ul>
        <li>Mise à jour de la base de données et des rapports.</li>
        <li>Soutien dans la création de requêtes pour le centre de contrôle.</li>
        <li>Projet d'unification des liens GPS KML dans QGIS en utilisant Python.</li>
    </ul>
    
    <strong>EXL SERVICE COLOMBIA</strong>
    <p>Analyste qualité</p>
    <p>1,5 ans</p>
    <ul>
        <li>Audit d'appels pour l'assurance qualité.</li> 
        <li>Sessions de formation pour combler les lacunes conceptuelles.</li>
        <li>Activités de soutien pour améliorer la performance des agents.</li>
    </ul>
    
    <p>Conseiller de service</p>
    <p>1 an</p>
    <ul>
        <li>Service client par téléphone (anglais).</li> 
    </ul>
    
    <strong>Concentrix CVG Customer Management Colombia S.A.S</strong>
    <p>Conseiller de service</p>
    <p>10 mois</p>
    <ul>
        <li>Service client par téléphone (anglais).</li> 
    </ul>
    
    <strong>Ministère des Affaires étrangères - GIT UNESCO</strong>
    <p>Stagiaire</p>
    <p>6 mois</p> 
    <ul>
        <li>Suivi quotidien des médias avec les nouvelles les plus pertinentes pour les domaines et sujets traités dans le Groupe de travail interne de l'UNESCO au ministère des Affaires étrangères.</li>
        <li>Rédaction de lettres, de notes, de courriels, de notes d'information et de mémos dans la langue demandée.</li>
        <li>Mise à jour des bases de données de contacts des entités pour : diffusion d'appels à candidatures ; réseaux (chaires, villes créatives, villes apprenantes), entre autres.</li> 
        <li>Soutien à la mise à jour du contenu du site web de la Commission nationale de coopération avec l'UNESCO.</li>
        <li>Gestion des archives et préparation des inventaires.</li>
        <li>Soutien logistique dans l'organisation de diverses réunions ou événements.</li>
    </ul>
    `,
    pt: `<strong>Enel Colombia</strong>
    <p>Estagiário</p>
    <p>6 meses</p>
    <ul>
        <li>Atualização de banco de dados e relatórios.</li>
        <li>Suporte na criação de consultas para o centro de controle.</li>
        <li>Projeto para unificar links GPS KML no QGIS usando Python.</li>
    </ul>
    
    <strong>EXL SERVICE COLOMBIA</strong>
    <p>Analista de qualidade</p>
    <p>1,5 anos</p>
    <ul>
        <li>Auditoria de chamadas para garantia de qualidade.</li> 
        <li>Sessões de treinamento para preencher lacunas conceituais.</li>
        <li>Atividades de apoio para melhorar o desempenho dos agentes.</li>
    </ul>
    
    <p>Consultor de serviço</p>
    <p>1 ano</p>
    <ul>
        <li>Atendimento ao cliente por telefone (inglês).</li> 
    </ul>
    
    <strong>Concentrix CVG Customer Management Colombia S.A.S</strong>
    <p>Consultor de serviço</p>
    <p>10 meses</p>
    <ul>
        <li>Atendimento ao cliente por telefone (inglês).</li> 
    </ul>
    
    <strong>Ministério das Relações Exteriores - GIT UNESCO</strong>
    <p>Estagiário</p>
    <p>6 meses</p> 
    <ul>
        <li>Monitoramento diário da mídia com as notícias mais relevantes para as áreas e tópicos trabalhados no Grupo de Trabalho Interno da UNESCO no Ministério das Relações Exteriores.</li>
        <li>El
    `
    },
    languages: {
        title: {
            es: "Idiomas",
            en: "Languages",
            fr: "Langues",
            pt: "Idiomas"
        },
        es:  `
        <div class='cvresponse_languages'>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/spanish.svg" alt="languagescv" >
            <p>Español</p>
            <p>Nativo</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/english.svg" alt="languagescv" >
            <p>Inglés</p>
            <p>C1 - Certificado IELTS Academics 2023</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/french.svg" alt="languagescv" >
            <p>Francés</p>
            <p>B2 - Certificado DELF 2020</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/portuguese.svg" alt="languagescv" >
            <p>Portugués</p>
            <p>B2 - Certificado CELEBRAS 2019</p>
        </div>
         </div>
             `,
        en: `
        <div class='cvresponse_languages'>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/spanish.svg" alt="languagescv" >
            <p>Spanish</p>
            <p>Native</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/english.svg" alt="languagescv" >
            <p>English</p>
            <p>C1 - IELTS Academics Certificate 2023</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/french.svg" alt="languagescv" >
            <p>French</p>
            <p>B2 - DELF Certificate 2020</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/portuguese.svg" alt="languagescv" >
            <p>Portuguese</p>
            <p>B2 - CELEBRAS Certificate 2019</p>
        </div>
         </div>
             `,
        fr: `
        <div class='cvresponse_languages'>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/spanish.svg" alt="languagescv" >
            <p>Espagnol</p>
            <p>Langue maternelle</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/english.svg" alt="languagescv" >
            <p>Anglais</p>
            <p>C1 - Certificat IELTS Academics 2023</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/french.svg" alt="languagescv" >
            <p>Français</p>
            <p>B2 - Certificat DELF 2020</p>
        </div>
        <div class='cvresponse_languages--item'>
            <img src="../images/index/portuguese.svg" alt="languagescv" >
            <p>Portugais</p>
            <p>B2 - Certificat CELEBRAS 2019</p>
        </div>
        </div>
        `,
        pt: `
        <div class='cvresponse_languages'>
            <div class='cvresponse_languages--item'>
                <img src="../images/index/spanish.svg" alt="languagescv" >
                <p>Espanhol</p>
                <p>Nativo</p>
            </div>
            <div class='cvresponse_languages--item'>
                <img src="../images/index/english.svg" alt="languagescv" >
                <p>Inglês</p>
                <p>C1 - Certificado IELTS Academics 2023</p>
            </div>
            <div class='cvresponse_languages--item'>
                <img src="../images/index/french.svg" alt="languagescv" >
                <p>Francês</p>
                <p>B2 - Certificado DELF 2020</p>
            </div>
            <div class='cvresponse_languages--item'>
                <img src="../images/index/portuguese.svg" alt="languagescv" >
                <p>Português</p>
                <p>B2 - Certificado CELEBRAS 2019</p>
            </div>
        </div>
        `
    },
    skills: {
        title: {
            es: "Habilidades",
            en: "Skills",
            fr: "Compétences",
            pt: "Habilidades"
        },
        es: `
        Habilidades técnicas
        <div>
            <ul>
                <li>HTML Avanzado</li>
                <li>CSS avanzado</li>
                <li>JavaScript intermedio</li>
                <li>Python intermedio</li>
                <li>Node.JS intermedio</li>
                <li>MongoDB intermedio</li>
                <li>Angular intermedio</li>
                <li>Excel intermedio</li>
                <li>PowerBI intermedio</li>
            </ul>
        </div>
        Habilidades blandas
        <div>
            <ul>
                <li>Resolución de problemas</li>
                <li>Aprendizaje rápido y permanente</li>
                <li>Manejo del tiempo</li>
                <li>Atención al detalle</li>
                <li>Comunicación</li>
            </ul>
        </div>
        `,
        en: `
        Technical Skills
        <div>
            <ul>
                <li>Advanced HTML</li>
                <li>Advanced CSS</li>
                <li>Intermediate JavaScript</li>
                <li>Intermediate Python</li>
                <li>Intermediate Node.JS</li>
                <li>Intermediate MongoDB</li>
                <li>Intermediate Angular</li>
                <li>Intermediate Excel</li>
                <li>Intermediate PowerBI</li>
            </ul>
        </div>
        Soft Skills
        <div>
            <ul>
                <li>Problem Solving</li>
                <li>Quick and Permanent Learning</li>
                <li>Time Management</li>
                <li>Attention to Detail</li>
                <li>Communication</li>
            </ul>
        </div>
        `,
        fr: `
        Compétences Techniques
        <div>
            <ul>
                <li>HTML Avancé</li>
                <li>CSS Avancé</li>
                <li>JavaScript Intermédiaire</li>
                <li>Python Intermédiaire</li>
                <li>Node.JS Intermédiaire</li>
                <li>MongoDB Intermédiaire</li>
                <li>Angular Intermédiaire</li>
                <li>Excel Intermédiaire</li>
                <li>PowerBI Intermédiaire</li>
            </ul>
        </div>
        Compétences Douces
        <div>
            <ul>
                <li>Résolution de Problèmes</li>
                <li>Apprentissage Rapide et Permanent</li>
                <li>Gestion du Temps</li>
                <li>Attention aux Détails</li>
                <li>Communication</li>
            </ul>
        </div>
        `,
        pt: `
        Habilidades Técnicas
        <div>
            <ul>
                <li>HTML Avançado</li>
                <li>CSS Avançado</li>
                <li>JavaScript Intermediário</li>
                <li>Python Intermediário</li>
                <li>Node.JS Intermediário</li>
                <li>MongoDB Intermediário</li>
                <li>Angular Intermediário</li>
                <li>Excel Intermediário</li>
                <li>PowerBI Intermediário</li>
            </ul>
        </div>
        Habilidades Comportamentais
        <div>
            <ul>
                <li>Resolução de Problemas</li>
                <li>Aprendizado Rápido e Permanente</li>
                <li>Gerenciamento do Tempo</li>
                <li>Atenção aos Detalhes</li>
                <li>Comunicação</li>
            </ul>
        </div>
        `
    }
}

const questionsInteractiveCV = {
    education: {
        es: '¿Cuál es tu educación? 👓',
        en: 'What is your education? 👓',
        fr: 'Quelle est votre éducation? 👓',
        pt: 'Qual é a sua educação? 👓'
    },
    profile:{
        es: '¿Cuál es tu perfil profesional? 👔',
        en: 'What is your professional profile? 👔',
        fr: 'Quel est votre profil professionnel ? 👔',
        pt: 'Qual é o seu perfil profissional? 👔'
    },
    languages:{
        es: '🔊 ¿Qué idiomas hablas?',
        en: '🔊 What languages do you speak?',
        fr: '🔊 Quelles langues parles-tu ?',
        pt: '🔊 Quais idiomas você fala?'
    },
    workExperience: {
        es: '¿Cuál es tu experiencia profesional? 🧾',
        en: 'What is your professional experience? 🧾',
        fr: 'Quelle est votre expérience professionnelle ? 🧾',
        pt: 'Qual é a sua experiência profissional? 🧾'
    },
    skills: {
        es: '¿Cuáles son tus habilidades? 📑',
        en: 'What are your skills? 📑',
        fr: 'Quelles sont vos compétences ? 📑',
        pt: 'Quais são as suas habilidades? 📑'
    }
}


const pairingHtmlContent = [
    //List pairing HTML elements names with content
    ["aboutmemenu", htmlContent.menuOptions.about],
    ["projectsmenu", htmlContent.menuOptions.projects],
    ["writingmenu", htmlContent.menuOptions.writings],
    ["sendmemessagetag", htmlContent.contactMeIcon],
    ["welcomemessage",htmlContent.welcomemessage],
    ["educationbutton",responsesInteractiveCV.education.title],
    ["profilebutton",responsesInteractiveCV.profile.title],
    ["experiencebutton",responsesInteractiveCV.workExperience.title],
    ["languagebutton",responsesInteractiveCV.languages.title],
    ["skillsbutton",responsesInteractiveCV.skills.title],
];


/*************************** COOKIES ***************************/

function setCookie(cname, cvalue, exdays) {
    /*Function to set Cookies taken from https://www.w3schools.com/js/js_cookies.asp*/
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    /*Function to get Cookies taken from https://www.w3schools.com/js/js_cookies.asp*/
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

/**************************FUNCTION TO MANAGE CHAT**************************/

function getInteractiveCVInfo( topic, objectSelection ){
    /*Function to obtain the object related to the dynamic CV that im creating
    Params:
        Topics: integer to select topic: 1 to education, 2 langauges, 3 profile, 4 skills, 5 work experience.
        objectSelection: object that contains the responses. it must have properties education languages
        profile skills and workexperience
    */
    let object = null;
    switch(topic){
        case 1:
            object = objectSelection.education;
            object.className = "messageEducation";
            break;
        case 2:
            object = objectSelection.languages;
            object.className = "messageLanguage";
            break;
        case 3:
            object = objectSelection.profile;
            object.className = "messageProfile";
            break;
        case 4:
            object = objectSelection.skills;
            object.className = "messageSkills";
            break;
        case 5:
            object = objectSelection.workExperience;
            object.className = "messageWorkExperiece";
            break;
    }

    return object;
}


function createMessage( className, object ){
    /*Function to create html message in the chat element.
    Params:
    object = Object that contains the data to be retrieved.
    className = class that will be asssigned, it can be usermessage or systemmessage*/
    language = getCookie( languageName );
    let innerContent = "";
    const chat = document.getElementById("chatmessages");
    switch ( language ){
        case es:
            innerContent = object.es;
            break;
        case en:
            innerContent = object.en;
            break;
        case fr:
            innerContent = object.fr;
            break;
        case pt:
            innerContent = object.pt;
            break;
    }
    let div = document.createElement("div");
    div.classList.add(className);
    if (className === "systemmessage"){
        div.classList.add(object.className);
    }
    div.innerHTML = innerContent;
    chat.appendChild(div);
    scrollDownChat()
}

function scrollDownChat() {
    /*Function so it always shows the last message in the screen of the chat*/
    var container = document.getElementById("chatmessages");
    container.scrollTop = container.scrollHeight;
}

function interactCV( topic ){
    /*Function to ask and receive the answer about my profile as an interactive cv*/
    setTimeout(function() {
        createMessage( "usermessage", getInteractiveCVInfo( topic, questionsInteractiveCV ));
    }, 300);

    setTimeout(function() {
        createMessage("systemmessage", getInteractiveCVInfo(topic, responsesInteractiveCV));
    }, 1100);

}


/**************************FUNCTION TO CHANGE LANGUAGE**************************/


function inyectHtmlContentLanguage( idHtml, object ){
    /*Function to inyect html content according to language selected using id of the Html element
    Params:
    idHtml = Contains html element in string format.
    object = object that contains the text in different languages, it must be in es, en, fr, and pt*/
    innerContent = "";
    switch ( language ){
        case es:
            innerContent = object.es;
            break;
        case en:
            innerContent = object.en;
            break;
        case fr:
            innerContent = object.fr;
            break;
        case pt:
            innerContent = object.pt;
            break;
    }
    element = document.getElementById(idHtml);
    element.innerHTML = innerContent;
}

function insertLanguageWebHtmlElements( pairingList ){
    /* Insert the html elements text based on the language selected by the user.
    Params: 
    array that match in zero index the name of the id element in string and in position 1
    the object that contains the language.*/
    pairingList.forEach(pair => {
        inyectHtmlContentLanguage( pair[0], pair[1] );
    });
}

function changeLanguage( languageSelection ){
    /*Function to change the language of the web page.
    Params:
    languageselection = string that only can be sp, en, pt or fr */
    setCookie( languageName, languageSelection, 4 );
    language = getCookie( languageName );
    insertLanguageWebHtmlElements( pairingHtmlContent );
    changeImageLangue ( "navlanguageimage" );
}

function changeImageLangue ( idImageHtml ){
    /*Function to change the image of the background of a id element base on the language selected*/
    element = document.getElementById( idImageHtml);
    switch ( language ){
        case es:
            element.style.backgroundImage = "url('../images/index/spanish.svg')";
            break;
        case en:
            element.style.backgroundImage = "url('../images/index/english.svg')";
            break;
        case fr:
            element.style.backgroundImage = "url('../images/index/french.svg')";
            break;
        case pt:
            element.style.backgroundImage = "url('../images/index/portuguese.svg')";
            break;
    }
}

/***************************FUNCTION TO SET INITIAL SETTINGS***************************/

function initialSetting(){
    /*Function that does the initial setting of the webpage keeping in mind if it exist or not a cookie*/
    theme = getCookie(themeName);

    if( theme === null || theme === "" || theme === undefined ){
        theme = "1";
    }

    if ( theme === "2" ){
        indexCss.href = '../css/indexDark.css';
        themeIcon.src = '../images/index/lightmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimplewhite.svg';
        }
    }else if ( theme === "1" ){
        indexCss.href = '../css/indexLight.css';
        themeIcon.src = '../images/index/darkmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimple.svg';
        }
    }

    language = getCookie(languageName);
    if( language === null || language === "" || language === undefined ){
        language = "en";
    }

    insertLanguageWebHtmlElements( pairingHtmlContent );
    changeImageLangue ( "navlanguageimage" );
    scrollDownChat()
}

function display(id,typeDisplay){
    /*Function to add a display css option to an element by accesing its ID.*/
    element = document.getElementById(id);
    element.style.display = typeDisplay;
}

function changeTheme(){
    /*Function in charge to change the theme of the app*/

    if(indexCss.href.includes('indexLight.css')){
        indexCss.href = '../css/indexDark.css';
        themeIcon.src = '../images/index/lightmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimplewhite.svg';
        }
        setCookie(themeName, "2", 4);
    }
    else if(indexCss.href.includes('indexDark.css')){
        indexCss.href = '../css/indexLight.css';
        themeIcon.src = '../images/index/darkmode.svg';
        for (var i = 0; i < logos.length; i++) {
            var logo = logos[i];
            logo.src = '../images/index/logosimple.svg';
        }
        setCookie(themeName, "1", 4);
    }
}



/***************************** CHAT FUNCTIONS ******************************/

initialSetting()
