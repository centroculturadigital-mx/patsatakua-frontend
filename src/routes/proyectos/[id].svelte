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

  $: proyectosSimilares = [];

  let regresa;

  onMount(async () => {
    proyectosModule = await import("../../datos/proyectos.json");
    regresa = () => {
      if (!!window) {
        window.location.reload();
      }
    };
  });

  $: console.log("proyecto", proyecto);
  // $: console.log("id", id);

  let mostrarDetalle = false;

  const abrirProyecto = () => {
    mostrarDetalle = true;
  };

  let tituloHeader = "Patsatakua";
</script>

<style>
  #HeaderProyecto {
    height: auto;
    padding: 1.5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    min-width: 50%;
  }

  #HeaderProyecto > a {
    border-radius: 5px;
    padding: 0.5rem;
    display: flex;
    width: auto;
    text-decoration: none;
  }
  .HeaderLinks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 60%;
  }
  .HeaderLinks a {
    text-decoration: none;
    /* color: #72a6aa; */
  }
  .HeaderLinks a:hover {
    text-decoration: none;
    color: #ffffff;
  }
  .RegresaProyecto {
    color: #72a6aa;
    cursor: pointer;
  }
  .RegresaProyecto:hover {
    text-decoration: none;
    color: #73b7bb;
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

  .RegresaDetalle {
    background-color: #FFF;
    color:#72a6aa;
    padding: 0.5rem 1rem;
    border: 1px solid#72a6aa !important;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: lighter;
    box-shadow: 3px 3px 1px#72a6aa;
    transition: 0.25s;
  }
  .RegresaDetalle:hover {
    box-shadow: 3px 3px 3px #72a6aa;
  }

  .LinkExterno {
    background-color: #72a6aa;
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    letter-spacing: 2px;
    font-weight: lighter;
    cursor: pointer;
  }
  .LinkExterno:hover {
    background-color:#72a6aa;
    opacity: 0.9;
    border-radius: 5px;
  }
  .LinkExterno i {
    padding-left: 0.75rem;
  }
  .LinkProyecto {
    color: #fff;
  }

  /*  */

  .contenedor-1 header {
    position: relative;
  }
  .contenedor-1 .Regresar {
    font-weight: 100;
    position: relative;
    top: 0.25rem;
    left: 2.5rem;
    cursor: pointer;
  }
  .contenedor-1 .Regresar button {
    background-color: #FFF;
    color: #72a6aa;
    padding: 0.75rem 1rem;
    border: 1px solid #72a6aa !important;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: lighter;
    box-shadow: 3px 3px 1px #72a6aa;
    transition: 0.25s;
  }
  .contenedor-1 .Regresar button:hover {
    box-shadow: 3px 3px 3px #72a6aa;
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

  .TituloHead {
    font-weight: 500;
    text-align: left;
    font-size: 2.75rem;
    text-align: left;
    margin-bottom: 0.25rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
    margin-top: 4px;
    color: #72a6aa;
    text-shadow: -1px 1px #ffffff, -1px -1px #ffffff, 1px -1px #ffffff,
      1px 1px #f3f3f2, 0px 3px #72a6aa;
  }

  .TituloHead:hover {
    color: #73b7bb;
  }

  .Contenido {
    font-weight: 200;
    font-size: 1rem;
    line-height: var(--TextoMediano--line-height);
  }

  .Enlace {
    padding-top: 1rem;
  }
  .Texto a {
    font-weight: 200;
    color: #2094FF;
    text-decoration: none;
  }
  .Texto a:hover {
    color: #000000;
    text-decoration: underline;
  }
  .TituloEnlace {
    font-weight: 600;
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

  @media screen and (max-width: 560px) {
    #HeaderProyecto {
      display: block;
    }
    .HeaderLinks {
      min-width: 100%;
    }
    .RegresaProyecto {
      margin: 0;
      padding-left: 0.5rem;
    }
  }
  @media screen and (max-width: 767px) {
    /* .contenedor-1 .Regresar {
      position: absolute;
      top: 0.25rem;
      left: -7.5rem;
    } */
    .Titulo {
      margin: 2rem 0;
      margin-top: 3rem;
      text-align: center;
    }
    .Enlace {
      padding-top: 1rem;
    }
    .Enlace .Texto {
      font-size: 0.75rem;
    }
    .Texto a {
      font-weight: 200;
      color: #2094FF;
      text-decoration: none;
    }
    .Texto a:hover {
      color: #000000;
      text-decoration: underline;
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
    .ProyectoDetalle {
      background: rgba(255, 255, 255, 0.6);
      padding: 1rem;
      margin: 0.5rem;
    }
  }

  :global(#particles-js) {
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    .HeaderLinks {
      min-width: 74%;
    }
    .LinkExterno {
      display: none;
    }
    :global(#particles-js) {
      z-index: -1;
    }
    article {
      position: absolute;
      z-index: 11;
    }

    .Imagen--movil {
      display: none;
    }

    .contenedor-1 {
      padding: 0rem 0rem 0 1rem;
    }

    .ProyectoDetalle {
      left: calc((100vw - 54rem) / 2);
      right: calc((100vw - 54rem) / 2);
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #72a6aa;
      box-sizing: border-box;
      max-width: 54rem;
      padding: 2.5rem;
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
  @media (min-width: 768px) {
    
    .contenedor-1 .Regresar {
      position: absolute;
      top: 0.25rem;
      left: -7.5rem;
    }
    .ProyectoDetalle {
      left: calc((100vw - 54rem) / 2);
      right: calc((100vw - 54rem) / 2);
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #72a6aa;
      box-sizing: border-box;
      max-width: 38rem;
      padding: 2.5rem;
      height: auto;
      margin-bottom: 2.25rem;
    }
    .Contenido {
      width: 90%;
      font-size: 0.75rem;
    }
    .Texto {
      font-size: 0.75rem;
    }
    .contenedor-2 {
      padding-left: 2rem;
    }
    .Imagen {
      width: 100%;
      height: 15rem;
      object-fit: contain;
    }
    .Enlace h5 {
      font-size: 0.75rem;
    }
  }
  @media (min-width: 1024px) {
     .HeaderLinks {
      min-width: 75%;
    }
    .LinkExterno {
      display: flex;
    }
    .ProyectoDetalle {
      left: calc((100vw - 54rem) / 2);
      right: calc((100vw - 54rem) / 2);
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid #72a6aa;
      box-sizing: border-box;
      max-width: 54rem;
      padding: 2.5rem;
      margin-top: 0.25rem;
      height: auto;
    }
    .Contenido {
      width: 80%;
      font-size: 1rem;
    }
    .Texto {
      font-size: 1rem;
    }
    .Imagen {
      width: 100%;
      height: 20rem;
      object-fit: contain;
    }
    /* 
    .contenedor-2 {
      padding-left: 2rem;
    }
    
    .Enlace h5 {
      font-size: 0.75rem;
    } */
  }
</style>

<header id="HeaderProyecto">
  <a class="RegresaInicio" href="/">
    <h1 class="TituloHead">{tituloHeader}</h1>
  </a>
  {#if mostrarDetalle}
    <div class="HeaderLinks">
      <button class="RegresaDetalle" on:click={regresa}>
        <i class="fa fa-arrow-left" />
        <span>Volver</span>
      </button>
      <button class="LinkExterno">
        <a
          class="LinkProyecto"
          href={!!proyecto.url ? proyecto.url : ''}
          target="_blank">
          Ir al sitio oficial
        </a>
        <i class="fa fa-arrow-right" />
      </button>
    </div>
  {/if}
</header>

{#if mostrarDetalle}

  <IframeContenedor url={proyecto.url} />

{:else}

  <article class="ProyectoDetalle ancho_maximo">
    {#if !!proyecto && !!proyecto.image}
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

      </header>

      <section class="Contenido">{proyecto.contenido}</section>

      <div class="Enlace">
        <h5 class="TituloEnlace">
          Enlace de proyecto:
        </h5>
        <strong class="Texto">
          <a href={!!proyecto.url ? proyecto.url : ''} target="_blank">
            {!!proyecto.url ? proyecto.url : ''}
          </a>
        </strong>
      </div>
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
        {#if !proyecto.url_externo}
          <button class="BotonConocerProyecto" on:click={abrirProyecto}>
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
