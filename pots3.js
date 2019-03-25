var miracle = 0;


var multiplier = 1;
var farms = 0 ;

var AM1 = 0;
var autoClicka1 = 0;
		
var AM2 = 0;
var autoClicka2 = 0;

var AM3 = 0;
var autoClicka3 = 0;

var AM4 = 0;
var autoClicka4 = 0;	

var AM5 = 0;
var autoClicka5 = 0;	

function update()
{
	document.getElementById('miracle').value = miracle;
	document.getElementById('miracle').innerHTML = miracle;
	document.getElementById('costAM1').innerHTML = ((AM1+1) * 5 ) + " miracle";
}
function addm()
{
	miracle = miracle + 1
	update()
}
function autom1()
{
	if (love >= ((AM1+1) * 5))
	{
		love = love - ((AM1+1) * 5);
		AM1 = AM1 + 1;
		autoClicka1 = autoClicka51 + 2;
		update();
	}
function timer()
		{
			document.getElementById("text").innerHTML = miracle;
			love = love + autoClicka1;
			update()
		}
		setInterval(timer, 500)
