<script>

    let clases = "Boton"
    

    export let accion
    export let redondo;

    if( !! redondo ) {
        clases += " Redondo"
    }



    const clickManejar = (e) => {
        
        if (!! accion && typeof accion == 'function') {    
            accion(e)
        }

    }

</script>

<style>


.Boton {
	background-color: #72A6AA;
	padding-left: 3rem;
	border: none;
	padding: 0.5rem 1rem;
}

.Boton.Redondo {
	border-radius: 2rem;
}

</style>

<button class={clases} on:click={ clickManejar }>
    <slot></slot>
</button>