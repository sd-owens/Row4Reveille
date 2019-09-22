var deadline = new Date("Jan 18, 2020 08:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var t = deadline - now;
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((t % (1000 * 60)) / 1000);
	document.getElementById("countdown").innerHTML =
		days +
		" Days " +
		hours +
		" Hours " +
		minutes +
		" Minutes " +
		seconds +
		" Seconds ";
	if (t < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "IT'S ROW TIME!";
	}
}, 1000);
