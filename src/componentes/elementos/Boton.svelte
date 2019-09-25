<script>

    let clases = "Boton"
    

    export let accion
    export let redondo;

    if( !! redondo ) {
        clases += " Redondo"
    }
    
    if( !! accion && typeof accion != "function" ) {
        accion=accion
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

.Boton.Regresar {
	padding-left: 3rem;
}

</style>

<button class={clases} on:click={ clickManejar }>
    <slot></slot>
</button>