<script>
  import { fade } from "svelte/transition";
</script>

<style>
  .loading {
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
  .loading p {
    margin: 0;
    text-align: center;
  }
</style>

<section class="loading" transition:fade>
  <div>
    <img src="inali.png" alt="INALI" />
    <p>Cargando ...</p>
  </div>
</section>
