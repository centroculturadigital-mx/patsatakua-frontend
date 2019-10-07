<script>

	import ProyectoVistaPrevia from "../componentes/ProyectoVistaPrevia.svelte";

</script>


<style>

	@media screen and (min-width: 768px ) {
		
		.Inicio {
			min-height: 100%;
			display: grid;
			grid-template-columns: 1fr 2fr;
		}

	}

		
	.Logotipo {
    	padding: 0;
    	width: 12rem;
    	height: 100%;
    	object-fit: contain;
    	object-position: 0 0;
	}

	/* .contenedor-principal {
	} */
	.Titulo {
		color: #72A6AA;
		font-weight: 500;
		font-size: 28px;

	}
	
	.Lateral {
		color: #000;
		height: 100vh;
		max-width: 260px;
        background-color: rgb(255, 255, 255);
		padding: 2rem;
	}

	.Introduccion {
		font-weight: 200;
		font-size: 14px;
		line-height: 17px;
	}

	.Subtitulo {
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
	}

	.contenedor-principal {
		height: 100vh;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0;
	}


	.contenedor-principal .Pie {
		width: 100%;
		/*padding: 2rem;*/
		background-color: #F0F0F0;
		display: grid;
		grid-template-columns: 70% 30%;
		
		
	}
	
	.TextoPie  {
		
		font-size: 0.8rem;
		padding: 2rem;
		border-right-style: solid;
		border-right-color: #c4c4c4;
		border-right-width: 1px;
	}

	.LogosPie{
		padding: 1rem;
		text-align: center;	
		}
	

	@media screen and (min-width: 768px ) {
	
		.Lista, .Lista ul {
			height: auto;
			padding-bottom: 5%;
		}

		.Lista ul {
			padding: 0 1rem;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 2rem;
		}

	}

	@media screen and (min-width: 1200px ){
		
		.Lista ul {
			grid-template-columns: 1fr 1fr 1fr;
		}

	}

</style>

	<svelte:head>
		<title>Patsatakua</title>
	</svelte:head>


<section class="Inicio">

	<div class="Lateral">
		<header>
			<h1 class="Titulo">
				Patsatakua
			</h1>

			<h4 class="Subtitulo">
				Purépecha (P’urhépecha) que quiere decir, “en lo que se guarda”
			</h4>
		</header>


		<section class="Introduccion">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore molestias dicta ex veritatis accusantium ullam impedit praesentium, nulla, nesciunt vero esse quo. Dolores fugiat, distinctio expedita iste debitis excepturi.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nihil aut pariatur voluptatum maiores necessitatibus explicabo totam vero ad sit ex, eligendi ipsum, dignissimos saepe consequatur error officiis optio accusantium.
			</p>
		
			<!-- <img class="Logotipo" src="http://fakeimg.pl/244x80?text=logotipos" alt="img" /> -->

		</section>
	</div>

	<div class="contenedor-principal">
		<section class="Lista">
			<ul>
				<ProyectoVistaPrevia/>			
				<ProyectoVistaPrevia/>
				<ProyectoVistaPrevia/>
				<ProyectoVistaPrevia/>
				<ProyectoVistaPrevia/>
				
			</ul>
		</section>


	<footer class="Pie">
			<section class="TextoPie">
				Encontramos
que esta palabra nos acerca a la idea principal de este conjunto de proyectos e iniciativas que,
desde las comunidades de hablantes, entretejen lengua y tecnología. Esta idea de ser un
espacio en el que se guarda se aproxima a la idea de un repositorio en esta materialidad
llamada internet.
<br>
<br>
Lo que aquí presentamos es un conjunto de iniciativas que desde la fuerza de diversas
comunidades de hablantes de lenguas indígenas, ubicados en diversos puntos del país, buscan
reescribir las tecnologías. 
			</section>

			<section class="LogosPie">
			<ul>
			<img src="https://source.unsplash.com/user/erondu/140x70" alt="">
			<img src="https://source.unsplash.com/user/erondu/140x70" alt="">
			<img src="https://source.unsplash.com/user/erondu/140x70" alt="">
			</ul>
			</section>
		</footer>
	</div>

</section>