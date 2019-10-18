<script>
import { fade } from "svelte/transition"
    let logocultura = 'cultura.svg';
    let logoccd = 'ccd.svg';

import Carousel from "@centroculturadigital-mx/svelte-carousel";
  import {
    ChevronLeftIcon,
    ChevronRightIcon
  } from "../../node_modules/svelte-feather-icons/src/index.js";


  const datos =  {
    titulo: "Patsatakua",
    tituloFonetico: "/pa.tsá.ta.kwa/",
    significado: "Patratakua en purépecha (P’urhépecha) quiere decir, /en lo que seguarda/" ,
    curatorial: "Patsatakua en purépecha (P’urhépecha) quiere decir: “en lo que se guarda”. Bajo esta palabra-repositorio se reúnen once proyectos de hablantes de lenguas indígenas de diversas zonas del país que abordan de forma particular el uso de las herramientas tecnológicas. Estos proyectos representan la diversidad lingüística cultural y ofrecen un nuevo mapa de términos y etiquetas. Del uso de plataformas precreadas a la programación desde cero; de prácticas experimentales de escritura a aplicaciones para aprender una lengua, de espacios de memoria visual y oral a la documentación de la evolución del registro gráfico, de la preservación de la lengua y el deseo de mantenerla como bien común ante situaciones migratorias de sus hablantes a la invitación al encuentro con esos otros y otras que desean ampliar la idea sostenida por diversos activistas de las lenguas: entender a nuestro como un territorio multilingüe." ,
    sliderProyectos: [
        "Ajuujkjaaky",
        "Biblioteca de Investigacion Juan de Cordoba",
        "Colmix",
        "Kumoontun",
        "Lengua y Cultura Triqui",
        "Ma Tiksalokan Nawatl",
        "Museo Virtual del Zapoteco",
        "Red de Activismo Digital de Lenguas Indigenas",
        "Ticha",
        "Turix",
    ]
 }

</script>

<style>

.Pie {
    width: 100%;
    /*padding: 2rem;*/
    background-color: #F0F0F0; 
    padding: 1rem;    
}

.Texto  {
    font-size: 0.8rem;
    padding: 2rem;
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

  .LogosProyectos :global( .carousel ),
  .LogosProyectos :global( .slides )
  {
    height: 5rem;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  .LogosProyectos :global( .slides > * > * )
  {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .LogosProyectos :global( .slides > * > * > * )
  {
    box-sizing: border-box;
    padding: 0 3rem; 
  }

  .LogoProyecto{
    font-size: 0.9rem;
    text-align: center;
    color: rgb(121, 121, 121);
    font-weight: 400;
   
  }
  .LogoProyecto > .Titulo {
    margin: 0;
  }
  .LogoProyecto :global(.slides) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
  }
 .Creditos {
    line-height: 14px;
    color: #454344;
    text-align: center;
    margin-top: 2rem;
    font-weight: 400;
  }

</style>

<footer class="Pie" transition:fade>
    
        <section class="ProyectosParticipantes" transition:fade>
          <h4 class="Creditos">
            Proyectos participantes
          </h4>

          <div class="LogosProyectos">

            <Carousel perPage={{ 800:1 }} autoplay='2500' loop>

              <span class="Control" slot="left-control">
                <ChevronLeftIcon />
              </span>

              {#each datos.sliderProyectos as proyecto}
                <div class="LogoProyecto">
                  <h4 class="Titulo">
                    {proyecto}
                  </h4>
                </div>
              {/each}
              <span class="Control" slot="right-control">
                <ChevronRightIcon />
              </span>

            </Carousel>

            <!--  -->
          </div>

    <section class="Texto">
        <p>
           Los lenguajes de la tecnología suelen estar homogeneizados y marcados por las agendas del norte global y del mercado. Estos proyectos descentralizan el uso de las herramientas tecnológicas desde sus concepciones propias, representan la diversidad lingüística cultural y crean un nuevo mapa de términos, vocablos, etiquetas, categorías y reescrituras desde alternativas y apropiaciones.
        </p>
    
    </section>

    <section class="Logos">
        <ul>
            <img src="{logocultura}"  alt=" cultura">
            <img src="{logoccd}"  alt="ccd">  
        </ul>
    </section>
</footer>