console.log("testing123")

function normalCycle() {
    document.getElementById("traffic_light").src="images/traffic_light_phases/green_arrow.png"

    setTimeout(() => {
        console.log("After 3 second delay");
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