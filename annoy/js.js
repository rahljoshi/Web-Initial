var value=String(prompt("Are you ready?"));
 

while(value.indexOf("yes") === -1){
	value=prompt("Are you ready?");
}
alert("You made it");