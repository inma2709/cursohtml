import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
       <section
  className="media-block media-left"
  aria-labelledby="intro-formularios"
>
  {/* Imagen */}
  <div className="media-block__image">
    <img
      src="../img/formulario.png"
      alt="Ejemplo visual de un formulario web con campos de entrada y botones"
      loading="lazy"
    />
  </div>

  {/* Texto */}
  <div className="media-block__content">
    <h2 id="intro-formularios">Formularios HTML: la base de la interactividad</h2>

    <p>
      Los <strong>formularios</strong> son la puerta de entrada a la interactividad
      en la web. Son los elementos que permiten a los usuarios{" "}
      <strong>enviar datos a un servidor</strong>, ya sea para iniciar sesión,
      enviar un mensaje o realizar una compra.
    </p>

    <p>
      Dominar su estructura y validación es un paso fundamental para cualquier
      desarrollador web, ya que conectan la interfaz con la lógica de la
      aplicación.
    </p>

    <p>
      En esta sección exploraremos cómo construir{" "}
      <strong>formularios robustos y accesibles</strong> utilizando las etiquetas
      y atributos nativos de HTML. Aprenderás a usar distintos tipos de campos, a
      agrupar información de manera semántica y a aplicar validaciones que
      mejoran la experiencia del usuario{" "}
      <strong>sin necesidad de JavaScript</strong>.
    </p>
  </div>
</section>


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

  <p>
    HTML5 nos ofrece una amplia variedad de tipos de <code>input</code> que no solo
    cambian la apariencia, sino que <strong>mejoran la experiencia de usuario</strong>
    y activan <strong>validaciones automáticas</strong> sin necesidad de JavaScript.
  </p>

  <details className="dd">
    <summary>Elegir el tipo correcto (impacta en móvil y validación)</summary>
    <div className="dd-body">
      <div className="callout tip">
        Un formulario bien diseñado empieza por seleccionar el control adecuado:
        facilita el teclado en móvil, reduce errores y aprovecha la validación nativa
        del navegador.
      </div>

      {/* TABLA PRINCIPAL */}
      <div className="table-wrap" role="region" aria-label="Tabla de controles de formulario">
        <table className="table">
          <thead>
            <tr>
              <th>Control</th>
              <th>Cuándo usarlo</th>
              <th>Detalle práctico</th>
            </tr>
          </thead>
          <tbody>
            {/* TEXTO */}
            <tr>
              <td>
                <code>input type="text"</code>
              </td>
              <td>Texto corto genérico</td>
              <td>Nombre, apellidos, ciudad, usuario</td>
            </tr>

            <tr>
              <td>
                <code>input type="email"</code>
              </td>
              <td>Correo electrónico</td>
              <td>Valida formato y muestra teclado con “@” en móvil</td>
            </tr>

            <tr>
              <td>
                <code>input type="password"</code>
              </td>
              <td>Contraseñas</td>
              <td>Oculta caracteres automáticamente</td>
            </tr>

            <tr>
              <td>
                <code>input type="number"</code>
              </td>
              <td>Números</td>
              <td>Incluye flechas y permite <code>min</code>, <code>max</code></td>
            </tr>

            <tr>
              <td>
                <code>input type="tel"</code>
              </td>
              <td>Números de teléfono</td>
              <td>
                Mejora teclado móvil; combínalo con <code>pattern</code>
              </td>
            </tr>

            <tr>
              <td>
                <code>textarea</code>
              </td>
              <td>Textos largos</td>
              <td>Mensajes, comentarios, descripciones</td>
            </tr>

            {/* SELECCIÓN */}
            <tr>
              <td>
                <code>input type="radio"</code>
              </td>
              <td>Elegir una opción</td>
              <td>Opciones excluyentes (una sola válida)</td>
            </tr>

            <tr>
              <td>
                <code>input type="checkbox"</code>
              </td>
              <td>Elegir varias opciones</td>
              <td>Aceptar condiciones, intereses, extras</td>
            </tr>

            <tr>
              <td>
                <code>select</code> + <code>option</code>
              </td>
              <td>Lista cerrada</td>
              <td>Evita errores por escritura libre</td>
            </tr>

            {/* BOTONES */}
            <tr>
              <td>
                <code>button type="submit"</code>
              </td>
              <td>Enviar formulario</td>
              <td>Activa validación antes del envío</td>
            </tr>

            <tr>
              <td>
                <code>button type="reset"</code>
              </td>
              <td>Limpiar formulario</td>
              <td>Restablece valores iniciales</td>
            </tr>

            <tr>
              <td>
                <code>button</code>
              </td>
              <td>Acción genérica</td>
              <td>No envía el formulario</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ACLARACIONES DIDÁCTICAS */}
      <div className="callout">
        <strong>Idea clave:</strong> no todos los campos son <code>text</code>.
        Elegir bien el tipo mejora accesibilidad, usabilidad y reduce errores del usuario.
      </div>

      <details className="dd dd-nested">
        <summary>Errores comunes al elegir controles</summary>
        <div className="dd-body">
          <ul>
            <li>❌ Usar siempre <code>input type="text"</code></li>
            <li>❌ Pedir email sin <code>type="email"</code></li>
            <li>❌ Usar <code>textarea</code> para datos cortos</li>
            <li>❌ Usar <code>number</code> para teléfonos (mejor <code>tel</code>)</li>
          </ul>

          <div className="callout warn">
            El navegador no “adivina” lo que quieres.  
            Si eliges mal el tipo, pierdes validación automática.
          </div>
        </div>
      </details>

      <details className="dd dd-nested">
        <summary>Regla rápida para el alumno</summary>
        <div className="dd-body">
          <ul>
            <li>📧 Emails → <code>type="email"</code></li>
            <li>🔒 Contraseñas → <code>type="password"</code></li>
            <li>📞 Teléfono → <code>type="tel"</code></li>
            <li>📝 Texto largo → <code>textarea</code></li>
            <li>✅ Elegir una opción → <code>radio</code></li>
            <li>☑ Varias opciones → <code>checkbox</code></li>
          </ul>
        </div>
      </details>
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
    Un formulario “pro” no es solo que “se vea bonito”. Es que:
    <strong> sea accesible</strong> (labels claros), <strong> valide bien</strong> (HTML5),
    y <strong> tenga un destino</strong> (a dónde se envían los datos).
  </p>

  <div className="callout">
    <strong>En esta lección verás 2 formas de “enviar” un formulario:</strong>
    <ul>
      <li>
        ✅ <strong>Opción A: Web3Forms</strong> (envía de verdad a un email / backend sin programar servidor).
      </li>
      <li>
        ⚠️ <strong>Opción B: mailto:</strong> (abre el correo del usuario con el mensaje preparado).
        No funciona igual y depende del cliente de correo.
      </li>
    </ul>
  </div>

  {/* ============
      ✅ Opción A: Web3Forms (RECOMENDADA)
     ============ */}

  <details className="dd" open>
    <summary>✅ Opción A (recomendada): enviar con Web3Forms</summary>
    <div className="dd-body">
      <p>
        Web3Forms permite enviar formularios a un correo <strong>sin tener backend propio</strong>.
        Tú solo cambias <code>WEB3FORMS_ACCESS_KEY</code> y listo.
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
          // Ojo: si pones redirect, esta confirmación puede no verse (porque navega a otra URL)
          if (!REDIRECT_URL) setSent(true);
        }}
      >
        {/* 🔐 Clave de acceso (obligatoria en Web3Forms) */}
        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

        {/* 🧾 Asunto del email que tú recibirás */}
        <input type="hidden" name="subject" value="Duda UF1841 — Tema 10 Formularios" />

        {/* 🔁 Redirección opcional tras enviar (si no quieres mostrar mensaje en pantalla) */}
        {REDIRECT_URL ? <input type="hidden" name="redirect" value={REDIRECT_URL} /> : null}

        {/* =========================
            FIELDSET 1: Datos contacto
           ========================= */}
        <fieldset>
          <legend>Datos de contacto</legend>

          {/* Nombre */}
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
              Obligatorio. Se usará para responderte.
            </small>
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Ej: nombre@gmail.com"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="muted">
              Obligatorio. <code>type="email"</code> activa validación automática del navegador.
            </small>
          </div>

          {/* Teléfono */}
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

        {/* =========================
            FIELDSET 2: Consulta
           ========================= */}
        <fieldset>
          <legend>Tu consulta</legend>

          {/* Tema */}
          <div className="form-group">
            <label htmlFor="tema">Tema</label>
            <select id="tema" name="tema" required defaultValue="" aria-describedby="temaHelp">
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

          {/* Mensaje */}
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

          {/* Checkbox */}
          <div className="form-group">
            <label className="checkbox">
              <input type="checkbox" name="terminos" required /> Acepto los términos y condiciones
            </label>
          </div>
        </fieldset>

        {/* BOTONES */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="reset" className="btn" onClick={() => setSent(false)}>
            Limpiar
          </button>
        </div>
      </form>

      {/* ==========
          CÓDIGO COMENTADO (para estudiar)
         ========== */}
      <details className="dd" style={{ marginTop: "1rem" }}>
        <summary>Ver el formulario completo comentado (para estudiar)</summary>
        <div className="dd-body">
          <pre>
            <code>{`<!-- ✅ FORMULARIO PRO (HTML) - Versión comentada -->
<form action="https://api.web3forms.com/submit" method="POST">

  <!-- 1) access_key: CLAVE para que Web3Forms acepte el envío -->
  <input type="hidden" name="access_key" value="TU_ACCESS_KEY" />

  <!-- 2) subject: asunto del correo que recibirás -->
  <input type="hidden" name="subject" value="Duda UF1841 — Tema 10 Formularios" />

  <!-- 3) redirect (opcional): si existe, tras enviar va a esa URL -->
  <!-- <input type="hidden" name="redirect" value="https://tuweb.com/gracias" /> -->

  <!-- Agrupamos campos con fieldset + legend (mejor semántica y accesibilidad) -->
  <fieldset>
    <legend>Datos de contacto</legend>

    <!-- label + input unidos por for/id -->
    <div class="form-group">
      <label for="nombre">Nombre y apellidos</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        required
        minlength="3"
        maxlength="60"
        autocomplete="name"
        placeholder="Ej: Inma Contreras"
      />
      <small class="muted">Obligatorio. Se usará para responderte.</small>
    </div>

    <div class="form-group">
      <label for="email">Correo</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autocomplete="email"
        placeholder="Ej: nombre@gmail.com"
      />
      <small class="muted">
        type="email" activa validación automática del navegador.
      </small>
    </div>

    <div class="form-group">
      <label for="telefono">Teléfono (9 dígitos)</label>
      <input
        id="telefono"
        name="telefono"
        type="tel"
        inputmode="numeric"
        pattern="^[0-9]{9}$"
        placeholder="Ej: 612345678"
      />
      <small class="muted">Opcional. Solo números.</small>
    </div>
  </fieldset>

  <fieldset>
    <legend>Tu consulta</legend>

    <div class="form-group">
      <label for="tema">Tema</label>
      <select id="tema" name="tema" required>
        <option value="" disabled selected>Selecciona un tema…</option>
        <option value="html-form">Formularios HTML</option>
        <option value="validacion">Validación HTML5</option>
        <option value="accesibilidad">Accesibilidad</option>
      </select>
      <small class="muted">Ayuda a clasificar el mensaje.</small>
    </div>

    <div class="form-group">
      <label for="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        rows="6"
        required
        minlength="15"
        maxlength="800"
        placeholder="Escribe tu consulta con detalle…"
      ></textarea>
      <small class="muted">
        Mínimo 15 caracteres. Cuenta qué has probado.
      </small>
    </div>

    <div class="form-group">
      <label class="checkbox">
        <input type="checkbox" name="terminos" required />
        Acepto los términos y condiciones
      </label>
    </div>
  </fieldset>

  <div class="form-actions">
    <button type="submit" class="btn btn-primary">Enviar</button>
    <button type="reset" class="btn">Limpiar</button>
  </div>

</form>`}</code>
          </pre>
        </div>
      </details>

      <div className="callout tip" style={{ marginTop: "1rem" }}>
        <strong>¿Qué aprende el alumno aquí?</strong> <br />
        1) Que <code>label</code> + <code>id</code> es obligatorio si quieres accesibilidad. <br />
        2) Que <code>required</code>, <code>minLength</code>, <code>pattern</code> validan sin JS. <br />
        3) Que el formulario necesita un <strong>action</strong> real (Web3Forms o backend).
      </div>
    </div>
  </details>

  {/* ============
      ⚠️ Opción B: mailto (explicada)
     ============ */}

  <details className="dd">
    <summary>⚠️ Opción B: usar mailto (abre el correo del usuario)</summary>
    <div className="dd-body">
      <p>
        <code>mailto:</code> <strong>NO envía datos automáticamente</strong>.
        Lo que hace es abrir el correo (Gmail/Outlook/app de correo) del usuario con un mensaje “prellenado”.
        Funciona para ejemplos sencillos, pero <strong>depende del usuario</strong> (si tiene cliente de correo configurado).
      </p>

      <div className="callout warn">
        Importante: con <code>mailto:</code> el alumno no controla si realmente se envía,
        porque el usuario puede cerrar el correo sin enviarlo.
      </div>

      <p>
        Ejemplo sencillo: al enviar, se abre un email a <strong>tu Gmail</strong> con asunto y cuerpo.
      </p>

      <pre>
        <code>{`<form action="mailto:tuemail@gmail.com" method="POST" enctype="text/plain">
  <label for="nombre">Nombre</label>
  <input id="nombre" name="Nombre" type="text" required>

  <label for="email">Email</label>
  <input id="email" name="Email" type="email" required>

  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" name="Mensaje" rows="6" required></textarea>

  <button type="submit">Enviar por correo</button>
</form>`}</code>
      </pre>

      <div className="callout tip">
        <strong>¿Por qué pone “text/plain”?</strong> Porque así el correo se prepara como texto simple.
        Aun así, el comportamiento cambia según navegador y sistema.
      </div>

      <p>
        Si lo que quieres es que el formulario llegue a tu Gmail de forma fiable,
        lo correcto es <strong>Web3Forms</strong> o un backend propio.
      </p>
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
      <div className="doc-next">
  <Link className="btn btn-primary" to="/tema/11">
    Siguiente tema <span aria-hidden="true">→</span>
  </Link>
</div>
    </main>
  );
}
