

// Now to assign squares more cleanly:
window.onload = initAll;
function getNewNumber() {
 return  Math.floor(Math.random() * 15 + 1)
}
var usedNums= new Array(76)
function initAll(){
	for (var i = 0; i < 24 ; i++) {
	setSquare(i);
	}
}
		
		function setSquare(i) {
			var currSquare = "square" + i;
			var col = new Array(0,0,0,0,0,	
					1,1,1,1,1,
					2,2,2,2,
					3,3,3,3,3,
					4,4,4,4,4);
					var colID = col[i] * 15;
	var newNum;
	do {
		newNum = colID + getNewNumber();
	}
	while (usedNums[newNum]);

			usedNums[newNum] = true;	
			document.getElementById(currSquare).
			innerHTML =newNum;
			;
		
	}

	




