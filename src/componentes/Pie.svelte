<script>
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
    padding: 1rem;
    text-align: center;	
    display: grid;
    grid-template-columns: 1fr 1fr ;
}

.Logos img {
    max-width: 140px;
   
}

</style>

<footer class="Pie">
    <section class="Texto">
        <p>
            Encontramos que esta palabra nos acerca a la idea principal de este conjunto de proyectos e iniciativas que,
            desde las comunidades de hablantes, entretejen lengua y tecnología. Esta idea de ser un
            espacio en el que se guarda se aproxima a la idea de un repositorio en esta materialidad
            llamada internet.
        </p>
        <p>
            Lo que aquí presentamos es un conjunto de iniciativas que desde la fuerza de diversas
            comunidades de hablantes de lenguas indígenas, ubicados en diversos puntos del país, buscan
            reescribir las tecnologías. 
        </p>
    </section>

    <section class="Logos">
        <ul>
            <img src="{logocultura}"  alt=" cultura">
            <img src="{logoccd}"  alt="ccd">  
            <img src="{logoinali}"  alt="ccd">  
        </ul>
    </section>
</footer>