import BotWheels from "./game";

const playButton = document.getElementById("play")
const homePage = document.getElementById("home-page")
const game = document.getElementById("game")
const canvas = document.getElementById("canvas");
canvas.width = 900
canvas.height = 600
// window.addEventListener("DOMContentLoaded", () => {
//     // const canvas = document.getElementById("canvas");
//     // canvas.width = 900
//     // canvas.height = 600
//     // const botWheels1 = new BotWheels(canvas);
//     // botWheels1.restart()
// });

playButton.addEventListener("click", () => {
    const botWheels1 = new BotWheels(canvas);
    botWheels1.restart()
    homePage.style.display = "none";
    game.style.display = "flex";
    game.style.flexDirection = "column";
    game.style.alignItems = "center";
})