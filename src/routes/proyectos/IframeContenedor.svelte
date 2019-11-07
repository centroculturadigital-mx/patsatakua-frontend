<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Pie from "../../componentes/Pie.svelte";
  import Boton from "../../componentes/elementos/Boton.svelte";

  export let url;
  
</script>

<style>

  .Contenedor {
    padding: 1rem;
    position: relative;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 80vh;
    margin: 0;
    display:block;
    border-style: none;
    border: 1px solid #72a6aa;
  }

  
  @media screen and (min-width: 768px) {

  iframe {
    margin: 0rem 10vw;
    width: 80vw;      
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
      object-fit: cover;
    }
    .ProyectoDetalle + section ul,
    .ProyectoDetalle + section + section ul {
      display: flex;
      flex-direction: row !important;
      justify-content: space-evenly;
      flex-wrap: wrap;
      height: auto;
    }
  }
  /*  */

  header {
    position: relative;
  }
  .Regresar {
    font-weight: 100;
    top: 0.25rem;
    cursor: pointer;
    position: absolute;
    left:1.5rem;
    top: 2rem;
  }
 .Regresar button {
    background-color: #72a6aa;
    border: none;
    color: #fff;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: lighter;
  }
 .Regresar:hover {
    background-color: #72a6aa;
    opacity: 0.9;

    border-radius: 5px;
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
  .RegresaInicio {
    position: absolute;
    left: 9rem;
    top: 1.5rem;
    border: 1px solid #72a6aa;
    border-radius: 5px;
    padding: 0.5rem;
  }
  .RegresaInicio:hover {
    background-color: rgba(114, 166, 170, 0.1);
  }
  .HeaderIframe {
    height: 6rem;
    background-color: rgb(255, 255, 255);
  }
  /*  */
</style>

<!-- <header class="HeaderIframe">
  <a class="Regresar" href="/">
        <button>
          <i class="fa fa-arrow-left" />
          <span>Volver</span>
        </button>
  </a>
  <a class="RegresaInicio" href="/">
    <i class="fa fa-home" />
  </a>
</header> -->

{#if !! url }
  <div class="Contenedor">
    <iframe title="sitios" src={url}></iframe>
  </div>
{/if}
