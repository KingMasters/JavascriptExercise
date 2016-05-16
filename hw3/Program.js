
function createFunction(){
	
	var rowCount = 100;
	var rowOutput = "1" + "</br>" + "2" + "</br>";
	
	for(var i=3;i<=rowCount;i++)
	{
		if(i%3 == 0)
		{
			rowOutput = rowOutput +  "Fizz" + "</br>";
		}
		else if(i%5 == 0)
		{
			rowOutput = rowOutput +  "Buzz" + "</br>";	
		}
		else
		{
			rowOutput = rowOutput +  i + "</br>";
		}
	}
    
	return rowOutput;
};

var mainFunc = function()
{
		
	return createFunction();
	
};	

document.write(mainFunc());
