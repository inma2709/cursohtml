/* Tema6Head.jsx
   Página React lista para copiar/pegar.
   ✅ Incluye <link rel="stylesheet"> del CSS en el <head> usando un pequeño efecto (sin librerías).
*/

import { useEffect, useMemo, useState } from "react";

export default function Tema6Head() {
  // 👉 Ajusta la ruta a TU hoja de estilos (según tu proyecto)
  const CSS_HREF = useMemo(() => "/assets/styles.css", []);

  useEffect(() => {
    // Inserta (si no existe) el <link rel="stylesheet" href="..."> en <head>
    const id = "manual-global-css";
    let link = document.getElementById(id);

    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    } else {
      // Si ya existe, asegura que apunte a la ruta actual
      link.href = CSS_HREF;
    }

    // (Opcional) título de la pestaña
    document.title = "UF1841 · Tema 6 · Cabecera (head)";

    return () => {
      // Si NO quieres que se quite al salir de la página, comenta estas líneas
      // document.getElementById(id)?.remove();
    };
  }, [CSS_HREF]);

  // -------------------------
  // TEST (interactivo + feedback)
  // -------------------------
  const questions = useMemo(
    () => [
      {
        id: "q1",
        question: "¿Cuál es la función principal del elemento <head>?",
        options: [
          "Contener el texto principal de la página",
          "Mostrar el menú de navegación",
          "Definir metainformación y recursos del documento",
          "Insertar imágenes visibles",
        ],
        correctIndex: 2,
        explanation:
          "El <head> concentra configuración: metadatos, título, enlaces a recursos (CSS, favicon, fuentes), etc.",
      },
      {
        id: "q2",
        question: "¿Dónde se muestra el contenido de <title>?",
        options: [
          "Dentro del cuerpo de la página",
          "En la pestaña del navegador",
          "En el pie de página",
          "Dentro del CSS",
        ],
        correctIndex: 1,
        explanation:
          "El <title> se muestra en la pestaña, marcadores e historial; también ayuda a buscadores.",
      },
      {
        id: "q3",
        question: "¿Qué etiqueta se utiliza para enlazar una hoja de estilo externa?",
        options: ["<style>", "<css>", "<link>", "<script>"],
        correctIndex: 2,
        explanation:
          'Para CSS externo se usa <link rel="stylesheet" href="..."> dentro del <head>.',
      },
      {
        id: "q4",
        question: "¿Cuál es la función del favicon?",
        options: [
          "Aplicar estilos a la página",
          "Mostrar un icono identificativo del sitio",
          "Definir la codificación",
          "Insertar imágenes en el contenido",
        ],
        correctIndex: 1,
        explanation:
          "El favicon es el icono del sitio en pestañas, favoritos y algunos listados del navegador.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(questions.map((q) => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  function handleChange(qid, idx) {
    setAnswers((prev) => ({ ...prev, [qid]: idx }));
    if (submitted) setSubmitted(false);
  }

  function grade() {
    setSubmitted(true);
  }

  const score = useMemo(() => {
    if (!submitted) return 0;
    let ok = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) ok += 1;
    }
    return ok;
  }, [submitted, answers, questions]);

  const total = questions.length;

  return (
    <main className="doc" id="contenido">
      {/* HERO */}
      <section className="doc-hero" aria-labelledby="tema6-title">
        <p className="doc-kicker">UF1841 · HTML/CSS</p>
        <h1 id="tema6-title">Tema 6 · La cabecera del documento HTML (&lt;head&gt;)</h1>
        <p className="doc-lead">
          La cabecera de una página web no se ve, pero decide cómo el navegador interpreta el documento,
          cómo se aplican los estilos y cómo se presenta la identidad del sitio (título, favicon, metadatos).
          En este tema nos centramos en el contenido de <code>&lt;head&gt;</code>, el favicon y los enlaces a CSS.
        </p>

        <div className="callout tip">
          En un proyecto React, lo más habitual es colocar el enlace al CSS en <code>index.html</code>. Aquí lo
          incluimos también desde esta página para que puedas copiar/pegar y funcione sin depender de otras piezas.
        </div>
      </section>

      {/* ÍNDICE */}
      <nav className="doc-index" aria-label="Índice del Tema 6">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#s61">6.1 Qué es &lt;head&gt; y su función real</a>
          </li>
          <li>
            <a href="#s62">6.2 &lt;title&gt;: el título del documento</a>
          </li>
          <li>
            <a href="#s63">6.3 Metadatos esenciales</a>
          </li>
          <li>
            <a href="#s64">6.4 Favicon: identidad visual</a>
          </li>
          <li>
            <a href="#s65">6.5 Enlaces a hojas de estilo CSS</a>
          </li>
          <li>
            <a href="#s66">6.6 Estructura completa recomendada</a>
          </li>
          <li>
            <a href="#test">Test de repaso</a>
          </li>
        </ol>
      </nav>

      {/* SECCIONES (details/summary) */}
      <section className="doc-section" id="s61">
        <details className="dd">
          <summary>6.1 ¿Qué es la cabecera &lt;head&gt; y cuál es su función real?</summary>
          <div className="dd-body">
            <p>
              El elemento <code>&lt;head&gt;</code> contiene <strong>metainformación</strong> del documento HTML.
              No forma parte del contenido visible, pero es imprescindible para que el navegador entienda
              cómo debe interpretar la página y qué recursos debe cargar.
            </p>
            <p>En términos prácticos, el <code>&lt;head&gt;</code> sirve para:</p>
            <ul>
              <li>Identificar el documento (título).</li>
              <li>Definir cómo se interpreta el texto (codificación).</li>
              <li>Enlazar recursos externos (CSS, iconos, fuentes).</li>
              <li>Ofrecer información útil a buscadores y plataformas (metadatos).</li>
            </ul>

            <p>Un ejemplo mínimo sería:</p>
            <pre>
              <code>{`<head>
  <title>Mi página web</title>
</head>`}</code>
            </pre>

            <div className="callout tip">
              La cabecera se procesa antes que el contenido visible. Si un recurso clave (como el CSS) no está bien
              enlazado, el navegador renderiza sin ese estilo: la página “funciona”, pero pierde calidad visual y
              control de presentación.
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section" id="s62">
        <details className="dd">
          <summary>6.2 El título del documento: &lt;title&gt;</summary>
          <div className="dd-body">
            <p>
              El elemento <code>&lt;title&gt;</code> define el <strong>título oficial</strong> del documento. Aparece en:
            </p>
            <ul>
              <li>La pestaña del navegador</li>
              <li>Marcadores / favoritos</li>
              <li>Historial</li>
              <li>Resultados de buscadores (junto con otros factores)</li>
            </ul>

            <pre>
              <code>{`<title>Todo Jardín · Consejos de jardinería y plantas</title>`}</code>
            </pre>

            <div className="callout warn">
              Un documento sin <code>&lt;title&gt;</code> está incompleto: pierde claridad para el usuario y para los sistemas que
              organizan e indexan páginas (navegador, buscadores, marcadores).
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section" id="s63">
        <details className="dd">
          <summary>6.3 Metadatos esenciales en la cabecera</summary>
          <div className="dd-body">
            <p>
              Los metadatos se definen con <code>&lt;meta&gt;</code>. No se ven, pero aportan información para la interpretación del documento.
            </p>

            <h3>Codificación de caracteres</h3>
            <p>La forma actual y estándar:</p>
            <pre>
              <code>{`<meta charset="utf-8">`}</code>
            </pre>

            <h3>Descripción</h3>
            <pre>
              <code>{`<meta name="description" content="Todo sobre jardinería, plantas y cuidados del jardín">`}</code>
            </pre>

            <h3>Palabras clave (enfoque histórico)</h3>
            <pre>
              <code>{`<meta name="keywords" content="jardinería, plantas, cuidados, consejos">`}</code>
            </pre>

            <div className="callout">
              Los metadatos no “decoran”: ayudan a que la página sea entendida por el navegador y por sistemas externos.
              La cabecera es un espacio técnico que define el comportamiento global del documento.
            </div>
          </div>
        </details>
      </section>

     <section className="doc-section" id="s64">
  <details className="dd">
    <summary>6.4 El favicon: identidad visual del sitio</summary>
    <div className="dd-body">
      <p>
        El <strong>favicon</strong> es el icono que identifica visualmente a un sitio web en la pestaña del navegador,
        en los marcadores y en otros contextos del navegador. Aunque su tamaño es reducido, cumple una función clave:
        <strong>permitir el reconocimiento inmediato del sitio</strong> y reforzar su identidad visual.
      </p>

      <p>
        El navegador carga el favicon desde la cabecera del documento mediante la etiqueta <code>&lt;link&gt;</code>.
        No se trata de un elemento decorativo sin más: forma parte de la experiencia global del usuario.
      </p>

      <h3>Formatos de favicon más utilizados</h3>

      <ul>
        <li>
          <strong>ICO</strong>: formato clásico y ampliamente compatible. Puede contener varios tamaños en un solo archivo.
        </li>
        <li>
          <strong>PNG</strong>: muy habitual en la actualidad, permite transparencia y buena calidad visual.
        </li>
        <li>
          <strong>SVG</strong>: formato vectorial, muy ligero y escalable (soporte cada vez mayor, pero no universal).
        </li>
      </ul>

      <p>Ejemplo con formato ICO:</p>
      <pre>
        <code>{`<link rel="icon" href="favicon.ico" type="image/x-icon">`}</code>
      </pre>

      <p>Ejemplo con formato PNG:</p>
      <pre>
        <code>{`<link rel="icon" href="favicon.png" type="image/png">`}</code>
      </pre>

      <p>Ejemplo con SVG (cuando se decide usarlo):</p>
      <pre>
        <code>{`<link rel="icon" href="favicon.svg" type="image/svg+xml">`}</code>
      </pre>

      <h3>Tamaños recomendados</h3>

      <p>
        El favicon se muestra en distintos contextos, por lo que es importante trabajar con tamaños adecuados.
        Los más habituales son:
      </p>

      <ul>
        <li><strong>16×16 px</strong>: pestañas del navegador.</li>
        <li><strong>32×32 px</strong>: pestañas en pantallas de alta resolución.</li>
        <li><strong>48×48 px</strong>: accesos directos y algunos entornos de escritorio.</li>
      </ul>

      <p>
        En el caso del formato <code>.ico</code>, varios de estos tamaños pueden coexistir en un único archivo.
      </p>

      <h3>Recomendaciones para que el favicon se vea bien</h3>

      <ul>
        <li>
          <strong>Simplicidad extrema</strong>: evita textos largos o detalles finos. A tamaños pequeños se pierden.
        </li>
        <li>
          <strong>Alto contraste</strong>: el icono debe distinguirse claramente del fondo de la pestaña.
        </li>
        <li>
          <strong>Diseño centrado</strong>: deja márgenes de seguridad para que no se recorte visualmente.
        </li>
        <li>
          <strong>Coherencia visual</strong>: el favicon debe estar alineado con el logotipo, colores y estilo del sitio.
        </li>
        <li>
          <strong>Pruebas reales</strong>: comprueba cómo se ve en distintas pestañas y navegadores, no solo en el editor.
        </li>
      </ul>

      <div className="callout tip">
        Un favicon bien diseñado transmite cuidado, profesionalidad y atención al detalle.
        Su ausencia o un diseño descuidado suele percibirse como un proyecto inacabado.
      </div>
    </div>
  </details>
</section>


      <section className="doc-section" id="s65">
        <details className="dd">
          <summary>6.5 Enlaces a hojas de estilo CSS</summary>
          <div className="dd-body">
            <p>
              El enlace a CSS es uno de los usos más importantes del <code>&lt;head&gt;</code>. Se realiza con <code>&lt;link&gt;</code>:
            </p>

            <pre>
              <code>{`<link rel="stylesheet" href="estilos.css">`}</code>
            </pre>

            <p>En proyectos organizados, es habitual una carpeta de assets:</p>
            <pre>
              <code>{`<link rel="stylesheet" href="../assets/styles.css">`}</code>
            </pre>

            <ul>
              <li>Para CSS externo se usa <code>&lt;link&gt;</code>, no <code>&lt;style&gt;</code>.</li>
              <li><code>rel="stylesheet"</code> es obligatorio.</li>
              <li>Si hay varias hojas, el orden puede cambiar el resultado final.</li>
            </ul>

            <div className="callout warn">
              Un CSS mal enlazado no “rompe” la página: simplemente no se aplica. Aprender a detectar esto (ruta, nombre, extensión, mayúsculas/minúsculas)
              es una habilidad clave.
            </div>
          </div>
        </details>
      </section>

      <section className="doc-section" id="s66">
        <details className="dd">
          <summary>6.6 Estructura completa recomendada del &lt;head&gt;</summary>
          <div className="dd-body">
            <p>Ejemplo coherente y profesional:</p>
            <pre>
              <code>{`<head>
  <meta charset="utf-8">
  <title>Todo Jardín</title>
  <meta name="description" content="Consejos y cuidados sobre jardinería y plantas">
  <meta name="keywords" content="jardinería, plantas, cuidados">
  <link rel="icon" href="favicon.png" type="image/png">
  <link rel="stylesheet" href="../assets/styles.css">
</head>`}</code>
            </pre>

            <div className="callout tip">
              Esta combinación cubre: identidad (title + favicon), interpretación (charset) y presentación (CSS).
              La cabecera no es un añadido: es parte del diseño técnico del documento.
            </div>
          </div>
        </details>
      </section>

      {/* TEST */}
      <section className="doc-section" id="test" aria-labelledby="test-title">
        <h2 id="test-title">🧠 Test de repaso · Tema 6</h2>

        <div className="callout">
          Marca una opción por pregunta y pulsa <strong>Corregir</strong>. Recibirás feedback inmediato con explicación.
        </div>

        {submitted && (
          <div className="callout tip" role="status" aria-live="polite">
            Resultado: <strong>{score}</strong> / <strong>{total}</strong>
          </div>
        )}

        {questions.map((q, idx) => {
          const picked = answers[q.id];
          const isCorrect = submitted && picked === q.correctIndex;
          const isWrong = submitted && picked !== null && picked !== q.correctIndex;

          return (
            <div className="test-question" key={q.id}>
              <p>
                <strong>
                  {idx + 1}. {q.question}
                </strong>
              </p>

              {q.options.map((opt, optIdx) => (
                <label key={optIdx}>
                  <input
                    type="radio"
                    name={q.id}
                    checked={picked === optIdx}
                    onChange={() => handleChange(q.id, optIdx)}
                  />
                  {opt}
                </label>
              ))}

              {submitted && (
                <>
                  {isCorrect && (
                    <p className="callout tip">
                      ✔ Correcta. {q.explanation}
                    </p>
                  )}
                  {isWrong && (
                    <p className="callout warn">
                      ✘ No. La correcta es: <strong>{q.options[q.correctIndex]}</strong>.{" "}
                      {q.explanation}
                    </p>
                  )}
                  {picked === null && (
                    <p className="callout warn">⚠ No has respondido esta pregunta.</p>
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="doc-next">
          <button className="btn btn-primary" type="button" onClick={grade}>
            Corregir
          </button>
        </div>

        <div className="callout tip" style={{ marginTop: "1rem" }}>
          Si quieres que el CSS se cargue de forma “oficial” (recomendado), añade también en tu <code>index.html</code>:
          <pre style={{ marginTop: ".75rem" }}>
            <code>{`<link rel="stylesheet" href="/assets/styles.css">`}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}
