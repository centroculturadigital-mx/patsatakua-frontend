<style>
	article {
		max-width: 320px;
	}

	.Imagen {
		width: 100%;
		height: 12rem;
		object-fit: cover;
	}

	.Texto {
		padding: 1rem;
		/* font-family: Fira Sans; */
		font-style: normal;
		color: #000;

	}

	a {
		text-decoration: none;
		color: #000;
	}

	.Tarjeta {
		background: #FFFFFF;
		mix-blend-mode: normal;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
		border-radius: 3px;
	}

	.Texto > .Titulo {
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}

	.Texto > .Extracto {
		font-weight: 300;
		font-size: 12px;
		line-height: 14px;
	}

</style>

<article class="Tarjeta">
	<a href="/proyectos/666">
		
		<img class="Imagen" src={`http://unsplash.it/300/${100+Math.floor(Math.random()*500)}`} alt="img"/>
		
		<div class="Texto">

			<h2 class="Titulo">
				Veniam elit cupidatat est irure Lorem elit. 
			</h2>

			<div class="Extracto">
				<p>
					Eiusmod elit ut elit aute elit.
				</p>
				<p>
					Lorem aliqua minim nostrud nisi consequat dolore magna.
				</p>
				<p>
					Voluptate irure consectetur ullamco velit consectetur occaecat esse irure eu laborum sint.
				</p>
				<p>
					Commodo nisi velit exercitation ad.
				</p>
				<p>
					Lorem culpa do laborum et.
				</p>			
			</div>
		</div>
	</a>
</article>

