<script>
import { onMount } from 'svelte' 

onMount(async () => {

	// const { default: Particles } = await import(`../../node_modules/particlesjs/src/particles.js`);	
	const { default: Particles } = await import(`../../node_modules/particlesjs/dist/particles.js`);	
	// console.log(Particles)

	// Particles.init({
	// 	selector: '#FondoParticulas',
	// })

})


</script>

<style>

	@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700&display=swap');
	
	body {
		font-family: 'Fira San', sans-serif;
	}
	main {
		position: relative;
	}
	#FondoParticulas {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		margin-top: 0;
		width: 100vw;
		z-index: -1;
	}

</style>

<main>

	<div id="FondoParticulas"></div>

	<slot></slot>

</main>


