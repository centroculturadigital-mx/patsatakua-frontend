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

  .Logotipo {
    padding: 0;
    width: 12rem;
    height: 100%;
    object-fit: contain;
    object-position: 0 0;
  }

  /* .contenedor-principal {
	} */
  .Titulo {
    color: #72a6aa;
    font-weight: 500;
    font-size: 28px;
    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  }

  .Lateral {
    color: #000;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .LateralContenido {
    max-width: 260px;
  }

  .Introduccion {
    font-weight: 200;
    font-size: 14px;
    line-height: 17px;
  }

  .Subtitulo {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }

  .Creditos {
    font-weight: 200;
    font-size: 0.8rem;
    line-height: 14px;
    color: #454344;
    text-align: center;
  }

  .contenedor-principal {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    padding-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    .Lista,
    .Lista ul {
      height: auto;
      padding-bottom: 5%;
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

          <h4 class="Subtitulo" transition:fade>
            Purépecha (P’urhépecha) que quiere decir, “en lo que se guarda”
          </h4>
          <p class="Subtitulo" transition:fade>
            Cómo se pronuncia ‘patsatakua’:/pa.tsá.ta.kwa/
          </p>
        </header>

        <section class="Introduccion" transition:fade>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            labore molestias dicta ex veritatis accusantium ullam impedit
            praesentium, nulla, nesciunt vero esse quo. Dolores fugiat,
            distinctio expedita iste debitis excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            nihil aut pariatur voluptatum maiores necessitatibus explicabo totam
            vero ad sit ex, eligendi ipsum, dignissimos saepe consequatur error
            officiis optio accusantium.
          </p>

          <!-- <img class="Logotipo" src="http://fakeimg.pl/244x80?text=logotipos" alt="img" /> -->

        </section>

        <section>
          <h5 class="Creditos">Créditos proyectos</h5>
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
