function setup()
{
	//SET THE SCREEN SIZE
	createCanvas(600, 600);
	//THIS LINE SAYS THAT THE RECT POSITION IS SETTED BY IT'S CENTER
	rectMode(CENTER);
}

function draw()
{
	//BLACK BACKGROUND
	background(0);
	//(0,0) NOW IS AT THE CENTER OF THE SCREEN
	translate(width/2, height/2);

	//RECURSIVE FUNCTION TO DRAW THE FRACTAL
	drawSquare(0, 0, 5*width/11, 5);
}

function drawSquare(px, py, size, index)
{
	//IF GENERATION IS VALID
	if(index > 0)
	{
		//DEFINE THE SIZE OF THE NEXT GENERATION
		let newSize = size/2;

		//RECURSION FLOW
		//DRAW THE FRACTAL IN THE CORNERS OF THE CURRENT RECTANGLE
		drawSquare(px-size/2, py-size/2, newSize, index-1);
		drawSquare(px+size/2, py-size/2, newSize, index-1);
		drawSquare(px-size/2, py+size/2, newSize, index-1);
		drawSquare(px+size/2, py+size/2, newSize, index-1);

		//INFILL COLOR
		fill(0);
		//LINES WEIGHT
		strokeWeight(2);
		//LINES COLOR
		stroke(255);
		//DRAW THE RECTANGLE
		rect(px, py, size, size);

		//OBS: IF THE RECTANGLE WAS DRAWED BEFORE THE RECURSION FLOW
		//THE SMALLER ONES WILL BE ABOVE THE BIGGER ONES 
	}

	//ELSE --> EXIT CONDITION
}