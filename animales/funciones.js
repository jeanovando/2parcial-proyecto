var counter=1;
setInterval(fuction(){
	document.getElementById('radio'+ counter).checked=true;
	counter++;
	if(counter > 4){

	}
},5000);