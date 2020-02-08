require("dotenv").config();
const axios = require("axios");

// Function to turn lights on or off,
module.exports = function setLightState(power = off) {
    const token = process.env.LIGHT_TOKEN;

    try {
        if (power != "on" && power != "off") {
            throw `You need to set power to 'on' or 'off'. Exititing.`;
        }
    } catch {
        return;
    }

    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        url: "https://api.lifx.com/v1/lights/all/state",
        method: "PUT",
        data: {
            "power": power,
            "color": color,
            "brightness": 1.0
        }  
    }).then(res => console.log(`Light is now ${power}`));
}