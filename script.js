console.log("testing123")

function normalCycle() {
    document.getElementById("traffic_light").src="images/traffic_light_phases/green_arrow.png";

    setTimeout(() => {
        document.getElementById("traffic_light").src="images/traffic_light_phases/yellow_arrow.png";
    }, 3000);

    setTimeout(() => {
        document.getElementById("traffic_light").src="images/traffic_light_phases/green_light.png";
    }, 6000);

    setTimeout(() => {
        document.getElementById("traffic_light").src="images/traffic_light_phases/yellow_light.png";
    }, 9000);

    setTimeout(() => {
        document.getElementById("traffic_light").src="images/traffic_light_phases/red_light.png";
    }, 12000);
}




function startCycle() {
    normalCycle();
    const intervalID = setInterval(normalCycle, 15000);                         // passes a reference to the function normalCycle (instead of calling it immediately)
}

// Find a way to end the light cycle started by ^^ startCycle
function endCycle() {
    clearInterval(intervalID);
}