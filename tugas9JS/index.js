function panggilObject(){
	var data ={
		nama : "Tri Wibowo",
		jekel: "Laki-laki",
		anakke : 3,
		Alamat: "Jl. Camar RT. 001/003 No. 34 Kel. Jatiraden"
	}

	console.log(data.nama);
	console.log(data.jekel);

	for (var x in data){
		console.log(data[x])
	}

}

panggilObject()