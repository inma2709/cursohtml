// Tema0.jsx
import { useEffect } from "react";

export default function Tema0() {
  useEffect(() => {
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
    const solutions = root.querySelectorAll('details[data-solution]');
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

        const sol = li.querySelector('details[data-solution]');
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
      root.querySelectorAll('input[type="radio"]').forEach((r) => (r.checked = false));

      root.querySelectorAll('details[data-solution]').forEach((d) => {
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
        <h1>Visual Studio Code: el entorno de trabajo que vas a usar como profesional</h1>
        <p className="doc-lead">
          Antes de escribir código, hay que dominar el “taller”: saber qué es un entorno de desarrollo, cómo se organiza
          un proyecto, dónde mirar cuando algo falla y cómo trabajar con orden. Aquí vas a aprender VS Code desde la
          lógica (no desde “botoncitos”).
        </p>

        <div className="callout tip">
          <strong>Objetivo del Tema 0:</strong> que puedas instalar VS Code correctamente, entender qué es un IDE,
          moverte por la interfaz con seguridad, trabajar siempre con carpetas de proyecto, guardar y revisar mensajes
          del sistema (Problemas/Terminal/Consola del navegador) sin frustrarte.
        </div>

        <div className="callout">
          <strong>Norma del curso:</strong> configuramos lo justo. Primero entendemos el mapa; después, ya iremos
          añadiendo herramientas si aportan valor real.
        </div>
      </header>

      <nav className="doc-index" aria-label="Índice del tema">
        <h2>Índice</h2>
        <ol>
          <li>
            <a href="#que-es">Qué es VS Code y por qué lo usamos</a>
          </li>
          <li>
            <a href="#ide">Qué es un IDE y cómo se relaciona con VS Code</a>
          </li>
          <li>
            <a href="#comparativa">Comparativa con otros IDE (NetBeans, Eclipse, IntelliJ)</a>
          </li>
          <li>
            <a href="#instalacion">Instalación paso a paso</a>
          </li>
          <li>
            <a href="#extensiones">Extensiones recomendadas</a>
          </li>
          <li>
            <a href="#interfaz">Interfaz y flujo de trabajo</a>
          </li>
          <li>
            <a href="#atajos">Atajos útiles</a>
          </li>
          <li>
            <a href="#errores">Errores típicos y cómo salir rápido</a>
          </li>
          <li>
            <a href="#practica">Práctica guiada (sin programar aún)</a>
          </li>
          <li>
            <a href="#repaso">Repaso + test</a>
          </li>
        </ol>
      </nav>

      {/* ===================================================== */}
      <section id="que-es" className="doc-section">
        <h2>1) Qué es VS Code y por qué lo usamos</h2>

        <details open className="dd">
          <summary>1.1 · Visual Studio Code como herramienta de trabajo</summary>
          <div className="dd-body">
            <p>
              <strong>Visual Studio Code</strong> es una aplicación creada para trabajar con proyectos técnicos: no
              solo escribes texto, sino que organizas archivos, revisas mensajes, ejecutas tareas y mantienes un flujo
              de trabajo consistente.
            </p>
            <p>
              En un proyecto real (en clase, en prácticas o en empleo) no existe “un archivo suelto”. Existen carpetas
              con estructura, configuraciones y herramientas que te ayudan a entender qué ocurre cuando algo no sale
              bien.
            </p>

            <div className="callout">
              <strong>Idea clave:</strong> VS Code es tu mesa de trabajo. Si la mesa está ordenada, tú trabajas mejor.
            </div>

            <details className="dd dd-nested">
              <summary>Qué hace que VS Code sea distinto a un editor de texto “normal”</summary>
              <div className="dd-body">
                <ul>
                  <li>Entiende que lo que escribes es código (y te ayuda con sugerencias y avisos).</li>
                  <li>Trabaja por proyectos (carpetas), no por archivos aislados.</li>
                  <li>Incluye paneles de diagnóstico: Problemas, salida, terminal, etc.</li>
                  <li>Puede ampliarse con extensiones cuando aporta valor real.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>1.2 · Por qué esta herramienta se usa tanto en el sector</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Equilibrio:</strong> es potente sin obligarte a usarlo todo desde el primer día.
              </li>
              <li>
                <strong>Rápido:</strong> arranca y responde bien incluso en equipos modestos.
              </li>
              <li>
                <strong>Modular:</strong> le añades solo lo que necesitas con extensiones.
              </li>
              <li>
                <strong>Estándar:</strong> lo verás en muchos equipos de trabajo y entornos formativos serios.
              </li>
            </ul>

            <div className="callout tip">
              <strong>Truco mental:</strong> no se trata de “tener muchas funciones”; se trata de “tener control”.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="ide" className="doc-section">
        <h2>2) Qué es un IDE y cómo se relaciona con VS Code</h2>

        <details open className="dd">
          <summary>2.1 · Qué significa IDE (sin humo)</summary>
          <div className="dd-body">
            <p>
              Un <strong>IDE</strong> es un <strong>Entorno de Desarrollo Integrado</strong>. La palabra importante es
              “integrado”: en un mismo lugar se juntan varias herramientas que, por separado, serían varios programas.
            </p>

            <div className="callout">
              <strong>Un IDE suele reunir:</strong> editor, organización del proyecto, detección de errores,
              consola/terminal, herramientas de ejecución y ayudas inteligentes.
            </div>

            <details className="dd dd-nested">
              <summary>Cómo reconocer que estás en un IDE de verdad</summary>
              <div className="dd-body">
                <ul>
                  <li>Puedes explorar la estructura del proyecto en un panel.</li>
                  <li>Te marca errores o avisos sin que tú los busques.</li>
                  <li>Tienes consola/terminal integrada para tareas del proyecto.</li>
                  <li>El entorno “sabe” en qué proyecto estás y actúa en consecuencia.</li>
                </ul>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>2.2 · VS Code: editor flexible que puede comportarse como IDE</summary>
          <div className="dd-body">
            <p>
              VS Code nació como un editor moderno, pero con extensiones puede convertirse en un IDE completo. Eso es
              precisamente lo que nos interesa: <strong>crece contigo</strong>.
            </p>

            <div className="callout warn">
              <strong>Advertencia útil:</strong> cuanto más “cargues” el entorno, más cosas pueden fallar. Por eso
              empezamos con lo esencial y añadimos solo lo que aporte.
            </div>

            <div className="callout tip">
              <strong>Idea docente:</strong> no aprendes más por tocar más opciones; aprendes más por entender lo que
              usas.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="comparativa" className="doc-section">
        <h2>3) Comparativa con otros IDE habituales (NetBeans, Eclipse, IntelliJ)</h2>

        <details open className="dd">
          <summary>3.1 · Por qué comparar: para entender qué eliges y por qué</summary>
          <div className="dd-body">
            <p>
              En informática no existe “una herramienta perfecta para todo”. Existen herramientas con filosofía
              distinta. Comparar te ayuda a elegir con criterio y a no sentir que “te falta algo” por usar una opción u
              otra.
            </p>

            <div className="callout">
              <strong>Conclusión adelantada:</strong> VS Code destaca por su equilibrio: empieza ligero y escala muy
              bien.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3.2 · Cuadro comparativo</summary>
          <div className="dd-body">
            <div className="callout tip">
              <strong>Cómo leer esta tabla:</strong> no estamos diciendo “mejor/peor”, sino “más adecuado según
              contexto”.
            </div>

            <div className="table-wrap" role="region" aria-label="Tabla comparativa de entornos de desarrollo">
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
                    <td>Aprendizaje, proyectos variados, equipos con herramientas diversas</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>NetBeans</strong>
                    </td>
                    <td>IDE “todo integrado”</td>
                    <td>Media</td>
                    <td>Entornos donde quieres un paquete completo desde el inicio</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Eclipse</strong>
                    </td>
                    <td>IDE muy completo y extensible</td>
                    <td>Alta</td>
                    <td>Proyectos grandes, perfiles acostumbrados a herramientas clásicas</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>IntelliJ IDEA</strong>
                    </td>
                    <td>IDE potente con automatización inteligente</td>
                    <td>Media–alta</td>
                    <td>Proyectos exigentes donde la automatización y análisis del entorno son clave</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <details className="dd dd-nested">
              <summary>Lectura “de profe”: qué debes retener</summary>
              <div className="dd-body">
                <ul>
                  <li>Los IDE clásicos pueden darte mucho… pero también pueden saturar al empezar.</li>
                  <li>VS Code no te impone complejidad: te la ofrece cuando la necesitas.</li>
                  <li>En aprendizaje serio, importa más el control y el orden que el “todo en uno”.</li>
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
              Descarga VS Code desde su web oficial. Evita instaladores de terceros. En herramientas de desarrollo, una
              instalación “extraña” suele terminar en errores difíciles de explicar.
            </p>
            <div className="callout">
              <strong>Regla de supervivencia:</strong> si algo “se instala raro”, normalmente da problemas raros.
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
                Marca <strong>Add to PATH</strong> (para poder usar <code>code</code> en terminal cuando lo necesites).
              </li>
              <li>
                Marca <strong>Open with Code</strong> (opcional pero muy práctico: abrir carpetas con clic derecho).
              </li>
              <li>Finaliza e inicia VS Code.</li>
            </ol>

            <div className="callout warn">
              <strong>Importante:</strong> si no marcas PATH no pasa “nada grave” hoy, pero mañana puede darte guerra
              cuando uses terminal o herramientas que lo necesiten.
            </div>

            <details className="dd dd-nested">
              <summary>Cómo comprobar PATH en 10 segundos</summary>
              <div className="dd-body">
                <p>
                  Abre una terminal del sistema y escribe <code>code</code>. Si se abre VS Code, está correcto. Si te
                  dice que no reconoce el comando, suele faltar esa casilla de PATH.
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
                <strong>Idioma:</strong> puedes instalar el paquete en español desde Extensiones si lo prefieres.
              </li>
              <li>
                <strong>Números de línea:</strong> activados (son esenciales para seguir indicaciones y correcciones).
              </li>
              <li>
                <strong>Auto Save:</strong> opcional; úsalo solo si entiendes cuándo guarda automáticamente.
              </li>
            </ul>

            <div className="callout tip">
              <strong>Consejo docente:</strong> no personalices 50 cosas el primer día. Ajuste mínimo + práctica =
              control real.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="extensiones" className="doc-section">
        <h2>5) Extensiones recomendadas</h2>

        <details open className="dd">
          <summary>5.1 · Qué es una extensión (y por qué no hay que instalar 30)</summary>
          <div className="dd-body">
            <p>
              Una extensión añade funciones a VS Code. Bien elegidas, hacen el entorno más productivo. Mal elegidas (o
              demasiadas), generan ruido, conflictos y errores difíciles de rastrear.
            </p>

            <div className="callout">
              <strong>Norma del manual:</strong> pocas y buenas. Menos cosas = más control.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>5.2 · Extensiones recomendadas para este punto del curso</summary>
          <div className="dd-body">
            <ul>
              <li>
                <strong>Prettier:</strong> mantiene el formato consistente (orden mental + orden visual).
              </li>
              <li>
                <strong>Auto Rename Tag:</strong> (la instalaremos cuando toque trabajar con etiquetas).
              </li>
              <li>
                <strong>HTML CSS Support:</strong> (la instalaremos cuando toque trabajar con clases/estructura).
              </li>
              <li>
                <strong>Live Server:</strong> (la instalaremos cuando empecemos a visualizar en navegador).
              </li>
            </ul>

            <div className="callout tip">
              <strong>Matiz importante:</strong> aquí no es “instalar por instalar”. Te explico qué hace cada una y
              cuándo tiene sentido activarla.
            </div>

            <details className="dd dd-nested">
              <summary>Cómo instalar una extensión sin equivocarte</summary>
              <div className="dd-body">
                <ol>
                  <li>Abre <strong>Extensiones</strong> (icono de cuadraditos).</li>
                  <li>Busca por nombre exacto.</li>
                  <li>Comprueba autor y descargas (evita clones sospechosos).</li>
                  <li>Instala y reinicia VS Code si lo solicita.</li>
                </ol>

                <div className="callout warn">
                  <strong>Ojo:</strong> muchas “misteriosas” averías vienen de extensiones clonadas o incompatibles.
                </div>
              </div>
            </details>
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
                <strong>Barra de actividad:</strong> accesos a Explorador, Buscar, Control de versiones, Extensiones…
              </li>
              <li>
                <strong>Explorador:</strong> estructura de carpetas y archivos del proyecto.
              </li>
              <li>
                <strong>Editor:</strong> zona central donde trabajas.
              </li>
              <li>
                <strong>Panel inferior:</strong> Problemas, Terminal, Salida.
              </li>
              <li>
                <strong>Barra de estado:</strong> información contextual (archivo, codificación, fin de línea, etc.).
              </li>
            </ul>

            <details className="dd dd-nested">
              <summary>Por qué insisto tanto en esto</summary>
              <div className="dd-body">
                <p>
                  Porque cuando algo no funciona, la pista casi siempre aparece en: <strong>Problemas</strong>,{" "}
                  <strong>Terminal</strong> o en la estructura del <strong>Explorador</strong>. Si sabes “leer el
                  entorno”, avanzas más rápido y te frustras menos.
                </p>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>6.2 · Regla de oro: trabajar siempre con “Abrir carpeta”</summary>
          <div className="dd-body">
            <p>
              La forma profesional de trabajar es abrir una <strong>carpeta de proyecto</strong>. Así el entorno
              entiende qué forma parte del proyecto, qué está relacionado y dónde deben aparecer avisos.
            </p>

            <div className="callout warn">
              Si trabajas con archivos sueltos, se multiplican los errores de organización: rutas mal puestas, archivos
              duplicados, confusión al guardar, etc.
            </div>

            <details className="dd dd-nested">
              <summary>Ejemplo típico de problema cuando no abres carpeta</summary>
              <div className="dd-body">
                <p>
                  “He cambiado algo y no pasa nada”. Muchas veces el problema no es lo que hiciste: es que estás
                  editando un archivo distinto al que crees, o tienes duplicados en varias carpetas.
                </p>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>6.3 · Flujo de trabajo: el hábito que te evita errores</summary>
          <div className="dd-body">
            <ol>
              <li>Crear una carpeta de proyecto con nombre claro.</li>
              <li>Abrir esa carpeta en VS Code.</li>
              <li>Crear archivos dentro (desde el Explorador de VS Code).</li>
              <li>Guardar cambios de forma consciente.</li>
              <li>Leer mensajes del sistema si aparece un aviso.</li>
              <li>Corregir con método: no adivinar, comprobar.</li>
            </ol>

            <div className="callout tip">
              <strong>Objetivo:</strong> automatizar este flujo para que tu mente se centre en aprender, no en “pelearte”
              con el entorno.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>6.4 · Guardado y orden: la parte silenciosa del éxito</summary>
          <div className="dd-body">
            <p>
              En desarrollo, la mayoría de fallos de principiantes no son “no sé programar”. Son fallos de flujo: no
              guardar, editar el archivo equivocado, trabajar sin estructura o ignorar avisos.
            </p>

            <div className="callout">
              <strong>Regla:</strong> guarda, revisa, corrige. Repite.
            </div>

            <details className="dd dd-nested">
              <summary>Una comprobación muy útil cuando “algo no cambia”</summary>
              <div className="dd-body">
                <ul>
                  <li>¿He guardado?</li>
                  <li>¿Estoy editando el archivo correcto (pestaña arriba)?</li>
                  <li>¿Tengo otro archivo con el mismo nombre en otra carpeta?</li>
                  <li>¿Veo algún aviso en Problemas o en la barra inferior?</li>
                </ul>
              </div>
            </details>
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
                  <strong>Ctrl + S</strong>. Antes de pensar “no funciona”, piensa: “¿he guardado?”.
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
              <li>¿Ves avisos en <strong>Problemas</strong>?</li>
            </ul>

            <div className="callout tip">
              <strong>Chequeo rápido:</strong> cambia un texto evidente (por ejemplo, “PRUEBA”) y guarda. Si no cambia,
              estás mirando otra cosa o editando otro archivo.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>“Me aparecen avisos y no sé dónde mirar”</summary>
          <div className="dd-body">
            <p>Mapa simple para no perderte:</p>
            <ul>
              <li>
                <strong>Panel “Problemas”:</strong> te indica errores o advertencias detectadas por el editor.
              </li>
              <li>
                <strong>Terminal:</strong> muestra mensajes cuando ejecutas comandos o tareas.
              </li>
              <li>
                <strong>Salida:</strong> mensajes internos de extensiones o del propio entorno.
              </li>
            </ul>

            <div className="callout">
              <strong>Regla:</strong> cuando algo falla, no adivines. Lee el mensaje, localiza la pista y actúa.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>“He tocado configuraciones y ahora todo se ve raro”</summary>
          <div className="dd-body">
            <ul>
              <li>Vuelve a un tema por defecto.</li>
              <li>Desactiva extensiones una a una si sospechas conflicto.</li>
              <li>Evita cambiar 10 ajustes a la vez: no sabrás cuál rompió el equilibrio.</li>
            </ul>

            <div className="callout warn">
              <strong>Consejo:</strong> los cambios se hacen de uno en uno. Control significa poder deshacer con claridad.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="practica" className="doc-section">
        <h2>9) Práctica guiada (sin programar aún)</h2>

        <details open className="dd">
          <summary>Ejercicio 1 · Crea tu primer proyecto “vacío” (estructura y control)</summary>
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
              <li>Escribe 5 líneas con lo que has entendido hoy (qué es un IDE, qué es abrir carpeta…).</li>
              <li>
                Guarda con <strong>Ctrl + S</strong>.
              </li>
              <li>Cierra VS Code, vuelve a abrir y comprueba que tu carpeta y tu archivo están ahí.</li>
            </ol>

            <div className="callout tip">
              <strong>Meta:</strong> que el entorno deje de ser “algo desconocido” y pase a ser “tu espacio de trabajo”.
            </div>

            <details className="dd dd-nested">
              <summary>Reto extra (si terminas antes)</summary>
              <div className="dd-body">
                <ul>
                  <li>
                    Crea una carpeta dentro llamada <code>_docs</code> y guarda ahí tus notas.
                  </li>
                  <li>
                    Prueba a buscar una palabra con <strong>Ctrl + F</strong> dentro del archivo.
                  </li>
                  <li>
                    Prueba <strong>Ctrl + P</strong> y escribe <code>notas</code> para abrirlo rápido.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </details>

        <details className="dd">
          <summary>Ejercicio 2 · Aprende a leer el entorno (Problemas / Terminal / Salida)</summary>
          <div className="dd-body">
            <ol>
              <li>Abre el panel inferior.</li>
              <li>
                Entra en <strong>Problemas</strong> (aunque esté vacío).
              </li>
              <li>
                Entra en <strong>Terminal</strong> y ábrelo/cierra con <strong>Ctrl + `</strong>.
              </li>
              <li>
                Entra en <strong>Salida</strong> y observa que puede mostrar mensajes de extensiones.
              </li>
            </ol>

            <div className="callout">
              <strong>Meta:</strong> que no te asuste ver paneles. Son herramientas, no “alertas”.
            </div>
          </div>
        </details>
      </section>

      {/* ===================================================== */}
      <section id="repaso" className="doc-section">
        <h2>10) Repaso + test</h2>

        <details open className="dd">
          <summary>Checklist final (si puedes marcar todo, estás en el camino correcto)</summary>
          <div className="dd-body">
            <ul>
              <li>Entiendo qué es VS Code y para qué se usa en proyectos reales.</li>
              <li>
                Sé explicar qué es un <strong>IDE</strong> con mis palabras.
              </li>
              <li>Distingo la filosofía de VS Code frente a NetBeans/Eclipse/IntelliJ.</li>
              <li>
                Sé trabajar abriendo <strong>carpetas de proyecto</strong> (no archivos sueltos).
              </li>
              <li>Reconozco las zonas: Explorador, Editor, Panel inferior, Barra de estado.</li>
              <li>
                Cuando hay un problema, sé dónde mirar: <strong>Problemas / Terminal / Salida</strong>.
              </li>
            </ul>

            <div className="callout tip">
              <strong>Si hoy solo te queda 1 cosa:</strong> estructura + guardado + lectura de mensajes. Ahí empieza el
              trabajo profesional.
            </div>
          </div>
        </details>

        {/* TEST con corrección automática (sin ver soluciones antes) */}
        <details className="dd" id="test0">
          <summary>Test de repaso (10 preguntas)</summary>
          <div className="dd-body">
            <p>
              Responde sin mirar arriba. Cuando termines, pulsa <strong>Corregir test</strong>. Las respuestas quedan
              bloqueadas hasta entonces.
            </p>

            <ol className="test" id="test0-list">
              <li data-correct="B">
                <p>
                  <strong>¿Qué describe mejor a un IDE?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q1" value="A" /> A) Un programa solo para escribir texto
                  </label>
                  <label>
                    <input type="radio" name="q1" value="B" /> B) Un entorno que integra varias herramientas de
                    desarrollo en una sola aplicación
                  </label>
                  <label>
                    <input type="radio" name="q1" value="C" /> C) Un navegador con herramientas extra
                  </label>
                  <label>
                    <input type="radio" name="q1" value="D" /> D) Un sistema operativo especializado
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> Un IDE integra editor, organización del proyecto, diagnóstico,
                      consola y ayudas en un mismo entorno.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="C">
                <p>
                  <strong>¿Por qué insistimos en “Abrir carpeta” en lugar de abrir archivos sueltos?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q2" value="A" /> A) Porque así el ordenador va más rápido siempre
                  </label>
                  <label>
                    <input type="radio" name="q2" value="B" /> B) Porque VS Code solo abre carpetas
                  </label>
                  <label>
                    <input type="radio" name="q2" value="C" /> C) Porque trabajar con proyectos reduce confusión,
                    duplicados y errores de organización
                  </label>
                  <label>
                    <input type="radio" name="q2" value="D" /> D) Porque es obligatorio por ley
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: C.</strong> Abrir carpeta permite que el entorno entienda el proyecto, muestre
                      estructura y te ayude a localizar problemas.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>VS Code se considera especialmente útil porque…</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q3" value="A" /> A) Obliga a usar todas sus funciones desde el primer día
                  </label>
                  <label>
                    <input type="radio" name="q3" value="B" /> B) Es modular: puedes empezar ligero y ampliar con
                    extensiones cuando tenga sentido
                  </label>
                  <label>
                    <input type="radio" name="q3" value="C" /> C) Solo sirve para un único lenguaje
                  </label>
                  <label>
                    <input type="radio" name="q3" value="D" /> D) No se puede personalizar
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> VS Code escala muy bien porque no impone complejidad: la añade si y
                      cuando la necesitas.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>Si aparece un aviso en VS Code, el primer lugar razonable para mirar suele ser…</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q4" value="A" /> A) El fondo de pantalla
                  </label>
                  <label>
                    <input type="radio" name="q4" value="B" /> B) El panel “Problemas”
                  </label>
                  <label>
                    <input type="radio" name="q4" value="C" /> C) La papelera de reciclaje
                  </label>
                  <label>
                    <input type="radio" name="q4" value="D" /> D) La calculadora
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> “Problemas” reúne errores y advertencias detectados por el editor o
                      extensiones.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>¿Qué riesgo aumenta cuando instalas muchas extensiones sin criterio?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q5" value="A" /> A) Que el teclado deje de funcionar
                  </label>
                  <label>
                    <input type="radio" name="q5" value="B" /> B) Que el entorno se vuelva ruidoso y aparezcan
                    conflictos difíciles de rastrear
                  </label>
                  <label>
                    <input type="radio" name="q5" value="C" /> C) Que no puedas guardar archivos nunca
                  </label>
                  <label>
                    <input type="radio" name="q5" value="D" /> D) Que VS Code se convierta en un juego
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> Cuantas más extensiones, más posibilidades de incompatibilidades o
                      configuraciones confusas.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="A">
                <p>
                  <strong>¿Qué atajo deberías usar como hábito antes de pensar “no funciona”?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q6" value="A" /> A) Ctrl + S
                  </label>
                  <label>
                    <input type="radio" name="q6" value="B" /> B) Ctrl + Z
                  </label>
                  <label>
                    <input type="radio" name="q6" value="C" /> C) Ctrl + Alt + Supr
                  </label>
                  <label>
                    <input type="radio" name="q6" value="D" /> D) Alt + F4
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: A.</strong> Guardar es el primer filtro: muchos “no cambia nada” se resuelven
                      con un guardado consciente.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>¿Qué describe mejor a IntelliJ IDEA en términos generales?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q7" value="A" /> A) Un bloc de notas
                  </label>
                  <label>
                    <input type="radio" name="q7" value="B" /> B) Un IDE con automatización potente y muchas ayudas
                    inteligentes
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
                      <strong>Correcta: B.</strong> IntelliJ es un IDE robusto, conocido por sus ayudas y
                      automatización, sobre todo en proyectos exigentes.
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
                    <input type="radio" name="q8" value="A" /> A) Es un IDE muy completo y extensible, con curva de uso
                    alta
                  </label>
                  <label>
                    <input type="radio" name="q8" value="B" /> B) Es una app solo para dibujar
                  </label>
                  <label>
                    <input type="radio" name="q8" value="C" /> C) Solo funciona sin internet
                  </label>
                  <label>
                    <input type="radio" name="q8" value="D" /> D) No admite extensiones
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: A.</strong> Eclipse es potente y extensible, pero puede mostrar mucha complejidad
                      de golpe.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="B">
                <p>
                  <strong>Cuando “algo se ve raro” tras tocar ajustes, el enfoque correcto es…</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q9" value="A" /> A) Cambiar 20 cosas más para compensar
                  </label>
                  <label>
                    <input type="radio" name="q9" value="B" /> B) Deshacer con método: volver a valores por defecto y
                    cambiar de uno en uno
                  </label>
                  <label>
                    <input type="radio" name="q9" value="C" /> C) Reiniciar el router
                  </label>
                  <label>
                    <input type="radio" name="q9" value="D" /> D) Ignorarlo siempre
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: B.</strong> Control significa poder identificar qué cambio produjo el efecto.
                    </p>
                  </div>
                </details>
              </li>

              <li data-correct="C">
                <p>
                  <strong>¿Cuál es la idea principal que debe quedarte de este tema?</strong>
                </p>
                <form className="test-question">
                  <label>
                    <input type="radio" name="q10" value="A" /> A) Instalar muchas cosas “por si acaso”
                  </label>
                  <label>
                    <input type="radio" name="q10" value="B" /> B) Evitar paneles y mensajes porque asustan
                  </label>
                  <label>
                    <input type="radio" name="q10" value="C" /> C) Dominar el entorno: estructura, guardado, lectura de
                    mensajes y trabajo por proyectos
                  </label>
                  <label>
                    <input type="radio" name="q10" value="D" /> D) Memorizar menús
                  </label>
                </form>

                <details className="dd dd-nested" data-solution hidden>
                  <summary>Ver respuesta y explicación</summary>
                  <div className="dd-body">
                    <p>
                      <strong>Correcta: C.</strong> El entorno es el taller: si lo dominas, aprendes más rápido y con
                      menos frustración.
                    </p>
                  </div>
                </details>
              </li>
            </ol>

            <div className="doc-next" style={{ justifyContent: "flex-start", gap: ".6rem", flexWrap: "wrap" }}>
              <button className="btn btn-primary" type="button" id="test0-check">
                Corregir test
              </button>
              <button className="btn" type="button" id="test0-reset" hidden>
                Reiniciar
              </button>
            </div>

            <div className="callout" id="test0-result" hidden></div>

            <div className="callout warn" style={{ marginTop: ".75rem" }}>
              <strong>Regla del test:</strong> las respuestas quedan ocultas hasta que pulses <strong>Corregir test</strong>.
            </div>
          </div>
        </details>

        <div className="doc-next">
          <a className="btn btn-primary" href="/tema/1">
            Siguiente tema <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
