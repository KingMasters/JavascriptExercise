
var makeRow = function(rowLength){
   var response = "";
   
   for(y=0; y<rowLength; y++)
    {
      response += y%2 == 0 ? " " : "#" ;
    }
    return response
};

function recursiveFunc2(n) {
return 	n < 0 ? "" : (n%2 == 0 ? " " + recursiveFunc2(n-1) : "#" + recursiveFunc2(n-1));
}

function makeChessBoard(){
	var rowSize = arguments[0];
		
	var myArray = new Array();
	var myArray2 = [rowSize];
	
	for(i=0; i<rowSize; i++)
	{
		myArray.push(makeRow(rowSize));
		myArray2[i] = recursiveFunc2(rowSize);
	}
	
	var result1 = "1:</br>" + myArray.toString().replace(/,/g, '<br>');
	var result2 = "2:</br>" + myArray2.toString().replace(/,/g, '<br>');
		
	return result1 + '</br>' + result2;
	
};

var mainFunc = function()
{
	var x = 8;
		
	return makeChessBoard(x);
	
};	

document.write(mainFunc());
