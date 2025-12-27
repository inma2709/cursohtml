import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "UF1841 · Manual online · HTML, CSS y Sass";
  }, []);

  return (
    <main className="doc">
      <section className="estructura-formativa" id="home-uf1841">
        {/* HERO */}
        <header className="doc-hero">
          <p className="doc-kicker">Manual UF1841 · HTML </p>
          <h1>Manual online: teoría + práctica + recursos + test</h1>
          <p className="doc-lead">
            Este manual está pensado para aprender <strong>desde cero</strong> y llegar a un nivel
            <strong> profesional</strong> con una estructura muy clara: explicación, ejemplo real,
            ejercicios guiados, checklist de buenas prácticas y test de repaso.
          </p>

          <div className="callout tip">
            <strong>Cómo usar este manual:</strong> abre un tema, lee la teoría, copia el ejemplo,
            haz el ejercicio y termina con el test. Si fallas, vuelve a la sección donde está el concepto.
          </div>

          <div className="form-actions" style={{ marginTop: ".9rem" }}>
            <a className="btn btn-primary" href="#ruta-tema-0">
              Comenzar por el Tema 0
            </a>
           
          </div>
        </header>

        {/* ¿QUÉ INCLUYE? */}
        <section className="doc-section" id="que-incluye">
          <h2>¿Qué incluye el manual?</h2>

          <div className="card-grid" role="list" aria-label="Qué incluye el manual">
            <article className="card" role="listitem">
              <h3>📘 Teoría clara</h3>
              <p>
                Conceptos explicados con ejemplos cortos y lenguaje de clase. Nada de “definiciones vacías”:
                siempre con intención práctica.
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
          <h2>¿Empezamos?</h2>
          <p>
            Empieza por el <strong>Tema 0</strong> para preparar tu entorno. Si ya tienes VS Code listo,
            puedes saltar al Tema 1, pero te recomiendo revisar el Tema 0 para trabajar como se trabaja en un proyecto real.
          </p>

         
        </section>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
