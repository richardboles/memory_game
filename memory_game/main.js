console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

$( ".selector" ).menu({
  menus: "div"
});

var menus = $( ".selector" ).menu( "option", "menus" );
