var x = "warning";
var o = "success";

var board = [0,0,0,0,0,0,0,0,0];

function markBoardPosition(pos, value){
	if(getPositionValue(pos) == 0){
		board[pos] = value;
		return true;
	}else{
		return false;
	}
}
function getPlayerColor(player){
	if(player=="x"){
		return x;
	}else if(player=="○"){
		return o;
	}
}
function isOccupied(index){
	if(index<9){
		return board[index]==0?false:true;
	}
}

function resetBoard(){
	for (var i = board.length - 1; i >= 0; i--) {
		board[i] = 0;
	}
}

function getPositionValue(pos){
	return board[pos];
}

function hasAWinner(){
	//Search by row
	for(var i = 0;i < 3; i++){
		if((getPositionValue(i)==getPositionValue(i+1)) && (getPositionValue(i)==getPositionValue(i+2)) && isOccupied(i))
		{
			return getPositionValue(i);
			break;
		}

		else if((getPositionValue(i+3)==getPositionValue(i+4)) && (getPositionValue(i+3)==getPositionValue(i+5)) && isOccupied(i+3) )
		{
			return getPositionValue(i+3);
			break;
		}

		else if((getPositionValue(i+6)==getPositionValue(i+7)) && (getPositionValue(i+6)==getPositionValue(i+8)) && isOccupied(i+6))
		{
			return getPositionValue(i+6);
			break;
		}
		//Check column
		else if((getPositionValue(i)==getPositionValue(i+3)) && (getPositionValue(i)==getPositionValue(i+6)) && isOccupied(i))
		{
			return getPositionValue(i);
			break;
		}
		else if((getPositionValue(i)==getPositionValue(i+3)) && (getPositionValue(i)==getPositionValue(i+6)) && isOccupied(i))
		{
			return getPositionValue(i);
			break;
		}
		else if((getPositionValue(i)==getPositionValue(i+3)) && (getPositionValue(i)==getPositionValue(i+6)) && isOccupied(i))
		{
			return getPositionValue(i);
			break;
		}
		//Check diagonal
		else if(i==0 && (getPositionValue(i)==getPositionValue(i+4)) && (getPositionValue(i)==getPositionValue(i+8)) && isOccupied(i))
		{
			return getPositionValue(i);
			break;
		}
		//Check antidiagonal
		else if(i==2 && (getPositionValue(i)==getPositionValue(i+2)) && (getPositionValue(i)==getPositionValue(i+4)) && isOccupied(i))
		{
			return getPositionValue(i);
			break;
		}
		else{
			console.log("No combinations");
			return false;
		}
	}
}
