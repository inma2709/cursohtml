/* TemaBodyContenido.jsx
   Página React COMPLETA lista para pegar.
   - Enlaza tu hoja de estilos en <head> automáticamente
   - Tema: BODY (texto, encabezados, énfasis, imágenes, vídeo, enlaces, PDF)
   - Incluye secciones con <details>/<summary> + tablas
   - Test final ÚNICO de 10 preguntas (corrección + feedback)
*/

import { useEffect, useMemo, useState } from "react";

export default function TemaBodyContenido() {
  // 👉 Ajusta esta ruta a tu CSS real
  const CSS_HREF = useMemo(() => "/assets/styles.css", []);

  useEffect(() => {
    const id = "manual-global-css";
    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    } else {
      link.href = CSS_HREF;
    }
    document.title = "UF1841 · Tema · BODY: Contenido, Multimedia y Enlaces";
  }, [CSS_HREF]);

  // -------------------------
  // TEST FINAL (10 preguntas)
  // -------------------------
  const quiz = useMemo(
    () => [
      {
        id: "q1",
        question:
          "¿Cuál es la función del elemento <body> dentro de un documento HTML?",
        options: [
          "Guardar metadatos y enlaces a recursos",
          "Contener el contenido visible e interactivo de la página",
          "Definir únicamente el favicon",
          "Controlar el servidor web",
        ],
        correctIndex: 1,
        explanation:
          "El <body> contiene lo que el usuario ve e interactúa: texto, imágenes, enlaces, formularios, multimedia, etc.",
      },
      {
        id: "q2",
        question:
          "¿Qué afirmación describe mejor el uso correcto de <h1>?",
        options: [
          "Debe repetirse muchas veces para resaltar",
          "No se recomienda usarlo: mejor <div>",
          "Debe representar el título principal de la página y ser coherente con su estructura",
          "Solo sirve para cambiar el tamaño de letra",
        ],
        correctIndex: 2,
        explanation:
          "Los encabezados estructuran el documento. <h1> suele ser el título principal y guía jerarquía y accesibilidad.",
      },
      {
        id: "q3",
        question:
          "¿Qué etiqueta es la apropiada para énfasis fuerte de una palabra o frase con significado (no solo estilo)?",
        options: ["<b>", "<strong>", "<span>", "<i>"],
        correctIndex: 1,
        explanation:
          "<strong> aporta significado (importancia). <b> es más presentacional y no añade semántica.",
      },
      {
        id: "q4",
        question:
          "¿Cuál es la regla más sólida respecto a <img> y el atributo alt?",
        options: [
          "alt es opcional y puede omitirse siempre",
          "alt debe describir la imagen; si es decorativa puede ser alt=\"\"",
          "alt solo sirve para poner el nombre del archivo",
          "alt se usa únicamente para SEO y no para accesibilidad",
        ],
        correctIndex: 1,
        explanation:
          "alt es clave para lectores de pantalla y fallback. Decorativa: alt=\"\". Informativa: descripción útil.",
      },
      {
        id: "q5",
        question:
          "¿Qué formatos son especialmente adecuados para fotografías con buena compresión en web moderna?",
        options: [
          "PNG y SVG",
          "AVIF y WebP",
          "GIF y BMP",
          "ICO y TIFF",
        ],
        correctIndex: 1,
        explanation:
          "WebP y AVIF suelen ofrecer mejor compresión/calidad para fotos que JPG/PNG en navegadores modernos.",
      },
      {
        id: "q6",
        question:
          "¿Qué combinación implementa imágenes responsive por ancho disponible?",
        options: [
          "srcset + sizes",
          "loading + decoding",
          "title + width",
          "figure + figcaption",
        ],
        correctIndex: 0,
        explanation:
          "srcset + sizes permite al navegador escoger la imagen más adecuada según viewport y densidad.",
      },
      {
        id: "q7",
        question:
          "Si necesitas control total del vídeo (poster, varias fuentes, subtítulos), ¿qué opción es la más adecuada?",
        options: ["<iframe>", "<video>", "<img>", "<object>"],
        correctIndex: 1,
        explanation:
          "<video> permite control nativo: sources múltiples, poster, tracks de subtítulos, preload, etc.",
      },
      {
        id: "q8",
        question:
          "¿Qué recomendación es correcta al usar target=\"_blank\" en enlaces?",
        options: [
          "No hay que añadir nada",
          "Añadir rel=\"noopener noreferrer\" por seguridad",
          "Añadir alt=\"\"",
          "Cambiar a <link> en vez de <a>",
        ],
        correctIndex: 1,
        explanation:
          "rel=\"noopener noreferrer\" reduce riesgos (tabnabbing) y controla información enviada al destino.",
      },
      {
        id: "q9",
        question:
          "¿Cuál es una forma correcta de insertar un PDF en una página web para visualizarlo dentro del contenido?",
        options: [
          "<img src=\"archivo.pdf\">",
          "<embed src=\"archivo.pdf\" type=\"application/pdf\">",
          "<meta name=\"pdf\" content=\"archivo.pdf\">",
          "<strong href=\"archivo.pdf\">PDF</strong>",
        ],
        correctIndex: 1,
        explanation:
          "Para embeber PDF se usan <embed> u <object>. También puedes enlazarlo con <a> para descarga o apertura.",
      },
      {
        id: "q10",
        question:
          "¿Cuál es una buena práctica de UX para el texto de un enlace?",
        options: [
          "Usar siempre “haz clic aquí”",
          "Que el texto describa el destino o la acción (p. ej., “Descargar manual en PDF”)",
          "Ocultar el texto y dejar solo el icono",
          "Poner la URL completa como texto siempre",
        ],
        correctIndex: 1,
        explanation:
          "El texto del enlace debe anticipar destino/acción. Mejora accesibilidad, confianza y comprensión.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(quiz.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  function pick(qid, idx) {
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
    if (submitted) setSubmitted(false);
  }

  function correct() {
    setSubmitted(true);
    // Llevar a resultados si quieres (opcional)
    document.getElementById("test")?.scrollIntoView({ behavior: "smooth" });
  }

  const score = useMemo(() => {
    if (!submitted) return 0;
    return quiz.reduce(
      (acc, q) => (answers[q.id] === q.correctIndex ? acc + 1 : acc),
      0
    );
  }, [submitted, answers, quiz]);

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <section className="doc-hero" aria-labelledby="tema-body-title">
        <p className="doc-kicker">UF1841 · HTML/CSS</p>
        <h1 id="tema-body-title">
          Tema · El cuerpo del documento (<code>&lt;body&gt;</code>)
        </h1>
        <p className="doc-lead">
          El <code>&lt;body&gt;</code> es la zona donde vive el contenido real: lo que el usuario lee,
          ve, escucha y con lo que interactúa. En este tema se trabaja la inserción de texto con
          jerarquía correcta, imágenes con criterios profesionales, vídeo (nativo y embebido),
          enlaces y la integración de PDF dentro del contenido.
        </p>

        <div className="callout">
          Recuerda: el navegador puede “mostrar” muchas cosas aunque estén mal construidas.
          Nuestro objetivo no es que se vea “más o menos”, sino que esté bien estructurado, sea accesible
          y se mantenga estable a lo largo del tiempo.
        </div>
      </section>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del tema Body">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#s1">1) Qué contiene el &lt;body&gt;</a>
          </li>
          <li>
            <a href="#s2">2) Texto: párrafos, énfasis y jerarquía de encabezados</a>
          </li>
          <li>
            <a href="#s3">3) Imágenes: formatos, atributos, responsive, semántica</a>
          </li>
          <li>
            <a href="#s4">4) Vídeo y contenido embebido</a>
          </li>
          <li>
            <a href="#s5">5) Enlaces y direccionamientos (anclas, target, download)</a>
          </li>
          <li>
            <a href="#s6">6) Insertar PDF: enlazar, embeber y buenas prácticas</a>
          </li>
          <li>
            <a href="#s7">7) Qué más puede vivir en el body (visión de conjunto)</a>
          </li>
          <li>
            <a href="#test">Test final (10 preguntas)</a>
          </li>
        </ol>
      </nav>

      {/* 1) BODY */}
      <section className="doc-section" id="s1">
        <details className="dd" open>
          <summary>1) Qué contiene el &lt;body&gt; y por qué importa</summary>
          <div className="dd-body">
            <p>
              El elemento <code>&lt;body&gt;</code> es la segunda gran parte del documento HTML: aquí reside el
              contenido que el usuario percibe al navegar. Si el <code>&lt;head&gt;</code> configura y describe,
              el <code>&lt;body&gt;</code> <strong>comunica</strong> y <strong>estructura la experiencia</strong>.
            </p>

            <p>Dentro del body se insertan, entre otros:</p>
            <ul>
              <li>Texto estructurado: encabezados, párrafos, listas, citas.</li>
              <li>Contenido multimedia: imágenes, vídeo, audio, iframes.</li>
              <li>Navegación: enlaces, menús, índices y anclas internas.</li>
              <li>Estructura semántica: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>.</li>
              <li>Componentes interactivos: formularios, botones, controles.</li>
              <li>Documentos y recursos: PDFs, descargas, incrustaciones.</li>
            </ul>

            <div className="callout tip">
              Un body bien construido no se mide por “cantidad de cosas”, sino por la claridad con la que el
              usuario entiende dónde está, qué puede hacer y cómo avanzar.
            </div>
          </div>
        </details>
      </section>

      {/* 2) TEXTO */}
      <section className="doc-section" id="s2">
        <details className="dd">
          <summary>2) Texto: párrafos, énfasis y jerarquía de encabezados</summary>
          <div className="dd-body">
            <p>
              El texto es el contenido más frecuente y el que mejor se indexa, se traduce y se adapta.
              En HTML no se “escribe bonito”: se escribe <strong>con estructura</strong>.
            </p>

            <details className="dd dd-nested">
              <summary>Encabezados: <code>&lt;h1&gt;</code>…<code>&lt;h6&gt;</code></summary>
              <div className="dd-body">
                <p>
                  Los encabezados no son “tamaños de letra”: son la jerarquía del documento.
                  Una página bien estructurada permite que un lector humano y una tecnología asistiva
                  recorran el contenido de forma lógica.
                </p>

                <pre>
                  <code>{`<h1>Guía de Jardinería</h1>
<section>
  <h2>Plantas de interior</h2>
  <h3>Riego</h3>
  <p>...</p>
  <h3>Luz</h3>
  <p>...</p>
</section>`}</code>
                </pre>

                <div className="callout warn">
                  Evita saltos sin sentido (por ejemplo, pasar de <code>&lt;h2&gt;</code> a <code>&lt;h5&gt;</code>)
                  si no hay una estructura que lo justifique.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Párrafos, saltos y separación: <code>&lt;p&gt;</code>, <code>&lt;br&gt;</code> y espacios</summary>
              <div className="dd-body">
                <p>
                  Para bloques de texto usa <code>&lt;p&gt;</code>. El salto de línea <code>&lt;br&gt;</code>
                  es para rupturas puntuales (poesía, direcciones, formatos específicos), no para “hacer hueco”.
                </p>

                <pre>
                  <code>{`<p>Este es un párrafo con una idea completa.</p>
<p>Este es otro párrafo. Separar ideas mejora lectura y comprensión.</p>`}</code>
                </pre>

                <div className="callout tip">
                  El espaciado visual se controla con CSS, no metiendo <code>&lt;br&gt;</code> repetidos.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>Negrita, cursiva y significado: <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code></summary>
              <div className="dd-body">
                <p>
                  Hay una diferencia entre <strong>significado</strong> y <strong>estilo</strong>:
                </p>
                <ul>
                  <li><code>&lt;strong&gt;</code> = importancia (semántica).</li>
                  <li><code>&lt;em&gt;</code> = énfasis (semántica).</li>
                  <li><code>&lt;b&gt;</code> y <code>&lt;i&gt;</code> = presentación (no añaden significado por sí mismos).</li>
                </ul>

                <pre>
                  <code>{`<p><strong>Importante:</strong> riega solo cuando el sustrato esté seco.</p>
<p>Este consejo es <em>especialmente</em> útil en invierno.</p>`}</code>
                </pre>

                <div className="callout">
                  Un HTML sólido permite que el significado se mantenga incluso si mañana cambia el diseño.
                </div>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* 3) IMÁGENES (fusiona tu contenido en estilo doc) */}
      <section className="doc-section" id="s3">
        <h2>Imágenes: formatos, atributos y ubicación</h2>
        <p>
          Insertar imágenes “funciona” casi siempre. Insertarlas bien exige pensar en formato, accesibilidad,
          rendimiento y semántica. El objetivo es que se vean bien, carguen rápido y aporten información
          cuando corresponda.
        </p>

        <details className="dd">
          <summary>3.1 Formatos y casos de uso</summary>
          <div className="dd-body">
            <ul>
              <li><strong>JPEG/JPG</strong>: fotografías, degradados; buena compresión con pérdida.</li>
              <li><strong>PNG</strong>: transparencia; logos y gráficos nítidos.</li>
              <li><strong>WebP / AVIF</strong>: modernos, mejor compresión/calidad; ideales si hay soporte.</li>
              <li><strong>SVG</strong>: vectorial y escalable; iconos, logos, diagramas.</li>
              <li><strong>GIF</strong>: animaciones simples; hoy suele preferirse vídeo.</li>
            </ul>

            <div className="table-wrap" role="region" aria-label="Tabla de formatos de imagen">
              <table className="table">
                <thead>
                  <tr>
                    <th>Formato</th>
                    <th>Ideal para</th>
                    <th>Ventajas</th>
                    <th>Compatibilidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>JPG / JPEG</strong></td>
                    <td>Fotografías, degradados.</td>
                    <td>Gran compresión.</td>
                    <td>Universal.</td>
                  </tr>
                  <tr>
                    <td><strong>PNG</strong></td>
                    <td>Logos e iconos con transparencia.</td>
                    <td>Sin pérdida, transparencia.</td>
                    <td>Universal.</td>
                  </tr>
                  <tr>
                    <td><strong>GIF</strong></td>
                    <td>Animaciones cortas.</td>
                    <td>Animación simple.</td>
                    <td>Universal.</td>
                  </tr>
                  <tr>
                    <td><strong>SVG</strong></td>
                    <td>Logos, iconos, diagramas.</td>
                    <td>Vectorial, escala sin pixelar.</td>
                    <td>Muy buena.</td>
                  </tr>
                  <tr>
                    <td><strong>WebP</strong></td>
                    <td>Fotos y gráficos en general.</td>
                    <td>Mejor compresión que JPG/PNG.</td>
                    <td>Muy buena (modernos).</td>
                  </tr>
                  <tr>
                    <td><strong>AVIF</strong></td>
                    <td>Fotos y gráficos complejos.</td>
                    <td>Compresión superior, alta calidad.</td>
                    <td>Buena (modernos).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              No es “moderno por moderno”: WebP/AVIF reducen peso con calidad. El rendimiento es parte del diseño.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3.2 Insertar una imagen correctamente (atributos clave)</summary>
          <div className="dd-body">
            <p><strong>Ejemplo recomendado:</strong></p>
            <pre>
              <code>{`<img 
  src="img/faro.jpg" 
  alt="Faro al atardecer en la costa"
  title="Faro — Fotografía de ejemplo"
  width="640" height="426"
  loading="lazy"
  decoding="async"
/>`}</code>
            </pre>

            <ul>
              <li><strong>alt</strong>: describe la imagen (accesibilidad + fallback).</li>
              <li><strong>width/height</strong>: evita saltos visuales (CLS).</li>
              <li><strong>loading="lazy"</strong>: retrasa carga fuera de pantalla.</li>
              <li><strong>decoding="async"</strong>: mejora percepción de carga.</li>
            </ul>

            <details className="dd dd-nested">
              <summary>Alt: el atributo que separa un HTML profesional</summary>
              <div className="dd-body">
                <p>
                  <code>alt</code> describe la imagen para lectores de pantalla y ayuda a buscadores.
                  Si la imagen es decorativa, <code>alt=""</code> es correcto; si aporta información, hay que describirla.
                </p>
                <pre>
                  <code>{`<!-- Correcto -->
<img src="laptop.jpg" alt="Una desarrolladora trabajando con su portátil en un escritorio ordenado">

<!-- Decorativa -->
<img src="decoracion.svg" alt="">

<!-- Incorrecto -->
<img src="imagen1.jpg" alt="">
<img src="imagen2.jpg" alt="imagen-2">`}</code>
                </pre>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>3.3 Imágenes responsive: <code>srcset</code>, <code>sizes</code> y <code>&lt;picture&gt;</code></summary>
          <div className="dd-body">
            <p><strong>Responsive por anchura:</strong></p>
            <pre>
              <code>{`<img
  src="img/hero-800.jpg"
  srcset="img/hero-400.jpg 400w, img/hero-800.jpg 800w, img/hero-1200.jpg 1200w"
  sizes="(max-width: 600px) 90vw, 800px"
  alt="Paisaje de montaña con lago"
/>`}</code>
            </pre>

            <p><strong>Art direction + formatos modernos:</strong></p>
            <pre>
              <code>{`<picture>
  <source srcset="img/portada.avif" type="image/avif" media="(min-width: 900px)">
  <source srcset="img/portada.webp" type="image/webp">
  <img src="img/portada.jpg" alt="Portada del sitio con ilustración">
</picture>`}</code>
            </pre>

            <div className="callout">
              <code>&lt;picture&gt;</code> no es “por capricho”: permite elegir formatos y recortes distintos según pantalla.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3.4 Ubicación y semántica: <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code></summary>
          <div className="dd-body">
            <pre>
              <code>{`<figure>
  <img src="img/grafico.svg" alt="Crecimiento trimestral en 2025">
  <figcaption>Figura 1. Crecimiento trimestral (2025).</figcaption>
</figure>`}</code>
            </pre>

            <div className="callout tip">
              Si la imagen necesita pie o explicación, <code>&lt;figure&gt;</code> organiza el contenido de forma semántica y clara.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3.5 ¿&lt;img&gt; o fondo CSS?</summary>
          <div className="dd-body">
            <ul>
              <li><strong>Contenido</strong> (aporta información) → <code>&lt;img&gt;</code> con <code>alt</code>.</li>
              <li><strong>Decoración</strong> (solo estética) → CSS <code>background-image</code> (o <code>alt=""</code> si se usa <code>&lt;img&gt;</code>).</li>
            </ul>

            <pre>
              <code>{`.hero {
  background-image: image-set(
    url("img/hero-800.webp") type("image/webp") 1x,
    url("img/hero-1600.webp") type("image/webp") 2x
  );
  background-size: cover;
  background-position: center;
}`}</code>
            </pre>
          </div>
        </details>
      </section>

      {/* 4) VÍDEO */}
      <section className="doc-section" id="s4">
        <h2>Vídeo y programas embebidos</h2>
        <p>
          Multimedia aporta valor, pero también peso y complejidad. La decisión correcta no es estética:
          es compatibilidad, accesibilidad, rendimiento y seguridad cuando el contenido viene de fuera.
        </p>

        <details className="dd">
          <summary>4.1 Vídeo nativo: control total con &lt;video&gt;</summary>
          <div className="dd-body">
            <p>
              Usa <code>&lt;video&gt;</code> cuando necesites control real: múltiples fuentes, poster, estrategias de carga,
              subtítulos y comportamiento consistente.
            </p>

            <pre>
              <code>{`<video controls preload="metadata" playsinline poster="img/poster.jpg" width="720">
  <source src="media/demo.webm" type="video/webm">
  <source src="media/demo.mp4"  type="video/mp4">
  <track src="media/demo-es.vtt" kind="captions" srclang="es" label="Español" default>
  Tu navegador no soporta vídeo HTML5.
</video>`}</code>
            </pre>

            <ul>
              <li><code>preload="metadata"</code>: reduce descarga inicial.</li>
              <li><code>playsinline</code>: evita pantalla completa forzada en móvil.</li>
              <li><code>poster</code>: comunica contexto antes de reproducir.</li>
              <li><code>&lt;track&gt;</code>: subtítulos y accesibilidad.</li>
            </ul>

            <div className="callout warn">
              Evita <code>autoplay</code> con sonido: muchos navegadores lo bloquean y es mala experiencia. Si se usa, suele requerir <code>muted</code>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4.2 Embebidos con &lt;iframe&gt;: rapidez con control de seguridad</summary>
          <div className="dd-body">
            <p>
              Embebidos (YouTube/Vimeo) son prácticos, pero deben configurarse pensando en privacidad y superficie de ataque.
            </p>

            <pre>
              <code>{`<iframe
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="Reproductor de vídeo"
  width="560" height="315"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  sandbox="allow-scripts allow-same-origin allow-presentation"
  allowfullscreen></iframe>`}</code>
            </pre>

            <ul>
              <li><code>loading="lazy"</code>: mejora carga inicial.</li>
              <li><code>referrerpolicy</code>: controla información enviada.</li>
              <li><code>sandbox</code>: habilita solo lo imprescindible.</li>
            </ul>
          </div>
        </details>

        <details className="dd">
          <summary>4.3 Audio: estructura equivalente con &lt;audio&gt;</summary>
          <div className="dd-body">
            <pre>
              <code>{`<audio controls preload="metadata">
  <source src="media/pista.opus" type="audio/ogg; codecs=opus">
  <source src="media/pista.mp3"  type="audio/mpeg">
  Tu navegador no soporta audio HTML5.
</audio>`}</code>
            </pre>

            <div className="callout tip">
              Para voz, Opus ofrece gran calidad a bitrates bajos, pero conserva MP3 por compatibilidad universal.
            </div>
          </div>
        </details>
      </section>

      {/* 5) ENLACES */}
      <section className="doc-section" id="s5" aria-label="Enlaces en HTML">
        <h2>Enlaces: la base de la web</h2>
        <p>
          Un enlace conecta contenidos: páginas, documentos, secciones internas o acciones como correo o llamada.
          Un enlace bien construido guía; uno mal construido despista.
        </p>

        <details className="dd">
          <summary>5.1 Sintaxis, tipos de enlace y comportamiento</summary>
          <div className="dd-body">
            <h3>¿Qué es un enlace?</h3>
            <p>
              Se crea con <code>&lt;a&gt;</code> (anchor). Puede envolver texto, imágenes u otros elementos.
            </p>

            <p><strong>Sintaxis:</strong></p>
            <pre>
              <code>{`<a href="https://ejemplo.com">Texto del enlace</a>`}</code>
            </pre>

            <ul>
              <li><code>href</code>: obligatorio, indica destino (URL o ruta).</li>
              <li>El contenido entre etiquetas es lo clicable.</li>
            </ul>

            <div className="table-wrap" role="region" aria-label="Tipos de enlace en HTML">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Descripción</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Externo</strong></td>
                    <td>Fuera del sitio actual.</td>
                    <td>
                      <code>{`<a href="https://www.wikipedia.org">Ir a Wikipedia</a>`}</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Interno</strong></td>
                    <td>Otra página del mismo proyecto.</td>
                    <td>
                      <code>{`<a href="contacto.html">Contáctanos</a>`}</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Relativo</strong></td>
                    <td>Ruta relativa al archivo actual.</td>
                    <td>
                      <code>{`<a href="../imagenes/logo.png">Ver logo</a>`}</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Absoluto</strong></td>
                    <td>URL completa.</td>
                    <td>
                      <code>{`<a href="https://ejemplo.com/blog/articulo.html">Leer artículo</a>`}</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>Abre el cliente de correo.</td>
                    <td>
                      <code>{`<a href="mailto:info@ejemplo.com">Escríbenos</a>`}</code>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Teléfono</strong></td>
                    <td>Llamada (móvil).</td>
                    <td>
                      <code>{`<a href="tel:+34900111222">Llamar</a>`}</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="dd dd-nested">
              <summary>Anclas: navegar dentro de la misma página</summary>
              <div className="dd-body">
                <p>
                  Las anclas desplazan a una sección concreta sin recargar. Son esenciales en documentos largos.
                </p>
                <pre>
                  <code>{`<!-- Enlace -->
<a href="#contacto">Ir a Contacto</a>

<!-- Destino -->
<section id="contacto">
  <h2>Contacto</h2>
</section>`}</code>
                </pre>

                <div className="callout tip">
                  Buenas prácticas: <code>id</code> único, texto descriptivo y estructura coherente.
                </div>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>target, seguridad y descarga</summary>
              <div className="dd-body">
                <h4>target="_blank"</h4>
                <pre>
                  <code>{`<a href="https://openai.com" target="_blank" rel="noopener noreferrer">
  Visitar OpenAI
</a>`}</code>
                </pre>

                <div className="callout warn">
                  Si abres en nueva pestaña, añade <code>rel="noopener noreferrer"</code> para reducir riesgos.
                </div>

                <h4>download</h4>
                <pre>
                  <code>{`<a href="documento.pdf" download>Descargar PDF</a>`}</code>
                </pre>
              </div>
            </details>

            <details className="dd dd-nested">
              <summary>UX: el texto del enlace importa</summary>
              <div className="dd-body">
                <p><strong>Mal:</strong></p>
                <pre>
                  <code>{`<a href="doc.pdf">Haz clic aquí</a>`}</code>
                </pre>

                <p><strong>Bien:</strong></p>
                <pre>
                  <code>{`<a href="doc.pdf">Descargar el manual en PDF</a>`}</code>
                </pre>

                <p>
                  Un buen enlace comunica destino/acción. Esto mejora accesibilidad, confianza y navegación.
                </p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* 6) PDF */}
      <section className="doc-section" id="s6" aria-label="PDF en el cuerpo del documento">
        <h2>Insertar PDF en el body: enlazar, embeber y controlar la experiencia</h2>
        <p>
          Un PDF puede formar parte del contenido del sitio de dos maneras principales: como recurso descargable
          (enlace) o como documento visualizable dentro de la página (embebido). Elegir bien depende de la
          experiencia que quieras dar al usuario y del contexto.
        </p>

        <details className="dd">
          <summary>6.1 Enlazar un PDF (abrir o descargar)</summary>
          <div className="dd-body">
            <p>
              Enlazar un PDF es la opción más robusta y compatible. Puedes abrirlo en la misma pestaña o en una nueva.
            </p>

            <pre>
              <code>{`<!-- Abrir en nueva pestaña (recomendable para documentos largos) -->
<a href="/docs/manual.pdf" target="_blank" rel="noopener noreferrer">
  Ver el manual en PDF
</a>

<!-- Forzar descarga (si procede) -->
<a href="/docs/manual.pdf" download>
  Descargar manual en PDF
</a>`}</code>
            </pre>

            <div className="callout tip">
              Si el PDF es material de lectura, abrir en nueva pestaña suele mejorar la navegación: el usuario no “pierde” la página.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>6.2 Embeber un PDF con &lt;embed&gt; (simple y directo)</summary>
          <div className="dd-body">
            <p>
              <code>&lt;embed&gt;</code> muestra el PDF dentro de la página. Es rápido de implementar, pero depende del soporte del navegador.
            </p>

            <pre>
              <code>{`<embed
  src="/docs/manual.pdf"
  type="application/pdf"
  width="100%"
  height="600"
/>`}</code>
            </pre>

            <div className="callout warn">
              Siempre ofrece alternativa: algunos dispositivos o configuraciones no muestran el PDF embebido correctamente.
            </div>

            <pre>
              <code>{`<p>
  Si no ves el documento, puedes
  <a href="/docs/manual.pdf" target="_blank" rel="noopener noreferrer">abrir el PDF en una nueva pestaña</a>.
</p>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>6.3 Embeber con &lt;object&gt; (con fallback integrado)</summary>
          <div className="dd-body">
            <p>
              <code>&lt;object&gt;</code> permite incluir un contenido alternativo dentro si el PDF no se puede renderizar.
              Esto lo hace especialmente valioso cuando buscas robustez.
            </p>

            <pre>
              <code>{`<object
  data="/docs/manual.pdf"
  type="application/pdf"
  width="100%"
  height="600">
  <p>
    Tu navegador no puede mostrar el PDF.
    <a href="/docs/manual.pdf" target="_blank" rel="noopener noreferrer">Ábrelo aquí</a>.
  </p>
</object>`}</code>
            </pre>

            <div className="callout tip">
              Si vas a embeber PDFs en un entorno real, <code>&lt;object&gt;</code> suele ser mejor opción por su fallback natural.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>6.4 Criterios de experiencia: ¿enlace o embed?</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Enlace</strong>: máxima compatibilidad, menor peso visual, ideal para descargas o lectura externa.
              </li>
              <li>
                <strong>Embed/Object</strong>: lectura dentro de la página, útil si el PDF forma parte del flujo del contenido.
              </li>
              <li>
                <strong>Siempre alternativa</strong>: si embebes, incluye un enlace visible al PDF.
              </li>
            </ul>

            <div className="callout">
              En un manual formativo, suele funcionar bien: vista previa embebida + botón de abrir/descargar.
            </div>
          </div>
        </details>
      </section>

      {/* 7) VISION DE CONJUNTO */}
      <section className="doc-section" id="s7">
        <details className="dd">
          <summary>7) Qué más puede vivir en el body: mapa del contenido posible</summary>
          <div className="dd-body">
            <p>
              El body admite prácticamente todo lo que constituye una página: contenido, estructura y componentes interactivos.
              Para orientar el diseño, conviene pensar en “familias”:
            </p>

            <ul>
              <li><strong>Estructura semántica</strong>: header, nav, main, section, article, aside, footer.</li>
              <li><strong>Texto y contenido</strong>: headings, p, ul/ol, blockquote, code/pre, table.</li>
              <li><strong>Media</strong>: img/picture, video/audio/source/track, iframe, object/embed.</li>
              <li><strong>Interacción</strong>: form, input, button, details/summary, dialog (si aplica).</li>
              <li><strong>Navegación</strong>: a, menús, anclas, breadcrumbs.</li>
            </ul>

            <div className="callout tip">
              La pregunta correcta no es “¿qué puedo meter en el body?”, sino “¿qué estructura hace que esto se entienda, sea accesible y escalable?”.
            </div>
          </div>
        </details>
      </section>

      {/* TEST FINAL */}
      <section className="doc-section" id="test" aria-labelledby="test-title">
        <h2 id="test-title">Test final · BODY (10 preguntas)</h2>
        <p>
          Marca una opción por pregunta y pulsa <strong>Corregir</strong>. Al corregir, verás feedback inmediato con
          explicación técnica.
        </p>

        {submitted && (
          <div className="callout tip" role="status" aria-live="polite">
            Resultado: <strong>{score}</strong> / <strong>{quiz.length}</strong>
          </div>
        )}

        {quiz.map((q, i) => {
          const picked = answers[q.id];
          const ok = submitted && picked === q.correctIndex;
          const wrong = submitted && picked !== null && picked !== q.correctIndex;

          return (
            <div className="test-question" key={q.id}>
              <p>
                <strong>
                  {i + 1}. {q.question}
                </strong>
              </p>

              {q.options.map((opt, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name={q.id}
                    checked={picked === idx}
                    onChange={() => pick(q.id, idx)}
                  />
                  {opt}
                </label>
              ))}

              {submitted && (
                <>
                  {ok && (
                    <p className="callout tip">
                      ✔ Correcta. {q.explanation}
                    </p>
                  )}
                  {wrong && (
                    <p className="callout warn">
                      ✘ No. La correcta es: <strong>{q.options[q.correctIndex]}</strong>.{" "}
                      {q.explanation}
                    </p>
                  )}
                  {picked === null && (
                    <p className="callout warn">
                      ⚠ No has respondido esta pregunta.
                    </p>
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="doc-next">
          <button className="btn btn-primary" type="button" onClick={correct}>
            Corregir
          </button>
        </div>
      </section>
    </main>
  );
}
