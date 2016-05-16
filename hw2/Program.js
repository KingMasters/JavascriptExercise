
var recursiveFunc = function(index){
   var response = "";
   index++;
   for(y=0; y<index; y++)
    {
      response += "*";
    }
    return response
};

function recursiveFunc2(n) {
return 	n < 0 ? "" : "*" + recursiveFunc2(n-1);
}

function createFunction(dimension){
	
	var myArray = [dimension];
	var myArray2 = [dimension];
	for(i=0; i<dimension; i++)
		{
			myArray[i] = recursiveFunc2(i);
		}
		var result1 = myArray.toString().replace(/,/g, '<br>');
		
	for(i=0; i<dimension; i++)
		{
			myArray2[i] = recursiveFunc2(i);
		}
		var result2 = myArray2.toString().replace(/,/g, '<br>');
	return "1:</br>" + result1 + '</br>2:</br>' + result2;
	
};

var mainFunc = function()
{
	var arrSize = 7;
	
	return createFunction(arrSize);
	
};	

document.write(mainFunc());
