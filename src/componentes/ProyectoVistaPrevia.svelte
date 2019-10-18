<script>
	export let proyecto
	import { fade } from 'svelte/transition';

</script>

<style>
	article {
		max-width: 320px;
		z-index: 11;
	}

	.Imagen {
		width: 100%;
		height: 12rem;
		object-fit: contain;
	}

	.Texto {
		padding: 1rem;
		font-style: normal;
		color: #000;

	}

	a {
		/* position: absolute; */
		text-decoration: none;
		color: #000;
	}

	.Tarjeta {
		background: #FFFFFF;
		mix-blend-mode: normal;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
		border-radius: 3px;
	}

	.Texto .Titulo {
		font-weight: 500;
		/* font-size: var(--TextoMediano--font-size); */
		line-height: var(--TextoMediano--line-height);
	}

	.Texto .Extracto {
		font-weight: 300;
		font-size: var(--TextoChico--font-size);
		line-height: var(--TextoChico--line-height);
		font-size: 0.9rem;
		
	}

</style>

<article class="Tarjeta" transition:fade>
	<a href={`/proyectos/${proyecto.id}`}>
		
		<img class="Imagen" src={`${proyecto.image.url}`} alt="img"/>
		
		<div class="Texto">

			<h3 class="Titulo">
				{proyecto.titulo}
			</h3>

			<div class="Extracto">
				{proyecto.contenido}		
			</div>
		</div>
	</a>
</article>

