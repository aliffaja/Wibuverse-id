setInterval(jamdigital, 1000);
		function jamdigital() {
	       var time = new Date();
	       var jam = time.getHours();
	       var menit = time.getMinutes();
	       var detik = time.getSeconds();
	       
	       document.getElementById('clock').innerHTML = jam + ":" + menit + ":" + detik;
	       
}