<script>
	export let proyecto
	import { fade } from 'svelte/transition';

//   let extractoTexto = (texto, limite, textoFinal) => {
// 	if (!texto || !limite) return;
// 	var content = texto;
// 	content = content.trim();
// 	content = content.split(' ').slice(0, limite);
// 	content = content.join(' ') + (textoFinal ? textoFinal : '');
// 	//
//   return content;
// };

// let extracto = 24;
// let extracto = [18,32,24,48];
// extracto = extracto[Math.floor(Math.random()*extracto.length)];

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
		transition: 0.35s;
		background: #FFFFFF;
		mix-blend-mode: normal;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
		border-radius: 5px;
	}
	.Tarjeta:hover {
		box-shadow: 1px 5px 17px rgba(0, 0, 0, 0.4);
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
				<!-- {extractoTexto(proyecto.contenido, extracto,'...')}		 -->
			</div>
		</div>
	</a>
</article>

