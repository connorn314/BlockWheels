import BotWheels from "./game";

const playButton = document.getElementById("play");
const homePage = document.getElementById("home-page");
const game = document.getElementById("game");
const canvas = document.getElementById("canvas");
let paused = false
const pause = document.getElementById("pause");
const pauseMenu = document.getElementById("pause-menu");
const unpause = document.getElementById("unpause")
const home = document.getElementById("back-to-home")
const restart = document.getElementById("restart")

canvas.width = 900;
canvas.height = 600;

const botWheels1 = new BotWheels(canvas);
botWheels1.restart();

playButton.addEventListener("click", () => {
    botWheels1.unpause();
    botWheels1.restartButton();
    homePage.style.display = "none";
    game.style.display = "flex";
    game.style.flexDirection = "column";
    game.style.alignItems = "center";
    
})
pause.addEventListener("click", () => {
    if (paused === false){
        paused = true;
        botWheels1.pause();
        pauseMenu.style.display = "flex";
        pauseMenu.style.position = "absolute";
        pauseMenu.style.flexDirection = "column";
        pauseMenu.style.left = "40%";
        pauseMenu.style.top = "25%";
        pauseMenu.style.backgroundColor = "#f01924";
        pauseMenu.style.border = "10px";
        pauseMenu.style.borderRadius = "10%";
        pauseMenu.style.borderColor = "#f72934"
        pauseMenu.style.borderStyle = "outset";     
    } else {
        paused = false
        botWheels1.unpause();
        pauseMenu.style.display = "none";
    }
});

unpause.addEventListener("click", () => {
    paused = false
    botWheels1.unpause();
    pauseMenu.style.display = "none";
})

home.addEventListener("click", () => {
    paused = false
    game.style.display = "none"
    pauseMenu.style.display = "none"
    homePage.style.display = "flex";
    homePage.style.flexDirection = "column";
    homePage.style.alignItems = "center";
})

restart.addEventListener("click", () => {
    paused = false
    botWheels1.unpause();
    botWheels1.restartButton();
    pauseMenu.style.display = "none";
})


