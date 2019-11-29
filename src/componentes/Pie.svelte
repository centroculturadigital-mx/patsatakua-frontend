<script>
  import { onMount } from "svelte";
  let logocultura = "cultura.svg";
  let logoccd = "ccd.svg";
  let logoinali = "inali.png";

  const textoFooter =
    "Los lenguajes de la tecnología suelen estar homogeneizados y marcados por las agendas del norte global y del mercado. Estos proyectos descentralizan el uso de las herramientas tecnológicas desde sus concepciones propias, representan la diversidad lingüística cultural y crean un nuevo mapa de términos, vocablos, etiquetas, categorías y reescrituras desde alternativas y apropiaciones.";
  let footer;

  onMount(async () => {
    
    setTimeout(() => {
        footer.style.opacity = 1;
    });
  
  });
</script>

<style>
  .Pie {
    transition: 1s;
    width: 100%;
    /*padding: 2rem;*/
    background-color: #f0f0f0;
    display: none;
    grid-template-columns: 70% 30%;
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    .Pie {
      display: grid;
    }
  }

  .Texto {
    font-size: 0.8rem;
    padding: 2rem;
    border-right-style: solid;
    border-right-color: #c4c4c4;
    border-right-width: 1px;
  }

  .Logos {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  .Logos img {
    max-width: 140px;
  }
</style>

<footer class="Pie" bind:this={footer}>
  <section class="Texto">
    <p>{textoFooter}</p>

  </section>

  <section class="Logos">
    <ul>
      <img src={logocultura} alt=" cultura" />
      <img src={logoccd} alt="ccd" />
    </ul>
  </section>
</footer>
