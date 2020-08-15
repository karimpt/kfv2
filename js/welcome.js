
function rand(min,max) // min and max included
{return Math.round(Math.floor(Math.random()*(Math.round(max)-Math.round(min)+1)+Math.round(min)));}

function welcome(){
	var fullWidth = window.innerWidth;
	var fullHeight = window.innerHeight;    

	var saud = ["Ahoj!","হ্যালো", "Здраво!", "Olá!","Γεια σας!", "您好", "Ciao!",  "여보세요", "नमस्ते", 		
		"!שלום", "こんにちは!", "Bonjour!","Hola","안녕하십니까","Sastipe!","བཀྲ་ཤིས་བདེ་ལེགས",
		"!مرحبا", 
		"Wilkommen!", 	
		"Halló",	
		"Sillaw",
		"Labas",
		"Assalamualaikum",
		"Goddag",	
		"Здра́вствуйте!",
		"Dobry den",
		"Hallå",	
		"Merhaba",	
		"Hallo!", 
		"Szervusz!", "Chào anh"];
	for (var i = 0; i < saud.length; i++){
		var elem = document.createElement("ul"); //descobrir como prevenir adicionar tantas divs, possivel?
		elem.class="sclass"+i;
		elem.id="sid"+i;
		elem.style.position = "absolute";
		elem.style.top = rand(fullHeight*0.25,fullHeight*0.7) + "px";
	    elem.style.right = rand(fullWidth*0.1,fullWidth*0.8) + "px";
	    elem.style.fontSize=rand(145,425)+"%";
	    elem.style.fontWeight=rand(145,425)+"px";
	    elem.textContent = saud[i];	  
		document.getElementById('welcome').appendChild(elem);    //adiciona o item na div especifica
		}

}