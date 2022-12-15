import BotWheels from "./game";


const instructions = document.getElementById("instructions")
const instructionPage = document.getElementById("instruction-page")
const playAfterInstruction = document.getElementById("play-after-instructions")
const homeAfterInstruction = document.getElementById("home-after-instructions")
const playButton = document.getElementById("play");
const homePage = document.getElementById("home-page");
const game = document.getElementById("game");
const gameView = document.getElementById("game-view");
const canvas = document.getElementById("canvas");
const score = document.getElementById("score");
let paused = false;
const pause = document.getElementById("pause");
const pauseMenu = document.getElementById("pause-menu");
const unpause = document.getElementById("unpause");
const home = document.getElementById("back-to-home");
const restart = document.getElementById("restart");
const gameOver = document.getElementById("game-over");
const restartAfterGame = document.getElementById("restart-after-game");

canvas.width = 900;
canvas.height = 600;

const botWheels1 = new BotWheels(canvas);
botWheels1.restart();

instructions.addEventListener("click", () => {
    homePage.style.display = "none";
    instructionPage.style.display = "flex";
    instructionPage.style.flexDirection = "column";
    instructionPage.style.alignItems = "center";
})

playAfterInstruction.addEventListener("click", () => {
    botWheels1.unpause();
    botWheels1.restartButton();
    instructionPage.style.display = "none";
    gameView.style.display = "flex";
    gameView.style.flexDirection = "column";
    gameView.style.alignItems = "center";
    gameView.style.position = "relative";
})

homeAfterInstruction.addEventListener("click", () => {
    paused = false
    instructionPage.style.display = "none"
    homePage.style.display = "flex";
    homePage.style.flexDirection = "column";
    homePage.style.alignItems = "center";
})

playButton.addEventListener("click", () => {
    botWheels1.unpause();
    botWheels1.restartButton();
    homePage.style.display = "none";
    gameView.style.display = "flex";
    gameView.style.flexDirection = "column";
    gameView.style.alignItems = "center";
    gameView.style.position = "absolute";
    
})

pause.addEventListener("click", () => {
    if (paused === false ){
        paused = true;
        botWheels1.pause();
        pauseMenu.style.display = "flex";
        pauseMenu.style.position = "absolute";
        pauseMenu.style.flexDirection = "column";
        pauseMenu.style.left = "310px";
        pauseMenu.style.top = "160px";
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
    gameView.style.display = "none"
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

restartAfterGame.addEventListener("click", () => {
    paused = false
    botWheels1.unpause();
    botWheels1.restartButton();
    gameOver.style.display = "none";
    score.style.display = "flex";
    score.style.position = "absolute";
    score.style.left = "20%";
    score.style.fontSize = "50px";
    score.style.fontFamily = "'Carter One', cursive";
    score.style.color = "white";
})


