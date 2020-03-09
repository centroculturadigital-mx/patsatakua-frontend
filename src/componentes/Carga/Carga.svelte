<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .cargando {
    background-color: #fff;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
  }
  .cargando p {
    margin: 0;
    text-align: center;
    font-size: 1rem;
    padding: 0 1rem;
  }
</style>

<section class="cargando" transition:fade>
  <div>
    <img src="ccd.svg" alt="Centro Cultura Digital México" />
    <p>Cargando ...</p>
  </div>
</section>
