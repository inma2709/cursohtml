// Tema4.jsx
// ✅ LISTO PARA PEGAR EN TU PROYECTO REACT
// 📌 Imagen sugerida:
// /public/img/tema4/estructura-html5.png

export default function Tema4() {
  return (
    <div className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Tema 4 · Introducción a HTML</p>
        <h1>HTML: la base de toda página web</h1>
        <p className="doc-lead">
          En este tema empezamos a trabajar con el lenguaje que da forma a la web.
          HTML no es programación: es estructura, significado y orden.
          Entender bien este punto marcará la diferencia en todo lo que construyas después.
        </p>

        <div className="callout tip">
          <strong>Objetivo del tema:</strong> comprender qué es HTML, por qué HTML5 es el estándar actual
          y cómo se organiza correctamente una página web desde su base.
        </div>
      </header>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>1) ¿Qué es HTML?</h2>

        <details open className="dd">
          <summary>HTML como lenguaje de marcado</summary>
          <div className="dd-body">
            <p>
              <strong>HTML</strong> (HyperText Markup Language) es un lenguaje de marcado que se utiliza
              para <strong>estructurar el contenido</strong> de una página web.
              Su función no es calcular ni programar, sino indicar qué es cada cosa:
              un título, un párrafo, una imagen, un enlace o una sección.
            </p>

            <div className="callout">
              HTML define <strong>qué es el contenido</strong>, no cómo se ve ni cómo se comporta.
            </div>

            <p>
              Gracias a HTML, el navegador sabe interpretar la información y mostrarla de forma coherente.
              Sin HTML, no existiría la web tal y como la conocemos.
            </p>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>2) HTML5: evolución y mejoras</h2>

        <details open className="dd">
          <summary>¿Qué es HTML5?</summary>
          <div className="dd-body">
            <p>
              <strong>HTML5</strong> es la versión moderna del lenguaje HTML.
              No es un lenguaje nuevo, sino una evolución que introduce etiquetas más claras,
              mejor soporte multimedia y una estructura más semántica.
            </p>

            <ul>
              <li>Introduce etiquetas con significado claro (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>…).</li>
              <li>Mejora el soporte de audio, vídeo y formularios.</li>
              <li>Favorece la accesibilidad y el posicionamiento en buscadores.</li>
              <li>Está pensado para funcionar bien en móviles y distintos dispositivos.</li>
            </ul>

            <div className="callout tip">
              HTML5 ayuda a que humanos, navegadores y buscadores entiendan mejor la página.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Diferencias con versiones anteriores</summary>
          <div className="dd-body">
            <p>
              Antes de HTML5 se abusaba de contenedores genéricos como <code>&lt;div&gt;</code>.
              HTML5 introduce etiquetas específicas que explican la función de cada zona de la página.
            </p>

            <ul>
              <li>Antes: estructura poco clara.</li>
              <li>Ahora: estructura semántica y organizada.</li>
              <li>Antes: dependía mucho de plugins externos.</li>
              <li>Ahora: funcionalidades integradas en el navegador.</li>
            </ul>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>3) HTML y el Frontend</h2>

        <details open className="dd">
          <summary>Relación entre HTML, CSS y JavaScript</summary>
          <div className="dd-body">
            <p>
              En el desarrollo frontend, cada tecnología tiene un papel claro:
            </p>

            <ul>
              <li><strong>HTML:</strong> estructura y significado del contenido.</li>
              <li><strong>CSS:</strong> apariencia visual (colores, tamaños, layout).</li>
              <li><strong>JavaScript:</strong> comportamiento e interacción.</li>
            </ul>

            <div className="callout">
              Piensa en HTML como el <strong>esqueleto</strong>, CSS como la <strong>piel</strong>
              y JavaScript como el <strong>movimiento</strong>.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>4) Estructura básica de un documento HTML</h2>

        <details open className="dd">
          <summary>Partes fundamentales de una página HTML</summary>
          <div className="dd-body">
            <p>
              Todo documento HTML sigue una estructura clara que permite al navegador
              interpretar correctamente la información.
            </p>

            <ul>
              <li><strong>&lt;header&gt;</strong>: cabecera de la página o sección.</li>
              <li><strong>&lt;main&gt;</strong>: contenido principal.</li>
              <li><strong>&lt;section&gt;</strong>: agrupación temática de contenido.</li>
              <li><strong>&lt;article&gt;</strong>: contenido independiente.</li>
              <li><strong>&lt;aside&gt;</strong>: información complementaria.</li>
              <li><strong>&lt;footer&gt;</strong>: pie de página.</li>
            </ul>

            <figure className="media">
              <img
                src="/img/estructura.png"
                alt="Estructura semántica básica de un documento HTML5"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Estructura semántica de una página HTML5: cada bloque tiene un significado concreto.
              </figcaption>
            </figure>

            <div className="callout tip">
              Usar bien estas etiquetas mejora la accesibilidad, el SEO y la claridad del código.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section className="doc-section">
        <h2>5) Cierre del tema</h2>

        <details open className="dd">
          <summary>Ideas clave que debes recordar</summary>
          <div className="dd-body">
            <ul>
              <li>HTML es estructura, no diseño ni programación.</li>
              <li>HTML5 aporta significado y orden.</li>
              <li>Una buena estructura facilita todo lo demás.</li>
              <li>Frontend empieza siempre por HTML bien hecho.</li>
            </ul>
 <figure className="media">
              <img
                src="/img/estructura2.png"
                alt="Estructura semántica básica de un documento HTML5"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="muted">
                Estructura semántica de una página HTML5: cada bloque tiene un significado concreto.
              </figcaption>
            </figure>
            <div className="callout tip">
              <strong>Frase clave:</strong> una web bien estructurada se nota, aunque no se vea.
            </div>
          </div>
        </details>

        <div className="doc-next">
          <a className="btn btn-primary" href="/tema/5">
            Siguiente tema <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
