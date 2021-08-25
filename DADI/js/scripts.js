function casuale() {
	var num1=Math.round(Math.random()*5+1);
	var num2=Math.round(Math.random()*5+1);		
	document.getElementById("numero1").innerHTML ="Hai ottenuto " + num1;
	document.getElementById("numero2").innerHTML ="Il computer ha ottenuto" + num2;
	if(num1 > num2){
        alert("Hai vinto");
    }else if(num1 < num2){
        alert("Hai perso");
    }else{
        alert("Pareggio, tira ancora")
    }
}
