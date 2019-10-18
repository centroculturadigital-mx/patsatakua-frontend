<script context="module">

  export async function preload(page, session) {
    const { id } = page.params;
    console.log("id", id);
    return { id };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Pie from "../../componentes/Pie.svelte";
  import Boton from "../../componentes/elementos/Boton.svelte";
  import ProyectoVistaPrevia from "../../componentes/ProyectoVistaPrevia.svelte";
  import ProyectosSimilares from "../../componentes/ProyectosSimilares.svelte";
  import IframeContenedor from "./IframeContenedor.svelte";

  import Carousel from "@centroculturadigital-mx/svelte-carousel";
  import {
    ChevronLeftIcon,
    ChevronRightIcon
  } from "../../../node_modules/svelte-feather-icons/src/index.js";

  export let id;

  let proyectosModule;
  $: proyecto =
    proyectosModule && proyectosModule.default
      ? proyectosModule.default.find(p => {
          proyectosModule.default;
          return p.id === id;
        })
      : {};

  $: proyectosSimilares = []

  onMount(async () => {
    proyectosModule = await import("../../datos/proyectos.json");
  });

  $: console.log("proyecto", proyecto);
  // $: console.log("id", id);

  let mostrarDetalle = false;

  const abrirProyecto = () => {
    mostrarDetalle = true;
  }

</script>

<style>
  
  #HeaderProyecto {
    height: 5rem;
    padding: 1.5rem;
    top: 1.5rem;
  }

  #HeaderProyecto > a {
    border: 1px solid #72a6aa;
    border-radius: 5px;
    padding: .5rem;
    display: block;
    width: 3rem;
  }
  #HeaderProyecto > a:hover {
    background-color: rgba(114, 166, 170, 0.1);
  }

  .fa {
    font-family: "Font Awesome 5 Free";
    font-weight: 200;
    font-style: normal;
  }
  .fa-home {
    font-family: "Font Awesome 5 Free";
    font-size: 2rem;
    font-style: normal;
    color: #72a6aa;
  }


  /*  */
  
  .contenedor-1 header {
    position: relative;
  }
  .contenedor-1 .Regresar {
    font-weight: 100;
    position: absolute;
    top: 0.25rem;
    left: -7.5rem;
    cursor: pointer;
  }
  .contenedor-1 .Regresar button {
    background-color: #72a6aa;
    border: none;
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: lighter;
  }
  .contenedor-1 .Regresar:hover {
    background-color: #72a6aa;
    opacity: 0.9;
    border-radius: 5px;
  }
  .BotonConocerProyecto {
    background-color: #72a6aa;
    border: none;
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    letter-spacing: 2px;
    font-weight: lighter;
    cursor: pointer;
  }
  .BotonConocerProyecto i {
    padding-left: 1rem;
  }
  .BotonConocerProyecto:hover {
    background-color: #72a6aa;
    opacity: 0.9;
    border-radius: 5px;
  }
  .contenedor-2 footer {
    margin-top: 1rem;
  }
  footer div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  footer article {
    width: auto;
    padding: 3rem;
  }
  .Subtitulo {
    text-align: center;
  }
  .Titulo {
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 0.5rem;
  }
  .Contenido {
    font-weight: 200;
    font-size: 1rem;
    line-height: var(--TextoMediano--line-height);
  }

  .Proyecto {
    /* left: 23px;*/
  }
  ul {
    margin-bottom: 30px;
    margin-top: 25px;
  }
  section {
    margin: 0;
  }
  .SubProyectos {
    margin-top: 3em;
  }
  /* .Similares {
    margin-top: 3em;
  }
   */



  @media screen and (max-width: 767px) {

    .Titulo {
      margin: 2rem 0;
      margin-top: 3rem;
      text-align: center;
    }

    .Contenido {
      
      margin: 1rem 0 2rem 0;
    }



    .Imagen--movil {
      display: block;
      width: 100%;
      height: 10rem;
      object-fit: contain;
      margin-bottom: 2rem;
    }

    .Imagen {
      display: none;
    }

    #HeaderProyecto,
    article {
      padding: 1rem;
    }

    .EnlaceContenedor {
      text-align: center;
      margin: 3rem 0;
    }
  }


  @media screen and (min-width: 768px) {

    

    .Imagen--movil {
      display: none;
    }

    .contenedor-1 {
      padding: 0rem 0rem 0 1rem;
    }
    
    .ProyectoDetalle {
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: #ffffff;
      border: 1px solid #72a6aa;
      box-sizing: border-box;
      max-width: 860px;
      padding: 2.5rem;
      margin-top: 2.25rem;
    }
    .Imagen {
      width: 100%;
      height: 20rem;
      object-fit: contain;
    }
    .ProyectoDetalle + section ul,
    .ProyectoDetalle + section + section ul {
      display: flex;
      flex-direction: row !important;
      justify-content: space-evenly;
      flex-wrap: wrap;
      height: auto;
    }

    .Contenido {
      width: 80%;
    }

  }


</style>



{#if mostrarDetalle}

  <IframeContenedor url={proyecto.url}/>

{:else}


<header id="HeaderProyecto">
  <a class="RegresaInicio" href="/">
    <i class="fa fa-home" />
  </a>
</header>

<article class="ProyectoDetalle ancho_maximo">
  {#if !! proyecto && !! proyecto.image }
    <img
    class="Imagen--movil"
    src={`${proyecto.image.url}`}
    alt="img"
    transition:fade />
  {/if}

  <div class="contenedor-1">
    <header class="Proyecto">
      <a class="Regresar" href="/">
        <button>
          <i class="fa fa-arrow-left" />
          <span>Volver</span>
        </button>
      </a>
      <h1 class="Titulo">{proyecto.titulo}</h1>
      
      <div class="Enlace">
        <h5>
          Enlace:
        </h5>
        <strong>
          {!!proyecto.url?proyecto.url:""}
        </strong>
      </div>
    </header>

    <section class="Contenido">{proyecto.contenido}</section>
  </div>

  <div class="contenedor-2">

    <div class="ImagenContenedor">
      {#if !!proyecto && !!proyecto.image}
        <img
          class="Imagen"
          src={`${proyecto.image.url}`}
          alt="img"
          transition:fade />
      {/if}
    </div>
    <div class="EnlaceContenedor">
      {#if ! proyecto.url_externo  }
      <button
        class="BotonConocerProyecto"
        on:click={abrirProyecto}>
        <span>Conocer Proyecto</span>
        <i class="fa fa-arrow-right" />
      </button>
      {:else}
        <a href={proyecto.url} target="_blank">
          <button class="BotonConocerProyecto">
            <span>
              Conocer Proyecto
              <i class="fa fa-arrow-right" />
            </span>
          </button>
        </a>
      {/if}
      <!-- <Boton>Conocer Proyecto</Boton> -->
    </div>
  </div>

</article>

<!-- <ProyectosSimilares proyecto={id}/> -->
<!-- <section class="SubProyectos">

  <h3 class="Subtitulo">Proyectos Similares</h3>
  <ul>
    <ProyectoVistaPrevia />
    <ProyectoVistaPrevia />
    <ProyectoVistaPrevia />
  </ul>
</section> -->

<!-- <section class="Similares">
  <h3 class="Subtitulo">Proyectos similares</h3>

    {#each proyectosSimilares as proyectoSimilar }
      <ProyectoVistaPrevia {proyectoSimilar}/>
    {/each}

</section> -->



{/if}


