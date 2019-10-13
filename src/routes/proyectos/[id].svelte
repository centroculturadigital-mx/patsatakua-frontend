
<script context="module">
	export async function preload(page, session) {
        const { id } = page.params
        console.log('id', id)
        return { id }
	}
</script>
<script>

    import { onMount } from 'svelte'

	import Pie from "../../componentes/Pie.svelte";
	import Boton from "../../componentes/elementos/Boton.svelte";
    import ProyectoVistaPrevia from "../../componentes/ProyectoVistaPrevia.svelte";
    //import Fa from "../../../../patsatakua-frontend/node_modules/svelte-fa/dist/svelte-fa.mjs"
    export let id

	let proyectosModule
    $: proyecto = proyectosModule && proyectosModule.default ?
        proyectosModule.default.find(p => p.id === id) : {} 

	onMount(async () => {
			proyectosModule = await import('../../datos/proyectos.json')
			console.log(proyectosModule, id)
	})
</script>

<style>
    @media screen and (min-width:768px) {

        .ProyectoDetalle {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background: #FFFFFF;
            border: 0.5px solid #72A6AA;
            box-sizing: border-box;  
            max-width: 800px;
            padding: 3%;  
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
        padding: 0;
    }
    
    .contenedor-1 header {
        position: relative;
    }

    .contenedor-1 .Regresar {
        /*margin-left: -4rem;*/
        font-weight: 100;
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

    .Subtitulo {
        text-align: center;
    }

    .Titulo {
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
    }

    .Contenido {
        width: 80%;
        font-weight: 200;
        font-size: 16px;
        line-height: 22px;
        left: 15px;
       /* margin: 25px;*/

    }
     
    .Proyecto {
       /* left: 23px;*/
    }

    ul {
        margin-bottom: 30px;
        margin-top: 25px;
    }
    
    section {
        margin: 0;
    }

    .SubProyectos {
        margin-top: 3em;
    }

    .Similares {
        margin-top: 3em;
    }

    .fa {
    font-family: "Font Awesome 5 Free";
    font-weight: 200;
    font-style: normal;
    }

     .fa-home {
    font-family: "Font Awesome 5 Free";
    font-size: 2rem;
    font-style: normal;
    color:#72A6AA;
    }



</style>

<header>
    <a href="/">
      <i class="fa fa-home"></i>                               
   </a>
</header>
<article class="ProyectoDetalle ancho_maximo">
    <div class="contenedor-1">  
        <header class="Proyecto">
            <a class="Regresar" href="/">
                <Boton>
                    <i class="fa fa-arrow-left"></i>
                    <span>
                        Volver
                    </span>
                </Boton>
            </a>
            <h1 class="Titulo">
                {proyecto.titulo}
            </h1>
        </header>

        <section class="Contenido">
            {proyecto.contenido}
        </section>
    </div>

    <div class="contenedor-2">
    
    	<img class="Imagen" src={`http://unsplash.it/300/${100+Math.floor(Math.random()*500)}`} alt="img"/>
        
        <footer>            
            <Boton redondo>
                Conocer Proyecto
            </Boton>
        </footer>
    </div>


</article>

<!-- <section class="SubProyectos">
    
    <h3 class="Subtitulo">Otros proyectos del proyecto</h3>
    <ul>
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
    </ul>
</section>

<section class="Similares">
    <h3 class="Subtitulo">Proyectos similares</h3>
    <ul>
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
        <ProyectoVistaPrevia/>			
    </ul>
</section> -->

<Pie/>
