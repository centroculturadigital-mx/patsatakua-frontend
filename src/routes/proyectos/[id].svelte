<script>
	import Boton from "../../componentes/elementos/Boton.svelte";
	import ProyectoVistaPrevia from "../../componentes/ProyectoVistaPrevia.svelte";

</script>

<style>
    @media screen and (min-width:768px) {

        .ProyectoDetalle {
            display: grid;
            grid-template-columns: 1fr 1fr;    
        }

        .Imagen {
            width: 100%;
            height: 20rem;
            object-fit: cover;
        }

        .ProyectoDetalle + section ul,
        .ProyectoDetalle + section + section ul {
            display: flex;
            flex-direction: row !important;
            justify-content: space-evenly;
            flex-wrap: wrap;
            height: auto;
        }

    }

    .contenedor-1 {
        padding: 0 2rem;
    }
    
    .contenedor-1 header {
        position: relative;
    }

    .contenedor-1 .Regresar {
        margin-left: -3rem;
    }
    
    .contenedor-2 footer {
        margin-top: 1rem;
    }

    footer div {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    }
    footer article {
        width: auto;
        padding: 3rem;
    }
</style>


<article class="ProyectoDetalle ancho_maximo">
    <div class="contenedor-1">
        <header>
            <a class="Regresar" href="/">
                <Boton>
                    Regresar
                </Boton>
            </a>
            <h1 class="Titulo">
                Nombre de Proyecto
            </h1>
        </header>

        <section class="Contenido">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque velit architecto ab illum dignissimos earum, quos eaque asperiores tempore consequuntur? Quia voluptatem exercitationem quos, corrupti nihil modi optio amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque velit architecto ab illum dignissimos earum, quos eaque asperiores tempore consequuntur? Quia voluptatem exercitationem quos, corrupti nihil modi optio amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque velit architecto ab illum dignissimos earum, quos eaque asperiores tempore consequuntur? Quia voluptatem exercitationem quos, corrupti nihil modi optio amet.</p>
        </section>
    </div>

    <div class="contenedor-2">
    
        <img class="Imagen" src="http://fakeimg.pl/367x347?text=img" alt="img"/>
        
        <footer>            
            <Boton redondo>
                Conocer Proyecto
            </Boton>
        </footer>
    </div>


</article>

<section>
    
    <h3>Otros proyectos de Nombre de proyecto</h3>
    <ul>
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
    </ul>
</section>

<section>
    <h3>Proyectos similares</h3>
    <ul>
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
    </ul>
</section>

<footer>
    <div class="temporal">
        <article>
            otra cosa
        </article>
        <article>
            otra cosa
        </article>
        <article>
            otra cosa
        </article>
        <article>
            otra cosa
        </article>
        <article>
            otra cosa
  
        </article>
</footer>