// Tema0.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tema0() {
  // Función para manejar clicks en enlaces del índice
  const handleIndexClick = (event, targetId) => {
    event.preventDefault();

    // Buscar el elemento objetivo
    const target = document.getElementById(targetId);
    if (target) {
      // Buscar el details padre más cercano y abrirlo
      const detailsParent = target.closest("details");
      if (detailsParent) {
        detailsParent.open = true;
      }

      // Hacer scroll al elemento después de un pequeño delay
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    // Título de la página
    document.title = "UF1841 · Tema 0 · VS Code";

    const root = document.getElementById("test0");
    if (!root) return;

    const list = root.querySelector("#test0-list");
    const btnCheck = root.querySelector("#test0-check");
    const btnReset = root.querySelector("#test0-reset");
    const result = root.querySelector("#test0-result");

    if (!list || !btnCheck || !btnReset || !result) return;

    // Estado: ver soluciones solo después de corregir
    root.dataset.corrected = "0";

    // Bloquear apertura de soluciones antes de corregir
    const solutions = root.querySelectorAll("details[data-solution]");
    solutions.forEach((d) => {
      d.hidden = true;
      d.open = false;

      const onToggle = () => {
        if (root.dataset.corrected !== "1") {
          d.open = false;
        }
      };

      d.addEventListener("toggle", onToggle);
      d._onToggle = onToggle;
    });

    const getSelectedValue = (questionLi) => {
      const checked = questionLi.querySelector('input[type="radio"]:checked');
      return checked ? checked.value : null;
    };

    const onCheck = () => {
      const questions = list.querySelectorAll(":scope > li");
      const total = questions.length;
      let ok = 0;
      let unanswered = 0;

      questions.forEach((li) => {
        const correct = li.dataset.correct;
        const selected = getSelectedValue(li);

        if (!selected) unanswered++;
        if (selected && selected === correct) ok++;

        const sol = li.querySelector("details[data-solution]");
        if (sol) sol.hidden = false;
      });

      root.dataset.corrected = "1";

      result.hidden = false;
      const nota = Math.round((ok / total) * 10 * 10) / 10; // 0.0 - 10.0

      result.innerHTML = `
        <strong>Resultado:</strong> ${ok} / ${total} correctas
        <br><strong>Calificación orientativa:</strong> ${nota} / 10
        ${
          unanswered > 0
            ? `<br><strong>Sin responder:</strong> ${unanswered}. Se corrige con lo marcado.`
            : ""
        }
        <br>Ahora revisa las explicaciones: te dicen exactamente qué reforzar.
      `;

      btnReset.hidden = false;
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const onReset = () => {
      root
        .querySelectorAll('input[type="radio"]')
        .forEach((r) => (r.checked = false));

      root.querySelectorAll("details[data-solution]").forEach((d) => {
        d.open = false;
        d.hidden = true;
      });

      root.dataset.corrected = "0";
      result.hidden = true;
      result.innerHTML = "";
      btnReset.hidden = true;
    };

    btnCheck.addEventListener("click", onCheck);
    btnReset.addEventListener("click", onReset);

    return () => {
      btnCheck.removeEventListener("click", onCheck);
      btnReset.removeEventListener("click", onReset);

      // limpiar listeners de toggle
      solutions.forEach((d) => {
        if (d._onToggle) d.removeEventListener("toggle", d._onToggle);
        delete d._onToggle;
      });
    };
  }, []);

  return (
    <div className="doc">
      <header className="doc-hero">
        <p className="doc-kicker">Tema 0 · Preparar el entorno</p>
        <h1>
          Visual Studio Code: el entorno de trabajo que vas a usar como
          profesional
        </h1>
        <p className="doc-lead">
          Antes de escribir código, hay que dominar el “taller”: saber qué es un
          entorno de desarrollo, cómo se organiza un proyecto, dónde mirar
          cuando algo falla y cómo trabajar con orden. Vamos a intentar entender
          la lógica de VScode como nuestro IDE de cabecera.
        </p>

        <div className="callout tip">
          <strong>Objetivo del Tema 0:</strong> que puedas instalar VS Code
          correctamente, entender qué es un IDE, moverte por la interfaz con
          seguridad, trabajar siempre con carpetas de proyecto, guardar y
          revisar mensajes del sistema (Problemas/Terminal/Consola del
          navegador) sin frustrarte.
        </div>

        <div className="callout">
          <strong>Norma del curso:</strong> configuramos lo justo. Primero
          entendemos el mapa; después, ya iremos añadiendo herramientas si
          aportan valor real.
        </div>
      </header>

      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#que-es" onClick={(e) => handleIndexClick(e, "que-es")}>
              Qué es VS Code y por qué lo usamos
            </a>
          </li>
          <li>
            <a href="#ide" onClick={(e) => handleIndexClick(e, "ide")}>
              Qué es un IDE y cómo se relaciona con VS Code
            </a>
          </li>
          <li>
            <a
              href="#comparativa"
              onClick={(e) => handleIndexClick(e, "comparativa")}
            >
              Comparativa con otros IDE (NetBeans, Eclipse, IntelliJ)
            </a>
          </li>
          <li>
            <a
              href="#instalacion"
              onClick={(e) => handleIndexClick(e, "instalacion")}
            >
              Instalación paso a paso
            </a>
          </li>
          <li>
            <a
              href="#extensiones"
              onClick={(e) => handleIndexClick(e, "extensiones")}
            >
              Extensiones recomendadas
            </a>
          </li>
          <li>
            <a
              href="#interfaz"
              onClick={(e) => handleIndexClick(e, "interfaz")}
            >
              Interfaz y flujo de trabajo
            </a>
          </li>
          <li>
            <a href="#atajos" onClick={(e) => handleIndexClick(e, "atajos")}>
              Atajos útiles
            </a>
          </li>
          <li>
            <a href="#errores" onClick={(e) => handleIndexClick(e, "errores")}>
              Errores típicos y cómo salir rápido
            </a>
          </li>
          <li>
            <a
              href="#practica"
              onClick={(e) => handleIndexClick(e, "practica")}
            >
              Práctica guiada (sin programar aún)
            </a>
          </li>
          <li>
            <a href="#repaso" onClick={(e) => handleIndexClick(e, "repaso")}>
              Repaso + test
            </a>
          </li>
        </ol>
      </nav>
      <section id="notepad" className="doc-section">
        <hr className="separador-verde" />
        <h2>¿Qué es un bloc de notas y para qué sirve?</h2>
        <details open className="dd">
          <summary>¿Por qué no usar un bloc de notas normal?</summary>
          <div className="dd-body">
            <p>
              Usar un bloc de notas el que trae por defecto window o notepad por
              ejemplo podría ser suficiente para empezar con HTML y CSS y de
              hecho suele ser costumbre empezar con el bloc de notas en muchos
              cursos
            </p>
            <p>
              Sin embargo, un bloc de notas normal no tiene las funcionalidades
              que un IDE como VS Code nos ofrece y que nos van a facilitar mucho
              el trabajo.
            </p>
            <div className="callout">
              <strong>
                Ventajas de usar VS Code sobre un bloc de notas normal:
              </strong>
              <ul>
                <li>
                  Entiende que lo que escribes es código (y te ayuda con
                  sugerencias y avisos).
                </li>
                <li>
                  Trabaja por proyectos (carpetas), no por archivos aislados.
                </li>
                <li>
                  Incluye paneles de diagnóstico: Problemas, salida, terminal,
                  etc.
                </li>
                <li>
                  Puede ampliarse con extensiones cuando aporta valor real.
                </li>
              </ul>
            </div>
            <p>
              {" "}
              En este curso dado su corta extensión y sus ambiciosos objetivos
              vamos a empezar a trabajar directamente con un IDE pues asi
              ahorraremos tiempo y disgustos. 😊{" "}
            </p>
            <p>
              No obstante ten en cuenta que cada vez más empresas hacen una
              pequeña prueba técnica en sus entrevistas en las que el candidato
              debe escribir un código sencillo pero básico desde cero en un
              papel o bloc de notas. Acostumbrate a estar familiarizado con la
              sintaxís básica de los programas que domines, te ahorraras
              disgustos
            </p>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="que-es" className="doc-section">
        <h2>1) Qué es VS Code y por qué lo usamos</h2>

        <details open className="dd">
          <summary>
            1.1 · Visual Studio Code como herramienta de trabajo
          </summary>
          <div className="dd-body">
            <p>
              <strong>Visual Studio Code</strong> es una aplicación creada para
              trabajar con proyectos técnicos: no solo escribes texto, sino que
              organizas archivos, revisas mensajes, ejecutas tareas y mantienes
              un flujo de trabajo consistente.
            </p>
            <p>
              En un proyecto real (en clase, en prácticas o en empleo) no existe
              “un archivo suelto”. Existen carpetas con estructura,
              configuraciones y herramientas que te ayudan a entender qué ocurre
              cuando algo no sale bien.
            </p>

            <div className="callout">
              <strong>Idea clave:</strong> VS Code es tu mesa de trabajo. Si la
              mesa está ordenada, tú trabajas mejor.
            </div>

            <details className="dd dd-nested">
              <summary>
                Qué hace que VS Code sea distinto a un editor de texto “normal”
              </summary>
              <div className="dd-body">
                <ul>
                  <li>
                    Entiende que lo que escribes es código (y te ayuda con
                    sugerencias y avisos).
                  </li>
                  <li>
                    Trabaja por proyectos (carpetas), no por archivos aislados.
                  </li>
                  <li>
                    Incluye paneles de diagnóstico: Problemas, salida, terminal,
                    etc.
                  </li>
                  <li>
                    Puede ampliarse con extensiones cuando aporta valor real.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>
            1.2 · Por qué esta herramienta se usa tanto en el sector
          </summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Equilibrio:</strong> es potente sin obligarte a usarlo
                todo desde el primer día.
              </li>
              <li>
                <strong>Rápido:</strong> arranca y responde bien incluso en
                equipos modestos.
              </li>
              <li>
                <strong>Modular:</strong> le añades solo lo que necesitas con
                extensiones.
              </li>
              <li>
                <strong>Estándar:</strong> lo verás en muchos equipos de trabajo
                y entornos formativos serios.
              </li>
            </ul>

            <div className="callout tip">
              <strong>Truco mental:</strong> no se trata de “tener muchas
              funciones”; se trata de “tener control”.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="ide" className="doc-section">
        <h2>2) Qué es un IDE y cómo se relaciona con VS Code</h2>

        <details open className="dd">
          <summary>2.1 · Qué significa IDE </summary>
          <div className="dd-body">
            <p>
              Un <strong>IDE</strong> es un{" "}
              <strong>Entorno de Desarrollo Integrado</strong>. La palabra
              importante es “integrado”: en un mismo lugar se juntan varias
              herramientas que, por separado, serían varios programas.
            </p>

            <div className="callout">
              <strong>Un IDE suele reunir:</strong> editor, organización del
              proyecto, detección de errores, consola/terminal, herramientas de
              ejecución y ayudas inteligentes.
            </div>

            <details className="dd dd-nested">
              <summary>Cómo reconocer que estás en un IDE de verdad</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    Puedes explorar la estructura del proyecto en un panel.
                  </li>
                  <li>Te marca errores o avisos sin que tú los busques.</li>
                  <li>
                    Tienes consola/terminal integrada para tareas del proyecto.
                  </li>
                  <li>
                    El entorno “sabe” en qué proyecto estás y actúa en
                    consecuencia.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>
            2.2 · VS Code: editor flexible que puede comportarse como IDE
          </summary>
          <div className="dd-body">
            <p>
              VS Code nació como un editor moderno, pero con extensiones puede
              convertirse en un IDE completo. Eso es precisamente lo que nos
              interesa: <strong>crece contigo</strong>.
            </p>

            <div className="callout warn">
              <strong>Advertencia útil:</strong> cuanto más “cargues” el
              entorno, más cosas pueden fallar. Por eso empezamos con lo
              esencial y añadimos solo lo que aporte.
            </div>

            <div className="callout tip">
              <strong>Idea docente:</strong> no aprendes más por tocar más
              opciones; aprendes más por entender lo que usas.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="comparativa" className="doc-section">
        <h2>
          3) Comparativa con otros IDE habituales (NetBeans, Eclipse, IntelliJ)
        </h2>

        <details open className="dd">
          <summary>
            3.1 · Por qué comparar: para entender qué eliges y por qué
          </summary>
          <div className="dd-body">
            <p>
              En informática no existe “una herramienta perfecta para todo”.
              Existen herramientas con filosofía distinta. Comparar te ayuda a
              elegir con criterio y a no sentir que “te falta algo” por usar una
              opción u otra.
            </p>

            <div className="callout">
              <strong>Conclusión adelantada:</strong> VS Code destaca por su
              equilibrio: empieza ligero y escala muy bien.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3.2 · Cuadro comparativo</summary>
          <div className="dd-body">
            <div className="callout tip">
              <strong>Cómo leer esta tabla:</strong> no estamos diciendo
              “mejor/peor”, sino “más adecuado según contexto”.
            </div>

            <div
              className="table-wrap"
              role="region"
              aria-label="Tabla comparativa de entornos de desarrollo"
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Herramienta</th>
                    <th>Tipo / filosofía</th>
                    <th>Curva de uso</th>
                    <th>Cuándo encaja especialmente bien</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Visual Studio Code</strong>
                    </td>
                    <td>Editor modular que puede comportarse como IDE</td>
                    <td>Progresiva</td>
                    <td>
                      Aprendizaje, proyectos variados, equipos con herramientas
                      diversas
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>NetBeans</strong>
                    </td>
                    <td>IDE “todo integrado”</td>
                    <td>Media</td>
                    <td>
                      Entornos donde quieres un paquete completo desde el inicio
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Eclipse</strong>
                    </td>
                    <td>IDE muy completo y extensible</td>
                    <td>Alta</td>
                    <td>
                      Proyectos grandes, perfiles acostumbrados a herramientas
                      clásicas
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>IntelliJ IDEA</strong>
                    </td>
                    <td>IDE potente con automatización inteligente</td>
                    <td>Media–alta</td>
                    <td>
                      Proyectos exigentes donde la automatización y análisis del
                      entorno son clave
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="dd dd-nested">
              <summary>Resumen</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    Los IDE clásicos pueden darte mucho… pero también pueden
                    saturar al empezar.
                  </li>
                  <li>
                    VS Code no te impone complejidad: te la ofrece cuando la
                    necesitas.
                  </li>
                  <li>
                    En aprendizaje serio, importa más el control y el orden que
                    el “todo en uno”.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="instalacion" className="doc-section">
        <h2>4) Instalación paso a paso</h2>

        <details open className="dd">
          <summary>4.1 · Descarga segura y versión correcta</summary>
          <div className="dd-body">
            <p>
              Descarga VS Code desde su web oficial. Evita instaladores de
              terceros. En herramientas de desarrollo, una instalación “extraña”
              suele terminar en errores difíciles de explicar.
            </p>
            <div className="callout">
              <strong>Regla de supervivencia:</strong> si algo “se instala
              raro”, normalmente da problemas raros.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4.2 · Instalación en Windows (checklist útil)</summary>
          <div className="dd-body">
            <ol>
              <li>Ejecuta el instalador.</li>
              <li>Acepta la licencia.</li>
              <li>Deja la ruta por defecto (recomendado).</li>
              <li>
                Marca <strong>Add to PATH</strong> (para poder usar{" "}
                <code>code</code> en terminal cuando lo necesites).
              </li>
              <li>
                Marca <strong>Open with Code</strong> (opcional pero muy
                práctico: abrir carpetas con clic derecho).
              </li>
              <li>Finaliza e inicia VS Code.</li>
            </ol>

            <div className="callout warn">
              <strong>Importante:</strong> si no marcas PATH no pasa “nada
              grave” hoy, pero mañana puede darte guerra cuando uses terminal o
              herramientas que lo necesiten.
            </div>

            <details className="dd dd-nested">
              <summary>Cómo comprobar PATH en 10 segundos</summary>
              <div className="dd-body">
                <p>
                  Abre una terminal del sistema y escribe <code>code</code>. Si
                  se abre VS Code, está correcto. Si te dice que no reconoce el
                  comando, suele faltar esa casilla de PATH. ¿Sabes abrir un
                  terminal de sistema?
                </p>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>4.3 · Primer arranque: ajustes mínimos recomendados</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Tema:</strong> oscuro o claro según comodidad visual.
              </li>
              <li>
                <strong>Idioma:</strong> puedes instalar el paquete en español
                desde Extensiones si lo prefieres.De todas formas, debes
                acostumbrarte a trabajar en inglés pues la mayoría de recursos y
                documentación están en ese idioma. De hecho, poco a poco te
                derás cuenta que tenerlo traducido entorpece más que facilita.
              </li>
              <li>
                <strong>Números de línea:</strong> activados (son esenciales
                para seguir indicaciones y correcciones).
              </li>
              <li>
                <strong>Auto Save:</strong> guarda los archivos automáticamente
                sin necesidad de pulsar
                <kbd>Ctrl + S</kbd>. Es una opción muy útil{" "}
                <strong>
                  si entiendes cuándo se produce el guardado y cómo afecta a tu
                  forma de trabajar
                </strong>
                .
              </li>
              <div className="callout tip">
                <strong>Cuándo se activa el Auto Save:</strong> VS Code no
                guarda “todo el rato”. El guardado automático se produce cuando
                ocurre alguno de estos eventos (según la configuración):
                <ul>
                  <li>Al cambiar de archivo.</li>
                  <li>
                    Al cambiar de ventana (por ejemplo, al ir al navegador).
                  </li>
                  <li>Tras un pequeño retraso de tiempo mientras escribes.</li>
                </ul>
              </div>
            </ul>

            <div className="callout tip">
              <strong>Consejo docente:</strong> no personalices 50 cosas el
              primer día. Ajuste mínimo + práctica = control real.
            </div>
          </div>
        </details>

        <details className="dd" open>
          <summary>
            {" "}
            4.5 VS Code instalado vs VS Code en el navegador (vscode.dev)
          </summary>

          <div className="dd-body">
            <p>
              Visual Studio Code puede usarse de dos formas distintas: como
              aplicación instalada en tu ordenador o directamente desde el
              navegador mediante <strong>vscode.dev</strong>. Aunque la interfaz
              es muy similar,{" "}
              <strong>no están pensados para el mismo tipo de trabajo</strong>.
            </p>

            <div className="callout">
              <strong>Idea clave:</strong> no es “uno mejor que otro”, sino{" "}
              <em>cuándo</em> usar cada opción.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>1) VS Code instalado en el ordenador</summary>

          <div className="dd-body">
            <p>
              Es la forma <strong>principal y profesional</strong> de trabajar.
              Instalas la aplicación y VS Code tiene acceso completo a tu
              sistema.
            </p>

            <h4>Ventajas</h4>
            <ul>
              <li>Acceso completo a archivos y carpetas del sistema.</li>
              <li>
                Terminal integrada real (Node, npm, git, servidores locales,
                etc.).
              </li>
              <li>Extensiones sin limitaciones.</li>
              <li>Ideal para proyectos reales y trabajo continuo.</li>
              <li>No depende de conexión a internet.</li>
            </ul>

            <h4>Inconvenientes</h4>
            <ul>
              <li>Requiere instalación.</li>
              <li>Necesita algo de configuración inicial.</li>
              <li>
                Depende del equipo (no siempre disponible en ordenadores
                ajenos).
              </li>
            </ul>

            <div className="callout tip">
              <strong>En este curso:</strong> esta es la opción que vamos a usar
              siempre.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) VS Code en el navegador (vscode.dev)</summary>

          <div className="dd-body">
            <p>
              <strong>vscode.dev</strong> permite usar una versión de VS Code
              directamente desde el navegador, sin instalar nada. Funciona como
              una versión “ligera” del editor.
            </p>

            <h4>Ventajas</h4>
            <ul>
              <li>No requiere instalación.</li>
              <li>Funciona desde cualquier ordenador con navegador.</li>
              <li>Útil para revisar o editar archivos rápidamente.</li>
              <li>Muy cómodo para pequeños cambios o consultas.</li>
            </ul>

            <h4>Inconvenientes</h4>
            <ul>
              <li>Acceso limitado al sistema de archivos.</li>
              <li>No tiene terminal real del sistema.</li>
              <li>Muchas extensiones no funcionan o están limitadas.</li>
              <li>No sirve para ejecutar proyectos completos.</li>
              <li>Depende de conexión a internet.</li>
            </ul>

            <div className="callout warn">
              vscode.dev <strong>no sustituye</strong> al VS Code instalado para
              aprender desarrollo web de forma seria.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3) Cuándo usar cada uno (criterio práctico)</summary>

          <div className="dd-body">
            <ul>
              <li>
                <strong>VS Code instalado</strong> → aprender, practicar,
                programar, hacer proyectos, trabajar en serio.
              </li>
              <li>
                <strong>vscode.dev</strong> → revisar código, hacer cambios
                rápidos, trabajar desde un equipo que no es tuyo.
              </li>
            </ul>

            <div className="callout tip">
              <strong>Regla mental:</strong> vscode.dev es una libreta de apoyo;
              VS Code instalado es tu taller de trabajo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Idea final para el alumno</summary>

          <div className="dd-body">
            <p>
              Para aprender bien, necesitas un entorno que te permita ver
              errores, usar terminal, ejecutar proyectos y entender qué ocurre
              “por debajo”.
            </p>

            <p>
              Por eso, aunque vscode.dev es útil en situaciones concretas,
              <strong> el curso se apoya siempre en VS Code instalado</strong>.
            </p>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="extensiones" className="doc-section">
        <h2>5) Extensiones recomendadas</h2>

        <details open className="dd">
          <summary>
            5.1 · Qué es una extensión (y por qué no hay que instalar 30)
          </summary>
          <div className="dd-body">
            <p>
              Una extensión añade funciones a VS Code. Bien elegidas, hacen el
              entorno más productivo. Mal elegidas (o demasiadas), generan
              ruido, conflictos y errores difíciles de rastrear.
            </p>

            <div className="callout">
              <strong>Norma del manual:</strong> pocas y buenas. Menos cosas =
              más control.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>
            5.2 · Extensiones recomendadas para este punto del curso
          </summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Prettier:</strong> mantiene el formato consistente
                (orden mental + orden visual).
              </li>
              <li>
                <strong>Auto Rename Tag:</strong> (la instalaremos cuando toque
                trabajar con etiquetas).
              </li>
              <li>
                <strong>HTML CSS Support:</strong> (la instalaremos cuando toque
                trabajar con clases/estructura).
              </li>
              <li>
                <strong>Live Server:</strong> (la instalaremos cuando empecemos
                a visualizar en navegador).
              </li>
            </ul>

            <div className="callout tip">
              <strong>Matiz importante:</strong> aquí no es “instalar por
              instalar”. Te explico qué hace cada una y cuándo tiene sentido
              activarla.
            </div>

            <details className="dd dd-nested">
              <summary>Cómo instalar una extensión sin equivocarte</summary>
              <div className="dd-body">
                <ol>
                  <li>
                    Abre <strong>Extensiones</strong> (icono de cuadraditos).
                  </li>
                  <li>Busca por nombre exacto.</li>
                  <li>
                    Comprueba autor y descargas (evita clones sospechosos).
                  </li>
                  <li>Instala y reinicia VS Code si lo solicita.</li>
                </ol>

                <div className="callout warn">
                  <strong>Ojo:</strong> muchas “misteriosas” averías vienen de
                  extensiones clonadas o incompatibles.
                </div>
              </div>
            </details>
          </div>
        </details>
        <details className="dd">
          <summary>
            Instalar temas en VS Code y ver los que tienes disponibles
          </summary>

          <div className="dd-body">
            <p>
              Los <strong>temas</strong> en Visual Studio Code controlan los
              colores del editor: fondo, texto, comentarios, errores y resaltado
              del código. No cambian cómo funciona VS Code, solo{" "}
              <strong>cómo se ve</strong>.
            </p>

            <div className="callout">
              <strong>Idea clave:</strong> un buen tema reduce la fatiga visual
              y te ayuda a detectar errores antes.
            </div>

            <h4>1) Ver los temas que ya tienes instalados</h4>
            <p>
              VS Code incluye varios temas por defecto y además recuerda los que
              instales. Para verlos todos:
            </p>

            <ol>
              <li>
                Abre la paleta de comandos: <strong>Ctrl + Shift + P</strong>.
              </li>
              <li>
                Escribe <code>Color Theme</code>.
              </li>
              <li>
                Selecciona <strong>Preferences: Color Theme</strong>.
              </li>
              <li>
                Muévete con las flechas para previsualizar los temas en tiempo
                real.
              </li>
              <li>
                Pulsa <strong>Enter</strong> para aplicar el que quieras.
              </li>
            </ol>

            <div className="callout tip">
              No tengas prisa: cambia de tema y observa cómo se ven comentarios,
              etiquetas y errores.
            </div>

            <h4>2) Instalar nuevos temas desde VS Code</h4>
            <p>
              Los temas se instalan como una extensión más. El proceso es seguro
              si eliges bien.
            </p>

            <ol>
              <li>
                Abre <strong>Extensiones</strong> (icono de cuadraditos o{" "}
                <strong>Ctrl + Shift + X</strong>).
              </li>
              <li>
                Escribe en el buscador <code>theme</code> o el nombre del tema.
              </li>
              <li>Comprueba autor, valoraciones y número de descargas.</li>
              <li>
                Pulsa <strong>Install</strong>.
              </li>
              <li>
                Aplica el tema desde <strong>Preferences: Color Theme</strong>.
              </li>
            </ol>

            <div className="callout warn">
              Evita instalar muchos temas “por probar”. Demasiadas extensiones
              generan ruido.
            </div>

            <h4>3) Cambiar de tema rápidamente (atajo útil)</h4>
            <p>
              Puedes cambiar de tema en cualquier momento sin entrar en menús:
            </p>

            <ul>
              <li>
                <strong>Ctrl + K</strong> y luego <strong>Ctrl + T</strong>
              </li>
            </ul>

            <div className="callout tip">
              Úsalo cuando estés cansada de la vista o cambies de entorno (día /
              noche).
            </div>

            <h4>4) Recomendación docente</h4>
            <p>
              Elige <strong>un tema</strong> y mantente con él un tiempo.
              Aprenderás más rápido si tu cerebro no tiene que “reaprender” los
              colores cada día.
            </p>

            <div className="callout">
              <strong>Regla del curso:</strong> el tema debe ayudarte a entender
              el código, no a decorarlo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>
            🎨 Temas más usados en Visual Studio Code (cuál elegir y por qué)
          </summary>
          <div className="dd-body">
            <p>
              Visual Studio Code incluye varios temas por defecto y permite
              instalar muchos más. Un <strong>tema</strong> no cambia cómo
              funciona el editor, pero sí
              <strong>cómo lees el código</strong>, cómo detectas errores y
              cuánto te cansa la vista.
            </p>

            <div className="callout">
              <strong>Idea clave:</strong> el mejor tema es el que te permite
              leer con claridad durante más tiempo, no el más llamativo.
            </div>

            <div
              className="table-wrap"
              role="region"
              aria-label="Tabla de temas más usados en VS Code"
            >
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Tema</th>
                    <th>Tipo</th>
                    <th>Ventajas principales</th>
                    <th>Cuándo usarlo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Dark+ (Default Dark)</th>
                    <td>🌙 Oscuro</td>
                    <td>
                      Viene por defecto, contraste equilibrado, no distrae.
                    </td>
                    <td>Primeros pasos, cursos, no complicarse.</td>
                  </tr>

                  <tr>
                    <th scope="row">Light+ (Default Light)</th>
                    <td>☀️ Claro</td>
                    <td>
                      Muy legible, sensación de “papel”, ideal con luz natural.
                    </td>
                    <td>Aulas luminosas, HTML y lectura prolongada.</td>
                  </tr>

                  <tr>
                    <th scope="row">GitHub Theme</th>
                    <td>🌙 / ☀️ Ambos</td>
                    <td>
                      Profesional, colores suaves, excelente equilibrio visual.
                    </td>
                    <td>Estudio serio y trabajo real.</td>
                  </tr>

                  <tr>
                    <th scope="row">One Dark Pro</th>
                    <td>🌙 Oscuro</td>
                    <td>
                      Colores bien diferenciados, muy popular en el sector.
                    </td>
                    <td>Programar varias horas seguidas.</td>
                  </tr>

                  <tr>
                    <th scope="row">Dracula Official</th>
                    <td>🌙 Oscuro</td>
                    <td>Alto contraste, reduce fatiga visual.</td>
                    <td>Jornadas largas, entornos oscuros.</td>
                  </tr>

                  <tr>
                    <th scope="row">Monokai</th>
                    <td>🌙 Oscuro</td>
                    <td>Colores muy vivos, clásico histórico.</td>
                    <td>Usuarios con experiencia (puede cansar).</td>
                  </tr>

                  <tr>
                    <th scope="row">Solarized Dark</th>
                    <td>🌙 Oscuro</td>
                    <td>Contraste suave, menos agresivo.</td>
                    <td>Personas sensibles a colores muy fuertes.</td>
                  </tr>

                  <tr>
                    <th scope="row">Solarized Light</th>
                    <td>☀️ Claro</td>
                    <td>Elegante y cómodo para leer.</td>
                    <td>Documentación, HTML y CSS.</td>
                  </tr>

                  <tr>
                    <th scope="row">Nord</th>
                    <td>🌙 Oscuro</td>
                    <td>Tonos fríos, ambiente relajado.</td>
                    <td>Estudio tranquilo, poca distracción.</td>
                  </tr>

                  <tr>
                    <th scope="row">Ayu (Dark / Light)</th>
                    <td>🌙 / ☀️ Ambos</td>
                    <td>Diseño moderno, buen contraste general.</td>
                    <td>Alternar claro y oscuro según el momento.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              <strong>Recomendación del manual:</strong> empieza con{" "}
              <em>Dark+</em> o <em>Light+</em>. Cuando ya tengas soltura, prueba{" "}
              <em>GitHub Theme</em>.
            </div>

            <div className="callout warn">
              Instalar muchos temas “por probar” no mejora el aprendizaje.
              Cambia de tema solo si tienes un motivo claro (cansancio visual,
              luz del entorno, etc.).
            </div>

            <p>
              Recuerda:{" "}
              <strong>
                el tema es una herramienta de comodidad, no de aprendizaje
              </strong>
              . Lo importante es entender el código y detectar errores con
              facilidad.
            </p>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="interfaz" className="doc-section">
        <h2>6) Interfaz y flujo de trabajo (lo que te da seguridad)</h2>

        <details open className="dd">
          <summary>6.1 · Las zonas que debes ubicar sin dudar</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Barra de actividad:</strong> accesos a Explorador,
                Buscar, Control de versiones, Extensiones…
              </li>
              <li>
                <strong>Explorador:</strong> estructura de carpetas y archivos
                del proyecto.
              </li>
              <li>
                <strong>Editor:</strong> zona central donde trabajas.
              </li>
              <li>
                <strong>Panel inferior:</strong> Problemas, Terminal, Salida.
              </li>
              <li>
                <strong>Barra de estado:</strong> información contextual
                (archivo, codificación, fin de línea, etc.).
              </li>
            </ul>

            <details className="dd dd-nested">
              <summary>Por qué insisto tanto en esto</summary>
              <div className="dd-body">
                <p>
                  Porque cuando algo no funciona, la pista casi siempre aparece
                  en: <strong>Problemas</strong>, <strong>Terminal</strong> o en
                  la estructura del <strong>Explorador</strong>. Si sabes “leer
                  el entorno”, avanzas más rápido y te frustras menos.
                </p>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>
            6.2 · Regla de oro: trabajar siempre con “Abrir carpeta”
          </summary>
          <div className="dd-body">
            <p>
              La forma profesional de trabajar es abrir una{" "}
              <strong>carpeta de proyecto</strong>. Así el entorno entiende qué
              forma parte del proyecto, qué está relacionado y dónde deben
              aparecer avisos.
            </p>

            <div className="callout warn">
              Si trabajas con archivos sueltos, se multiplican los errores de
              organización: rutas mal puestas, archivos duplicados, confusión al
              guardar, etc.
            </div>

            <details className="dd dd-nested">
              <summary>
                Ejemplo típico de problema cuando no abres carpeta
              </summary>
              <div className="dd-body">
                <p>
                  “He cambiado algo y no pasa nada”. Muchas veces el problema no
                  es lo que hiciste: es que estás editando un archivo distinto
                  al que crees, o tienes duplicados en varias carpetas.
                </p>
              </div>
            </details>
          </div>
        </details>

        <div className="resource-card">
          <details className="dd">
            <summary>
              6.3 · Flujo de trabajo: el hábito que te evita errores
            </summary>

            <div className="dd-body">
              <p>
                Programar no es solo escribir código. Es trabajar con método. Si
                automatizas este flujo, tu mente podrá centrarse en aprender y
                resolver problemas, no en “pelearte” con el entorno.
              </p>

              <h4>🧱 1. Organización del proyecto</h4>
              <ol>
                <li>
                  Crear una carpeta de proyecto con nombre claro y descriptivo.
                </li>
                <li>Una carpeta = un proyecto. No mezclar trabajos.</li>
                <li>No trabajar en el Escritorio suelto.</li>
                <li>Abrir SIEMPRE la carpeta raíz completa en VS Code.</li>
                <li>
                  Nombrar archivos en minúsculas y sin espacios (kebab-case).
                </li>
                <li>Crear los archivos desde el Explorador de VS Code.</li>
                <li>
                  Comprobar siempre que estás en la ruta correcta antes de
                  empezar.
                </li>
              </ol>

              <h4>🧠 2. Método profesional al escribir código</h4>
              <ol>
                <li>Guardar cambios de forma consciente (Ctrl + S).</li>
                <li>
                  Leer completamente cualquier mensaje o aviso antes de tocar
                  nada.
                </li>
                <li>No copiar y pegar código sin entenderlo.</li>
                <li>Probar cambios pequeños y comprobar el resultado.</li>
                <li>Comentar el código cuando ayude a entenderlo después.</li>
                <li>
                  Formatear el archivo (Shift + Alt + F) para mantener orden reorganizándolo. 
                </li>
              </ol>

              <h4>🔍 3. Depuración y comprobaciones básicas</h4>
              <ol>
                <li>Leer el error completo antes de intentar solucionarlo.</li>
                <li>Usar la consola del navegador para detectar errores.</li>
                <li>
                  Comprobar que los archivos CSS y JS están bien enlazados.
                </li>
                <li>Revisar rutas relativas (./ y ../).</li>
                <li>No dejar errores en rojo sin entenderlos.</li>
                <li>Si trabajas con servidor local, revisar la terminal.</li>
                <li>
                  Trabajar por capas: primero HTML → luego CSS → luego JS.
                </li>
              </ol>

              <h4>🚀 4. Nivel profesional (cuando avances)</h4>
              <ol>
                <li>Inicializar repositorio Git desde el principio.</li>
                <li>Hacer commits pequeños y descriptivos.</li>
                <li>No subir node_modules al repositorio.</li>
                <li>Usar .gitignore cuando sea necesario.</li>
                <li>Separar entorno de desarrollo y producción.</li>
              </ol>

              <div className="callout tip">
                <strong>Idea clave:</strong>
                Si algo no funciona, para dos minutos y piensa antes de tocar
                diez cosas. Programar es comprobar, no adivinar.
              </div>

              <div className="callout">
                <strong>Objetivo:</strong>
                Automatizar este flujo hasta que se convierta en hábito. Un buen
                entorno ordenado reduce más del 50% de los errores de
                principiante.
              </div>
            </div>
          </details>
        </div>

        <details className="dd">
          <summary>
            6.4 · Guardado y orden: la parte silenciosa del éxito
          </summary>
          <div className="dd-body">
            <p>
              En desarrollo, la mayoría de fallos de principiantes no son “no sé
              programar”. Son fallos de flujo: no guardar, editar el archivo
              equivocado, trabajar sin estructura o ignorar avisos.
            </p>

            <div className="callout">
              <strong>Regla:</strong> guarda, revisa, corrige. Repite.
            </div>

            <details className="dd dd-nested">
              <summary>
                Una comprobación muy útil cuando “algo no cambia”
              </summary>
              <div className="dd-body">
                <ul>
                  <li>¿He guardado?</li>
                  <li>¿Estoy editando el archivo correcto (pestaña arriba)?</li>
                  <li>
                    ¿Tengo otro archivo con el mismo nombre en otra carpeta?
                  </li>
                  <li>¿Veo algún aviso en Problemas o en la barra inferior?</li>
                </ul>
              </div>
            </details>
          </div>
        </details>
        <details className="dd">
          <summary>
            6.5 Nomenclatura: cómo nombrar archivos y carpetas correctamente
          </summary>

          <div className="dd-body">
            <p>
              La <strong>nomenclatura</strong> se refiere a las reglas que
              seguimos para nombrar archivos, carpetas y recursos. Aplicar una
              buena nomenclatura hace que tu proyecto sea{" "}
              <strong>profesional, legible y fácil de mantener</strong>, tanto
              para ti como para cualquier otra persona que trabaje con tu
              código.
            </p>

            <div className="callout">
              Un proyecto bien nombrado se entiende antes incluso de abrir los
              archivos.
            </div>

            <h3>Nomenclatura de archivos y carpetas</h3>

            <ul>
              <li>
                <strong>Usa siempre nombres en minúsculas:</strong> evita las
                mayúsculas. Muchos servidores distinguen entre mayúsculas y
                minúsculas, por lo que
                <code>Image.jpg</code> y <code>image.jpg</code> serían archivos
                distintos, provocando errores difíciles de detectar.
              </li>

              <li>
                <strong>Sin espacios:</strong> no uses espacios en nombres de
                archivos o carpetas. Para separar palabras utiliza guiones{" "}
                <code>-</code> o guiones bajos <code>_</code>.
                <br />
                <em>Ejemplos correctos:</em> <code>mi-archivo.html</code>,{" "}
                <code>mi_archivo.html</code>
              </li>

              <li>
                <strong>Extensiones correctas:</strong> usa siempre la extensión
                adecuada según el tipo de archivo:
                <ul>
                  <li>
                    <code>.html</code> → documentos HTML
                  </li>
                  <li>
                    <code>.css</code> → hojas de estilo
                  </li>
                  <li>
                    <code>.js</code> → JavaScript
                  </li>
                  <li>
                    <code>.png</code>, <code>.jpg</code>, <code>.svg</code> →
                    imágenes
                  </li>
                </ul>
              </li>

              <li>
                <strong>Nombres descriptivos:</strong> evita nombres genéricos
                como
                <code>archivo1</code> o <code>prueba</code>. Usa nombres que
                expliquen su función.
                <br />
                <em>Ejemplo:</em> <code>assets/</code>, <code>css/</code>,{" "}
                <code>img/</code>
              </li>

              <li>
                <strong>Escribir en inglés:</strong> es una convención de la
                industria. Facilita la colaboración en proyectos internacionales
                y te ayuda a acostumbrarte al lenguaje de la documentación
                técnica.
              </li>
            </ul>

            <div className="callout tip">
              <strong>Regla práctica:</strong> si alguien abre tu proyecto y
              entiende la estructura sin explicaciones, la nomenclatura es
              correcta.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="atajos" className="doc-section">
        <h2>7) Atajos útiles (los que realmente suman)</h2>

        <details open className="dd">
          <summary>Lista corta y práctica</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Ctrl + S</strong>: guardar
              </li>
              <li>
                <strong>Ctrl + P</strong>: abrir archivo rápido
              </li>
              <li>
                <strong>Ctrl + F</strong>: buscar en el archivo
              </li>
              <li>
                <strong>Ctrl + H</strong>: buscar y reemplazar
              </li>
              <li>
                <strong>Ctrl + `</strong>: abrir/cerrar terminal
              </li>
              <li>
                <strong>Alt + ↑ / ↓</strong>: mover línea
              </li>
            </ul>

            <details className="dd dd-nested">
              <summary>El atajo que decide si avanzas o te bloqueas</summary>
              <div className="dd-body">
                <p>
                  <strong>Ctrl + S</strong>. Antes de pensar “no funciona”,
                  piensa: “¿he guardado?”.
                </p>
              </div>
            </details>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="errores" className="doc-section">
        <h2>8) Errores típicos (y cómo salir rápido con método)</h2>

        <details className="dd" open>
          <summary>“He cambiado algo y no veo el resultado”</summary>
          <div className="dd-body">
            <ul>
              <li>
                ¿Has guardado? (<strong>Ctrl + S</strong>)
              </li>
              <li>¿Estás editando el archivo correcto (pestaña superior)?</li>
              <li>¿Hay duplicados del mismo archivo en otra carpeta?</li>
              <li>
                ¿Ves avisos en <strong>Problemas</strong>?
              </li>
            </ul>

            <div className="callout tip">
              <strong>Chequeo rápido:</strong> cambia un texto evidente (por
              ejemplo, “PRUEBA”) y guarda. Si no cambia, estás mirando otra cosa
              o editando otro archivo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>“Me aparecen avisos y no sé dónde mirar”</summary>
          <div className="dd-body">
            <p>Mapa simple para no perderte:</p>
            <ul>
              <li>
                <strong>Panel “Problemas”:</strong> te indica errores o
                advertencias detectadas por el editor.
              </li>
              <li>
                <strong>Terminal:</strong> muestra mensajes cuando ejecutas
                comandos o tareas.
              </li>
              <li>
                <strong>Salida:</strong> mensajes internos de extensiones o del
                propio entorno.
              </li>
            </ul>

            <div className="callout">
              <strong>Regla:</strong> cuando algo falla, no adivines. Lee el
              mensaje, localiza la pista y actúa.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>“He tocado configuraciones y ahora todo se ve raro”</summary>
          <div className="dd-body">
            <ul>
              <li>Vuelve a un tema por defecto.</li>
              <li>Desactiva extensiones una a una si sospechas conflicto.</li>
              <li>
                Evita cambiar 10 ajustes a la vez: no sabrás cuál rompió el
                equilibrio.
              </li>
            </ul>

            <div className="callout warn">
              <strong>Consejo:</strong> los cambios se hacen de uno en uno.
              Control significa poder deshacer con claridad.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="practica" className="doc-section">
        <h2>9) Práctica guiada (sin programar aún)</h2>

        <details open className="dd">
          <summary>
            Ejercicio 1 · Crea tu primer proyecto “vacío” (estructura y control)
          </summary>
          <div className="dd-body">
            <ol>
              <li>
                Crea una carpeta llamada <code>tema0-entorno</code>.
              </li>
              <li>
                Abre esa carpeta con <strong>Abrir carpeta</strong> en VS Code.
              </li>
              <li>
                Crea dentro un archivo llamado <code>notas.txt</code>.
              </li>
              <li>
                Escribe 5 líneas con lo que has entendido hoy (qué es un IDE,
                qué es abrir carpeta…).
              </li>
              <li>
                Guarda con <strong>Ctrl + S</strong>.
              </li>
              <li>
                Cierra VS Code, vuelve a abrir y comprueba que tu carpeta y tu
                archivo están ahí.
              </li>
            </ol>

            <div className="callout tip">
              <strong>Meta:</strong> que el entorno deje de ser “algo
              desconocido” y pase a ser “tu espacio de trabajo”.
            </div>

            <details className="dd dd-nested">
              <summary>Reto extra (si terminas antes)</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    Crea una carpeta dentro llamada <code>_docs</code> y guarda
                    ahí tus notas.
                  </li>
                  <li>
                    Prueba a buscar una palabra con <strong>Ctrl + F</strong>{" "}
                    dentro del archivo.
                  </li>
                  <li>
                    Prueba <strong>Ctrl + P</strong> y escribe{" "}
                    <code>notas</code> para abrirlo rápido.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>
            Ejercicio 2 · Aprende a leer el entorno (Problemas / Terminal /
            Salida)
          </summary>
          <div className="dd-body">
            <ol>
              <li>Abre el panel inferior.</li>
              <li>
                Entra en <strong>Problemas</strong> (aunque esté vacío).
              </li>
              <li>
                Entra en <strong>Terminal</strong> y ábrelo/cierra con{" "}
                <strong>Ctrl + `</strong>.
              </li>
              <li>
                Entra en <strong>Salida</strong> y observa que puede mostrar
                mensajes de extensiones.
              </li>
            </ol>

            <div className="callout">
              <strong>Meta:</strong> que no te asuste ver paneles. Son
              herramientas, no “alertas”.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section className="doc-section" id="resumen-tema0">
        <h2>✅ Resumen del tema (Checklist)</h2>

        <details className="dd" open>
          <summary>Lo que deberías poder hacer al terminar el Tema 0</summary>

          <div className="dd-body">
            <p>
              Marca mentalmente lo que ya dominas. Si algo no te sale, vuelve a
              la sección correspondiente antes de pasar al siguiente tema.
            </p>

            <div className="topic-summary">
              <div className="topic-summary__grid">
                {/* BLOQUE 1 */}
                <div className="topic-summary__card">
                  <h3 className="topic-summary__title">
                    🧭 Entender el entorno
                  </h3>
                  <ul className="topic-summary__list">
                    <li>
                      Distingo <strong>editor</strong> vs <strong>IDE</strong>{" "}
                      (y sé explicarlo).
                    </li>
                    <li>
                      Entiendo por qué VS Code es “mesa de trabajo” (proyecto,
                      orden y control).
                    </li>
                    <li>
                      Sé cuándo usar VS Code instalado y cuándo{" "}
                      <strong>vscode.dev</strong>.
                    </li>
                  </ul>
                </div>

                {/* BLOQUE 2 */}
                <div className="topic-summary__card">
                  <h3 className="topic-summary__title">
                    🗂️ Trabajar por proyectos
                  </h3>
                  <ul className="topic-summary__list">
                    <li>
                      Uso siempre <strong>Abrir carpeta</strong> (no archivos
                      sueltos).
                    </li>
                    <li>
                      Sé crear una estructura simple de proyecto (carpetas +
                      archivos).
                    </li>
                    <li>
                      Aplico <strong>nomenclatura</strong> correcta (minúsculas,
                      sin espacios, nombres claros).
                    </li>
                  </ul>
                </div>

                {/* BLOQUE 3 */}
                <div className="topic-summary__card">
                  <h3 className="topic-summary__title">
                    🧪 Diagnóstico sin frustración
                  </h3>
                  <ul className="topic-summary__list">
                    <li>
                      Sé dónde mirar cuando algo falla:{" "}
                      <strong>Problemas</strong>, <strong>Terminal</strong>,{" "}
                      <strong>Salida</strong>.
                    </li>
                    <li>
                      Antes de “no funciona”, compruebo:{" "}
                      <strong>¿he guardado?</strong>
                    </li>
                    <li>
                      Reconozco errores típicos: archivo equivocado, duplicados,
                      rutas mal puestas.
                    </li>
                  </ul>
                </div>

                {/* BLOQUE 4 */}
                <div className="topic-summary__card">
                  <h3 className="topic-summary__title">⚙️ Ajustes básicos</h3>
                  <ul className="topic-summary__list">
                    <li>
                      Sé cambiar tema (<strong>Ctrl+K</strong> luego{" "}
                      <strong>Ctrl+T</strong>) y elegir uno adecuado.
                    </li>
                    <li>
                      Sé instalar extensiones con criterio (pocas y útiles).
                    </li>
                    <li>
                      Entiendo el <strong>Auto Save</strong>: cuándo guarda y
                      cuándo puede no convenir.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="callout tip" style={{ marginTop: ".9rem" }}>
                <strong>Regla de oro:</strong> Si controlas{" "}
                <em>estructura + guardado + lectura de mensajes</em>, el curso
                se te va a hacer muchísimo más fácil.
              </div>

              <div className="topic-summary__actions">
                <a
                  className="btn"
                  href="#practica"
                  onClick={(e) => handleIndexClick(e, "practica")}
                >
                  Volver a la práctica
                </a>
                <a
                  className="btn btn-primary"
                  href="#test0"
                  onClick={(e) => handleIndexClick(e, "test0")}
                >
                  Ir al test
                </a>
              </div>
            </div>
          </div>
        </details>

        {/* TEST con corrección automática (sin ver soluciones antes) */}
        <details className="dd" id="test0">
          <summary>Test de repaso (10 preguntas)</summary>
          <div className="dd-body">
            <p>
              Responde sin mirar arriba. Cuando termines, pulsa{" "}
              <strong>Corregir test</strong>. Las respuestas quedan bloqueadas
              hasta entonces.
            </p>

            <ol className="test" id="test0-list">
              <li data-correct="B">
                <p>
                  <strong>¿Qué describe mejor a un IDE?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q1" value="A" /> A) Un programa
                    solo para escribir texto
                  </label>
                  <label>
                    <input type="radio" name="q1" value="B" /> B) Un entorno que
                    integra varias herramientas de desarrollo en una sola
                    aplicación
                  </label>
                  <label>
                    <input type="radio" name="q1" value="C" /> C) Un navegador
                    con herramientas extra
                  </label>
                  <label>
                    <input type="radio" name="q1" value="D" /> D) Un sistema
                    operativo especializado
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> Un IDE integra editor,
                      organización del proyecto, diagnóstico, consola y ayudas
                      en un mismo entorno.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="C">
                <p>
                  <strong>
                    ¿Por qué insistimos en “Abrir carpeta” en lugar de abrir
                    archivos sueltos?
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q2" value="A" /> A) Porque así el
                    ordenador va más rápido siempre
                  </label>
                  <label>
                    <input type="radio" name="q2" value="B" /> B) Porque VS Code
                    solo abre carpetas
                  </label>
                  <label>
                    <input type="radio" name="q2" value="C" /> C) Porque
                    trabajar con proyectos reduce confusión, duplicados y
                    errores de organización
                  </label>
                  <label>
                    <input type="radio" name="q2" value="D" /> D) Porque es
                    obligatorio por ley
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: C.</strong> Abrir carpeta permite que el
                      entorno entienda el proyecto, muestre estructura y te
                      ayude a localizar problemas.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>
                    VS Code se considera especialmente útil porque…
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q3" value="A" /> A) Obliga a usar
                    todas sus funciones desde el primer día
                  </label>
                  <label>
                    <input type="radio" name="q3" value="B" /> B) Es modular:
                    puedes empezar ligero y ampliar con extensiones cuando tenga
                    sentido
                  </label>
                  <label>
                    <input type="radio" name="q3" value="C" /> C) Solo sirve
                    para un único lenguaje
                  </label>
                  <label>
                    <input type="radio" name="q3" value="D" /> D) No se puede
                    personalizar
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> VS Code escala muy bien
                      porque no impone complejidad: la añade si y cuando la
                      necesitas.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>
                    Si aparece un aviso en VS Code, el primer lugar razonable
                    para mirar suele ser…
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q4" value="A" /> A) El fondo de
                    pantalla
                  </label>
                  <label>
                    <input type="radio" name="q4" value="B" /> B) El panel
                    “Problemas”
                  </label>
                  <label>
                    <input type="radio" name="q4" value="C" /> C) La papelera de
                    reciclaje
                  </label>
                  <label>
                    <input type="radio" name="q4" value="D" /> D) La calculadora
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> “Problemas” reúne errores y
                      advertencias detectados por el editor o extensiones.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>
                    ¿Qué riesgo aumenta cuando instalas muchas extensiones sin
                    criterio?
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q5" value="A" /> A) Que el teclado
                    deje de funcionar
                  </label>
                  <label>
                    <input type="radio" name="q5" value="B" /> B) Que el entorno
                    se vuelva ruidoso y aparezcan conflictos difíciles de
                    rastrear
                  </label>
                  <label>
                    <input type="radio" name="q5" value="C" /> C) Que no puedas
                    guardar archivos nunca
                  </label>
                  <label>
                    <input type="radio" name="q5" value="D" /> D) Que VS Code se
                    convierta en un juego
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> Cuantas más extensiones, más
                      posibilidades de incompatibilidades o configuraciones
                      confusas.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="A">
                <p>
                  <strong>
                    ¿Qué atajo deberías usar como hábito antes de pensar “no
                    funciona”?
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q6" value="A" /> A) Ctrl + S
                  </label>
                  <label>
                    <input type="radio" name="q6" value="B" /> B) Ctrl + Z
                  </label>
                  <label>
                    <input type="radio" name="q6" value="C" /> C) Ctrl + Alt +
                    Supr
                  </label>
                  <label>
                    <input type="radio" name="q6" value="D" /> D) Alt + F4
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: A.</strong> Guardar es el primer filtro:
                      muchos “no cambia nada” se resuelven con un guardado
                      consciente.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>
                    ¿Qué describe mejor a IntelliJ IDEA en términos generales?
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q7" value="A" /> A) Un bloc de
                    notas
                  </label>
                  <label>
                    <input type="radio" name="q7" value="B" /> B) Un IDE con
                    automatización potente y muchas ayudas inteligentes
                  </label>
                  <label>
                    <input type="radio" name="q7" value="C" /> C) Un antivirus
                  </label>
                  <label>
                    <input type="radio" name="q7" value="D" /> D) Un navegador
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> IntelliJ es un IDE robusto,
                      conocido por sus ayudas y automatización, sobre todo en
                      proyectos exigentes.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="A">
                <p>
                  <strong>¿Qué caracteriza a Eclipse como entorno?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q8" value="A" /> A) Es un IDE muy
                    completo y extensible, con curva de uso alta
                  </label>
                  <label>
                    <input type="radio" name="q8" value="B" /> B) Es una app
                    solo para dibujar
                  </label>
                  <label>
                    <input type="radio" name="q8" value="C" /> C) Solo funciona
                    sin internet
                  </label>
                  <label>
                    <input type="radio" name="q8" value="D" /> D) No admite
                    extensiones
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: A.</strong> Eclipse es potente y
                      extensible, pero puede mostrar mucha complejidad de golpe.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>
                    Cuando “algo se ve raro” tras tocar ajustes, el enfoque
                    correcto es…
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q9" value="A" /> A) Cambiar 20
                    cosas más para compensar
                  </label>
                  <label>
                    <input type="radio" name="q9" value="B" /> B) Deshacer con
                    método: volver a valores por defecto y cambiar de uno en uno
                  </label>
                  <label>
                    <input type="radio" name="q9" value="C" /> C) Reiniciar el
                    router
                  </label>
                  <label>
                    <input type="radio" name="q9" value="D" /> D) Ignorarlo
                    siempre
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> Control significa poder
                      identificar qué cambio produjo el efecto.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="C">
                <p>
                  <strong>
                    ¿Cuál es la idea principal que debe quedarte de este tema?
                  </strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q10" value="A" /> A) Instalar
                    muchas cosas “por si acaso”
                  </label>
                  <label>
                    <input type="radio" name="q10" value="B" /> B) Evitar
                    paneles y mensajes porque asustan
                  </label>
                  <label>
                    <input type="radio" name="q10" value="C" /> C) Dominar el
                    entorno: estructura, guardado, lectura de mensajes y trabajo
                    por proyectos
                  </label>
                  <label>
                    <input type="radio" name="q10" value="D" /> D) Memorizar
                    menús
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: C.</strong> El entorno es el taller: si
                      lo dominas, aprendes más rápido y con menos frustración.
                    </p>
                  </div>
                </details>
              </li>
            </ol>

            <div
              className="doc-next"
              style={{
                justifyContent: "flex-start",
                gap: ".6rem",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn btn-primary"
                type="button"
                id="test0-check"
              >
                Corregir test
              </button>
              <button className="btn" type="button" id="test0-reset" hidden>
                Reiniciar
              </button>
            </div>

            <div className="callout" id="test0-result" hidden></div>

            <div className="callout warn" style={{ marginTop: ".75rem" }}>
              <strong>Regla del test:</strong> las respuestas quedan ocultas
              hasta que pulses <strong>Corregir test</strong>.
            </div>
          </div>
        </details>
        {/* ===================================================== */}

        {/* BONUS · Recursos para profundizar (reutilizable) */}
        <details className="dd" id="bonus-vscode">
          <summary>🎁 BONUS · Para profundizar y resolver dudas</summary>

          <div className="dd-body">
            <section
              className="bonus"
              aria-label="Bonus: recursos para profundizar"
            >
              {/* 🔸 Cambia SOLO esta ruta si tu icono “bonus” está en otra carpeta */}
              <img
                className="bonus__badge"
                src="/img/bonus.png"
                alt=""
                aria-hidden="true"
              />

              <div className="bonus__head">
                <h3 className="bonus__title">
                  Para ampliar VS Code con recursos fiables
                </h3>
                <p className="bonus__lead">
                  Si quieres ir un paso más allá (o te has atascado), aquí
                  tienes recursos fiables para reforzar lo aprendido. No es
                  obligatorio para seguir el manual, pero te da{" "}
                  <strong>claridad</strong> y <strong>seguridad</strong>.
                </p>
              </div>

              <div className="callout tip">
                ✅ Recomendación: primero mira el vídeo embebido (resumen
                práctico) y después consulta la documentación oficial cuando
                tengas dudas concretas.
              </div>

              {/* VÍDEO 1 (EMBEBIDO) */}
              <div className="bonus__block">
                <h4 className="bonus__subtitle">
                  🎬 Vídeo recomendado (embebido)
                </h4>

                <div
                  className="media-video"
                  aria-label="Vídeo recomendado de VS Code"
                >
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/CxF3ykWP1H4"
                    title="Curso/guía de VS Code (vídeo recomendado)"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    allowFullScreen
                  />
                </div>

                <p className="bonus__muted">
                  Si no se carga el vídeo, ábrelo en nueva pestaña:{" "}
                  <a
                    className="bonus__link"
                    href="https://www.youtube.com/watch?v=CxF3ykWP1H4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en YouTube
                  </a>
                  .
                </p>
              </div>

              {/* DOCUMENTACIÓN + MÁS RECURSOS */}
              <div className="bonus__grid">
                <div className="bonus__col">
                  <h4 className="bonus__subtitle">📚 Documentación oficial</h4>

                  <a
                    className="bonus-link"
                    href="https://code.visualstudio.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bonus-link__top">
                      <span className="bonus-link__name">
                        Visual Studio Code · Documentation
                      </span>
                      <span className="bonus-link__tag">Oficial</span>
                    </div>
                    <p className="bonus-link__desc">
                      Guías por temas, atajos, terminal, extensiones y
                      configuración. Ideal para dudas concretas.
                    </p>
                    <span className="bonus-link__url">
                      code.visualstudio.com/docs
                    </span>
                  </a>
                </div>

                <div className="bonus__col">
                  <h4 className="bonus__subtitle">🔗 Más recursos</h4>

                  <div className="bonus-list">
                    <a
                      className="bonus-item"
                      href="https://www.udemy.com/course/visual-studio-code-editor/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bonus-item__name">
                        Curso de VS Code en Udemy
                      </span>
                      <span className="bonus-item__desc">
                        Para profundizar con estructura de curso (lecciones +
                        práctica).
                      </span>
                    </a>

                    <a
                      className="bonus-item"
                      href="https://www.youtube.com/watch?v=TbzrOz8HbFM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="bonus-item__name">
                        Vídeo recomendado (YouTube)
                      </span>
                      <span className="bonus-item__desc">
                        Refuerzo adicional para afianzar interfaz, atajos y
                        flujo de trabajo.
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </details>
        {/* ===================================================== */}

        <div className="doc-next">
          <Link className="btn btn-primary" to="/tema/1">
            Siguiente tema <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
