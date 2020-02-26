<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Carousel from "@centroculturadigital-mx/svelte-carousel";
  import {
    ChevronLeftIcon,
    ChevronRightIcon
  } from "../../node_modules/svelte-feather-icons/src/index.js";

  import ProyectoVistaPrevia from "../componentes/ProyectoVistaPrevia.svelte";
  import Pie from "../componentes/Pie.svelte";
  import PieMovil from "../componentes/PieMovil.svelte";
  import Carga from "../componentes/Carga/Carga.svelte";
  //const datos =  "../../datos/datosLateralFalso.js";

  const datos = {
    titulo: "Patsatakua",
    tituloFonetico: "/pa.tsá.ta.kwa/",
    significado:
      'Patsatakua en purépecha (P’urhépecha) quiere decir: "en lo que se guarda" ',
    curatorial:
      "Bajo esta palabra-repositorio se reúnen once proyectos de hablantes de lenguas indígenas de diversas zonas del país que abordan de forma particular el uso de las herramientas tecnológicas. Estos proyectos representan la diversidad lingüística cultural y ofrecen un nuevo mapa de términos y etiquetas. Del uso de plataformas precreadas a la programación desde cero; de prácticas experimentales de escritura a aplicaciones para aprender una lengua, de espacios de memoria visual y oral a la documentación de la evolución del registro gráfico, de la preservación de la lengua y el deseo de mantenerla como bien común ante situaciones migratorias de sus hablantes a la invitación al encuentro con esos otros y otras que desean ampliar la idea sostenida por diversos activistas de las lenguas: entender a nuestro país como un territorio multilingüe.",
    sliderProyectos: [
      "Ayuujkjaaky",
      "Biblioteca de Investigación Juan de Cordova",
      "COLMIX",
      "Kumoontun",
      "Lengua y Cultura Triqui",
      "Ma tiksalokan nawatl",
      "Museo Virtual del Zapoteco",
      "Red de Activismo Digital de Lenguas Indigenas",
      "Ticha",
      "Turix"
    ],
    contacto: "Para proponer un proyecto, escríbenos a:",
    mail: "editorial.ccd@gmail.com"
  };

  let logocultura = "cultura.svg";
  let logoccd = "ccd.svg";

  let proyectosModule;
  $: proyectos =
    proyectosModule && proyectosModule.default ? proyectosModule.default : [];
  let mostrarLateral = false;

  setTimeout(() => (mostrarLateral = true), 600);

  const LogoCultura = "logo.cultura.png";
  const LogoCCD = "logo.ccd.png";

  let load;

  onMount(async () => {
    proyectosModule = await import("../datos/proyectos.json");
    shuffle(proyectosModule.default);
    load = await proyectosModule;
  });

  let introCompleto = false;

  const introColapsar = () => {

    introCompleto = !introCompleto;
  };

  $: introClases = "Introduccion" + (introCompleto ? " Completo" : "");

  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
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

  .LateralContenido > header > .Titulo {
    font-weight: 500;
    font-size: 2.75rem;
    text-align: center;
    margin-bottom: 0.25rem;
    font-weight: bold;
    letter-spacing: 0.125rem; /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
    margin-top: 4px;
    color: #72a6aa;
    text-shadow: -1px 1px #ffffff, -1px -1px #ffffff, 1px -1px #ffffff,
      1px 1px #f3f3f2, 0px 3px #72a6aa;
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
    background-color: rgb(255, 255, 255, 0.6);
    padding: 2rem;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    z-index: 11;
  }

  .LateralContenido {
    max-width: 260px;
  }

  .Introduccion {
    font-weight: 200;
    font-size: 0.9rem;
    line-height: 20px;
  }

  .Introduccion + .Mas {
    padding: 1rem;
    text-align: center;
    width: 100%;
  }

  .Introduccion + .Mas button {
    color: #72a6aa;
    background: none;
    border: none;
    cursor: pointer;
  }
  .Mas button:hover {
    opacity: 0.75;
  }
  .contenedor-principal {
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 2rem;
  }
  .Lista {
    margin-bottom: 3rem;
  }

  .Lista ul {
    padding: 1rem;
  }

  .Creditos {
    line-height: 14px;
    color: #454344;
    text-align: center;
    margin-top: 2rem;
    font-weight: 400;
  }

  .ProyectosParticipantes {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .LogosProyectos {
    height: 5rem;
    width: 14rem;
    margin-bottom: 2rem;
  }
  .LogosProyectos :global(.carousel),
  .LogosProyectos :global(.slides) {
    height: 5rem;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  .LogosProyectos :global(.slides > * > *) {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .LogosProyectos :global(.slides > * > * > *) {
    box-sizing: border-box;
    padding: 0 3rem;
  }

  .LogoProyecto {
    font-size: 0.9rem;
    text-align: center;
    color: rgb(121, 121, 121);
    font-weight: 400;
  }
  .LogoProyecto > .Titulo {
    margin: 0;
  }
  .LogoProyecto :global(.slides) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
  }

  .LogosCreditos {
    width: 100%;
    /*display: flex;
    justify-content: space-evenly;*/
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 18rem;
  }
  .LogoInstitucional {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .LogoInstitucional img {
    max-width: 8rem;
  }

  .Colaboraciones {
    border-style: solid;
    border-color: rgba(114, 166, 170, 1);
    border-width: thin;
    display: flex;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  .TextoColabora {
    font-size: 0.9rem;
    text-align: left;
    color: #000;
  }

  .Mail {
    font-weight: bold;
    font-size: 0.9rem;
    text-align: left;
    color: #000;
  }
  .Mail:hover {
    opacity: 0.75;
  }

  /* responsivos */
  @media screen and (max-width: 768px) {
    .Lateral {
      height: auto;
      transition: height 2s ease-out;
      overflow-y: hidden;
    }

    .ProyectosParticipantes {
      display: none;
    }

    .Introduccion {
      height: 8rem;
      transition: height 2s ease-out;
      overflow-y: hidden;
    }
    .Introduccion.Completo {
      height: auto;
    }

    .Lista ul :global(.Tarjeta) {
      margin-bottom: 2rem;
      margin: 0 auto 2rem;
    }
  }

  @media screen and (min-width: 767px) {
    .contenedor-principal {
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0;
      padding-top: 2rem;
    }

    .Lateral {
      color: #000;
      height: 100vh;
    }

    .Introduccion + .Mas {
      display: none;
    }

    .Lista ul {
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .Lista ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  /*.Control :global (.left) {
   left: 2vw;
   color: bisque;}
}*/
</style>

<svelte:head>
  <title>Patsatakua</title>
</svelte:head>

{#if !load}
  <Carga />
  {:else}
<section class="Inicio">
  <div class="Lateral">

    <div class="LateralContenido">

      {#if mostrarLateral}
        <header>

          <h1 class="Titulo" transition:fade>Patsatakua</h1>

          <h5 class="TituloFonetico" transition:fade>{datos.tituloFonetico}</h5>

          <h4 class="SubtituloSignificado" transition:fade>
            {datos.significado}
          </h4>
        </header>

        <section class={introClases} transition:fade>
          <p>{datos.curatorial}</p>
        </section>
        <footer class="Mas">
          <button on:click={introColapsar}>
            {introCompleto ? 'Cerrar' : 'Leer más'}
          </button>
        </footer>
        <section class="Colaboraciones">
          <p class="TextoColabora">
            {datos.contacto}
            <a href="mailto:{datos.mail}" class="Mail">{datos.mail}</a>
          </p>
        </section>
        <section class="ProyectosParticipantes" transition:fade>
          <h4 class="Creditos">Proyectos participantes</h4>

          <div class="LogosProyectos">

            <Carousel perPage={{ 800: 1 }} autoplay="2500" loop>

              <span class="Control" slot="left-control">
                <ChevronLeftIcon />
              </span>

              {#each datos.sliderProyectos as proyecto}
                <div class="LogoProyecto">
                  <h4 class="Titulo">{proyecto}</h4>
                </div>
              {/each}
              <span class="Control" slot="right-control">
                <ChevronRightIcon />
              </span>

            </Carousel>

            <!--  -->
          </div>
          <div class="LogosCreditos">
            <div class="LogoInstitucional">
              <img
                src={logocultura}
                alt="Logotipo Secretaría de cultura México" />
            </div>
            <div class="LogoInstitucional">
              <img src={logoccd} alt="Logotipo Centro cultura digital México" />
            </div>
            <!--  -->
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
{/if}