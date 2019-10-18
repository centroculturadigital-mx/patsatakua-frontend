<script>
import { fade } from "svelte/transition"
    let logocultura = 'cultura.svg';
    let logoccd = 'ccd.svg';
    let logoinali = 'inali.png';
   	
</script>

<style>

.Pie {
    width: 100%;
    /*padding: 2rem;*/
    background-color: #F0F0F0;
    display: grid;
    grid-template-columns: 70% 30%;    
}

.Texto  {
    
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

<footer class="Pie" transition:fade>
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