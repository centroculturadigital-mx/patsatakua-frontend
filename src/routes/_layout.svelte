<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  import PieMovil from "../componentes/PieMovil.svelte";

  const { page } = stores();

  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", "UA-153617044-1", {
        page_path: $page.path
      });
    }
  }

  onMount(() => {
    // fondo particulas a quedarse atras
    let fondoParticulas = document.querySelector("#particles-js");
    fondoParticulas.style.zIndex = -1;
  });
</script>

<style>
  main {
    position: relative;
  }
  #FondoParticulas {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    margin-top: 0;
    width: 100vw;
    z-index: -1;
  }
</style>

<main>

  <div id="FondoParticulas" />

  <slot />

</main>

<PieMovil />
