
    window.setTimeout(function() {
      // put all of your JS code from the lecture here
      var todo=[];
var input = prompt("What would you like to do?");
while(input !== "quit"){
	if (input === "new") {
         var todos=prompt("Enter new todo");
         todo.push(todos); 	
	}
	else if(input === "list"){
         console.log(todo);
	}
	input=prompt("What would you like to do?");
}
console.log("You Quit!!");
    }, 500);



// var todo=[];
// var input = prompt("What would you like to do?");
// while(input !== "quit"){
// 	if (input === "new") {
//          var todos=prompt("Enter new todo");
//          todo.push(todos); 	
// 	}
// 	else if(input === "list"){
//          console.log(todo);
// 	}
// 	input=prompt("What would you like to do?");
// }
// console.log("You Quit!!");