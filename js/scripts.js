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
  $("img#robot").click(function(event){
    $(this).attr("src", "img/robot-scared.gif");
    $(".dialogue").text("Whoops! Looks like you've startled him. Click him once more to gain his trust.");
    $("img#robot").click(function(event){
      $(this).attr("src", "img/robot-ok.gif");
      $(".dialogue").text("Nice! Now that you two are acquainted, Mr. Robogers will count for you! He has a very strange way of counting though. Just tell him your name and what to count to.");  
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
});