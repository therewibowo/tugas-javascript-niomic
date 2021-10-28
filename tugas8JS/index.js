function panggilObjects(){
	var Laptop = {
		nama: 'Asus',
		Ram : '8GB',
		Warna: 'Hitam',
		qty: 1
	}
	Laptop.hdd ='500GB'
	Laptop.harga = 180000
	console.log('Merk', Laptop.nama)
	console.log('Memiliki Ram' , Laptop.Ram)
	console.log('Harga Laptop adalah', Laptop.harga)
	console.log('Hdd Nya : ', Laptop.hdd)
}
panggilObjects()