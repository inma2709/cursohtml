import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CourseStructuredData } from '../components/StructuredData';

export default function Home() {
  useEffect(() => {
    // SEO optimizado para certificados de profesionalidad + marca personal
    document.title = "IFCD0210 IFCD0110 | Inma Contreras - Docente Formación para el Empleo";
    
    // Meta description dinámica
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Inma Contreras, docente especializada en certificados IFCD0210 (Desarrollo aplicaciones web) e IFCD0110 (Confección páginas web). Formación para el empleo con metodología profesional.";
    }
  }, []);

  return (
    <>
      <CourseStructuredData />
      <main className="doc">
      <section className="estructura-formativa" id="home-uf1841">
        {/* HERO */}
       <header className="doc-hero">
  <p className="doc-kicker">IFCD0210 · IFCD0110 · Por Inma Contreras, Docente Formación Empleo </p>

  {/* FOTO (usa el estilo .media que ya tenéis) */}
  <figure className="media" style={{ margin: "0.25rem 0 0.75rem" }}>
    <img
      src="./img/tema1/aprenderhtml.png"
      alt="IFCD0210 IFCD0110 - Inma Contreras, docente especializada en certificados de profesionalidad para formación empleo en desarrollo web"
      width="500"
      height="320"
      loading="lazy"
      decoding="async"
      style={{ borderRadius: "16px" }}
    />
    <figcaption>
      IFCD0210 e IFCD0110 por Inma Contreras: formación profesional para el empleo en desarrollo web.
    </figcaption>
  </figure>

  <h1>IFCD0210 IFCD0110 | Inma Contreras - Docente Certificados Profesionalidad</h1>

  <p className="doc-lead">
    Soy <strong>Inma Contreras</strong>, docente especializada en <strong>desarrollo web y HTML</strong>. 
    Este manual está diseñado según los estándares de los certificados <strong>IFCD0210</strong> e 
    <strong>IFCD0110</strong>, garantizando una formación profesional y práctica.
  </p>
  
  <p className="doc-lead">
    Mi metodología se centra en el aprendizaje progresivo: desde los fundamentos básicos 
    hasta la creación de sitios web profesionales y semánticamente correctos.
  </p>

  <div className="callout tip">
    <strong>Cómo aprender HTML paso a paso:</strong>
    
    <ol style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
      <li><strong>Lee la teoría</strong> de cada tema con atención</li>
      <li><strong>Practica inmediatamente</strong> con los ejemplos</li>
      <li><strong>Haz los ejercicios</strong> sin miedo a equivocarte</li>
      <li><strong>Construye una base sólida</strong> antes de usar IA</li>
    </ol>
    
    <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: '0.9' }}>
      💡 <em>La IA será tu copiloto perfecto cuando domines los fundamentos.</em>
    </p>
  </div>

  <div className="form-actions" style={{ marginTop: ".9rem" }}>
    <button 
      className="btn btn-primary" 
      onClick={() => document.getElementById('ruta-tema-0')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Comenzar por el Tema 0
    </button>
  </div>
</header>


        {/* ¿QUÉ INCLUYE? */}
        <section className="doc-section" id="que-incluye">
          <h2>¿Qué incluye el manual?</h2>

          <div className="card-grid two" role="list" aria-label="Qué incluye el manual">
            <article className="card" role="listitem">
              <h3>📘 Teoría clara</h3>
              <p>
                Conceptos explicados de forma sencilla, con ejemplos visuales y lenguaje
                accesible.
              </p>
            </article>

            <article className="card" role="listitem">
              <h3>🧩 Ejemplos reales</h3>
              <p>
                Fragmentos listos para copiar: HTML semántico, tablas accesibles, formularios completos,
                imágenes optimizadas, estructura de proyectos y más.
              </p>
            </article>

            <article className="card" role="listitem">
              <h3>🛠️ Práctica guiada</h3>
              <p>
                Ejercicios paso a paso para que el alumno construya por etapas (primero estructura, luego
                detalles, luego validación y mejoras).
              </p>
            </article>

            <article className="card" role="listitem">
              <h3>✅ Checklists</h3>
              <p>
                Listas de control al final de los temas: semántica, accesibilidad, rendimiento,
                buenas prácticas y organización del código.
              </p>
            </article>

            <article className="card" role="listitem">
              <h3>🧪 Tests de repaso</h3>
              <p>
                Evaluación tipo examen con corrección automática, marcando fallos y mostrando explicaciones
                para aprender de cada error.
              </p>
            </article>

            <article className="card" role="listitem">
              <h3>🔗 Recursos útiles</h3>
              <p>
                Enlaces a validadores, documentación oficial y herramientas (optimización de imágenes,
                accesibilidad, comprobación de HTML, etc.).
              </p>
            </article>
          </div>

          <details className="dd" style={{ marginTop: "1rem" }}>
            <summary>Estructura típica de un tema</summary>
            <div className="dd-body">
              <ol>
                <li><strong>Objetivo:</strong> qué vas a aprender exactamente.</li>
                <li><strong>Conceptos clave:</strong> explicado paso a paso.</li>
                <li><strong>Ejemplo listo:</strong> código copiable y comentado.</li>
                <li><strong>Ejercicio guiado:</strong> lo construyes por fases.</li>
                <li><strong>Resumen + checklist:</strong> lo imprescindible.</li>
                <li><strong>Test:</strong> preguntas con corrección y explicación.</li>
              </ol>

              <div className="callout tip">
                Si sigues esta estructura en todos los temas, tu aprendizaje es constante y medible.
              </div>
            </div>
          </details>
        </section>

        {/* SOBRE LA DOCENTE */}
        <section className="doc-section" id="sobre-docente">
          <h2>Tu Instructora para HTML</h2>
          
          <div className="media-block media-left">
            <div className="media-block__image">
              <img src="/introinma.png" alt="Inma Contreras - Docente HTML" className="profile-img" />
            </div>
            <div className="media-block__content">
              <p>
                <strong>Inma Contreras</strong>, docente especializada en <strong>desarrollo web y HTML</strong>. 
                Este curso está diseñado según los estándares de los certificados <strong>IFCD0210</strong> y   
                <strong> IFCD0110</strong>,  garantizando una formación profesional y práctica.
              </p>
              
              <p>
                Mi metodología se centra en el aprendizaje progresivo: desde los fundamentos básicos de HTML 
                hasta la creación de sitios web profesionales y semánticamente correctos.
              </p>

              <div className="callout tip">
                <strong>Enfoque práctico:</strong> Cada tema incluye ejercicios reales y ejemplos 
                que podrás aplicar inmediatamente en tus proyectos web.
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICADOS DE PROFESIONALIDAD */}
        <section className="doc-section" id="certificados-profesionalidad">
          <h2>Certificados de Profesionalidad IFCD0210 e IFCD0110</h2>
          
          <div className="callout tip">
            <strong>Formación para el Empleo Oficial:</strong> Contenidos alineados con los certificados de profesionalidad 
            más demandados en desarrollo web y tecnologías digitales.
          </div>

          <div className="two">
            <article className="card">
              <h3>🎯 IFCD0210 - Desarrollo de Aplicaciones Web</h3>
              <p><strong>Nivel:</strong> Grado Superior (Nivel 3)</p>
              <p><strong>Duración:</strong> 590 horas</p>
              
              <p><strong>Módulos Formativos que cubro:</strong></p>
              <ul>
                <li><strong>MF0491_3:</strong> Programación web en el entorno cliente (180h)</li>
                <li><strong>MF0492_3:</strong> Programación web en el entorno servidor (240h)</li>
                <li><strong>MF0493_3:</strong> Implantación de aplicaciones web (90h)</li>
                <li><strong>UF1841:</strong> Elaboración de documentos web mediante lenguajes de marcas</li>
              </ul>
              
              <p><strong>Competencias:</strong> Desarrollar aplicaciones web completas y funcionales</p>
            </article>

            <article className="card">
              <h3>📝 IFCD0110 - Confección y Publicación de Páginas Web</h3>
              <p><strong>Nivel:</strong> Grado Medio (Nivel 2)</p>
              <p><strong>Duración:</strong> 560 horas</p>
              
              <p><strong>Módulos Formativos que cubro:</strong></p>
              <ul>
                <li><strong>MF0950_2:</strong> Construcción de páginas web (210h)</li>
                <li><strong>MF0951_2:</strong> Integración de componentes software (180h)</li>
                <li><strong>MF0952_2:</strong> Publicación de páginas web (90h)</li>
                <li><strong>UF1302:</strong> Creación de páginas web con lenguajes de marcas</li>
              </ul>
              
              <p><strong>Competencias:</strong> Crear y mantener sitios web profesionales</p>
            </article>
          </div>

          <details className="dd" style={{ marginTop: "1rem" }}>
            <summary>Mi experiencia como docente en certificados de profesionalidad</summary>
            <div className="dd-body">
              <p>
                Como <strong>docente acreditada en formación para el empleo</strong>, he impartido  cursos 
                de <strong>IFCD0210</strong> e <strong>IFCD0110</strong>, adaptando la metodología a las necesidades 
                específicas de personas en búsqueda activa de empleo y trabajadores en activo.
              </p>

              <h4>Metodología específica para certificados:</h4>
              <ul>
                <li><strong>Orientación laboral:</strong> Enfoque en competencias demandadas por empresas</li>
                <li><strong>Proyectos reales:</strong> Portfolio profesional desde el primer día</li>
                <li><strong>Seguimiento personalizado:</strong> Adaptación al ritmo de cada alumno</li>
                <li><strong>Certificación oficial:</strong> Preparación para las pruebas de competencia</li>
              </ul>

              
            </div>
          </details>
        </section>

        {/* OBJETIVOS */}
        <section className="doc-section" id="objetivos">
          <h2>Objetivos del manual (de inicial a profesional)</h2>

          <div className="two">
            <article className="card">
              <h3>Nivel inicial</h3>
              <ul>
                <li>Entender cómo se estructura un documento HTML5.</li>
                <li>Escribir etiquetas correctas y con sentido (semántica).</li>
                <li>Insertar enlaces e imágenes sin errores.</li>
                <li>Crear listas, tablas y formularios básicos.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Nivel intermedio</h3>
              <ul>
                <li>Aplicar buenas prácticas de accesibilidad (labels, alt, scope, etc.).</li>
                <li>Optimizar imágenes (peso, formatos, lazy loading).</li>
                <li>Construir tablas y formularios “bien hechos” (semánticos y mantenibles).</li>
                <li>Entender cuándo NO usar ciertas etiquetas (p.ej. tablas para maquetar).</li>
              </ul>
            </article>
          </div>

          <article className="card" style={{ marginTop: "1rem" }}>
            <h3>Nivel profesional</h3>
            <ul>
              <li>HTML limpio: legible, consistente y fácil de mantener.</li>
              <li>Accesibilidad como estándar (no como “extra”).</li>
              <li>Rendimiento: imágenes, estructura, carga y buenas decisiones.</li>
              <li>Validación y control de calidad: validadores y auditorías.</li>
            </ul>

            <div className="callout warn">
              <strong>Regla de oro:</strong> que “funcione” no es suficiente. Debe ser correcto, accesible
              y profesional.
            </div>
          </article>
        </section>

      

        {/* RECURSOS */}
        <section className="doc-section" id="empleabilidad">
          <h2>Salidas Profesionales y Empleabilidad</h2>
          
          <div className="callout tip">
            <strong>Los certificados IFCD0210 e IFCD0110 son muy demandados</strong> en el sector tecnológico español. 
            Tienen convalidación directa en los módulos de técnico superior de desarrollo web y técnico medio de confección de páginas web, lo que los hace ideales para quienes buscan una formación rápida y efectiva para el empleo en el sector digital.
            Estos certificados son la puerta de entrada perfecta para un futuro profesional en el desarrollo web, diseño web, UX/UI y otras áreas relacionadas con la creación y mantenimiento de sitios web.
          </div>

         

          <details className="dd" style={{ marginTop: "1rem" }}>
            <summary>Sectores con mayor demanda</summary>
            <div className="dd-body">
              <div className="two">
                <div>
                  <h4>🏢 Sectores Tradicionales</h4>
                  <ul>
                    <li>Consultoras tecnológicas</li>
                    <li>Agencias de publicidad digital</li>
                    <li>Empresas de desarrollo web</li>
                    <li>Departamentos IT corporativos</li>
                  </ul>
                </div>
                <div>
                  <h4>🚀 Sectores Emergentes</h4>
                  <ul>
                    <li>Startups tecnológicas</li>
                    <li>E-commerce y marketplaces</li>
                    <li>Fintech y bancos digitales</li>
                    <li>Plataformas educativas online</li>
                  </ul>
                </div>
              </div>

              <div className="callout warn">
                <strong>Tendencia del mercado:</strong> La demanda de perfiles IFCD0210 e IFCD0110 ha crecido un 
                en los últimos 3 años, especialmente en desarrollo frontend y aplicaciones web.
              </div>
            </div>
          </details>
        </section>

        {/* RECURSOS */}
        <section className="doc-section" id="recursos">
          <h2>Recursos para comprobar tu HTML (calidad)</h2>

          <div className="two">
            <article className="card">
              <h3>Validación y estándares</h3>
              <ul>
                <li>
                  Validador HTML W3C (detecta errores de marcado y estructura).
                </li>
                <li>
                  MDN Web Docs (documentación clara y actualizada).
                </li>
              </ul>
            </article>

            <article className="card">
              <h3>Accesibilidad y rendimiento</h3>
              <ul>
                <li>
                  Lighthouse (Chrome DevTools): rendimiento, accesibilidad y buenas prácticas.
                </li>
                <li>
                  Contrast Checker (para contrastes cuando entremos en CSS).
                </li>
              </ul>
            </article>
          </div>

          <div className="callout warn" style={{ marginTop: "1rem" }}>
            Consejo: valida tu HTML siempre que termines un tema. Te evita errores “tontos” y te obliga a escribir limpio.
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="doc-section" id="ruta-tema-0">
          <h2>¿Te preparas para IFCD0210 o IFCD0110?</h2>
          <p>
            Este manual está diseñado específicamente para las <strong>competencias de los certificados IFCD0210 e IFCD0110</strong>. 
            Empieza por el <strong>Tema 0</strong> para configurar tu entorno profesional, o salta al Tema 1 si ya tienes experiencia. 
            Cada tema está alineado con los <strong>módulos formativos oficiales</strong> de formación para el empleo.
          </p>

          <div className="callout">
            <strong>💡 Para alumnos de certificados de profesionalidad:</strong> Este contenido cubre específicamente 
            las unidades formativas UF1841 (IFCD0210) y UF1302 (IFCD0110), con ejercicios prácticos orientados a 
            la evaluación oficial y competencias laborales reales.
          </div>

          <div className="form-actions" style={{ marginTop: ".9rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
            <button 
              className="btn btn-primary" 
              onClick={() => document.getElementById('que-incluye')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Comenzar Preparación IFCD
            </button>
            
          </div>
        </section>

        <hr className="separador-verde" />
      </section>
    </main>
    </>
  );
}
