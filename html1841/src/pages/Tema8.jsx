/* Tema7BodyMedia.jsx
   Página React COMPLETA (estilo "doc") que integra:
   - 3) Imágenes
   - 4) Vídeo / embebidos / audio
   - 5) Enlaces
   - 6) PDF (enlazar + embeber)
   - 7) Visión de conjunto
   - Test final (10 preguntas) con corrección

   ✅ Revisado y corregido para React + buenas prácticas de marcado.
*/

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Tema7BodyMedia() {
  // ✅ Si ya cargas CSS global en tu app, puedes ELIMINAR todo este bloque (CSS_HREF + useEffect)
  const CSS_HREF = useMemo(() => "/assets/styles.css", []);
  

  const handleIndexClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    // Si el destino está dentro de un <details>, lo abrimos
    const detailsParent = target.closest("details");
    if (detailsParent) detailsParent.open = true;

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

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

    document.title = "UF1841 ·  Media, enlaces y PDFs";
  }, [CSS_HREF]);

  // =========================
  // TEST FINAL (10 preguntas)
  // =========================
  const quiz = useMemo(
    () => [
      {
        id: "q1",
        question: "¿Cuál es el atributo más importante para accesibilidad en <img>?",
        options: ["title", "alt", "id", "class"],
        correctIndex: 1,
        explanation: "alt describe la imagen para lectores de pantalla y actúa como alternativa si no carga.",
      },
      {
        id: "q2",
        question: "¿Por qué conviene indicar width y height en <img>?",
        options: [
          "Para que se vea más grande",
          "Para evitar saltos visuales (CLS)",
          "Para que cargue en HD",
          "Para que el navegador no use caché",
        ],
        correctIndex: 1,
        explanation: "width/height reservan espacio antes de cargar la imagen y reducen el layout shift (CLS).",
      },
      {
        id: "q3",
        question: "¿Qué etiqueta es la más adecuada para 'art direction' y formatos modernos (AVIF/WebP)?",
        options: ["<figure>", "<source>", "<picture>", "<img>"],
        correctIndex: 2,
        explanation:
          "<picture> permite combinar <source> con media/type y elegir recortes/formatos según condiciones.",
      },
      {
        id: "q4",
        question: "Si una imagen es solo decorativa, ¿qué valor de alt es correcto?",
        options: ['alt="decoración"', 'alt="imagen"', 'alt=""', "No poner alt nunca"],
        correctIndex: 2,
        explanation: 'alt="" indica imagen decorativa para que el lector de pantalla la ignore.',
      },
      {
        id: "q5",
        question: "En vídeo nativo, ¿qué hace <track>?",
        options: ["Cambia el códec", "Añade subtítulos/captions", "Reduce el peso del vídeo", "Activa autoplay"],
        correctIndex: 1,
        explanation: "<track> incorpora subtítulos/captions y mejora accesibilidad.",
      },
      {
        id: "q6",
        question: "En un <iframe> embebido, ¿qué atributo limita capacidades por seguridad?",
        options: ["sandbox", "title", "width", "allowfullscreen"],
        correctIndex: 0,
        explanation: "sandbox restringe funcionalidades y solo habilita lo imprescindible.",
      },
      {
        id: "q7",
        question: "¿Qué diferencia principal hay entre <a> y <link>?",
        options: [
          "<link> crea enlaces clicables",
          "<a> relaciona recursos en el head",
          "<a> navega/crea enlace clicable y <link> relaciona recursos en head",
          "No hay diferencia",
        ],
        correctIndex: 2,
        explanation: "<a> es navegación (clicable); <link> se usa en head para relacionar recursos (CSS, iconos...).",
      },
      {
        id: "q8",
        question: 'Si usas target="_blank" en <a>, ¿qué recomiendas añadir?',
        options: ["download", 'rel="noopener noreferrer"', 'aria-hidden="true"', "preload"],
        correctIndex: 1,
        explanation: 'rel="noopener noreferrer" reduce riesgos (tabnabbing) y mejora seguridad.',
      },
      {
        id: "q9",
        question: "¿Qué opción suele ser más robusta y compatible para ofrecer un PDF?",
        options: ["Embeber siempre con <embed>", "Enlazar el PDF", "Solo <object>", "Solo con <iframe>"],
        correctIndex: 1,
        explanation: "Enlazar es lo más compatible; si embebes, ofrece siempre alternativa (enlace visible).",
      },
      {
        id: "q10",
        question: "¿Qué etiqueta permite fallback interno si el PDF no se renderiza?",
        options: ["<embed>", "<object>", "<a>", "<picture>"],
        correctIndex: 1,
        explanation: "<object> permite contenido alternativo dentro si el PDF no se muestra.",
      },
    ],
    []
  );

  const initialAnswers = useMemo(() => {
    const obj = {};
    quiz.forEach((q) => (obj[q.id] = null));
    return obj;
  }, [quiz]);

  const [answers, setAnswers] = useState(initialAnswers);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const pick = (id, idx) => {
    setAnswers((prev) => ({ ...prev, [id]: idx }));
    if (submitted) setSubmitted(false);
  };

  const correct = () => {
    let s = 0;
    quiz.forEach((q) => {
      if (answers[q.id] === q.correctIndex) s += 1;
    });
    setScore(s);
    setSubmitted(true);
  };

  const anyAnswered = useMemo(() => Object.values(answers).some((v) => v !== null), [answers]);

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <section className="doc-hero" aria-labelledby="tema-title">
        <p className="doc-kicker">Tema 8 · Imágenes, vídeo, enlaces y PDFs</p>
        <h1 id="tema-title">Imágenes, vídeo, enlaces y PDFs</h1>
        <p className="doc-lead">
          En el <code>&lt;body&gt;</code> vive el contenido real. En esta página te llevas una guía práctica y “de
          manual” para insertar <strong>imágenes</strong>, <strong>vídeo</strong>, <strong>embebidos</strong>,{" "}
          <strong>enlaces</strong> y <strong>PDF</strong> con criterios de accesibilidad, rendimiento y seguridad.
        </p>

        <div className="callout">
          Recuerda: que “se vea” no basta. Un HTML profesional debe ser <strong>comprensible</strong>,{" "}
          <strong>accesible</strong> y <strong>mantenible</strong>.
        </div>
      </section>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice de Media y enlaces">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#s3" onClick={(e) => handleIndexClick(e, "s3")}>
              3) Imágenes
            </a>
          </li>
          <li>
            <a href="#s4" onClick={(e) => handleIndexClick(e, "s4")}>
              4) Vídeo y embebidos
            </a>
          </li>
          <li>
            <a href="#s5" onClick={(e) => handleIndexClick(e, "s5")}>
              5) Enlaces
            </a>
          </li>
          <li>
            <a href="#s6" onClick={(e) => handleIndexClick(e, "s6")}>
              6) PDF
            </a>
          </li>
          <li>
            <a href="#s7" onClick={(e) => handleIndexClick(e, "s7")}>
              7) Visión de conjunto
            </a>
          </li>
          <li>
            <a href="#test" onClick={(e) => handleIndexClick(e, "test")}>
              Test final
            </a>
          </li>
        </ol>
      </nav>

      {/* 3) IMÁGENES */}
      <section className="doc-section" id="s3">
        <h2>Imágenes: formatos, atributos y ubicación</h2>
        <p>
          Insertar imágenes “funciona” casi siempre. Insertarlas bien exige pensar en formato, accesibilidad,
          rendimiento y semántica. El objetivo es que se vean bien, carguen rápido y aporten información cuando
          corresponda.
        </p>

        <details className="dd">
          <summary>3.1 Formatos y casos de uso</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>JPEG/JPG</strong>: fotografías, degradados; buena compresión con pérdida.
              </li>
              <li>
                <strong>PNG</strong>: transparencia; logos y gráficos nítidos.
              </li>
              <li>
                <strong>WebP / AVIF</strong>: modernos, mejor compresión/calidad; ideales si hay soporte.
              </li>
              <li>
                <strong>SVG</strong>: vectorial y escalable; iconos, logos, diagramas.
              </li>
              <li>
                <strong>GIF</strong>: animaciones simples; hoy suele preferirse vídeo.
              </li>
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
                    <td>
                      <strong>JPG / JPEG</strong>
                    </td>
                    <td>Fotografías, degradados.</td>
                    <td>Gran compresión.</td>
                    <td>Universal.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>PNG</strong>
                    </td>
                    <td>Logos e iconos con transparencia.</td>
                    <td>Sin pérdida, transparencia.</td>
                    <td>Universal.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>GIF</strong>
                    </td>
                    <td>Animaciones cortas.</td>
                    <td>Animación simple.</td>
                    <td>Universal.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>SVG</strong>
                    </td>
                    <td>Logos, iconos, diagramas.</td>
                    <td>Vectorial, escala sin pixelar.</td>
                    <td>Muy buena.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>WebP</strong>
                    </td>
                    <td>Fotos y gráficos en general.</td>
                    <td>Mejor compresión que JPG/PNG.</td>
                    <td>Muy buena (modernos).</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>AVIF</strong>
                    </td>
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
    <p>
      <strong>Ejemplo recomendado:</strong>
    </p>

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

    <div className="callout tip">
      <strong>Y si la imagen necesita explicación…</strong> no lo fuerces en el <code>alt</code>.  
      Mejor usa <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> para darle un pie de imagen claro y semántico.
    </div>

    <pre>
      <code>{`<figure>
  <img
    src="img/faro.jpg"
    alt="Faro al atardecer en la costa"
    width="640" height="426"
    loading="lazy"
  />
  <figcaption>Faro de Trafalgar al atardecer (ejemplo de pie de foto).</figcaption>
</figure>`}</code>
    </pre>

    <details className="dd dd-nested">
      <summary>Regla rápida: ¿alt largo o figcaption?</summary>
      <div className="dd-body">
        <ul>
          <li>
            <strong>alt</strong> = descripción breve para quien no ve la imagen (qué es).
          </li>
          <li>
            <strong>figcaption</strong> = contexto extra para cualquiera (por qué importa / dato / fuente).
          </li>
        </ul>
        <div className="callout">
          <strong>Truco:</strong> si el texto es “una frase de contexto”, suele ser <code>figcaption</code>, no <code>alt</code>.
        </div>
        <p>
  No todas las imágenes necesitan ir dentro de <code>&lt;figure&gt;</code>.  
  <strong>Usa <code>&lt;figure&gt;</code> solo cuando la imagen forme una unidad con una explicación, título o referencia</strong>,
  es decir, cuando quieras añadir un <code>&lt;figcaption&gt;</code> o cuando la imagen sea una “figura” que vas a comentar
  (gráficos, diagramas, capturas importantes, fotografías con contexto).
</p>

<p>
  Si la imagen es simplemente ilustrativa (acompaña al texto, decora o refuerza visualmente una idea),
  <strong>basta con usar <code>&lt;img&gt;</code> directamente</strong>.  
  <code>&lt;figure&gt;</code> no es obligatorio: es una herramienta semántica para dar significado,
  no un contenedor genérico para todas las imágenes.
</p>
<div class="callout tip">
  Regla práctica: <strong>si la imagen necesita explicación → <code>&lt;figure&gt;</code></strong>.  
  Si solo ilustra → <code>&lt;img&gt;</code> es suficiente.
</div>

      </div>
    </details>
  </div>
</details>


      {/* ================================
    3.3–3.5 · Imágenes (responsive + semántica + CSS)
    Versión clara para principiantes
================================ */}
<details className="dd">
  <summary>
    3.3 Imágenes responsive: <code>src</code> vs <code>srcset</code> (cuándo usarlo)
  </summary>

  <div className="dd-body">
    <p>
      Una imagen con <code>src</code> ya se <strong>adapta de tamaño</strong> con CSS (se verá más pequeña en móvil y más
      grande en PC). Pero <strong>siempre descarga el mismo archivo</strong>.
    </p>

    <div className="callout">
      <strong>Idea clave:</strong> <code>src</code> adapta el <em>tamaño visual</em>. <code>srcset</code> adapta el{" "}
      <em>tamaño del archivo descargado</em> (para que no pese tanto en móvil).
    </div>

    <p>
      ✅ <strong>Opción 1 (la más normal al empezar):</strong> una sola imagen con <code>src</code>.
    </p>
    <pre>
      <code>{`<img
  src="img/hero.jpg"
  alt="Paisaje de montaña con lago"
  loading="lazy"
/>`}</code>
    </pre>

    <p>
      ✅ <strong>Opción 2 (cuando quieres optimizar):</strong> varias versiones de la misma imagen con <code>srcset</code>.
      El navegador elige la más adecuada.
    </p>
    <pre>
      <code>{`<img
  src="img/hero-800.jpg"
  srcSet="img/hero-400.jpg 400w, img/hero-800.jpg 800w, img/hero-1200.jpg 1200w"
  sizes="(max-width: 600px) 90vw, 800px"
  alt="Paisaje de montaña con lago"
  loading="lazy"
/>`}</code>
    </pre>

    <div className="callout tip">
      <strong>¿Tengo que usar srcset en todas?</strong> No. Úsalo en imágenes grandes (hero, banners, portada) o si tu
      web va lenta por imágenes pesadas.
    </div>

    <details className="dd dd-nested">
      <summary>Mini-guía rápida (para no liarte)</summary>
      <div className="dd-body">
        <ul>
          <li>
            Si es una imagen pequeña (icono/miniatura) → <strong>solo src</strong>.
          </li>
          <li>
            Si es una imagen grande (portada/fondo/hero) → <strong>mejor srcset</strong>.
          </li>
          
        </ul>
      </div>
    </details>
  </div>
</details>


      </section>

      {/* 4) VÍDEO */}
      <section className="doc-section" id="s4">
        <h2>Vídeo y programas embebidos</h2>
        <p>
          Multimedia aporta valor, pero también peso y complejidad. La decisión correcta no es estética: es
          compatibilidad, accesibilidad, rendimiento y seguridad cuando el contenido viene de fuera.
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
            <p>Para insertar un vídeo de YouTube en una página web no se utiliza el enlace normal del vídeo, sino su versión embebida (embed). Esto consiste en extraer el ID del vídeo (la parte que aparece después de v= en la URL o tras youtu.be/) y construir una nueva dirección con el formato https://www.youtube.com/embed/ID_DEL_VIDEO. Esa URL se coloca dentro del atributo src de una etiqueta <code>&lt;iframe&gt;</code>. Es importante recordar que en src solo debe ir la URL, nunca otro <code>&lt;iframe&gt;</code> dentro. Como buena práctica de privacidad, se recomienda usar youtube-nocookie.com, que evita la carga de cookies hasta que el usuario interactúa con el vídeo. De esta forma conseguimos una integración correcta, segura y compatible con los estándares HTML.</p> 
            <p>La forma más sencilla y segura de obtener la dirección correcta para embebir un vídeo de YouTube es usar la opción “Compartir → Insertar” que ofrece la propia plataforma. Al hacerlo, YouTube genera automáticamente el código <iframe> con la URL correcta en el atributo src. De este modo evitamos errores comunes y nos aseguramos de que el vídeo se incrusta correctamente. En HTML, es importante recordar que en src solo debe ir la URL del vídeo embebido, nunca otro código HTML.</iframe></p>
          </div>
        </details>

        <details className="dd">
          <summary>4.2 Embebidos con &lt;iframe&gt;</summary>
          <div className="dd-body">
           <p>
  Los vídeos embebidos (YouTube, Vimeo…) son muy cómodos, pero no son contenido propio:
  se cargan desde servidores externos. Por eso deben configurarse teniendo en cuenta
  <strong>la privacidad del usuario</strong> (datos que se envían automáticamente) y
  <strong>la seguridad</strong> (qué acciones puede realizar el iframe).
</p>

<div class="callout">
  <strong>Idea clave:</strong> un iframe es “otra web dentro de la tuya”. 
  Cuantos más permisos tenga, más riesgos introduces.
</div>


            <pre>
              <code>{`<iframe
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="Vídeo explicativo"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  sandbox="allow-scripts allow-same-origin allow-presentation"
  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
  allowfullscreen>
</iframe>
`}</code>
            </pre>

            <ul>
              <li><code>loading="lazy"</code>: mejora carga inicial.</li>
              <li><code>referrerpolicy</code>: controla información enviada.</li>
              <li><code>sandbox</code>: habilita solo lo imprescindible.</li>
              <li><code>allow</code>: permisos específicos (evita “todo o nada”).</li>
              <li><code>nocookie</code>: evita cookies de seguimiento.
  Para incrustar vídeos de YouTube de forma más respetuosa con la privacidad,
  usa siempre la versión <code>youtube-nocookie.com</code>.  
  Solo tienes que sustituir <code>youtube.com/embed</code> por
  <code>youtube-nocookie.com/embed</code>.</li>
  


            </ul>
          </div>
        </details>

       <details className="dd">
  <summary>4.3 Audio: cómo incluir sonido en una web con &lt;audio&gt;</summary>
  <div className="dd-body">
    <p>
      La etiqueta <code>&lt;audio&gt;</code> permite insertar sonido directamente en una página web
      (voz, música, efectos, podcasts, explicaciones grabadas, etc.) sin necesidad de plugins externos.
    </p>

    <p>
      Funciona de forma muy parecida a <code>&lt;video&gt;</code>, pero solo gestiona sonido.
    </p>

    <p>
      <strong>Ejemplo básico y recomendado:</strong>
    </p>

    <pre>
      <code>{`<audio controls preload="metadata">
  <source src="media/pista.opus" type="audio/ogg; codecs=opus">
  <source src="media/pista.mp3"  type="audio/mpeg">
  Tu navegador no soporta audio HTML5.
</audio>`}</code>
    </pre>

    <div className="callout">
      El navegador intentará reproducir el <strong>primer formato compatible</strong>.
      Por eso se suelen incluir varios <code>&lt;source&gt;</code>.
    </div>

    <h4>📌 Atributos más importantes</h4>
    <ul>
      <li>
        <strong>controls</strong>: muestra los botones de reproducir, pausar y volumen (casi siempre obligatorio).
      </li>
      <li>
        <strong>preload="metadata"</strong>: solo carga información básica (duración, formato), ahorrando datos.
      </li>
      <li>
        <strong>autoplay</strong>: reproduce automáticamente (⚠️ suele estar bloqueado si hay sonido).
      </li>
      <li>
        <strong>loop</strong>: repite el audio al terminar.
      </li>
      <li>
        <strong>muted</strong>: comienza sin sonido (necesario si se usa autoplay).
      </li>
    </ul>

    <div className="callout warn">
      Evita usar <code>autoplay</code> con sonido.  
      Es molesto para el usuario y muchos navegadores lo bloquean.
    </div>

    <h4>🎵 Formatos de audio más comunes</h4>
    <ul>
      <li>
        <strong>MP3</strong>: compatibilidad universal (siempre conviene incluirlo).
      </li>
      <li>
        <strong>Opus (.opus)</strong>: excelente calidad con poco peso (ideal para voz).
      </li>
      <li>
        <strong>OGG</strong>: alternativa abierta, menos usada hoy.
      </li>
    </ul>

    <div className="callout tip">
      Para explicaciones habladas o podcasts: <strong>Opus + MP3</strong> es una combinación ideal.
    </div>

    <h4>🧠 Buenas prácticas</h4>
    <ul>
      <li>Coloca los archivos de audio en una carpeta clara: <code>/media</code> o <code>/audio</code>.</li>
      <li>Incluye siempre <code>controls</code> para que el usuario tenga control.</li>
      <li>No fuerces reproducción automática.</li>
      <li>Acompaña el audio con texto explicativo (qué es, qué se va a escuchar).</li>
    </ul>

    <h4>❌ Errores comunes</h4>
    <ul>
      <li>Usar solo un formato y que no se escuche en algunos navegadores.</li>
      <li>Activar <code>autoplay</code> sin entender por qué no funciona.</li>
      <li>Insertar audio sin contexto ni explicación.</li>
    </ul>

    <div className="callout tip">
      Regla sencilla: el audio debe <strong>ayudar</strong>, no sorprender ni molestar.
    </div>
  </div>
</details>
<details className="dd">
  <summary>🎵 Dónde conseguir música para tu web (legal y sin problemas)</summary>
  <div className="dd-body">
    <p>
      Cuando añades música o sonidos a una web, <strong>no puedes usar cualquier canción</strong>.
      La mayoría de la música comercial (Spotify, YouTube, radio, etc.) está protegida por
      <strong>derechos de autor</strong>.
    </p>

    <div className="callout warn">
      Usar música con copyright sin permiso <strong>puede provocar bloqueos, retiradas de contenido
      o problemas legales</strong>, incluso en proyectos pequeños o educativos publicados en internet.
    </div>

    <h4>🎼 ¿Qué significa “música libre de derechos”?</h4>
    <p>
      Significa que el autor permite usar su música bajo ciertas condiciones.
      <strong>No siempre es “gratis”</strong>, pero sí legal si respetas la licencia.
    </p>

    <ul>
      <li><strong>Royalty free:</strong> puedes usarla sin pagar por cada uso.</li>
      <li><strong>Creative Commons:</strong> algunas exigen mencionar al autor.</li>
      <li><strong>Licencia comercial:</strong> pagas una vez y puedes usarla en proyectos.</li>
    </ul>

    <div className="callout tip">
      Regla básica: si no sabes de dónde viene la música, <strong>no la uses</strong>.
    </div>

   <h4>🌐 Bancos de música y sonido (seguros y legales)</h4>
<ul>
  <li>
    <strong>YouTube Audio Library</strong> — música y efectos gratis.
    {" "}
    <a href="https://www.youtube.com/audiolibrary" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
  <li>
    <strong>FreePD</strong> — dominio público.
    {" "}
    <a href="https://freepd.com/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
  <li>
    <strong>Bensound</strong> — gratis con atribución + planes.
    {" "}
    <a href="https://www.bensound.com/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
  <li>
    <strong>Pixabay Music</strong> — música gratis.
    {" "}
    <a href="https://pixabay.com/music/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
  <li>
    <strong>Freesound</strong> — efectos (revisar licencia).
    {" "}
    <a href="https://freesound.org/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
  <li>
    <strong>Epidemic Sound</strong> — de pago, uso profesional.
    {" "}
    <a href="https://www.epidemicsound.com/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
</ul>

<h4>🤖 Música creada con IA</h4>
<ul>
  <li>
    <strong>Suno</strong> — genera canciones desde texto.
    {" "}
    <a href="https://suno.com/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
  <li>
    <strong>AIVA</strong> — música instrumental con IA.
    {" "}
    <a href="https://www.aiva.ai/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
  <li>
    <strong>Soundraw</strong> — música personalizable con licencia.
    {" "}
    <a href="https://soundraw.io/" target="_blank" rel="noreferrer">
      Abrir
    </a>
  </li>
</ul>

    <div className="callout tip">
      Ventaja de la IA: música original, sin reclamaciones automáticas y adaptada al proyecto.
    </div>

    <h4>🧠 Reglas claras para el alumno</h4>
    <ul>
      <li>❌ No uses música comercial “porque sí”.</li>
      <li>✅ Usa bancos de música libre o IA.</li>
      <li>✅ Lee siempre la licencia.</li>
      <li>✅ Si exige atribución, ponla.</li>
    </ul>

    <div className="callout">
      En desarrollo web profesional, <strong>lo legal también es parte de la calidad</strong>.
    </div>
  </div>
</details>

      </section>

      {/* 5) ENLACES */}
      <section className="doc-section" id="s5" aria-label="Enlaces en HTML">
        <h2>Enlaces: la base de la web</h2>
        <p>
          Un enlace conecta contenidos: páginas, documentos, secciones internas o acciones como correo o llamada. Un enlace
          bien construido guía; uno mal construido despista.
        </p>

        <details className="dd">
  <summary>5.1 Sintaxis, tipos de enlace y comportamiento</summary>
  <div className="dd-body">
    <h3>¿Qué es un enlace?</h3>
    <p>
      Se crea con <code>&lt;a&gt;</code> (anchor). Puede envolver texto, imágenes u otros elementos y sirve para{" "}
      <strong>navegar</strong> a otra página, a un documento o a una sección dentro de la misma página.
    </p>

    <p>
      <strong>Sintaxis:</strong>
    </p>
    <pre>
      <code>{`<a href="https://ejemplo.com">Texto del enlace</a>`}</code>
    </pre>

    <ul>
      <li>
        <code>href</code>: obligatorio, indica el destino (URL o ruta).
      </li>
      <li>El contenido entre etiquetas es lo clicable.</li>
    </ul>

    <details className="dd dd-nested">
      <summary>Diferencia entre &lt;a&gt; y &lt;link&gt; (muy importante)</summary>
      <div className="dd-body">
        <p>
          Aunque ambas se llaman “enlace”, <strong>NO sirven para lo mismo</strong>:
        </p>

        <ul>
          <li>
            <strong>
              <code>&lt;a&gt;</code> (anchor)
            </strong>{" "}
            → es un enlace <strong>clicable</strong> que va en el <code>&lt;body&gt;</code>.
            El usuario lo ve y lo usa para navegar.
          </li>
          <li>
            <strong>
              <code>&lt;link&gt;</code>
            </strong>{" "}
            → es un enlace “técnico” que va en el <code>&lt;head&gt;</code>.
            <strong> No es clicable</strong>: sirve para relacionar recursos con la página (CSS, iconos, fuentes…).
          </li>
        </ul>

        <p>
          <strong>Ejemplos:</strong>
        </p>

        <pre>
          <code>{`<!-- En el BODY (clicable) -->
<a href="https://www.wikipedia.org">Ir a Wikipedia</a>

<!-- En el HEAD (no clicable): enlaza recursos -->
<link rel="stylesheet" href="styles.css">
<link rel="icon" href="/favicon.ico">`}</code>
        </pre>

        <div className="callout tip">
          Regla rápida: si el usuario tiene que “pinchar”, es <code>&lt;a&gt;</code>.  
          Si es el navegador quien lo usa para cargar recursos, es <code>&lt;link&gt;</code>.
        </div>
      </div>
    </details>

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
            <td>
              <strong>Externo</strong>
            </td>
            <td>Fuera del sitio actual.</td>
            <td>
              <code>{`<a href="https://www.wikipedia.org">Ir a Wikipedia</a>`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Interno</strong>
            </td>
            <td>Otra página del mismo proyecto.</td>
            <td>
              <code>{`<a href="contacto.html">Contáctanos</a>`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Relativo</strong>
            </td>
            <td>Ruta relativa al archivo actual.</td>
            <td>
              <code>{`<a href="../imagenes/logo.png">Ver logo</a>`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Absoluto</strong>
            </td>
            <td>URL completa.</td>
            <td>
              <code>{`<a href="https://ejemplo.com/blog/articulo.html">Leer artículo</a>`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Email</strong>
            </td>
            <td>Abre el cliente de correo.</td>
            <td>
              <code>{`<a href="mailto:info@ejemplo.com">Escríbenos</a>`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Teléfono</strong>
            </td>
            <td>Llamada (móvil).</td>
            <td>
              <code>{`<a href="tel:+34900111222">Llamar</a>`}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <details className="dd dd-nested">
      <summary>¿Abrir enlaces en otra pestaña? (cuándo sí y cuándo no)</summary>
      <div className="dd-body">
        <p>
          En HTML, abrir en otra pestaña se hace con <code>target="_blank"</code>.  
          <strong>No es obligatorio</strong> usarlo siempre: depende del tipo de enlace.
        </p>

        <div className="callout">
          <strong>Idea clave:</strong> abrir en otra pestaña tiene sentido cuando el usuario va a salir de tu web y
          quieres que no “pierda” tu página.
        </div>

        <h4>✅ Cuándo SÍ es recomendable</h4>
        <ul>
          <li>
            <strong>Enlaces externos</strong> (otra web: Wikipedia, YouTube, etc.).
          </li>
          <li>
            <strong>Documentos largos</strong> (PDFs, guías, apuntes) que el usuario leerá aparte.
          </li>
          <li>
            <strong>Recursos</strong> que el alumno consulta mientras mantiene el manual abierto.
          </li>
        </ul>

        <h4>❌ Cuándo NO es recomendable</h4>
        <ul>
          <li>
            Navegación dentro de tu propia web (Inicio, Temas, secciones internas).
          </li>
          <li>
            Cuando quieres que el usuario siga un flujo (por ejemplo, un formulario).
          </li>
        </ul>

        <p>
          <strong>Ejemplo correcto (externo + seguridad):</strong>
        </p>
        <pre>
          <code>{`<a 
  href="https://www.wikipedia.org" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Abrir Wikipedia en otra pestaña
</a>`}</code>
        </pre>

        <div className="callout warn">
          Si usas <code>target="_blank"</code>, añade <code>rel="noopener noreferrer"</code> por seguridad.
          (Evita que la otra página pueda “controlar” tu pestaña).
        </div>
      </div>
    </details>
    


            <details className="dd dd-nested">
              <summary>Anclas: navegar dentro de la misma página</summary>
              <div className="dd-body">
                <p>Las anclas desplazan a una sección concreta sin recargar. Son esenciales en documentos largos.</p>
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

                <p>Un buen enlace comunica destino/acción. Esto mejora accesibilidad, confianza y navegación.</p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* 6) PDF */}
      <section className="doc-section" id="s6" aria-label="PDF en el cuerpo del documento">
        <h2>Insertar PDF en el body: enlazar, embeber y controlar la experiencia</h2>
        <p>
          Un PDF puede formar parte del contenido del sitio de dos maneras principales: como recurso descargable (enlace) o
          como documento visualizable dentro de la página (embebido). Elegir bien depende de la experiencia que quieras dar
          al usuario y del contexto.
        </p>

        <details className="dd">
          <summary>6.1 Enlazar un PDF (abrir o descargar)</summary>
          <div className="dd-body">
            <p>Enlazar un PDF es la opción más robusta y compatible. Puedes abrirlo en la misma pestaña o en una nueva.</p>

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
              <li><strong>Enlace</strong>: máxima compatibilidad, menor peso visual, ideal para descargas o lectura externa.</li>
              <li><strong>Embed/Object</strong>: lectura dentro de la página, útil si el PDF forma parte del flujo del contenido.</li>
              <li><strong>Siempre alternativa</strong>: si embebes, incluye un enlace visible al PDF.</li>
            </ul>

            <div className="callout">
              En un manual formativo, suele funcionar bien: vista previa embebida + botón de abrir/descargar.
            </div>
          </div>
        </details>
      </section>

      {/* 7) VISIÓN DE CONJUNTO */}
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
              La pregunta correcta no es “¿qué puedo meter en el body?”, sino “¿qué estructura hace que esto se entienda,
              sea accesible y escalable?”.
            </div>
          </div>
        </details>
      </section>

      {/* TEST FINAL */}
      <section className="doc-section" id="test" aria-labelledby="test-title">
        <h2 id="test-title">Test final · BODY (10 preguntas)</h2>
        <p>
          Marca una opción por pregunta y pulsa <strong>Corregir</strong>. Al corregir, verás feedback inmediato con explicación técnica.
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
                <label key={idx} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={q.id}
                    checked={picked === idx}
                    onChange={() => pick(q.id, idx)}
                  />{" "}
                  {opt}
                </label>
              ))}

              {submitted && (
                <>
                  {ok && (
                    <div className="callout tip">
                      <strong>✔ Correcta.</strong> {q.explanation}
                    </div>
                  )}
                  {wrong && (
                    <div className="callout warn">
                      <strong>✘ No.</strong> La correcta es: <strong>{q.options[q.correctIndex]}</strong>. {q.explanation}
                    </div>
                  )}
                  {picked === null && (
                    <div className="callout warn">⚠ No has respondido esta pregunta.</div>
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="doc-next">
          <button
            className="btn btn-primary"
            type="button"
            onClick={correct}
            disabled={!anyAnswered}
            aria-disabled={!anyAnswered}
            title={!anyAnswered ? "Responde al menos una pregunta para corregir" : "Corregir test"}
          >
            Corregir
          </button>
        </div>
      </section>

      {/* NEXT */}
       <div className="doc-next">
  <Link className="btn btn-primary" to="/tema/9">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
    </main>
  );
}
