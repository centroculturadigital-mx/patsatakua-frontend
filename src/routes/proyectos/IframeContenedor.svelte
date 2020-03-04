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
    /* position: absolute;*/
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 80vh;
    margin: 0;
    display: block;
    border-style: none;
    border: 1px solid #72a6aa;
  }

  @media screen and (min-width: 768px) {
    iframe {
      margin: 0rem auto;
      width: 90vw;
    }
  }
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

{#if !!url}
  <div class="Contenedor">
    <iframe title="sitios" src={url} />
  </div>
{/if}
