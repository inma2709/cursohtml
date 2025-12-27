import { useEffect } from "react";

export default function TemaFooterHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema · Footer en HTML";
  }, []);

  return (
    <main className="doc">
      {/* =========================
          TEMA · FOOTER EN HTML
         ========================= */}
      <section className="estructura-formativa" id="ud02-footer">
        <h2>UD02 · Tema · Footer en HTML</h2>

        {/* INTRO */}
        <header className="doc-hero" id="intro-footer">
          <p className="doc-kicker">UD02 · Maquetación</p>
          <h1>Footer en HTML: estructura, accesibilidad y buenas prácticas</h1>
          <p className="doc-lead">
            El <strong>footer</strong> es la “zona de cierre” de una página o sección.
            Sirve para ofrecer información útil (autoría, copyright, enlaces, contacto),
            mejorar la navegación y reforzar la confianza del usuario. Un footer bien hecho
            no es un “cajón desastre”: es una parte semántica clave del documento.
          </p>
        </header>

        {/* ÍNDICE */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Contenido</h2>
          <ol>
            <li><a href="#que-es-footer">1. Qué es un footer y para qué sirve</a></li>
            <li><a href="#semantica-footer">2. Semántica: footer del sitio vs footer de sección</a></li>
            <li><a href="#contenido-footer">3. Qué debería incluir (y qué evitar)</a></li>
            <li><a href="#accesibilidad-footer">4. Accesibilidad: enlaces, foco y navegación</a></li>
            <li><a href="#footer-ejemplo">5. Ejemplo profesional (listo para copiar)</a></li>
            <li><a href="#ejercicio-footer">6. Ejercicio guiado paso a paso</a></li>
            <li><a href="#checklist-footer">7. Checklist final</a></li>
          </ol>
        </nav>

        {/* 1 */}
        <section className="doc-section" id="que-es-footer">
          <h2>1) ¿Qué es un footer y para qué sirve?</h2>
          <p>
            En HTML, <code>&lt;footer&gt;</code> representa el pie de una página o de una sección. Normalmente incluye:
          </p>
          <ul>
            <li>Información de autoría/copyright.</li>
            <li>Enlaces de navegación secundaria (aviso legal, privacidad, cookies).</li>
            <li>Contacto, redes sociales, dirección, horario.</li>
            <li>Enlaces de ayuda: FAQ, soporte, accesibilidad.</li>
          </ul>

          <div className="callout tip">
            Un buen footer reduce “fricción”: si el usuario busca políticas, contacto o redes, suele mirar abajo.
          </div>
        </section>

        {/* 2 */}
        <section className="doc-section" id="semantica-footer">
          <h2>2) Semántica: footer del sitio vs footer de sección</h2>

          <details className="dd">
            <summary>Footer del sitio (global)</summary>
            <div className="dd-body">
              <p>
                Es el footer principal de la página. Suele ir dentro del layout general (App, Layout, etc.).
                Puede contener navegación secundaria y datos de la organización.
              </p>
              <pre>
                <code>{`<body>
  <header>...</header>
  <main>...</main>
  <footer>... footer global ...</footer>
</body>`}</code>
              </pre>
            </div>
          </details>

          <details className="dd">
            <summary>Footer de una sección o artículo</summary>
            <div className="dd-body">
              <p>
                También puede existir dentro de <code>&lt;article&gt;</code> o <code>&lt;section&gt;</code> para
                información específica (autor, fecha, tags, enlaces relacionados).
              </p>
              <pre>
                <code>{`<article>
  <h2>Noticia</h2>
  <p>Contenido...</p>
  <footer>
    <p>Publicado el 21/12/2025</p>
  </footer>
</article>`}</code>
              </pre>

              <div className="callout warn">
                No confundas: el footer de artículo no sustituye al footer global del sitio.
              </div>
            </div>
          </details>
        </section>

        {/* 3 */}
        <section className="doc-section" id="contenido-footer">
          <h2>3) Qué debería incluir (y qué evitar)</h2>

          <details className="dd" open>
            <summary>Contenido recomendado</summary>
            <div className="dd-body">
              <ul>
                <li><strong>Brand</strong>: nombre del sitio o logo (sin repetir en exceso).</li>
                <li><strong>Enlaces legales</strong>: privacidad, cookies, aviso legal.</li>
                <li><strong>Contacto</strong>: email, teléfono o formulario.</li>
                <li><strong>Redes sociales</strong>: enlaces con nombres claros y <code>aria-label</code>.</li>
                <li><strong>Accesibilidad</strong>: enlace “Accesibilidad” o “Declaración de accesibilidad”.</li>
              </ul>
              <div className="callout tip">
                Si tu web es educativa, añade un enlace “Materiales” / “Temario” / “Repositorio”.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Qué evitar</summary>
            <div className="dd-body">
              <ul>
                <li>❌ Un footer infinito con información irrelevante.</li>
                <li>❌ Repetir el menú principal completo sin sentido.</li>
                <li>❌ Texto muy pequeño o con poco contraste.</li>
                <li>❌ Enlaces “haz clic aquí” sin contexto.</li>
              </ul>
            </div>
          </details>
        </section>

        {/* 4 */}
        <section className="doc-section" id="accesibilidad-footer">
          <h2>4) Accesibilidad: enlaces, foco y navegación</h2>
          <ul>
            <li>Usa listas para grupos de enlaces (<code>&lt;ul&gt;</code> + <code>&lt;li&gt;</code>).</li>
            <li>Enlaces con texto claro: “Política de privacidad”, no “Privacidad”.</li>
            <li>El foco debe verse al tabular (tu CSS global ya debería contemplarlo).</li>
            <li>Si abres enlaces externos en nueva pestaña, añade <code>rel="noopener noreferrer"</code>.</li>
          </ul>

          <div className="callout">
            Truco : tabula hasta el final. Si el footer se navega bien con teclado, vas por buen camino.
          </div>
        </section>

        {/* 5 */}
        <section className="doc-section" id="footer-ejemplo">
          <h2>5) Ejemplo profesional (listo para copiar)</h2>

          <details className="dd" open>
            <summary>Componente Footer (React)</summary>
            <div className="dd-body">
              <pre>
                <code>{`export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-title">UF1841 · Lenguajes de marcas</p>
          <p className="muted">
            Material didáctico para aprender HTML y CSS paso a paso.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Enlaces del footer">
          <div className="footer-col">
            <h3 className="footer-heading">Curso</h3>
            <ul>
              <li><a href="/temario">Temario</a></li>
              <li><a href="/proyectos">Proyectos</a></li>
              <li><a href="/recursos">Recursos</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Soporte</h3>
            <ul>
              <li><a href="/faq">Preguntas frecuentes</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/accesibilidad">Accesibilidad</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Legal</h3>
            <ul>
              <li><a href="/privacidad">Política de privacidad</a></li>
              <li><a href="/cookies">Política de cookies</a></li>
              <li><a href="/aviso-legal">Aviso legal</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p className="muted">© {year} UF1841 · Inma Contreras</p>

        <ul className="footer-social" aria-label="Redes sociales">
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (se abre en nueva pestaña)"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (se abre en nueva pestaña)"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}`}</code>
              </pre>

              <div className="callout tip">
                La clave es que el footer tenga <strong>estructura</strong>: marca, columnas y una franja final.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>CSS sugerido para tu styles.css</summary>
            <div className="dd-body">
              <pre>
                <code>{`.site-footer{
  margin-top: 2rem;
  padding: 2rem 1rem 1.25rem;
  background: linear-gradient(135deg, var(--color-html-1), var(--color-html-2));
  color: #fff;
}

.footer-inner{
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1.2fr 2fr;
  align-items: start;
}

.footer-title{
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0 0 .25rem;
}

.footer-nav{
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.footer-heading{
  font-size: .95rem;
  margin: 0 0 .5rem;
  font-weight: 800;
}

.footer-nav ul{
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: .35rem;
}

.footer-nav a{
  color: rgba(255,255,255,.92);
  text-decoration: none;
}

.footer-nav a:hover{
  text-decoration: underline;
}

.footer-bottom{
  max-width: 1100px;
  margin: 1.5rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,.25);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-social{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: .75rem;
}

.footer-social a{
  color: rgba(255,255,255,.92);
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 900px){
  .footer-inner{ grid-template-columns: 1fr; }
  .footer-nav{ grid-template-columns: 1fr; }
}`}</code>
              </pre>
            </div>
          </details>
        </section>

        {/* 6 */}
        <section className="doc-section" id="ejercicio-footer">
          <h2>6) Ejercicio guiado paso a paso</h2>

          <details className="dd">
            <summary>Paso 1 — Estructura mínima</summary>
            <div className="dd-body">
              <ol>
                <li>Crea un componente <code>SiteFooter</code>.</li>
                <li>Añade <code>&lt;footer className="site-footer"&gt;</code>.</li>
                <li>Incluye un bloque de marca y un bloque de enlaces.</li>
              </ol>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 2 — Columnas con navegación</summary>
            <div className="dd-body">
              <ol>
                <li>Crea 3 columnas: Curso, Soporte y Legal.</li>
                <li>Usa listas <code>&lt;ul&gt;</code> para los enlaces.</li>
                <li>Añade <code>aria-label</code> a la navegación.</li>
              </ol>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 3 — Franja inferior</summary>
            <div className="dd-body">
              <ol>
                <li>Añade una línea divisoria (border-top).</li>
                <li>Muestra el año actual con JavaScript.</li>
                <li>Añade enlaces a redes (GitHub/LinkedIn) con <code>target="_blank"</code>.</li>
              </ol>
              <div className="callout warn">
                Recuerda siempre: <code>rel="noopener noreferrer"</code> en enlaces externos con nueva pestaña.
              </div>
            </div>
          </details>
        </section>

        {/* 7 */}
        <section className="doc-section" id="checklist-footer">
          <h2>7) Checklist final</h2>
          <ul>
            <li>✅ Tiene estructura (marca + columnas + franja inferior).</li>
            <li>✅ Enlaces claros y agrupados en listas.</li>
            <li>✅ Buen contraste y foco visible al tabular.</li>
            <li>✅ Responsive (se apila en pantallas pequeñas).</li>
            <li>✅ Enlaces externos con <code>rel="noopener noreferrer"</code>.</li>
          </ul>
        </section>

        {/* RESUMEN */}
        <div className="resumen-final">
          <p>
            <strong>Resumen:</strong> Un footer bien construido aporta confianza, mejora la navegación y
            cierra la experiencia del usuario. Debe ser semántico, accesible, organizado por secciones
            y responsive.
          </p>
        </div>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
