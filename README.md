# BlockWheels

Javascript Game

Background:

BotWheels is a game inspired by playing with Hot Wheels as a kid. Similar to the way one would manually move a toy car through a Hot Wheels track left to right, this 2d game while seemingly have the car traveling left to right with the course rendering in front of it as it moves.

The user will control a toy car going through a track with ramps, loops, even obstacles. The car will maintain a constant position x in the game window, however the positinon y (height in the air) will vary as you try to navigate the course for as long as possible. The only ability for the user to accelerate the car (other than gravity) will be through boosting. Boost will be finite so the user will have to aim to hit boost items as they go. The user will be able to jump (and maybe double jump if I have time). They will also be able to tilt their car forward or backward with the arrow keys while in the air. The game ends when the user's car stops moving or falls to the bottom of the screen. The score will be determined by how far the user travels through the track, which will increase in difficulty as times goes on (it pays to go fast in the early seconds of the game).


Functionality & MVPS:

In this BotWheels game, users will be able to:
  - Start, pause, and restart the attempt
  - Toggle between color schemes
  - Mute game music at any time
  - Collect boost by colliding with items on the track
  - Utilize finite amount of boost at anytime, creating constant velocity increase in any direction the back of the car is pointed
  - Jump when all four wheels (two 2d-wheels) are on the track
  - Tilt car forward or backward using arrow keys
  - View their current and high score in the top left corner of their screen
  
 In addition, this project will include:
  - An About modal describing the background and rules of the game
  - a production README
  
 Wireframes:
 
<img width="1112" alt="Screen Shot 2022-10-06 at 11 28 33 AM" src="https://user-images.githubusercontent.com/51464137/194390818-fb8310c4-1b69-4b79-8de6-b435cd17c0c0.png">

 - On the right, three clickable buttons: one to mute/resume music and two to toggle between light and dark color schemes
 - On the left, score tracker with current personal best also listed
 - Arrow key legend will explain the tilt and jump mechanics
 - Summary of the game will include the objective (travel the farthest distance), as well as the rules surrounding the boost(how to acquire and utilize)
 - Game title will also include 3 nav links as clickable icon buttons directly underneath it: linkedin, github(personal), and the about Modal

<img width="1127" alt="Screen Shot 2022-10-06 at 11 29 02 AM" src="https://user-images.githubusercontent.com/51464137/194390916-0c42f16b-ada5-4417-be1c-22ac97b6a3aa.png">

- This is a sample of the ingame view
- On the left, score tracker persists
- On the right, mute button persists and restart button appears (clickable and bound to "r" key)
- On the bottom, a non interactive visualization of boost amount held at that movement
- at the top, a floating item to collide with for boost
- falling through the two ramps to the bottom of the screen would end the level

Technologies, Libraries, APIs:

This project will be implemented with the following technologies:
  - Canvas API to render the track
  - Webpack and Babel to transpile and bundle JS code
  - npm to manage project dependencies
  
Implementation Timeline:

 - Friday & Weekend: Setup project, getting webpack up and running. Get simple background of canvas to appear on window. Create the Level, Car, and Game class created.
 - Monday: begin on Moving Object class, which will extend to boost items, car, and ramps
 - Tuesday: improve and finalize physics of car and collisions
 - Wednesday: Finish level creation/rendering as well as score system/game navigation
 - Thursday: Finetune, Deploy on all platforms




