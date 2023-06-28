let op1 = 0;
let op2 = 0;
let op3 = 0;
let op4 = 0;
let op5 = 0;
let estado = "block";
let contador = 0;
let negrita = "hsl(237, 12%, 33%)";
let we ="700";
let giro="0";

function seleccionar(opcion){
	
	

	if (opcion =="1") {
		if (op1==0) {
			op1=1;estado = "block"; 
			negrita="hsl(238, 29%, 16%)";
			we ="700";giro="180"}
		else{op1=0;estado = "none";
		negrita="hsl(237, 12%, 33%)";we ="400";giro="0"}
	}

	if (opcion =="2") {
		if (op2==0) {op2=1;estado = "block";negrita="hsl(238, 29%, 16%)";
			we ="700";giro="180"}
		else{op2=0;estado = "none";negrita="hsl(237, 12%, 33%)";we ="400";giro="0"}
	}

	if (opcion =="3") {
		if (op3==0) {op3=1;estado = "block";negrita="hsl(238, 29%, 16%)";
			we ="700";giro="180"}
		else{op3=0;estado = "none";negrita="hsl(237, 12%, 33%)";we ="400";giro="0"}
	}

	if (opcion =="4") {
		if (op4==0) {op4=1;estado = "block";negrita="hsl(238, 29%, 16%)";
			we ="700";giro="180"}
		else{op4=0;estado = "none";negrita="hsl(237, 12%, 33%)";we ="400";giro="0"}
	}

	if (opcion =="5") {
		if (op5==0) {op5=1;estado = "block";negrita="hsl(238, 29%, 16%)";
			we ="700";giro="180"}
		else{op5=0;estado = "none";negrita="hsl(237, 12%, 33%)";we ="400";giro="0"}
	}


	

	let opcion_f= "fila_"+opcion;
	let opnegr = "t_"+opcion;
	let idimg="ico"+opcion;

	document.getElementById(opcion_f).style.display= estado;
	document.getElementById(opcion).style.color= negrita;
	document.getElementById(opcion).style.fontWeight= we;

	

	document.getElementById(idimg).style.webkitTransform="rotate("+giro+"deg)";
	document.getElementById(idimg).style.msTransform="rotate("+giro+"deg)";
	document.getElementById(idimg).style.transform="rotate("+giro+"deg)";

}

function mover(){
	document.getElementById("idcajita").style.marginLeft= "-120px";
}

function regresar(){
	document.getElementById("idcajita").style.marginLeft= "-92px";
}