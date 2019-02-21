var turn = 0; //1 = X turn, 2 = O turn, 0 = null

function startMatch(){
	setTurn(1);

	console.log("Partida Iniciada");
}
function isMatchStarted(){
	return turn!=0?true:false;
}
function nextTurn(){
	if(getCurrentTurn() == 'X'){
		setTurn(2);
		console.log("Vez de O");
	}else if (getCurrentTurn()=='○') {
		setTurn(1);
		console.log("Vez de X");
	}else{
		console.log("Partida não iniciada!");
	}
}

function setTurn(x){
	turn = x;
}

function getCurrentTurn(){
	if(turn == 1){
		return "X";
	}else if(turn == 2){
		return "○";
	}else{
		return " ";
	}
}

function finishMatch(){
	turn = 0;

}