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
    	width: 18rem;
    	height: 100%;
    	object-fit: contain;
    	object-position: 0 0;
	}

	

	/* .contenedor-principal {
	} */

	

	.Lateral {
		font-family: 'Fira Sans', sans-serif;
		height: 100vh;
		/* max-width: 320px; */
        background-color: rgb(198, 198, 198);
		/* height: calc( 100% - 2rem ); */
		padding: 2rem;
	}

	/* article {
		padding: 2em;
		margin: 1em;
		flex-direction: column;
  		flex-wrap: wrap;
  		display: flex;
  		height: 100vh;
	} */


	.contenedor-principal {
		height: 100vh;
		overflow-y: auto;
		overflow-x: hidden;
		padding: 0;
	}

	.contenedor-principal .Pie {
		width: 100%;
		padding: 4rem;
		background-color: #ccc;
		
	}

	@media screen and (min-width: 768px ) {
	
		.Lista, .Lista ul {
			height: auto;
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
		</header>

		<section class="Introduccion">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore molestias dicta ex veritatis accusantium ullam impedit praesentium, nulla, nesciunt vero esse quo. Dolores fugiat, distinctio expedita iste debitis excepturi.</p>
		
			<img class="Logotipo" src="http://fakeimg.pl/244x80?text=logo" alt="img" />

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
			<div class="Temporal">
				Pie
			</div>
		</footer>
	</div>

</section>