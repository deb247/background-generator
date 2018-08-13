// function sayHello() {
// 	console.log("Hello");
// }

// sayHello();

// var sayBye = function(){
// 	console.log("Bye");
// }

// sayBye();

// function sing(song) {
// 	console.log(song);
// }

// sing("Laaaa deeee daaaa");
// sing("eh eh eehehe");
// sing("ddu du ddu ddu");

// function sampleMultiply(a, b) {
// 	// if (a > 10 || b > 10) {
// 	// 	return "that's too hard";
// 	// } else {
// 	// 	return a*b;
// 	// }
// 	return a*b;
// }

// alert(sampleMultiply(5, 10));

// //ARRAY
// var listAnimals = ["tiger", "cat", "bear", "bird"];
// console.log(listAnimals[1]);

//OBJECT
// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// 	spells: ["abrakadabra", "shazam", "boo"],
// 	shout: function() {
// 		console.log("AHHHHH!");
// 	}
// };

// // var list = ["apple", "banna", "orange"];

// var list = [
// 	{
// 		username: "andy",
// 		password: "secret",
// 	},
// 	{
// 		username: "jess",
// 		password: "123"
// 	}
// ];

//FACEBOOK
var database = [
	{
		username: "seungyoon",
		password: "thor123"
	},
	{
		username: "seunghoon",
		password: "haute123"
	},
	{
		username: "jinwoo",
		password: "reibey123"
	}
];

var newsFeed = [
	{
		username: "Mino",
		timeline: "EFFF YOU HATERS!!!!"
	},
	{
		username: "Jinwoo",
		timeline: "I Love WINNER!!"
	}
];

var userNamePrompt = prompt("What is you username?");
var passwordPrompt = prompt("What is your password?");


function isUserValid(username, password) {
	for (var i =0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		} 
	}
	return false;	
}

function signIn (username, password) {
	if (isUserValid(username, password)){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

signIn(userNamePrompt,passwordPrompt);


//LOOP
// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy"
// ];

// var todosImportant = [
// 	"clean room!!",
// 	"brush teeth!!",
// 	"exercise!!",
// 	"study javascript!!",
// 	"eat healthy!!"
// ];
// var todosLength = todos.length;
// // for (var i=0; i < todosLength; i++) {
// // 	console.log("for "+todos[i]);
// // }


// function logTodos(todo, i) {
// 	console.log(todo, i);
// }

// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);



//var counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--
// }

// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);




















