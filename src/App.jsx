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
import './App.css';

// Configuración de imágenes - fácil de actualizar
const imageConfig = {
  profilePhoto: 'PLACEHOLDER_PHOTO_URL',
  companies: {
    giadela: 'LOGO_GIADELA_URL',
    diamante: 'LOGO_DIAMANTE_URL', 
    grabaso: 'LOGO_GRABASO_URL',
    granja: 'LOGO_GRANJA_URL',
    sanJulian: 'LOGO_SAN_JULIAN_URL',
    piave: 'LOGO_PIAVE_URL'
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
    { name: "El Piave", logo: imageConfig.companies.piave }
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
        "Docker",
        "Active Directory"
      ]
    },
    {
      category: "Desarrollo y Bases de Datos",
      icon: <FaDatabase />,
      items: [
        "SQL básico/intermedio",
        "Desarrollo web",
        "Programación C#, Python", 
        "JavaScript, React",
        "Bases de datos relacionales"
      ]
    }
  ];

  const experiences = [
    {
      title: "Ingeniero de Infraestructura y Sistemas - Sector Agrícola",
      company: "Empresas del Sector Agropecuario",
      period: "2021 - Presente (3+ años)",
      description: [
        "Diseño e implementación de redes empresariales en áreas de empaque agrícola",
        "Instalación y configuración de cableado estructurado en instalaciones de gran escala",
        "Administración y configuración de routers, switches y equipos de red",
        "Desarrollo de software especializado para el área de empaque y nómina agrícola", 
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
        "Desarrollo de aplicaciones web y de escritorio para gestión empresarial",
        "Administración de bases de datos SQL Server, MySQL y PostgreSQL",
        "Configuración de entornos de desarrollo y producción",
        "Implementación de soluciones de conectividad y telecomunicaciones",
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
            <li><a href="#experience" onClick={() => setActiveSection('experience')}>Experiencia</a></li>
            <li><a href="#skills" onClick={() => setActiveSection('skills')}>Habilidades</a></li>
            <li><a href="#companies" onClick={() => setActiveSection('companies')}>Empresas</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
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
                {personalData.subtitle} con más de 3 años de experiencia específica en sistemas 
                para el sector agrícola. Especialista en redes empresariales, desarrollo de software 
                y soluciones tecnológicas integrales.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  Contáctame <FaEnvelope />
                </a>
                <a href="/cv.html" target="_blank" className="btn btn-outline">
                  Ver CV <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-photo">
                {imageConfig.profilePhoto !== 'PLACEHOLDER_PHOTO_URL' ? (
                  <img src={imageConfig.profilePhoto} alt="Eros León en campo agrícola" />
                ) : (
                  <div className="photo-placeholder">
                    <FaLeaf size={48} />
                    <span>Foto en campo<br />agrícola</span>
                  </div>
                )}
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
                Ingeniero especializado en infraestructura con una sólida experiencia de más de 3 años 
                en sistemas para el sector agrícola. Mi expertise abarca desde el diseño e implementación 
                de redes empresariales hasta el desarrollo de software especializado para procesos agrícolas.
              </p>
              <p>
                He tenido el privilegio de trabajar con empresas líderes en el sector agropecuario, 
                implementando soluciones tecnológicas en cultivos de uva de mesa, sandía, melón y otros 
                productos agrícolas. Mi enfoque combina conocimientos técnicos sólidos con una comprensión 
                profunda de las necesidades específicas del sector agrícola.
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
                  {company.logo !== `LOGO_${company.name.replace(/\s+/g, '_').toUpperCase()}_URL` ? (
                    <img src={company.logo} alt={company.name} />
                  ) : (
                    <span className="logo-placeholder">
                      {company.name}
                    </span>
                  )}
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
              <a href="/cv.html" target="_blank" className="footer-link">
                <FaDownload /> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
