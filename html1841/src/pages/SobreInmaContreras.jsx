import { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { LearningResourceStructuredData } from '../components/StructuredData';

export default function SobreInmaContreras() {
  useEffect(() => {
    document.title = "Sobre Inma Contreras | Docente Tecnología y Desarrollo Web";
  }, []);

  return (
    <>
      <SEOHead 
        title="Sobre Inma Contreras - Docente Especializada en Tecnología"
        description="Conoce a Inma Contreras, docente especializada en tecnología y desarrollo web. Creadora del curso HTML UF1841 y experta en formación tecnológica profesional."
        keywords={[
          'inma contreras',
          'docente tecnología', 
          'profesor programación',
          'inma contreras tecnología',
          'formadora desarrollo web',
          'docente html'
        ]}
        canonicalUrl="https://tu-dominio.com/sobre-inma-contreras"
      />
      
      <LearningResourceStructuredData 
        title="Sobre Inma Contreras - Docente Tecnología"
        description="Perfil profesional de Inma Contreras, especialista en tecnología educativa"
      />

      <main className="doc" id="contenido">
        {/* HERO */}
        <header className="doc-hero">
          <p className="doc-kicker">Sobre la Docente</p>
          <h1>Inma Contreras - Docente Especializada en Tecnología</h1>
          <p className="doc-lead">
            Soy una profesora especializada en <strong>tecnología y desarrollo web</strong> con pasión por hacer 
            accesible el aprendizaje de programación. Creadora de metodologías innovadoras que combinan 
            fundamentos sólidos con aplicación práctica real.
          </p>
        </header>

        {/* EXPERIENCIA PROFESIONAL */}
        <section className="doc-section" id="experiencia">
          <h2>Experiencia Profesional</h2>
          
          <div className="media-block media-left">
            <div className="media-block__image">
              <img src="/introinma.png" alt="Inma Contreras - Docente Tecnología" />
            </div>
            <div className="media-block__content">
              <h3>Especialización en Tecnología Educativa</h3>
              <p>
                Como <strong>docente de tecnología</strong>, mi enfoque se centra en crear experiencias 
                de aprendizaje que sean tanto rigurosas como accesibles. He desarrollado currículos 
                completos para formación profesional en desarrollo web.
              </p>
              
              
            </div>
          </div>
        </section>

        {/* ÁREAS DE ESPECIALIZACIÓN */}
        <section className="doc-section" id="especializacion">
          <h2>Áreas de Especialización</h2>
          
          <div className="card-grid">
            <article className="card">
              <h3>🌐 Desarrollo Web Frontend</h3>
              <ul>
                <li>HTML5 Semántico</li>
                <li>CSS3 y Responsive Design</li>
                <li>JavaScript Moderno</li>
                <li>Frameworks y Librerías</li>
              </ul>
            </article>

            <article className="card">
              <h3>♿ Accesibilidad Web</h3>
              <ul>
                <li>Estándares WCAG</li>
                <li>Diseño Inclusivo</li>
                <li>Testing de Accesibilidad</li>
                <li>Semántica HTML</li>
              </ul>
            </article>

            <article className="card">
              <h3>🎯 SEO Técnico</h3>
              <ul>
                <li>Optimización HTML</li>
                <li>Core Web Vitals</li>
                <li>Datos Estructurados</li>
                <li>Performance Web</li>
              </ul>
            </article>

            <article className="card">
              <h3>📚 Metodología Educativa</h3>
              <ul>
                <li>Aprendizaje Progresivo</li>
                <li>Práctica Guiada</li>
                <li>Evaluación Formativa</li>
                <li>Tecnología Educativa</li>
              </ul>
            </article>
          </div>
        </section>

        {/* METODOLOGÍA DE ENSEÑANZA */}
        <section className="doc-section" id="metodologia">
          <h2>Mi Metodología de Enseñanza</h2>
          
          <details className="dd" open>
            <summary>Enfoque Pedagógico</summary>
            <div className="dd-body">
              <p>
                Mi metodología como <strong>docente de tecnología</strong> se basa en tres pilares fundamentales:
              </p>
              
              <ol>
                <li><strong>Fundamentos Sólidos:</strong> Antes de avanzar, asegurarse de que se comprenden los conceptos base.</li>
                <li><strong>Práctica Constante:</strong> Cada concepto teórico va acompañado de ejercicios prácticos inmediatos.</li>
                <li><strong>Aplicación Real:</strong> Los proyectos están basados en casos de uso reales de la industria.</li>
              </ol>

              <div className="callout tip">
                <strong>Mi filosofía:</strong> "La tecnología debe ser accesible para todos. Mi trabajo es tender puentes 
                entre la complejidad técnica y la comprensión humana."
              </div>
            </div>
          </details>
        </section>

        {/* RECURSOS CREADOS */}
        <section className="doc-section" id="recursos">
          <h2>Recursos Educativos Creados</h2>
          
          <div className="bonus-links">
            <div className="bonus-links__header">
              <h3>Mis Materiales Didácticos</h3>
              <p className="bonus-links__lead">
                He desarrollado diversos recursos educativos para facilitar el aprendizaje de tecnología web.
              </p>
            </div>
            
            <ul className="bonus-links__list">
              <li className="bonus-links__item">
                <a href="/" className="bonus-links__link">
                  <div className="bonus-links__name">Manual UF1841 - HTML Completo</div>
                  <div className="bonus-links__desc">Curso completo de HTML desde cero hasta nivel profesional</div>
                </a>
              </li>
              <li className="bonus-links__item">
                <a href="/tema6" className="bonus-links__link">
                  <div className="bonus-links__name">Guía SEO Técnico para Desarrolladores</div>
                  <div className="bonus-links__desc">Optimización web desde la perspectiva técnica</div>
                </a>
              </li>
              <li className="bonus-links__item">
                <a href="/tema13" className="bonus-links__link">
                  <div className="bonus-links__name">Buenas Prácticas en Desarrollo Web</div>
                  <div className="bonus-links__desc">Estándares profesionales y código limpio</div>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* CONTACTO PROFESIONAL */}
        <section className="doc-section" id="contacto">
          <h2>Colaboración Profesional</h2>
          <p>
            Si eres una institución educativa, empresa de tecnología, o profesional interesado en 
            colaborar en proyectos de formación tecnológica, estaré encantada de explorar 
            oportunidades de trabajo conjunto.
          </p>
          
          <div className="callout">
            <strong>Inma Contreras - Docente Tecnología</strong><br />
            Especialista en Desarrollo Web y Formación Tecnológica<br />
            Email: [tu-email-profesional]<br />
            LinkedIn: [tu-perfil-linkedin]
          </div>
        </section>

      </main>
    </>
  );
}