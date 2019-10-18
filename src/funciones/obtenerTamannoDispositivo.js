export default (width) => {
	
	let tamanno

	if( typeof window != "undefined" ) {

		if(width >= 992){
			tamanno="desktop"	
		}
		if(width < 992){
			tamanno="tablet"	
		}
		if(width < 768){
			tamanno="movil"	
		}

	}

	return tamanno
}