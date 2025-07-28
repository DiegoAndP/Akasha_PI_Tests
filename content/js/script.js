import { gpsData } from "./repository.js";

document.addEventListener("DOMContentLoaded", _ => {

    const body = document.querySelector("body")

    gpsData.forEach((el) => {
        console.log(el[0])
        console.log(el[1])
        const gpsObject = `<a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true'>
            <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
            <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: ${el[0]}; longitude: ${el[1]}" scale="10 10 10"></a-entity>
        </a-scene>`

        const div = document.createElement("div")
        div.innerHTML = gpsObject
        console.log(div)
        body.appendChild(div)
    })
})