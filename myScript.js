var userName;

function periodicHello(){
	console.log(userName);
}

$(document).ready(function(){ 
	console.log("Hello World");
	var userMessage = prompt("Whats your name");
	userName = userMessage;
	d3.select("#big").text(d3.select("#big").text() + userName);
})