var user = prompt("kamen, papir ili makaze?");
var userLower = user.toLowerCase();

var computer = Math.random();
if (computer < 0.33){
	computer = "kamen";
}
else if (computer < 0.66){
	computer = "papir";
}
else{
	computer = "makaze";
}


if (userLower == "kamen"){
	if (computer == "kamen"){
		document.write ('<h1>Nereseno</h1>' + '<img src="http://sherreymeyer.com/wp-content/uploads/2013/04/undecided.jpg?w=300></img>');
	}
	else if (computer == "papir"){
		document.write ('Izgubio si!' + '<img src="https://img.clipartfest.com/a72dc939ee0922cbdc3d6e520ddb466a_smiley20face20thumbs20down-clipart-thumbs-down_600-600.png"></img>');
	}
	else if (computer == "makaze"){
		document.write ('<h1>Cestitam, pobedio si!</h1>' + '<img src="https://openclipart.org/image/2400px/svg_to_png/28688/skotan-Thumbs-up-smiley.png"></img>');
	}
}

else if (userLower == "papir"){
	if (computer == "kamen"){
		document.write ('<h1>Cestitam, pobedio si!</h1>' + '<img src="https://openclipart.org/image/2400px/svg_to_png/28688/skotan-Thumbs-up-smiley.png"></img>');
	}
	else if (computer == "papir"){
		document.write ('<h1>Nereseno</h1>' + '<img src="http://sherreymeyer.com/wp-content/uploads/2013/04/undecided.jpg?w=300></img>');
	}
	else if (computer == "makaze"){
		document.write ('<h1>Izgubio si!</h1>' + '<img src="https://img.clipartfest.com/a72dc939ee0922cbdc3d6e520ddb466a_smiley20face20thumbs20down-clipart-thumbs-down_600-600.png"></img>');
	}
}

else if (userLower == "makaze"){
	if (computer == "kamen"){
		document.write ('<h1>Izgubio si!</h1>' + '<img src="https://img.clipartfest.com/a72dc939ee0922cbdc3d6e520ddb466a_smiley20face20thumbs20down-clipart-thumbs-down_600-600.png"></img>');
	}
	else if (computer == "papir"){
		document.write ('<h1>Cestitam, pobedio si!</h1>' + '<img src="https://openclipart.org/image/2400px/svg_to_png/28688/skotan-Thumbs-up-smiley.png"></img>');
	}
	else if (computer == "makaze"){
		document.write ('<h1>Nereseno</h1>' + '<img src="http://sherreymeyer.com/wp-content/uploads/2013/04/undecided.jpg?w=300></img>');
	}
}
else {

		document.write ("Pogresan unos!");
	
}