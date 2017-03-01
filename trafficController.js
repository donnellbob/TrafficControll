var cycle = [
["northForward", "southForward"], 
["eastForward", "westForward"], 
["northRightTurn", "southRightTurn"],
["eastRightTurn", "westRightTurn"]
];

var intervalValue = 3000;
var currentTiming = 0;
var totalSimulatedTime = 0;
var minutesPassed = 0;

function changeTrafficLights() {
  if(currentTiming === (intervalValue * 9)) {
    document.getElementsByClassName(cycle[0][0])[0].style.background = "yellow";
    document.getElementsByClassName(cycle[0][1])[0].style.background = "yellow";
  } else if (currentTiming === (intervalValue * 10)) {
    currentTiming = 0;
    document.getElementsByClassName(cycle[0][0])[0].style.background = "red";
    document.getElementsByClassName(cycle[0][1])[0].style.background = "red";

    //Remove first element -> push to end
    cycle.push(cycle.shift());
    document.getElementsByClassName(cycle[0][0])[0].style.background = "green";
    document.getElementsByClassName(cycle[0][1])[0].style.background = "green";
  } else if (totalSimulatedTime === intervalValue) { 
    // Initialise simulation
    document.getElementsByClassName(cycle[0][0])[0].style.background = "green";
    document.getElementsByClassName(cycle[0][1])[0].style.background = "green";
  }

}

var trafficLightsInterval = setInterval(function() {
  currentTiming += intervalValue;
  totalSimulatedTime += intervalValue;
  minutesPassed += 0.5;
  document.getElementById("minutesPassed").textContent = minutesPassed;

  changeTrafficLights();

  if(totalSimulatedTime === (intervalValue * 60)) {
    // "30 mins" have passed (depends on how fast simulation)
    clearInterval(trafficLightsInterval);
  }

}, intervalValue);
