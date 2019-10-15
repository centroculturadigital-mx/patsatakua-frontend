<script>
  import ProyectoVistaPrevia from "./ProyectoVistaPrevia.svelte";
  import Carousel from "@centroculturadigital-mx/svelte-carousel";
  import {
    ChevronLeftIcon,
    ChevronRightIcon
  } from "../../node_modules/svelte-feather-icons/src/index.js";

  export let id;
  export let proyecto;
</script>

<style>
  section {
    background-color: transparent;
  }
  section h2 {
    text-align: center;
  }
  #ProyectosSimilares {
  }
</style>

<!--  -->

<!-- <section>

  <h2>ProyectosSimilares</h2>

  <div id="ProyectosSimilares">

    <Carousel perPage={{ 800: 1 }} autoplay="2500" loop>

      <span class="Control" slot="left-control">
        <ChevronLeftIcon />
      </span>

      {#each proyecto as p}
        <ProyectoVistaPrevia />
      {/each}

      <span class="Control" slot="right-control">
        <ChevronRightIcon />
      </span>

    </Carousel>

  </div>

</section> -->
