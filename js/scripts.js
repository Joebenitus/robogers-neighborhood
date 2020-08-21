// Business Logic
function toRobogers(number, name){
  let newArray = []
  for (let i = 0; i <= number; i++){
    let iString = i.toString();
    if (iString.includes("3")){
      if (name === "") {
        newArray.push("Won't you be my neighbor?");
      } else {
        newArray.push("Won't you be my neighbor, " + name + "?");
      }
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
  $("#idle").click(function(event){
    $(".question1").show();
    $(".question2").show();
    $(".btn").show();
    $("form#number").submit(function(event) {
      event.preventDefault();
      const userInput = $("input#userNum").val();
      const userName = $("input#name").val();
      $("#idle").hide();
      $("#dance").show();

      $(".output").text(toRobogers(userInput, userName));
    });
  });
});