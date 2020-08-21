// Business Logic
function toRobogers(number){
  newArray = []
  for (let i = 0; i <= number; i++){
    newArray.push(i);
  }
  return newArray;
}


// UI Logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#userNum").val());

    $(".output").text(toRobogers(userInput));
  });
});