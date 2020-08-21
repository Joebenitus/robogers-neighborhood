// Business Logic
function toRobogers(number, name){
  newArray = []
  for (let i = 0; i <= number; i++){
    let iString = i.toString();
    if (iString.includes("3")){
      newArray.push("Won't you be my neighbor, " + name + "?");
    } else if (iString.includes("2")) {
      newArray.push("Boop!");
    } else if (iString.includes("1")) {
      newArray.push("Beep!");
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}


// UI Logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#userNum").val();
    const userName = $("input#name").val();

    $(".output").text(toRobogers(userInput, userName));
  });
});