import { useEffect, useMemo, useState } from "react";

export default function Tema10FormulariosHTML() {
  useEffect(() => {
    document.title = "UF1841 · Tema 10 · Formularios en HTML";
  }, []);

  /* =========================
     CONFIG ENVÍO (Web3Forms)
     ========================= */
  // 1) Sustituye esto por tu Access Key real:
  const WEB3FORMS_ACCESS_KEY = "TU_ACCESS_KEY";

  // 2) Si quieres redirigir a una página "gracias", pon aquí tu URL (o déjalo vacío):
  const REDIRECT_URL = ""; // ejemplo: "https://tusitio.com/gracias"

  /* =========================
     TEST (con feedback)
     ========================= */
  const rawQuestions = useMemo(
    () => [
      {
        id: "q1",
        question:
          "¿Qué atributo conecta un <label> con su campo para mejorar usabilidad y accesibilidad?",
        options: ["name", "for / htmlFor", "action", "placeholder"],
        correctIndex: 1,
        explanation:
          "El <label> debe apuntar al id del control mediante for (HTML) o htmlFor (React). Eso permite activar el campo al hacer clic y ayuda a lectores de pantalla.",
      },
      {
        id: "q2",
        question: '¿Cuándo es preferible usar method="POST" en un formulario?',
        options: [
          "Cuando quieres que los datos aparezcan en la URL",
          "En búsquedas y filtros simples",
          "En envío de datos sensibles o acciones (login, alta, compra)",
          "Solo cuando el formulario tiene <textarea>",
        ],
        correctIndex: 2,
        explanation:
          "POST es lo habitual para enviar datos que no deben mostrarse en la URL o que representan una acción (autenticación, registro, pedidos…).",
      },
      {
        id: "q3",
        question:
          "¿Qué pareja de etiquetas es la forma más semántica de agrupar campos relacionados?",
        options: [
          "<section> y <h3>",
          "<div> y <span>",
          "<fieldset> y <legend>",
          "<p> y <strong>",
        ],
        correctIndex: 2,
        explanation:
          "<fieldset> agrupa y <legend> nombra el grupo. Es especialmente útil en formularios largos y para accesibilidad.",
      },
      {
        id: "q4",
        question:
          "Si quieres validar un teléfono de 9 dígitos solo numéricos en HTML, ¿qué usarías?",
        options: [
          "required",
          'pattern="^[0-9]{9}$"',
          'maxlength="9" sin más',
          'placeholder="612345678"',
        ],
        correctIndex: 1,
        explanation:
          "pattern permite definir un formato con una expresión regular. Puedes combinarlo con inputMode=\"numeric\" y title para una UX clara.",
      },
      {
        id: "q5",
        question:
          "¿Qué afirmación es correcta sobre la validación nativa de HTML5?",
        options: [
          "Sustituye por completo la validación del servidor",
          "Solo funciona en Chrome",
          "Ayuda a la UX, pero el servidor debe validar siempre",
          'Solo valida campos type="email"',
        ],
        correctIndex: 2,
        explanation:
          "La validación del navegador mejora la experiencia, pero nunca es suficiente: el backend debe validar siempre (seguridad e integridad de datos).",
      },
    ],
    []
  );

  const questions = useMemo(() => {
    const copy = [...rawQuestions];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [rawQuestions]);

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

  /* =========================
     UI: Confirmación envío (opcional)
     ========================= */
  const [sent, setSent] = useState(false);

  return (
    <main className="doc">
      <section className="estructura-formativa" id="ud02-t4">
        {/* HERO */}
        <header className="doc-hero" id="intro-formularios">
          <p className="doc-kicker">UD02 · Tema 10</p>
          <h1>Formularios en HTML: estructura, accesibilidad y envío</h1>
          <p className="doc-lead">
            Un formulario no es “un conjunto de inputs”: es una interfaz de
            comunicación. Aquí aprenderás a construir formularios semánticos,
            accesibles, con validación nativa y con opciones reales de envío sin
            backend.
          </p>

          <figure className="media" aria-label="Imagen del tema">
            <img
              src="/img/formulario.png"
              alt="Ilustración relacionada con la creación de formularios en HTML"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="muted">
              Formularios: entrada de datos + validación + experiencia de usuario.
            </figcaption>
          </figure>
        </header>

        {/* ÍNDICE */}
        <nav className="doc-index" aria-label="Índice del tema">
          <h2>Contenido</h2>
          <ol>
            <li>
              <a href="#fundamentos-form">1. Fundamentos: form, action y method</a>
            </li>
            <li>
              <a href="#estructura-semantica">
                2. Estructura semántica: fieldset, legend y label
              </a>
            </li>
            <li>
              <a href="#controles-html">
                3. Controles: inputs, select, textarea y botones
              </a>
            </li>
            <li>
              <a href="#validacion-html">4. Validación HTML5 sin JavaScript</a>
            </li>
            <li>
              <a href="#ejemplo-pro">
                5. Ejemplo “profesional”: formulario completo y accesible
              </a>
            </li>
            <li>
              <a href="#ejercicio-paso-a-paso">
                6. Ejercicio guiado paso a paso
              </a>
            </li>
            <li>
              <a href="#envio-email">
                7. Enviar a email sin backend (Web3Forms / Getform / Formspree)
              </a>
            </li>
            <li>
              <a href="#test-formularios">8. Test de repaso (con corrección)</a>
            </li>
          </ol>
        </nav>

        {/* 1) FUNDAMENTOS */}
        <section className="doc-section" id="fundamentos-form">
          <h2>1) Fundamentos: &lt;form&gt;, action y method</h2>
          <p>
            La etiqueta <code>&lt;form&gt;</code> define el área de recogida de
            datos y el “contrato” de envío: a dónde va (<code>action</code>) y
            cómo viaja (<code>method</code>).
          </p>

          <details className="dd">
            <summary>Qué significa action</summary>
            <div className="dd-body">
              <p>
                <code>action</code> es la URL de destino donde se procesan los
                datos. Puede ser:
              </p>
              <ul>
                <li>
                  Un endpoint propio (backend): <code>/api/contact</code>
                </li>
                <li>
                  Un servicio externo “form-to-email”:{" "}
                  <code>https://api.web3forms.com/submit</code>
                </li>
                <li>
                  Un <code>mailto:</code> (solo como demostración; no es fiable
                  en producción)
                </li>
              </ul>

              <pre>
                <code>{`<form action="/api/contact" method="POST">
  ...
</form>`}</code>
              </pre>

              <div className="callout warn">
                <strong>Idea clave:</strong> si no hay servidor, <code>action</code>{" "}
                debe apuntar a un servicio externo o a una plataforma que procese envíos.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>GET vs POST (sin atajos)</summary>
            <div className="dd-body">
              <ul>
                <li>
                  <code>GET</code>: consulta. Los datos viajan en la URL (query
                  string). Útil en búsquedas y filtros.
                </li>
                <li>
                  <code>POST</code>: envío de datos. No aparecen en la URL.
                  Habitual en login, registro, contacto, compras…
                </li>
              </ul>

              <div className="callout tip">
                En clase: cuando el formulario “cambia algo” (crea, envía, registra),
                piensa en <code>POST</code>.
              </div>
            </div>
          </details>
        </section>

        {/* 2) ESTRUCTURA SEMÁNTICA */}
        <section className="doc-section" id="estructura-semantica">
          <h2>2) Estructura semántica: fieldset, legend y label</h2>

          <details className="dd">
            <summary>fieldset + legend: agrupar con sentido</summary>
            <div className="dd-body">
              <p>
                <code>&lt;fieldset&gt;</code> agrupa controles relacionados y{" "}
                <code>&lt;legend&gt;</code> nombra el grupo. En accesibilidad,
                esto marca diferencias reales.
              </p>

              <pre>
                <code>{`<fieldset>
  <legend>Datos personales</legend>

  <label for="nombre">Nombre</label>
  <input id="nombre" name="nombre" type="text">

  <label for="email">Email</label>
  <input id="email" name="email" type="email">
</fieldset>`}</code>
              </pre>

              <div className="callout tip">
                Formularios largos → varios <code>fieldset</code> con{" "}
                <code>legend</code> claros.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>label: lo que separa un formulario correcto de uno sólido</summary>
            <div className="dd-body">
              <p>
                El <code>&lt;label&gt;</code> describe el campo y debe estar
                conectado con el control mediante <code>for</code> (HTML) o{" "}
                <code>htmlFor</code> (React) apuntando al <code>id</code>.
              </p>

              <pre>
                <code>{`<label for="telefono">Teléfono</label>
<input id="telefono" name="telefono" type="tel">`}</code>
              </pre>

              <div className="callout warn">
                <strong>Regla:</strong> el <code>placeholder</code> no sustituye al{" "}
                <code>label</code>. El label es el texto “de verdad”.
              </div>
            </div>
          </details>
        </section>

        {/* 3) CONTROLES */}
        <section className="doc-section" id="controles-html">
          <h2>3) Controles: inputs, select, textarea y botones</h2>

          <details className="dd">
            <summary>Elegir el tipo correcto (impacta en móvil y validación)</summary>
            <div className="dd-body">
              <div className="callout tip">
                Un formulario bien diseñado empieza por seleccionar el control adecuado:
                facilita el teclado en móvil y activa validaciones nativas.
              </div>

              <div className="table-wrap" role="region" aria-label="Tabla de controles">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Control</th>
                      <th>Cuándo usarlo</th>
                      <th>Detalle práctico</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>input type="email"</code>
                      </td>
                      <td>Correo electrónico</td>
                      <td>Teclado con “@” y validación de formato</td>
                    </tr>
                    <tr>
                      <td>
                        <code>input type="tel"</code>
                      </td>
                      <td>Teléfono</td>
                      <td>
                        Combínalo con <code>inputMode</code> y <code>pattern</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>select</code>
                      </td>
                      <td>Lista cerrada de opciones</td>
                      <td>Evita errores por escritura libre</td>
                    </tr>
                    <tr>
                      <td>
                        <code>textarea</code>
                      </td>
                      <td>Mensajes largos</td>
                      <td>Controla con <code>rows</code> y límites</td>
                    </tr>
                    <tr>
                      <td>
                        <code>button type="submit"</code>
                      </td>
                      <td>Enviar</td>
                      <td>Dispara validación antes del envío</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </section>

        {/* 4) VALIDACIÓN */}
        <section className="doc-section" id="validacion-html">
          <h2>4) Validación HTML5 sin JavaScript</h2>

          <details className="dd">
            <summary>Atributos que debes dominar</summary>
            <div className="dd-body">
              <ul>
                <li>
                  <code>required</code>: campo obligatorio.
                </li>
                <li>
                  <code>minLength</code> / <code>maxLength</code>: tamaño del texto.
                </li>
                <li>
                  <code>min</code> / <code>max</code>: rango (number, date…).
                </li>
                <li>
                  <code>pattern</code>: formato con expresión regular.
                </li>
                <li>
                  <code>title</code>: mensaje de ayuda para el usuario (muy útil con pattern).
                </li>
              </ul>

              <pre>
                <code>{`<input type="text" required minlength="3" maxlength="60" />

<input
  type="tel"
  pattern="^[0-9]{9}$"
  title="Introduce 9 dígitos numéricos"
/>`}</code>
              </pre>

              <div className="callout warn">
                La validación del navegador mejora la UX, pero el servidor debe validar siempre.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Errores típicos y cómo evitarlos</summary>
            <div className="dd-body">
              <ul>
                <li>
                  Usar <code>type="text"</code> para email → pierdes teclado y validación.
                </li>
                <li>
                  Confiar en <code>placeholder</code> → accesibilidad peor.
                </li>
                <li>
                  No dar pistas (help text) → el usuario “adivina” el formato.
                </li>
              </ul>
              <div className="callout tip">
                Acompaña los campos con una breve ayuda y, si hay patrón, añade <code>title</code>.
              </div>
            </div>
          </details>
        </section>

        {/* 5) EJEMPLO PRO */}
        <section className="doc-section" id="ejemplo-pro">
          <h2>5) Ejemplo “profesional”: formulario completo y accesible</h2>
          <p>
            Este ejemplo ya está preparado para enviarse a email con Web3Forms.
            Solo cambia <code>TU_ACCESS_KEY</code>.
          </p>

          {sent && (
            <div className="callout tip" role="status" aria-live="polite">
              ✅ ¡Mensaje enviado! Si no has configurado redirección, revisa tu bandeja de entrada.
            </div>
          )}

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => {
              // Ojo: si usas redirect, esta confirmación puede no verse porque navegará a otra página
              if (!REDIRECT_URL) setSent(true);
            }}
          >
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="Duda UF1841 — Tema 10 Formularios" />
            {REDIRECT_URL ? (
              <input type="hidden" name="redirect" value={REDIRECT_URL} />
            ) : null}

            <fieldset>
              <legend>Datos de contacto</legend>

              <div className="form-group">
                <label htmlFor="nombre">Nombre y apellidos</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  minLength={3}
                  maxLength={60}
                  autoComplete="name"
                  placeholder="Ej: Inma Contreras"
                  aria-describedby="nombreHelp"
                />
                <small id="nombreHelp" className="muted">
                  Escribe tu nombre real: se usará para responderte.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Ej: nombre@correo.com"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="muted">
                  Debe ser un email válido: ahí recibirás la respuesta.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono (9 dígitos)</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="numeric"
                  pattern="^[0-9]{9}$"
                  title="Introduce 9 dígitos numéricos (ej: 612345678)"
                  placeholder="Ej: 612345678"
                  autoComplete="tel"
                  aria-describedby="telHelp"
                />
                <small id="telHelp" className="muted">
                  Opcional. Solo números, sin espacios.
                </small>
              </div>
            </fieldset>

            <fieldset>
              <legend>Tu consulta</legend>

              <div className="form-group">
                <label htmlFor="tema">Tema</label>
                <select
                  id="tema"
                  name="tema"
                  required
                  defaultValue=""
                  aria-describedby="temaHelp"
                >
                  <option value="" disabled>
                    Selecciona un tema…
                  </option>
                  <option value="html-form">Formularios HTML</option>
                  <option value="validacion">Validación HTML5</option>
                  <option value="accesibilidad">Accesibilidad</option>
                </select>
                <small id="temaHelp" className="muted">
                  Elegir un tema ayuda a clasificar el mensaje.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  required
                  minLength={15}
                  maxLength={800}
                  placeholder="Escribe tu consulta con detalle…"
                  aria-describedby="msgHelp"
                />
                <small id="msgHelp" className="muted">
                  Mínimo 15 caracteres. Si puedes, incluye qué has probado y qué resultado obtuviste.
                </small>
              </div>

              <div className="form-group">
                <label className="checkbox">
                  <input type="checkbox" name="terminos" required /> Acepto los términos y condiciones
                </label>
              </div>
            </fieldset>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              <button type="reset" className="btn" onClick={() => setSent(false)}>
                Limpiar
              </button>
            </div>
          </form>

          <details className="dd" style={{ marginTop: "1rem" }}>
            <summary>Ver el mismo formulario como código (para estudiar)</summary>
            <div className="dd-body">
              <pre>
                <code>{`<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="TU_ACCESS_KEY" />
  <input type="hidden" name="subject" value="Duda UF1841 — Tema 10 Formularios" />
  <!-- opcional -->
  <input type="hidden" name="redirect" value="https://tuweb.com/gracias" />

  <!-- Tus fieldset + campos aquí... -->
</form>`}</code>
              </pre>
            </div>
          </details>
        </section>

        {/* 6) EJERCICIO PASO A PASO */}
        <section className="doc-section" id="ejercicio-paso-a-paso">
          <h2>6) Ejercicio guiado: construye un formulario paso a paso</h2>
          <p>
            Objetivo: construir un formulario de contacto sólido, primero por estructura,
            luego por controles y finalmente por validación y envío.
          </p>

          <details className="dd">
            <summary>Paso 1 — Estructura base y grupos</summary>
            <div className="dd-body">
              <ol>
                <li>
                  Crea el <code>&lt;form&gt;</code> con <code>method="POST"</code>.
                </li>
                <li>
                  Añade dos <code>&lt;fieldset&gt;</code>: “Datos de contacto” y “Tu consulta”.
                </li>
                <li>
                  En cada uno, añade su <code>&lt;legend&gt;</code>.
                </li>
              </ol>

              <pre>
                <code>{`<form action="#" method="POST">
  <fieldset>
    <legend>Datos de contacto</legend>
  </fieldset>

  <fieldset>
    <legend>Tu consulta</legend>
  </fieldset>

  <button type="submit">Enviar</button>
</form>`}</code>
              </pre>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 2 — Añade campos y labels obligatorios</summary>
            <div className="dd-body">
              <ol>
                <li>
                  En “Datos de contacto”: nombre (<code>text</code>) y email (<code>email</code>), ambos <code>required</code>.
                </li>
                <li>
                  En “Tu consulta”: tema (<code>select</code>) y mensaje (<code>textarea</code>), ambos <code>required</code>.
                </li>
                <li>
                  Conecta cada <code>label</code> con su control (<code>htmlFor</code> ↔ <code>id</code>).
                </li>
              </ol>

              <div className="callout tip">
                Si un campo es obligatorio, hazlo obligatorio desde el principio.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 3 — Validación fina (minLength, pattern, ayudas)</summary>
            <div className="dd-body">
              <ol>
                <li>
                  Nombre: <code>minLength</code> 3 y <code>maxLength</code> 60.
                </li>
                <li>
                  Mensaje: <code>minLength</code> 15 y <code>maxLength</code> 800.
                </li>
                <li>
                  Teléfono opcional: <code>type="tel"</code> + <code>pattern</code> + <code>title</code>.
                </li>
                <li>
                  Añade textos de ayuda (<code>&lt;small&gt;</code>) y usa <code>aria-describedby</code>.
                </li>
              </ol>
            </div>
          </details>

          <details className="dd">
            <summary>Paso 4 — Envío real sin backend</summary>
            <div className="dd-body">
              <ol>
                <li>
                  Cambia <code>action</code> al endpoint del servicio (por ejemplo Web3Forms).
                </li>
                <li>
                  Añade el <code>input hidden</code> con <code>access_key</code>.
                </li>
                <li>
                  Prueba el envío y verifica que recibes el email.
                </li>
              </ol>

              <div className="callout warn">
                Aunque uses un servicio externo, valida siempre en backend cuando tengas servidor.
              </div>
            </div>
          </details>
        </section>

        {/* 7) ENVÍO A EMAIL (EXPLICACIÓN) */}
        <section className="doc-section" id="envio-email">
          <h2>7) Enviar a email sin backend (servicios “form-to-email”)</h2>
          <p>
            <code>mailto:</code> depende del cliente de correo del usuario (Outlook, Gmail configurado, etc.).
            Para formularios reales en webs estáticas, se usa un servicio que recibe el <code>POST</code> y te envía el contenido por email.
          </p>

          <details className="dd" open>
            <summary>Opción A — Web3Forms (recomendada)</summary>
            <div className="dd-body">
              <ol>
                <li>Consigue tu <strong>Access Key</strong> en Web3Forms.</li>
                <li>
                  Pon el <code>action</code> en <code>https://api.web3forms.com/submit</code>.
                </li>
                <li>
                  Añade <code>&lt;input type="hidden" name="access_key" ...&gt;</code>.
                </li>
              </ol>

              <pre>
                <code>{`<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="TU_ACCESS_KEY" />
  <input type="hidden" name="subject" value="Formulario UF1841" />

  <!-- campos -->
  <input type="text" name="nombre" required />
  <input type="email" name="email" required />
  <textarea name="mensaje" required></textarea>

  <button type="submit">Enviar</button>
</form>`}</code>
              </pre>

              <div className="callout tip">
                Si quieres redirigir al usuario tras enviar, añade{" "}
                <code>redirect</code> con la URL de tu página “gracias”.
              </div>
            </div>
          </details>

          <details className="dd">
            <summary>Opción B — Getform</summary>
            <div className="dd-body">
              <p>
                Getform te da un endpoint tipo <code>https://getform.io/f/TU_ENDPOINT_ID</code>.
                Lo pones en <code>action</code> y configuras notificaciones por email desde el panel.
              </p>
              <pre>
                <code>{`<form action="https://getform.io/f/TU_ENDPOINT_ID" method="POST">
  <input type="text" name="nombre" required />
  <input type="email" name="email" required />
  <textarea name="mensaje" required></textarea>
  <button type="submit">Enviar</button>
</form>`}</code>
              </pre>
            </div>
          </details>

          <details className="dd">
            <summary>Opción C — Formspree</summary>
            <div className="dd-body">
              <p>
                Formspree funciona de forma similar: te proporciona un endpoint y envía los datos al email configurado.
              </p>
              <div className="callout warn">
                En cualquier servicio, revisa límites del plan y activa anti-spam si está disponible.
              </div>
            </div>
          </details>
        </section>

        {/* 8) TEST */}
        <section className="doc-section" id="test-formularios">
          <h2>8) Test de repaso (con corrección)</h2>

          <div className="callout tip">
            Responde y corrige al final. El objetivo no es “acertar por suerte”, sino justificar cada decisión.
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {questions.map((q, idx) => (
              <article key={q.id} className="card" style={{ marginTop: "1rem" }}>
                <h3 style={{ marginTop: 0 }}>
                  {idx + 1}. {q.question}
                </h3>

                <div className="test-question" role="radiogroup" aria-label={q.question}>
                  {q.options.map((opt, i) => {
                    const checked = answers[q.id] === i;
                    const isCorrect = submitted && i === q.correctIndex;
                    const isWrong = submitted && checked && i !== q.correctIndex;

                    return (
                      <label key={`${q.id}-${i}`} style={{ gap: ".65rem" }}>
                        <input
                          type="radio"
                          name={q.id}
                          checked={checked || false}
                          onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: i }))}
                        />
                        <span>
                          {opt}{" "}
                          {submitted && isCorrect && <strong aria-label="correcta">✅</strong>}
                          {submitted && isWrong && <strong aria-label="incorrecta">❌</strong>}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {submitted && (
                  <div className={`callout ${answers[q.id] === q.correctIndex ? "tip" : "warn"}`}>
                    <strong>Feedback:</strong> {q.explanation}
                  </div>
                )}
              </article>
            ))}

            <div className="form-actions" style={{ marginTop: "1rem" }}>
              <button className="btn btn-primary" type="submit">
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

            {submitted && (
              <div className="resumen-final" style={{ marginTop: "1rem" }}>
                <p>
                  <strong>Resultado:</strong> {score} / {questions.length}.{" "}
                  {score === questions.length
                    ? "Dominio completo del tema."
                    : score >= Math.ceil(questions.length * 0.7)
                    ? "Buen control: revisa los fallos y repite el test."
                    : "Conviene repasar: vuelve a las secciones 2, 4 y 7 y reconstruye el ejemplo."}
                </p>
              </div>
            )}
          </form>
        </section>

        <hr className="separador-verde" />
      </section>
    </main>
  );
}
