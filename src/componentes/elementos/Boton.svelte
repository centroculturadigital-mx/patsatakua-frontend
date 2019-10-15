<script>
  let clases = "Boton";

  export let accion;
  export let redondo;

  if (!!redondo) {
    clases += " Redondo";
  }

  const clickManejar = e => {
    if (!!accion && typeof accion == "function") {
      accion(e);
    }
  };
</script>

<style>
  .Boton {
    font-weight: 200;
    padding-left: 3rem;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    color: white;
    background-color: #72a6aa;
  }
  .Boton:hover {
    opacity: 0.9;
  }
  .Boton.Redondo {
    border-radius: 2rem;
    font-weight: 200;
  }
</style>

<button class={clases} on:click={clickManejar}>
  <slot />
</button>
