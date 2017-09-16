var selCoin;
function generateBoard()
{
	var f=1;
	var board = document.createElement("DIV");
	board.setAttribute("align","center");
	board.style.marginTop="100px";
	for(var i=1;i<=8;i++)
	{
		for(var j=1;j<=8;j++)
		{
			var cell = document.createElement("SPAN");
			cell.addEventListener("click",placeCoin);
			cell.setAttribute("id","cell_"+i+"_"+j);
			cell.style.background = f==1 ? "white" : "#8c8c8c";
			f*=-1;
			board.appendChild(cell);
		}
		f*=-1;
		board.appendChild(document.createElement("BR"));
	}
	document.body.appendChild(board);
	loadCoins("White","Black");
}

function loadCoins(p1,p2)
{
	selCoin = "";
	coins = ["Rook","Knight","Bishop","Queen","King","Bishop","Knight","Rook"];
	if(p1 == "Black")
	{
		coins[3] = "King";
		coins[4] = "Queen";
	}
	for(var i=1;i<=8;i++)
	{
		var row = document.getElementById("cell_1_"+i);	//King row for player 2
		row.removeEventListener("click",placeCoin);
		var coin = document.createElement("DIV");
		coin.addEventListener("click",selectCoin);
		coin.className = p2+coins[i-1];
		row.appendChild(coin);
		row = document.getElementById("cell_2_"+i);		//Pawn row for player 2
		row.removeEventListener("click",placeCoin);
		coin = document.createElement("DIV");
		coin.addEventListener("click",selectCoin);
		coin.className = p2+"Pawn";
		row.appendChild(coin);
		//---------------------------------------------------------------------
		row = document.getElementById("cell_8_"+i);		//King row for player 1
		row.removeEventListener("click",placeCoin);
		coin = document.createElement("DIV");
		coin.addEventListener("click",selectCoin);
		coin.className = p1+coins[i-1];
		row.appendChild(coin);
		row = document.getElementById("cell_7_"+i);		//Pawn row for player 1
		row.removeEventListener("click",placeCoin);
		coin = document.createElement("DIV");
		coin.addEventListener("click",selectCoin);
		coin.className = p1+"Pawn";
		row.appendChild(coin);
	}
}

function selectCoin()
{
	selCoin = this;
}

function placeCoin()
{
	if(selCoin != "")
	{
		var coin = selCoin.cloneNode(true);
		coin.addEventListener("click",selectCoin);
		this.appendChild(coin);
		selCoin.parentNode.addEventListener("click",placeCoin);
		selCoin.parentNode.removeChild(selCoin);
		this.removeEventListener("click",placeCoin);
		selCoin = "";
	}
}