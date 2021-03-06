// Business Logic
function toRobogers(number, name){
  let newArray = []
  for (let i = 0; i <= number; i++){
    let iString = i.toString();
    if (!number && !name){
      newArray.push("I'm no psychic! Tell me your name and give me a number.");
      $("img").attr("src", "img/robot-no.gif");
      break;
    } else if (name.toLowerCase() === "i see you") {
      $("body").addClass("spooky-mode");
      $(".card").addClass("card-spooky");
      $("button").removeClass("btn-primary");
      $("button").addClass("btn-danger");
      $("img").attr("src", "img/robot-creepy.png");
      $("p#creepy").hide();
      newArray.push("Hello there...");
    } else if (!number) {
      newArray.push("I can't count to nothing.");
      $("img").attr("src", "img/robot-no.gif");
    } else if (!name) {
      newArray.push("Please tell me your name.");
      $("img").attr("src", "img/robot-what.gif");
      break;
    } else if (iString.includes("4") && !$("body").hasClass("spooky-mode")){
      newArray.push("Bottom left");
    } else if (iString.includes("3")) {
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
  $("img#robot").click(function(){
    $(this).attr("src", "img/robot-scared.gif");
    $(".dialogue").text("Whoops! Looks like you've startled him. Click him once more to gain his trust.");

    $("img#robot").click(function(){
      $(this).attr("src", "img/robot-ok.gif");
      $(".dialogue").text("Nice! Now that you two are acquainted, Mr. Robogers will count for you! He has a very strange way of counting though. Just tell him your name and what to count to.");
      $("form#number").show();
      
      $("form#number").submit(function(event) {
        event.preventDefault();
        const userInput = $("input#userNum").val();
        const userName = $("input#name").val();
        $("img").attr("src", "img/robot-dance.gif");
        $("p#creepy").text("i see you");
        $(".output").text("Mr. Robogers: " + toRobogers(userInput, userName).join(", "));
        
      });
    });
  });
});