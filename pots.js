function update()
		{
			document.getElementById('text').value = miracle;
			document.getElementById('text').innerHTML = miracle;
			document.getElementById('life').value = love;
			document.getElementById('life').innerHTML = love;
			document.getElementById('costAC1').innerHTML = ((AC1+1) * 5 );
			document.getElementById('costAC2').innerHTML = ((AC2+1) * 25);
			document.getElementById('costAC3').innerHTML = ((AC3+1) * 267);
			document.getElementById('costAC4').innerHTML = ((AC4+1) * 1000);
			document.getElementById('costAC5').innerHTML = ((AC5+1) * 4000);
			document.getElementById('costAM1').innerHTML = ((AM1+1) * 5);
			document.getElementById('costAM2').innerHTML = ((AM2+1) * 25);
			document.getElementById('costAM3').innerHTML = ((AM3+1) * 267);
			document.getElementById('costAM4').innerHTML = ((AM4+1) * 1000);
			document.getElementById('costAM5').innerHTML = ((AM5+1) * 4000);
		}
		var love = 0;
		var miracle = 0;

		var multiplier = 1;
		var farms = 0 ;

		var AC1 = 0;
		var autoClick1 = 0;
		
		var AC2 = 0;
		var autoClick2 = 0;

		var AC3 = 0;
		var autoClick3 = 0;

		var AC4 = 0;
		var autoClick4 = 0;	

		var AC5 = 0;
		var autoClick5 = 0;	

		var AM1 = 0;
		var autoClickm1 = 0;

		var AM2 = 0;
		var autoClickm2 = 0;

		var AM3 = 0;
		var autoClickm3 = 0;

		var AM4 = 0;
		var autoClickm4 = 0;		

		var AM5 = 0;
		var autoClickm5 = 0;

		var AM6 = 0;
		var AL6 = 0;
		var autoClick6 = 0;	
		var autoClickm6 = 0;	

function timer1()
		{
			document.getElementById("life").innerHTML = love;
			love = love + autoClick1;
			love = love + autoClick2;
			love = love + autoClick3;
			love = love + autoClick4;
			love = love + autoClick5;
			love = love + autoClick6;
			update()
		}
		{

		}
		setInterval(timer1, 1000)
function timer2()
{
	document.getElementById('text').innerHTML = miracle;
	miracle = miracle + autoClickm1;
	miracle = miracle + autoClickm2;
	miracle = miracle + autoClickm3;
	miracle = miracle + autoClickm4;
	miracle = miracle + autoClickm5;
	miracle = miracle + autoClickm6;
	update()
}
setInterval(timer2, 1000)
function addl()
		{	
			love = love + 1
			miracle = miracle + 1
			update()
		}
function autol1()
{
	if (love >= ((AC1+1) * 5))
	{
		love = love - ((AC1+1) * 5);
		AC1 = AC1 + 1;
		autoClick1 = autoClick1 + 2;
		autoClickm1 = autoClickm1 + 2;
		update();
	}
}
function autom1()
{
	if (miracle >= ((AM1+1) * 5))
	{
		miracle = miracle - ((AM1+1) * 5);
		AM1 = AM1 + 1;
		autoClickm1 = autoClickm1 + 2;
		update();
	}
}
function autol2()
{
	if (love >= ((AC2+1) * 25))
	{
		love = love - ((AC2+1) * 25);
		AC2 = AC2 + 1;
		autoClick2 = autoClick2 + 5;
		update();
	}
}
function autom2()
{
	if (miracle >= ((AM2+1) * 25))
	{
		miracle = miracle - ((AM2+1) * 25);
		AM2 = AM2 + 1;
		autoClickm1 = autoClickm1 + 5;
		update();
	}
}
function autol3()
{
	if (love >= ((AC3+1) * 267))
	{
		love = love - ((AC3+1) * 267);
		AC3 = AC3 + 1;
		autoClick3 = autoClick3 + 10;
		update();
	}
}
function autom3()
{
	if (miracle >= ((AM3+1) * 267))
	{
		miracle = miracle - ((AM3+1) * 267);
		AM3 = AM3 + 1;
		autoClickm3 = autoClickm3 + 10;
		update();
	}
}
function autol4()
{
	if (love >= ((AC4+1) * 1000))
	{
		love = love - ((AC4+1) * 1000);
		AC4 = AC4 + 1;
		autoClick4 = autoClick4 + 20;
		update();
	}
}
function autom4()
{
	if (miracle >= ((AM4+1) * 1000))
	{
		miracle = miracle - ((AM4+1) * 1000);
		AM4 = AM4 + 1;
		autoClickm4 = autoClickm4 + 20;
		update();
	}
}
function autol5()
{
	if (love >= ((AC5+1) * 4000))
	{
		love = love - ((AC5+1) * 4000);
		AC5 = AC5 + 1;
		autoClick5 = autoClick5 + 80;
		update();
	}
}
function autom5()
{
	if (miracle >= ((AM5+1) * 4000))
	{
		miracle = miracle - ((AM5+1) * 4000);
		AM5 = AM5 + 1;
		autoClickm5 = autoClickm5 + 80;
		update();
	}
}
function addm()
		{
			miracle = miracle + 1
			update()
		}

var i = 0;
var set1 = [];
var time = 1000;
var a = 0;
var set2 = [];

set1[0] = 'set1/a1.png';
set1[1] = 'set1/a2.png';
set1[2] = 'set1/a3.png';	
set2[0] = 'char/f/f1.png';
set2[1] = 'char/f/f2.png';
set2[2] = 'char/f/f3.png';

function changeImg()
{
	{
	document.slide.src = set1[i];
	if (i < set1.length - 1) 
	{
		i++;
	}
	else 
	{
		i = 0;
	}
	setTimeout("changeImg()", time);
	}
	{
	document.slide2.src = set2[a];
	if (a < set2.length - 1) 
	{
		a++;
	}
	else 
	{
		a = 0;
	}
	setTimeout("changeImg()", time);
}
}
window.onload = changeImg;


function test()
{
	if (love >= ((AL6+1) * 1) && (miracle >= ((AM6+1) * 1))) 
	{
		love = love - ((AL6+1) * 1);
		miracle = miracle - ((AM6+1) * 1);
		AL6 - AL6 + 1;
		AM6 - AM6 + 1;
		autoClick6 = autoClick6 + 200;
		autoClickm6 = autoClickm6 + 200;
		document.getElementById('show1').src = "chaos/c1.png"
		update();
	}
}

// var k = 'a';
// function asdasd1()
// {
// 	var image = document.getElementById('asd');
// 	if (k == 'a') {
// 		image.src = 'set1/a2.png';
// 		k = 'b';
// 	}
// 	else if (k == 'b') {
// 		image.src = 'set1/a3.png';
// 		k = 'c'
// 	}
// 	else {
// 		image.src = 'set1/a1.png';
// 		k = 'a';
// 	}
// }

function asdasd2()
{
	var image = document.getElementById('asd2');
	if (k == 'a') {
		image.src = 'set1/a2.png';
		k = 'b';
	}
	else if (k == 'b') {
		image.src = 'set1/a3.png';
		k = 'c'
	}
	else {
		image.src = 'set1/a1.png';
		k = 'a';
	}
}