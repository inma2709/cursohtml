import { useEffect, useMemo, useState } from "react";

export default function Tema14TestHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema 14 · Test de repaso HTML";
  }, []);

  const questions = useMemo(
    () => [
      {
        id: "q1",
        question: "¿Para qué sirve HTML?",
        options: [
          "Para dar estilos a una web",
          "Para crear la estructura y el contenido de una web",
          "Para programar lógica",
          "Para gestionar bases de datos",
        ],
        correctIndex: 1,
        explanation:
          "HTML define la estructura y el contenido. CSS da estilos y JavaScript aporta interactividad y lógica.",
      },
      {
        id: "q2",
        question: "¿Qué declaración indica que el documento es HTML5?",
        options: ["<html5>", "<doctype>", "<!DOCTYPE html>", "<meta charset>"],
        correctIndex: 2,
        explanation:
          "<!DOCTYPE html> activa el modo estándar y declara HTML5.",
      },
      {
        id: "q3",
        question: "¿Qué etiqueta contiene metadatos como charset y title?",
        options: ["<body>", "<header>", "<head>", "<main>"],
        correctIndex: 2,
        explanation:
          "<head> contiene metadatos: title, meta charset, viewport, enlaces a CSS, etc.",
      },
      {
        id: "q4",
        question: "¿Para qué sirve el atributo lang en <html>?",
        options: [
          "Para traducir la web automáticamente",
          "Para indicar el idioma principal del documento",
          "Para cambiar el idioma del navegador",
          "Para aplicar estilos según idioma",
        ],
        correctIndex: 1,
        explanation:
          "lang ayuda a lectores de pantalla, corrección ortográfica y SEO (por ejemplo lang='es').",
      },
      {
        id: "q5",
        question: "¿Qué etiqueta representa el contenido principal de una página?",
        options: ["<section>", "<main>", "<article>", "<div>"],
        correctIndex: 1,
        explanation:
          "<main> contiene el contenido principal y debe ser único por documento.",
      },

      // Texto y semántica
      {
        id: "q6",
        question: "¿Qué etiqueta se usa para un párrafo?",
        options: ["<span>", "<p>", "<div>", "<text>"],
        correctIndex: 1,
        explanation: "<p> representa un párrafo de texto.",
      },
      {
        id: "q7",
        question: "¿Qué etiqueta marca énfasis semántico?",
        options: ["<b>", "<i>", "<em>", "<mark>"],
        correctIndex: 2,
        explanation:
          "<em> indica énfasis semántico. <b> y <i> son más presentacionales.",
      },
      {
        id: "q8",
        question: "¿Qué etiqueta marca importancia semántica?",
        options: ["<strong>", "<b>", "<u>", "<small>"],
        correctIndex: 0,
        explanation:
          "<strong> indica importancia semántica. No es solo “negrita”.",
      },
      {
        id: "q9",
        question: "¿Cuál es la forma correcta de crear un salto de línea?",
        options: ["<hr>", "<br>", "<line>", "<p>"],
        correctIndex: 1,
        explanation: "<br> inserta un salto de línea.",
      },
      {
        id: "q10",
        question: "¿Qué etiqueta se usa para una separación temática (línea horizontal)?",
        options: ["<br>", "<hr>", "<line>", "<separator>"],
        correctIndex: 1,
        explanation:
          "<hr> representa un cambio de tema o separación de contenido.",
      },

      // Enlaces
      {
        id: "q11",
        question: "¿Qué etiqueta se usa para crear un enlace?",
        options: ["<link>", "<a>", "<href>", "<nav>"],
        correctIndex: 1,
        explanation:
          "<a href='...'>Texto</a> crea un enlace clicable.",
      },
      {
        id: "q12",
        question: "¿Qué atributo indica el destino del enlace?",
        options: ["src", "href", "target", "rel"],
        correctIndex: 1,
        explanation: "href contiene la URL de destino.",
      },
      {
        id: "q13",
        question: "¿Qué combinación es recomendada al usar target=\"_blank\"?",
        options: [
          'rel="nofollow"',
          'rel="external"',
          'rel="noopener noreferrer"',
          'rel="blank"',
        ],
        correctIndex: 2,
        explanation:
          "noopener noreferrer mejora seguridad y privacidad al abrir en nueva pestaña.",
      },
      {
        id: "q14",
        question: "¿Qué es un enlace ancla en la misma página?",
        options: [
          "Un enlace a otra web",
          "Un enlace a un id con #",
          "Un enlace a una imagen",
          "Un enlace que abre nueva pestaña",
        ],
        correctIndex: 1,
        explanation:
          "Apunta a un elemento con id: href=\"#seccion\".",
      },

      // Imágenes
      {
        id: "q15",
        question: "¿Qué etiqueta se usa para insertar una imagen?",
        options: ["<image>", "<img>", "<picture>", "<media>"],
        correctIndex: 1,
        explanation:
          "<img> inserta una imagen mediante src y debe incluir alt.",
      },
      {
        id: "q16",
        question: "¿Qué atributo es clave para accesibilidad en imágenes?",
        options: ["title", "alt", "width", "loading"],
        correctIndex: 1,
        explanation:
          "alt describe la imagen. Si es decorativa, se usa alt=\"\".",
      },
      {
        id: "q17",
        question: "¿Qué hace loading=\"lazy\" en una imagen?",
        options: [
          "Convierte la imagen a WebP",
          "Hace que cargue con más calidad",
          "Retrasa la carga hasta que se aproxima al viewport",
          "Evita que la imagen se descargue",
        ],
        correctIndex: 2,
        explanation:
          "Lazy loading mejora rendimiento cargando imágenes cuando hacen falta.",
      },
      {
        id: "q18",
        question: "¿Por qué se recomienda poner width y height en <img>?",
        options: [
          "Para que pese menos",
          "Para evitar saltos de layout (CLS) mientras carga",
          "Para que se vea más nítida",
          "Para que el alt funcione",
        ],
        correctIndex: 1,
        explanation:
          "Reservan el espacio y evitan que el contenido “salte” al cargar la imagen.",
      },

      // Listas
      {
        id: "q19",
        question: "¿Qué etiqueta crea una lista desordenada?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correctIndex: 1,
        explanation: "<ul> es lista con viñetas (sin orden numérico).",
      },
      {
        id: "q20",
        question: "¿Qué etiqueta crea una lista ordenada?",
        options: ["<ol>", "<ul>", "<li>", "<order>"],
        correctIndex: 0,
        explanation: "<ol> es lista numerada.",
      },
      {
        id: "q21",
        question: "¿Qué etiqueta representa un elemento de lista?",
        options: ["<li>", "<ul>", "<ol>", "<item>"],
        correctIndex: 0,
        explanation: "<li> es cada ítem dentro de ul/ol.",
      },

      // Tablas
      {
        id: "q22",
        question: "¿Para qué se deben usar tablas en HTML?",
        options: [
          "Para maquetar páginas",
          "Para mostrar datos tabulares (filas/columnas)",
          "Para crear menús",
          "Para hacer formularios",
        ],
        correctIndex: 1,
        explanation:
          "Tablas solo para datos estructurados en filas y columnas.",
      },
      {
        id: "q23",
        question: "¿Qué etiqueta define una fila en una tabla?",
        options: ["<td>", "<tr>", "<th>", "<row>"],
        correctIndex: 1,
        explanation: "<tr> define una fila.",
      },
      {
        id: "q24",
        question: "¿Qué etiqueta define una celda de encabezado?",
        options: ["<td>", "<tr>", "<th>", "<thead>"],
        correctIndex: 2,
        explanation:
          "<th> es encabezado, ayuda a accesibilidad y lectura de datos.",
      },
      {
        id: "q25",
        question: "¿Qué etiqueta describe el contenido de la tabla?",
        options: ["<caption>", "<title>", "<summary>", "<legend>"],
        correctIndex: 0,
        explanation:
          "<caption> se anuncia antes que la tabla por lectores de pantalla.",
      },
      {
        id: "q26",
        question: "¿Qué atributo mejora accesibilidad en <th>?",
        options: ['scope="col"', 'role="th"', 'type="head"', 'alt="..."'],
        correctIndex: 0,
        explanation:
          'scope="col" o scope="row" ayuda a asociar encabezados con celdas.',
      },

      // Mapas de imágenes
      {
        id: "q27",
        question: "¿Qué atributo conecta una imagen con un mapa de imágenes?",
        options: ["map", "usemap", "srcmap", "imagemap"],
        correctIndex: 1,
        explanation:
          "usemap=\"#nombreMapa\" enlaza la imagen con <map name=\"...\">.",
      },
      {
        id: "q28",
        question: "¿Qué etiqueta define el contenedor del mapa de imágenes?",
        options: ["<map>", "<area>", "<imgmap>", "<figure>"],
        correctIndex: 0,
        explanation: "<map name=\"...\"> contiene las áreas clicables.",
      },
      {
        id: "q29",
        question: "¿Qué etiqueta define cada zona clicable del mapa?",
        options: ["<zone>", "<area>", "<click>", "<link>"],
        correctIndex: 1,
        explanation: "<area> define shape, coords, href y alt.",
      },
      {
        id: "q30",
        question: "¿Qué valor de shape define un círculo?",
        options: ["circle", "round", "oval", "ball"],
        correctIndex: 0,
        explanation: 'shape="circle" usa coords="cx,cy,r".',
      },

      // Formularios
      {
        id: "q31",
        question: "¿Qué etiqueta envuelve un formulario?",
        options: ["<form>", "<input>", "<fieldset>", "<label>"],
        correctIndex: 0,
        explanation: "<form> agrupa los campos y define el envío.",
      },
      {
        id: "q32",
        question: "¿Qué atributo indica a dónde se envían los datos?",
        options: ["method", "action", "target", "name"],
        correctIndex: 1,
        explanation: "action es la URL destino del envío.",
      },
      {
        id: "q33",
        question: "¿Cuál es la diferencia principal entre GET y POST?",
        options: [
          "GET es más seguro que POST",
          "POST muestra los datos en la URL",
          "GET envía datos en la URL; POST los envía en el cuerpo",
          "POST solo se usa con textarea",
        ],
        correctIndex: 2,
        explanation:
          "GET añade querystring a la URL; POST envía en el body y es mejor para acciones y datos sensibles.",
      },
      {
        id: "q34",
        question: "¿Qué etiqueta agrupa campos relacionados de un formulario?",
        options: ["<group>", "<fieldset>", "<section>", "<div>"],
        correctIndex: 1,
        explanation:
          "<fieldset> agrupa y <legend> describe el grupo.",
      },
      {
        id: "q35",
        question: "¿Qué etiqueta nombra un fieldset?",
        options: ["<title>", "<caption>", "<legend>", "<label>"],
        correctIndex: 2,
        explanation: "<legend> describe el grupo del fieldset.",
      },
      {
        id: "q36",
        question: "En React, ¿qué atributo se usa en label para enlazar con un input?",
        options: ["for", "id", "htmlFor", "target"],
        correctIndex: 2,
        explanation:
          "En JSX se usa htmlFor (en HTML normal es for).",
      },

      // Inputs y validación
      {
        id: "q37",
        question: "¿Qué tipo de input activa validación de email nativa?",
        options: ['type="text"', 'type="mail"', 'type="email"', 'type="contact"'],
        correctIndex: 2,
        explanation: 'type="email" valida formato y mejora teclado móvil.',
      },
      {
        id: "q38",
        question: "¿Qué atributo hace un campo obligatorio?",
        options: ["required", "must", "validate", "important"],
        correctIndex: 0,
        explanation: "required obliga a completar antes de enviar.",
      },
      {
        id: "q39",
        question: "¿Qué atributo limita el número mínimo de caracteres en un input?",
        options: ["min", "minlength", "minimum", "length-min"],
        correctIndex: 1,
        explanation: "minLength/minlength controla el mínimo de caracteres.",
      },
      {
        id: "q40",
        question: "¿Qué atributo valida un patrón con expresión regular?",
        options: ["pattern", "regex", "format", "match"],
        correctIndex: 0,
        explanation: "pattern valida el formato mediante regex.",
      },
      {
        id: "q41",
        question: "¿Qué control usarías para un texto largo de varias líneas?",
        options: ["<input type='text'>", "<textarea>", "<select>", "<output>"],
        correctIndex: 1,
        explanation: "<textarea> sirve para mensajes largos.",
      },
      {
        id: "q42",
        question: "¿Qué control es mejor para opciones cerradas (lista fija)?",
        options: ["<textarea>", "<select>", "<p>", "<legend>"],
        correctIndex: 1,
        explanation: "<select> evita errores de escritura libre.",
      },

      // Buenas prácticas / accesibilidad
      {
        id: "q43",
        question: "¿Qué afirmación es correcta sobre la validación HTML5?",
        options: [
          "Sustituye la validación del servidor",
          "Solo funciona en Chrome",
          "Mejora UX, pero el servidor debe validar siempre",
          "Solo valida si hay JavaScript",
        ],
        correctIndex: 2,
        explanation:
          "HTML5 ayuda, pero backend siempre valida por seguridad.",
      },
      {
        id: "q44",
        question: "¿Cuál es un buen texto para un enlace accesible?",
        options: [
          "Haz clic aquí",
          "Más",
          "Ver",
          "Ver horarios del curso UF1841",
        ],
        correctIndex: 3,
        explanation:
          "El enlace debe tener sentido por sí solo (sin contexto).",
      },
      {
        id: "q45",
        question: "¿Cuándo usarías alt=\"\" en una imagen?",
        options: [
          "Nunca",
          "Cuando la imagen es decorativa",
          "Cuando la imagen es muy grande",
          "Cuando la imagen es un logo",
        ],
        correctIndex: 1,
        explanation:
          "Si la imagen es decorativa, alt vacío evita ruido en lector de pantalla.",
      },
      {
        id: "q46",
        question: "¿Qué práctica es incorrecta?",
        options: [
          "Usar <main> para el contenido principal",
          "Usar tablas para diseño",
          "Usar labels en formularios",
          "Usar alt en imágenes",
        ],
        correctIndex: 1,
        explanation:
          "No se usan tablas para maquetación. Para diseño se usa CSS.",
      },

      // Recursos y rendimiento
      {
        id: "q47",
        question: "¿Qué formato suele comprimir mejor que JPG/PNG manteniendo calidad?",
        options: ["GIF", "BMP", "WebP", "TIFF"],
        correctIndex: 2,
        explanation:
          "WebP suele ofrecer mejor compresión con buena calidad (y es muy usado en la web).",
      },
      {
        id: "q48",
        question: "¿Qué mejora al usar imágenes optimizadas y lazy loading?",
        options: [
          "La base de datos",
          "El rendimiento de carga (especialmente en móvil)",
          "El número de etiquetas HTML",
          "La semántica del texto",
        ],
        correctIndex: 1,
        explanation:
          "Menos peso + carga diferida = web más rápida y mejor experiencia.",
      },

      // Extras útiles
      {
        id: "q49",
        question: "¿Qué etiqueta es más semántica para un bloque de navegación?",
        options: ["<div>", "<nav>", "<section>", "<aside>"],
        correctIndex: 1,
        explanation: "<nav> indica navegación.",
      },
      {
        id: "q50",
        question: "¿Qué herramienta oficial permite validar si tu HTML tiene errores?",
        options: [
          "Figma",
          "W3C HTML Validator",
          "Photoshop",
          "Notion",
        ],
        correctIndex: 1,
        explanation:
          "El validador de la W3C ayuda a detectar errores y malas prácticas en HTML.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!submitted) return 0;
    let s = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) s++;
    }
    return s;
  }, [submitted, answers, questions]);

  const allAnswered = useMemo(() => {
    return questions.every((q) => typeof answers[q.id] === "number");
  }, [answers, questions]);

  return (
    <main className="doc">
      <section className="estructura-formativa" id="ud02-t8">
        <header className="doc-hero">
          <p className="doc-kicker">UD02 · Tema 14</p>
          <h1>Test de repaso de HTML (50 preguntas)</h1>
          <p className="doc-lead">
            Responde las 50 preguntas. Al final pulsa <strong>Corregir</strong>.
            Tras corregir, verás qué respuestas están bien o mal y podrás leer la explicación.
          </p>
        </header>

        <div className="callout tip">
          Consejo: contesta primero y corrige al final. Si fallas, vuelve al tema correspondiente
          (tablas, formularios, imágenes, buenas prácticas…).
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {questions.map((q, index) => {
            const selected = answers[q.id];
            const isCorrect = submitted && selected === q.correctIndex;
            const isWrong = submitted && typeof selected === "number" && selected !== q.correctIndex;

            return (
              <article
                key={q.id}
                className="card"
                style={{
                  marginTop: "1rem",
                  border: submitted
                    ? isWrong
                      ? "2px solid rgba(220, 38, 38, .55)"
                      : isCorrect
                      ? "2px solid rgba(22, 163, 74, .55)"
                      : undefined
                    : undefined,
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  {index + 1}. {q.question}
                </h3>

                <div role="radiogroup" aria-label={q.question} className="test-question">
                  {q.options.map((opt, i) => {
                    const checked = selected === i;
                    const optionCorrect = submitted && i === q.correctIndex;
                    const optionWrong = submitted && checked && i !== q.correctIndex;

                    return (
                      <label
                        key={opt}
                        style={{
                          display: "flex",
                          gap: ".65rem",
                          alignItems: "flex-start",
                          padding: ".35rem .35rem",
                          borderRadius: "10px",
                          background: submitted
                            ? optionWrong
                              ? "rgba(220, 38, 38, .10)"
                              : optionCorrect
                              ? "rgba(22, 163, 74, .10)"
                              : "transparent"
                            : "transparent",
                        }}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          checked={checked || false}
                          onChange={() => {
                            setAnswers((prev) => ({ ...prev, [q.id]: i }));
                          }}
                        />
                        <span>
                          {opt}{" "}
                          {submitted && optionCorrect && <strong aria-label="correcta">✅</strong>}
                          {submitted && optionWrong && <strong aria-label="incorrecta">❌</strong>}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {submitted && (
                  <details className="dd" open style={{ marginTop: ".75rem" }}>
                    <summary>Ver solución</summary>
                    <div className="dd-body">
                      <div className={`callout ${isCorrect ? "tip" : "warn"}`}>
                        <strong>{isCorrect ? "Correcto." : "Incorrecto."}</strong>{" "}
                        {q.explanation}
                      </div>
                    </div>
                  </details>
                )}
              </article>
            );
          })}

          <div className="form-actions" style={{ marginTop: "1.25rem" }}>
            <button className="btn btn-primary" type="submit" disabled={!allAnswered}>
              Corregir test
            </button>

            <button
              className="btn"
              type="button"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Reiniciar
            </button>
          </div>

          {!allAnswered && (
            <div className="callout warn" style={{ marginTop: "1rem" }}>
              Te faltan preguntas por responder. Responde todas para poder corregir.
            </div>
          )}

          {submitted && (
            <div className="resumen-final" style={{ marginTop: "1rem" }}>
              <p>
                <strong>Resultado:</strong> {score} / {questions.length}.{" "}
                {score === questions.length
                  ? "Perfecto: dominas HTML."
                  : score >= 35
                  ? "Muy bien: revisa los fallos y repite."
                  : score >= 25
                  ? "Aprobado justo: repasa imágenes, tablas y formularios."
                  : "Necesitas repasar: vuelve al Tema 13 (buenas prácticas) y a los temas 8–10."}
              </p>
            </div>
          )}
        </form>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
