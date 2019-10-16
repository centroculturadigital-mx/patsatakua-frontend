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
  //const datos =  "../../datos/datosLateralFalso.js";


  const datos =  {
    titulo: "Patsatakua",
    tituloFonetico: "/pa.tsá.ta.kwa/",
    significado: "Patratakua en purépecha (P’urhépecha) quiere decir, /en lo que seguarda/" ,
    introduccion: "Bajo esta palabra-repositorio se reúnen once proyectos de hablantes de lenguas indígenas de diversas zonas del país que abordan de forma particular el uso de las herramientas tecnológicas. Estos proyectos representan la diversidad lingüística cultural y ofrecen un nuevo mapa de términos y etiquetas. Del uso de plataformas precreadas a la programación desde cero; de prácticas experimentales de escritura a aplicaciones para aprender una lengua, de espacios de memoria visual y oral a la documentación de la evolución del registro gráfico, de la preservación de la lengua y el deseo de mantenerla como bien común ante situaciones migratorias de sus hablantes a la invitación al encuentro con esos otros y otras que desean ampliar la idea sostenida por diversos activistas de las lenguas: entender a nuestro como un territorio multilingüe." ,
    declaracion: "Los lenguajes de la tecnología suelen estar homogeneizados y marcados por las agendas del norte global y del mercado. Estos proyectos descentralizan el uso de las herramientas tecnológicas desde sus concepciones propias, representan la diversidad lingüística cultural y crean un nuevo mapa de términos, vocablos, etiquetas, categorías y reescrituras desde alternativas y apropiaciones.",
    sliderProyectos: [
        "Ajuujkjaaky",
        "Biblioteca de Investigacion Juan de Cordoba",
        "Colmix",
        "Kumoontun",
        "Lengua y Cultura Triqui",
        "Ma Tiksalokan Nawatl",
        "Museo Virtual del Zapoteco",
        "Red de Activismo Digital de Lenguas Indigenas",
        "Ticha",
        "Turix",
    ]
 }

    let logocultura = 'cultura.svg';
    let logoccd = 'ccd.svg';

  let proyectosModule;
  $: proyectos =
    proyectosModule && proyectosModule.default ? proyectosModule.default : [];
  let mostrarLateral = false;

  setTimeout(() => (mostrarLateral = true), 600);

  const LogoCultura = "logo.cultura.png";
  const LogoCCD = "logo.ccd.png";
	let LogosProyectos = ['https://fakeimg.pl/250x100/?text=Bienvenido','https://fakeimg.pl/250x100/?text=Al','https://fakeimg.pl/250x100/?text=Sitio','https://fakeimg.pl/250x100/?text=De','https://fakeimg.pl/250x100/?text=Patzatakua','https://fakeimg.pl/250x100/?text=Devmd'];
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
    
    font-weight: 500;
    font-size: 2.75rem;
    text-align: center;
    margin-bottom: 0.25rem;
    font-weight: bold;
    letter-spacing: 0.125rem; /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
    margin-top: 4px;
    color: #72a6aa;
    text-shadow: -1px 1px #ffffff, -1px -1px #ffffff, 1px -1px #ffffff, 1px 1px #f3f3f2, 0px 3px #72a6aa;
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
    font-size: 0.9rem;
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
  .LogosProyectos {
    margin-bottom: 4rem;
  }

  .LogoProyecto{
    font-size: 0.9rem;
    text-align: center;
    color: rgba(135, 116, 119, 1);
   
  }
  .LogosCreditos {
    /*display: flex;
    justify-content: space-evenly;*/
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    max-width: 18rem;
  }
  .LogoInstitucional {
    display: flex;
    align-items: center;
  }
   .LogoInstitucional img{
    max-width: 8rem;
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
               
          <h1 class="Titulo" transition:fade>Patsatakua  </h1>
          
          <h5 class="TituloFonetico" transition:fade>{datos.tituloFonetico}</h5>

          <h4 class="SubtituloSignificado" transition:fade>{datos.significado}</h4>
        </header>

        <section class="Introduccion" transition:fade>
          <p>{datos.introduccion} </p>

          <!-- disclaimer -->
          <p>{datos.declaracion}</p>
        </section>

        <section transition:fade>
          <h4 class="Creditos">Créditos proyectos</h4>

          <div class="LogosProyectos">

            <Carousel perPage={{ 800:1 }} autoplay='2500' loop>

              <span class="Control" slot="left-control">
                <ChevronLeftIcon />
              </span>

              {#each datos.sliderProyectos as proyecto}
                <div class="LogoProyecto">
                  <h3>{proyecto}</h3>
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
                <img src="{logocultura}"  alt="Logotipo Secretaría de cultura México">
            </div>
            <div class="LogoInstitucional">
              <img src="{logoccd}"  alt="Logotipo Centro cultura digital México">
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
