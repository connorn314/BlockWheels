import BotWheels from "./game";

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    canvas.width = 900
    canvas.height = 600
    const botWheels1 = new BotWheels(canvas);
    botWheels1.restart()
});