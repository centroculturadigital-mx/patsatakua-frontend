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
  // // import particlesData from "../datos/particles";

  // // let Particles;
  // onMount(async () => {
  // 	if( typeof window != "undefined") {

  // 		// const { default: Particles } = await import(`../../node_modules/particlesjs/src/particles.js`);
  // 		// Particles = await import("../../node_modules/particles.js/particles.js");
  // 		// Particles = Particles;

  // 		// console.log(Particles)

  // 	}
  // 	// Particles.init({
  // 	// 	selector: '#FondoParticulas',
  // 	// })

  // })
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700&display=swap");

  body {
    font-family: "Fira San", sans-serif;
  }
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
