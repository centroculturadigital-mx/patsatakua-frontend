<style>
    @media screen and (min-width:768px) {

        .ProyectoDetalle {
            display: grid;
            grid-template-columns: 1fr 1fr;    
        }

        .ProyectoDetalle .Imagen {
            width: 100%;
            height: 20rem;
            object-fit: cover;
        }

    }

    .ProyectoDetalle .contenedor-1 {
        padding: 0 2rem;
    }
    
    .ProyectoDetalle .contenedor-1 header {
        position: relative;
    }

    .ProyectoDetalle .contenedor-1 .Boton.Regresar {
        margin-left: -3rem;
    }
    
    .ProyectoDetalle .contenedor-2 footer {
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


<article class="ProyectoDetalle contenedor-ancho_maximo">
    <div class="contenedor-1">
        <header>
            <a href="/">
                <button class="Boton Regresar" >
                    Regresar
                </button>
            </a>
            <h1 class="Titulo">
                Proyecto
            </h1>
        </header>

        <div class="Contenido">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque velit architecto ab illum dignissimos earum, quos eaque asperiores tempore consequuntur? Quia voluptatem exercitationem quos, corrupti nihil modi optio amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque velit architecto ab illum dignissimos earum, quos eaque asperiores tempore consequuntur? Quia voluptatem exercitationem quos, corrupti nihil modi optio amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque velit architecto ab illum dignissimos earum, quos eaque asperiores tempore consequuntur? Quia voluptatem exercitationem quos, corrupti nihil modi optio amet.</p>
        </div>
    </div>

    <div class="contenedor-2">
    
        <img class="Imagen" src="http://fakeimg.pl/367x347?text=img" alt="img"/>
        
        <footer>            
            <button class="Boton Redondo">
                Conocer Proyecto
            </button>
        </footer>
    </div>


</article>

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