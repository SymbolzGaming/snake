
var characters = {
	0: "rgb(250,250,250)",
	1: "rgb(0,0,0)",
	2: "rgb(0,0,0)",
	3: "rgb(0,0,200)",
	4: "rgb(255,0,0)",
	5: "rgb(200,0,200)",
};

// Make the snake
var snake = {
	size: 1,
	positions: [
	 	{x: 1, y: 5},
],
	direction: "right",
	dead: false,
	onSquare: function (x, y) {
// Loop and ask if any of my positions are here
	for (var i = 0; i < snake.positions.length; i += 1) {
		if (snake.positions[i].x == x && snake.positions[i].y == y) {
			return true;
		}
	}
	return false;
}
};

// Make the Apple
var apple = {
	x: 10,
	y: 5,
	randomize: function () {
		apple.x = Math.floor((Math.random() * 26 + 1) % 45);
		apple.y = Math.floor((Math.random() * 16 + 1) % 20);
		console.log(apple.x, apple.y)
	},
	onSquare: function (x, y) {
		
		return x == apple.x && y == apple.y;
		apple.onSquare = ctx.fillStyle = "rgb(0, 255, 0)";
	}
};

// Make a game board we can play on
var game = [
	[4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],	
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
];

// Get the game board

var ctx = document.getElementById("game").getContext("2d");
var scoreboard = document.getElementById("scoreboard");

// Set up reset
function reset() {
	if (!snake.dead) {
	return;
	}

	snake.dead = false;
	snake.positions = [
		{x: 1, y: 5}
	];
	
	snake.direction = "right"
	}

// Set up keyboard input
document.onkeydown = function(evt) {
	evt = evt || window.event;
	var charCode = evt.keyCode || evt.which;
	var charStr = String.fromCharCode(charCode);
	if (charCode === 37) {
		snake.direction = "left"; 
	} else if (charCode === 38) {
		snake.direction = "up";
	} else if (charCode === 39) {
		snake.direction = "right";
	} else if (charCode === 40) {
		snake.direction = "down";
	} else if (charCode === 82) {
		reset();
	}
};


function makeBoard() {
	var w = 16;
	var h = 16;

	// Return a string which we can put into the game
	for (var i = 0; i < game.length; i+=1) {
		for (var j = 0; j < game[i].length; j+=1) {
			ctx.fillStyle = characters[game[i][j]];
			ctx.fillRect(j*w, i*h, w, h);
		}
	}
	for (var i=0; i < snake.positions.length; i++) {
		segment = snake.positions[i];		
		ctx.fillStyle = "rgb(0, 255, 0)";
		ctx.fillRect(segment.x*w, segment.y*h, w, h);
	}
	
	ctx.fillStyle = "rgb(250, 0, 0)";
	ctx.fillRect(apple.x*w, apple.y*h, w, h);
}

function updateBoard() {
	if (snake.dead) {
		return;
	}
	
//Get the snake's head and add it to the front
	var oldhead = snake.positions[0];
	var head = {x:oldhead.x, y:oldhead.y};

	if (snake.direction == "right") {
		head.x += 1;
	} else if (snake.direction == "left") {
		head.x -= 1;
	} else if (snake.direction == "up") {
		head.y -= 1;
	} else if (snake.direction == "down") {
		head.y += 1;

	}

	// If it hits an apple, grow
	if (apple.onSquare(head.x, head.y)) {
		snake.size += 1;
		apple.randomize();
	}

	// If it hits itself die
	if (snake.onSquare(head.x, head.y)) {
		snake.dead = true;
	}

	// Add the new head 
	snake.positions.unshift(head);

//Remove the snake's tail
	snake.positions = snake.positions.slice(0, snake.size);

// Make snake's death
	if (game[head.y][head.x] != 0) {
		snake.dead=true;
	}
}

var timer = setInterval(function() {
	updateBoard();
	makeBoard();
	scoreboard.textContent = snake.size;
}, 100);

