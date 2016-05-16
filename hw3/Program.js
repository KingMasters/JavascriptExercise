
function createFunction(){
	
	var rowCount = 100;
	var rowOutput = "";
	
	for(var i=3;i<=rowCount;i++)
	{
		if(i%3 == 0)
		{
			rowOutput = rowOutput +  "Fizz";
		}
		else if(i%5 == 0)
		{
			rowOutput = rowOutput +  "Buzz";	
		}
		else
		{
			rowOutput = rowOutput +  i;
		}
	}
    
	console.log(rowOutput);
};

var mainFunc = function()
{
		
	return createFunction();
	
};	

document.write(mainFunc());
