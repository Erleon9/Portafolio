import { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt,
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaCode,
  FaLeaf,
  FaDownload,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCogs,
  FaCloud
} from 'react-icons/fa';
import {
  MdComputer,
  MdNetworkWifi,
  MdStorage,
  MdSettings,
  MdBuild,
  MdCloud
} from 'react-icons/md';
import './App.css';

// Configuración de imágenes - fácil de actualizar
const imageConfig = {
  profilePhoto: 'https://github.com/Erleon9.png',
  personalPhotos: [
    '/PHOTO-2024-04-05-10-06-20.jpg',
    '/PHOTO-2024-05-31-11-02-23.jpg'
  ],
  companies: {
    giadela: '/images/companies/Giadela.png',
    diamante: '/images/companies/GrupoElDiamante.png', 
    grabaso: '/images/companies/Grabazo.png',
    granja: '/images/companies/GranjaAgroInsumos.png',
    sanJulian: '/images/companies/JulianMontenegro.png',
    piave: '/images/companies/Piave.png',
    agroFarm: '/images/companies/AgroFarm.png'
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para descargar CV como PDF
  const handleDownloadCV = () => {
    try {
      // Crear una nueva ventana con el CV optimizado para PDF
      const cvWindow = window.open('/cv.html', '_blank', 'width=800,height=1000,scrollbars=yes,resizable=yes');
      
      if (cvWindow) {
        // Esperar a que cargue y luego activar la impresión
        cvWindow.addEventListener('load', () => {
          setTimeout(() => {
            cvWindow.print();
          }, 1500);
        });
        
        // Backup: Si el evento load no funciona, intentar después de 2 segundos
        setTimeout(() => {
          if (cvWindow && !cvWindow.closed) {
            cvWindow.print();
          }
        }, 2500);
      } else {
        // Si la ventana popup fue bloqueada, abrir en nueva pestaña
        window.open('/cv.html', '_blank');
        alert('Se abrió tu CV en una nueva pestaña. Usa Ctrl+P para descargarlo como PDF.');
      }
    } catch (error) {
      console.error('Error al abrir CV:', error);
      // Fallback: redirigir a la página del CV
      window.open('/cv.html', '_blank');
    }
  };

  // Datos del CV
  const personalData = {
    name: "Eros Alejandro León Félix",
    title: "Ingeniero de Infraestructura y Sistemas",
    subtitle: "Especialista en Sector Agrícola",
    phone: "6624-693959",
    email: "erosleon9@gmail.com",
    location: "México"
  };

  const companies = [
    { name: "Giadela", logo: imageConfig.companies.giadela },
    { name: "Grupo Agropecuario El Diamante", logo: imageConfig.companies.diamante },
    { name: "El Grabaso", logo: imageConfig.companies.grabaso },
    { name: "La Granja Agroinsumos", logo: imageConfig.companies.granja },
    { name: "Campo San Julián", logo: imageConfig.companies.sanJulian },
    { name: "El Piave", logo: imageConfig.companies.piave },
    { name: "Agro Farm", logo: imageConfig.companies.agroFarm }
  ];

  const skills = [
    {
      category: "Redes e Infraestructura",
      icon: <FaNetworkWired />,
      items: [
        "Diseño de redes empresariales",
        "Segmentación de redes",
        "Cableado estructurado", 
        "Redes inalámbricas (Wi-Fi)",
        "Enlaces punto a punto",
        "Telefonía IP"
      ]
    },
    {
      category: "Seguridad y Administración", 
      icon: <FaShieldAlt />,
      items: [
        "Administración de Firewall",
        "Directorio Activo",
        "Administración de servidores",
        "Máquinas virtuales",
        "Plataformas de respaldo",
        "Monitoreo de red"
      ]
    },
    {
      category: "Sistemas Operativos",
      icon: <FaServer />,
      items: [
        "Windows Server",
        "Linux (CentOS, Ubuntu)",
        "VMware vSphere", 
        "Active Directory",
        "Virtualización"
      ]
    },
    {
      category: "Desarrollo y Bases de Datos",
      icon: <FaDatabase />,
      items: [
        "SQL básico/intermedio",
        "Desarrollo web",
        "Programación C#", 
        "JavaScript, Vue.js, Node.js",
        "Bases de datos relacionales"
      ]
    }
  ];

  const experiences = [
    {
      title: "Ingeniero de Infraestructura y Sistemas - Sector Agropecuario",
      company: "Empresas del Sector Agropecuario y Ganadero",
      period: "2021 - Presente (3+ años)",
      description: [
        "Diseño e implementación de redes empresariales en áreas de empaque agrícola",
        "Desarrollo de software para el sector ganadero en áreas de engorda",
        "Instalación y configuración de cableado estructurado en instalaciones de gran escala",
        "Administración y configuración de routers, switches y equipos de red",
        "Desarrollo de software especializado para empaque y nómina agrícola",
        "Creación de 'Agroeasy': Software agrícola para empaque y envío de frutas", 
        "Administración de servidores Windows/Linux y máquinas virtuales",
        "Implementación de sistemas de respaldo y recuperación de datos",
        "Soporte técnico integral para operaciones críticas de temporada"
      ]
    },
    {
      title: "Desarrollador de Software y Administrador de Sistemas", 
      company: "Diversos Clientes - Freelance",
      period: "2020 - Presente",
      description: [
        "Desarrollo de sistemas ERP para hospitales, ventas y gestión empresarial",
        "Sistemas para compañías fleteras y empresas de construcción", 
        "Software agrícola especializado (nómina, empaques, embarques)",
        "Administración de bases de datos SQL Server, MySQL y PostgreSQL",
        "Configuración de entornos de desarrollo y producción",
        "Consultoría técnica para migración de sistemas legacy"
      ]
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <span>Eros León</span>
          </div>
          
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setActiveSection('home')}>Inicio</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>Acerca de</a></li>
            <li><a href="#photos" onClick={() => setActiveSection('photos')}>Campo</a></li>
            <li><a href="#experience" onClick={() => setActiveSection('experience')}>Experiencia</a></li>
            <li><a href="#projects" onClick={() => setActiveSection('projects')}>Proyectos</a></li>
            <li><a href="#skills" onClick={() => setActiveSection('skills')}>Habilidades</a></li>
            <li><a href="#companies" onClick={() => setActiveSection('companies')}>Empresas</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contacto</a></li>
          </ul>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }}>Inicio</a>
            <a href="#about" onClick={() => { setActiveSection('about'); setMobileMenuOpen(false); }}>Acerca de</a>
            <a href="#photos" onClick={() => { setActiveSection('photos'); setMobileMenuOpen(false); }}>Campo</a>
            <a href="#experience" onClick={() => { setActiveSection('experience'); setMobileMenuOpen(false); }}>Experiencia</a>
            <a href="#projects" onClick={() => { setActiveSection('projects'); setMobileMenuOpen(false); }}>Proyectos</a>
            <a href="#skills" onClick={() => { setActiveSection('skills'); setMobileMenuOpen(false); }}>Habilidades</a>
            <a href="#companies" onClick={() => { setActiveSection('companies'); setMobileMenuOpen(false); }}>Empresas</a>
            <a href="#contact" onClick={() => { setActiveSection('contact'); setMobileMenuOpen(false); }}>Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Tech Cards flotantes */}
        <div className="tech-cards-floating">
          <div className="tech-card" title="Desarrollo">
            <MdComputer />
            <span>Dev</span>
          </div>
          <div className="tech-card" title="Redes">
            <MdNetworkWifi />
            <span>Red</span>
          </div>
          <div className="tech-card" title="Servidores">
            <MdStorage />
            <span>DB</span>
          </div>
          <div className="tech-card" title="Configuración">
            <MdSettings />
            <span>Config</span>
          </div>
          <div className="tech-card" title="Soporte">
            <MdBuild />
            <span>Tools</span>
          </div>
          <div className="tech-card" title="Cloud">
            <MdCloud />
            <span>Cloud</span>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {personalData.name}
              </h1>
              <h2 className="hero-subtitle">
                {personalData.title}
              </h2>
              <p className="hero-description">
                {personalData.subtitle} con más de 3 años de experiencia en sistemas 
                para el sector agrícola y ganadero. Desarrollador de sistemas ERP para diversos sectores 
                incluyendo hospitales, ventas, compañías fleteras y construcción.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  Contáctame <FaEnvelope />
                </a>
                <button onClick={() => handleDownloadCV()} className="btn btn-outline">
                  Descargar CV <FaDownload />
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-photo">
                <img src={`${imageConfig.profilePhoto}?size=400`} alt="Eros León - Ingeniero de Infraestructura" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title text-center">Acerca de Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Ingeniero de infraestructura con más de 3 años de experiencia en sistemas para el 
                sector agrícola. Mi trabajo abarca diseño e implementación de redes empresariales, 
                administración de servidores y desarrollo de software.
              </p>
              <p>
                He desarrollado sistemas ERP para hospitales, ventas, compañías fleteras, empresas 
                de construcción y software agrícola especializado. En el sector agropecuario, he 
                trabajado en instalación de redes y desarrollo de software para nómina, empaques y 
                embarques en cultivos de uva de mesa, sandía y melón. También tengo experiencia 
                en el sector ganadero implementando software en áreas de engorda.
              </p>
              <p>
                Actualmente curso Ingeniería en Sistemas Computacionales en UVEG (Universidad Virtual del 
                Estado de Guanajuato), próximo a realizar prácticas profesionales. La modalidad en línea 
                me permite mantener total disponibilidad laboral sin conflictos académicos.
              </p>
              <div className="key-points">
                <div className="point">
                  <FaServer className="point-icon" />
                  <div>
                    <h4>Infraestructura Robusta</h4>
                    <p>Diseño e implementación de redes empresariales escalables</p>
                  </div>
                </div>
                <div className="point">
                  <FaCode className="point-icon" />
                  <div>
                    <h4>Desarrollo Especializado</h4>
                    <p>Software personalizado para procesos agrícolas y nómina</p>
                  </div>
                </div>
                <div className="point">
                  <FaLeaf className="point-icon" />
                  <div>
                    <h4>Sector Agrícola</h4>
                    <p>Experiencia específica en empresas agropecuarias líderes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Photos Section */}
      <section id="photos" className="section personal-photos">
        <div className="container">
          <h2 className="section-title text-center">En el Campo</h2>
          <p className="section-subtitle text-center">
            Experiencia directa en el sector agrícola
          </p>
          <div className="photos-grid grid grid-2">
            {imageConfig.personalPhotos.map((photo, index) => (
              <div key={index} className="photo-card card">
                <div className="photo-container">
                  <img src={photo} alt={`Trabajo en campo ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title text-center">Experiencia Laboral</h2>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <div className="company">{exp.company}</div>
                  <div className="period">{exp.period}</div>
                  <ul className="responsibilities">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title text-center">Competencias Técnicas</h2>
          <div className="skills-grid grid grid-2">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card card">
                <div className="skill-header">
                  <div className="skill-icon">{skillGroup.icon}</div>
                  <h3>{skillGroup.category}</h3>
                </div>
                <ul className="skill-list">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title text-center">Proyecto Destacado</h2>
          <div className="project-highlight card">
            <div className="project-content">
              <div className="project-info">
                <h3 className="project-title">🌾 Agroeasy</h3>
                <p className="project-description">
                  Software agrícola especializado para empaque y envío de frutas. Desarrollado 
                  específicamente para optimizar procesos en el sector agropecuario, incluyendo 
                  gestión de inventarios, control de calidad y logística de embarques.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Agricultura</span>
                </div>
              </div>
              <div className="project-impact">
                <div className="impact-item">
                  <FaLeaf className="impact-icon" />
                  <div>
                    <h4>Software Agrícola</h4>
                    <p>Especializado en empaque de frutas</p>
                  </div>
                </div>
                <div className="impact-item">
                  <FaDatabase className="impact-icon" />
                  <div>
                    <h4>Gestión Integral</h4>
                    <p>Control de inventarios y embarques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="section companies">
        <div className="container">
          <h2 className="section-title text-center">Empresas Colaboradoras</h2>
          <p className="section-subtitle text-center">
            Sector Agrícola - Referencias disponibles sin compromiso
          </p>
          <div className="companies-grid grid grid-3">
            {companies.map((company, index) => (
              <div key={index} className="company-card card">
                <div className="company-logo">
                  <img src={company.logo} alt={company.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title text-center">Información de Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Teléfono</h4>
                  <p>{personalData.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>{personalData.email}</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Ubicación</h4>
                  <p>{personalData.location}</p>
                </div>
              </div>
            </div>
            
            <div className="availability-info">
              <h3>Disponibilidad</h3>
              <div className="availability-grid">
                <div className="availability-item">
                  <FaCogs className="availability-icon" />
                  <span>Disponibilidad completa de horario</span>
                </div>
                <div className="availability-item">
                  <FaCloud className="availability-icon" />
                  <span>Disponibilidad para viajar</span>
                </div>
                <div className="availability-item">
                  <FaLeaf className="availability-icon" />
                  <span>Experiencia comprobable en sector agrícola</span>
                </div>
                <div className="availability-item">
                  <FaShieldAlt className="availability-icon" />
                  <span>Referencias laborales disponibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2024 {personalData.name}. Todos los derechos reservados.</p>
              <p>Ingeniero de Infraestructura especializado en sector agrícola</p>
            </div>
            <div className="footer-links">
              <button onClick={handleDownloadCV} className="footer-link" style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                <FaDownload /> Descargar CV
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
