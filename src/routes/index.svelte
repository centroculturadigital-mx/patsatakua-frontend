<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import ProyectoVistaPrevia from "../componentes/ProyectoVistaPrevia.svelte";
  import Pie from "../componentes/Pie.svelte";

  let proyectosModule;
  $: proyectos =
    proyectosModule && proyectosModule.default ? proyectosModule.default : [];
  let mostrarLateral = false;

  setTimeout(() => (mostrarLateral = true), 600);

  const LogoCultura = "logo.cultura.png";
  const LogoCCD = "logo.ccd.png";

  onMount(async () => {
    proyectosModule = await import("../datos/proyectos.json");
    console.log(proyectosModule);
  });
</script>

<style>
  @media screen and (min-width: 768px) {
    .Inicio {
      min-height: 100%;
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }

  /* .contenedor-principal {
	} */
  .Titulo {
    color: #72a6aa;
    font-weight: 500;
    font-size: 2.75rem;
    text-align: center;
    margin-bottom: 0.25rem;
    font-weight: bold;
    letter-spacing: 0.125rem; /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  }
  .TituloFonetico {
    color: #000;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .SubtituloSignificado {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    margin-bottom: 2rem;
  }
  .Lateral {
    color: #000;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
  }

  .LateralContenido {
    max-width: 260px;
  }

  .Introduccion {
    font-weight: 200;
    font-size: 14px;
    line-height: 20px;
  }

  .contenedor-principal {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    padding-top: 2rem;
  }
  .Lista ul {
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  .Creditos {
    font-weight: 200;
    line-height: 14px;
    color: #454344;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .LogosCreditos {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 4rem;
  }
  .Logo {
    display: flex;
    align-items: center;
  }
  /* responsivos */
  @media screen and (min-width: 768px) {
    .Lista,
    .Lista ul {
      height: auto;
      padding-bottom: 5%;
    }
  }

  @media screen and (min-width: 1200px) {
    .Lista ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>

<svelte:head>
  <title>Patsatakua</title>
</svelte:head>

<section class="Inicio">
  <div class="Lateral">

    <div class="LateralContenido">

      {#if mostrarLateral}
        <header>
          <h1 class="Titulo" transition:fade>Patsatakua</h1>
          <h5 class="TituloFonetico" transition:fade>/pa.tsá.ta.kwa/</h5>

          <h4 class="SubtituloSignificado" transition:fade>
            Patratakua en purépecha (P’urhépecha) quiere decir, “en lo que se
            guarda”
          </h4>
        </header>

        <section class="Introduccion" transition:fade>
          <p>
            Bajo esta palabra-repositorio se reúnen once proyectos de hablantes
            de lenguas indígenas de diversas zonas del país que abordan de forma
            particular el uso de las herramientas tecnológicas. Estos proyectos
            representan la diversidad lingüística cultural y ofrecen un nuevo
            mapa de términos y etiquetas. Del uso de plataformas precreadas a la
            programación desde cero; de prácticas experimentales de escritura a
            aplicaciones para aprender una lengua, de espacios de memoria visual
            y oral a la documentación de la evolución del registro gráfico, de
            la preservación de la lengua y el deseo de mantenerla como bien
            común ante situaciones migratorias de sus hablantes a la invitación
            al encuentro con esos otros y otras que desean ampliar la idea
            sostenida por diversos activistas de las lenguas: entender a nuestro
            como un territorio multilingüe.
          </p>

        </section>

        <section>
          <h4 class="Creditos">Créditos proyectos</h4>

          <div class="LogosCreditos">

            <div class="Logo">
              <img
                src={LogoCultura}
                alt="Logotipo Secretaría de cultura México" />
            </div>
            <div class="Logo">
              <img src={LogoCCD} alt="Logotipo Centro cultura digital México" />
            </div>

          </div>

        </section>
      {/if}

    </div>
  </div>

  <div class="contenedor-principal">

    <section class="Lista">
      <ul>
        {#each proyectos as p}
          <ProyectoVistaPrevia proyecto={p} />
        {/each}
      </ul>
    </section>

    <Pie />

  </div>

</section>
