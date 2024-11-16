console.log("testing123")

const lightColors = [
    "images/traffic_light_phases/green_arrow.png",
    "images/traffic_light_phases/yellow_arrow.png",
    "images/traffic_light_phases/green_light.png",
    "images/traffic_light_phases/yellow_light.png",
    "images/traffic_light_phases/red_light.png"
];
const colorNames = ["Green Arrow", "Yellow Arrow", "Green", "Yellow", "Red"];
const durations = [5000, 3000, 10000, 4000, 10000];
let currentIndex = 0;
let intervalId = null;




function changeLight() {
    console.log(`Current Light: ${colorNames[currentIndex]}`);
    document.getElementById("trafficLight").src=lightColors[currentIndex];
    
    clearInterval(intervalId);
    intervalId = setInterval(changeLight, durations[currentIndex]);
    
    currentIndex = (currentIndex + 1) % lightColors.length;
}


function startCycle() {
    console.log("The light cycle has started.")
    if (!intervalId) {
        intervalId = setInterval(changeLight, durations[currentIndex]);
    }
}


function endCycle() {
    console.log("The light cycle has ended.")
    clearInterval(intervalId);
    intervalId = null;
}



function flashYellow() {
    console.log("The light is flashing yellow now.")
    if (!intervalId) {
        intervalId = setInterval(() => {
            
            document.getElementById("trafficLight").src=lightColors[3];
            
            setTimeout(() => {
                document.getElementById("trafficLight").src="./images/traffic_light_phases/all_lights_off.png";
            }, 900);
        }, 1800);
    }
}


function flashRed() {
    console.log("The light is flashing red now.")
    if (!intervalId) {
        intervalId = setInterval(() => {
            
            document.getElementById("trafficLight").src=lightColors[4];
            
            setTimeout(() => {
                document.getElementById("trafficLight").src="./images/traffic_light_phases/all_lights_off.png";
            }, 900);
        }, 1800);
    }
}