// user interface
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const sideOne = parseInt($("#add1").val());
    console.log("sideOne = " + sideOne);
    const sideTwo = parseInt($("#add2").val());
    console.log("sideTwo = " + sideTwo);
    const sideThree = parseInt($("#add3").val());
    console.log("sideThree = " + sideThree);

    alert(triangle(sideOne,sideTwo,sideThree));
  });
});



// business logic
function triangle(a,b,c) {
  if ( (typeof a !== "number" ) || (typeof b !== "number") || (typeof c !== "number ") ) {
    return "Please enter a number into the field";
  } else if ((( a + b) <= c) || ((b + c) <= a ) || ((c + a) <= b)){
    return "This is not a triangle";
  } else if (a !== b && a !== c & b!==c) {
    return " This is Scalene (No sides are equal)";
  } else if (a === b && b === c){
    return "This is Equilateral (All side are equal)";
  } else {
    return "This is a Isosceles";
  }
};

