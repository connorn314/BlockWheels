# BlockWheels

Javascript Game

Background:

BotWheels is a game inspired by playing with Hot Wheels as a kid. Similar to the way one would manually move a toy car through a Hot Wheels track left to right, this 2d game has the car seemingly travel left to right with the course rendering in front of it as it moves.

The user controls a toy car going through a track with ramps of varying grades. The car maintains a constant position x and y in the game window. The only ability for the user to accelerate the car (other than gravity) will be the up arrow. The user is able to jump with space bar. They are also able to tilt their car forward or backward with the arrow keys while in the air. The game ends when the user's car stops moving or falls to the bottom of the screen. The score is determined by how far the user travels through the track.


Functionality & MVPS:

In this BotWheels game, users will be able to:
  - Start, pause, and restart the attempt
  - Jump when all four wheels (two 2d-wheels) are on the track
  - Tilt car forward or backward using arrow keys
  - View their score in the top left corner of their screen
  - Recieve their final score at the end of the run
  
 In addition, this project will include:
  - An About modal describing the background and rules of the game
  - a production README
  
  
 Upcoming Features:
   - Toggle between color schemes
   - Mute game music at any time
   - Collect boost by colliding with items on the track
   - Utilize finite amount of boost at anytime, creating constant velocity increase in any direction the back of the car is pointed
 
 Wireframes (before production):
 
<img width="1112" alt="Screen Shot 2022-10-06 at 11 28 33 AM" src="https://user-images.githubusercontent.com/51464137/194390818-fb8310c4-1b69-4b79-8de6-b435cd17c0c0.png">

 - On the right, three clickable buttons: one to mute/resume music and two to toggle between light and dark color schemes
 - On the left, score tracker with current personal best (upcoming) also listed
 - Arrow key legend will explain the tilt and jump mechanics
 - Game title will also include 3 nav links as clickable icon buttons directly underneath it: linkedin, github(personal), and the about Modal (upcoming)

<img width="1127" alt="Screen Shot 2022-10-06 at 11 29 02 AM" src="https://user-images.githubusercontent.com/51464137/194390916-0c42f16b-ada5-4417-be1c-22ac97b6a3aa.png">

- This is a sample of the ingame view
- On the left, score tracker persists
- (upcoming) On the right, mute button persists and restart button appears (clickable and bound to "r" key) 
- (upcoming) On the bottom, a non interactive visualization of boost amount held at that movement
- (upcoming) at the top, a floating item to collide with for boost
- falling through the two ramps to the bottom of the screen would end the level

Technologies, Libraries, APIs:

This project will be implemented with the following technologies:
  - Canvas API to render the track
  - Webpack and Babel to transpile and bundle JS code
  - npm to manage project dependencies
  
<img width="944" alt="Screen Shot 2022-10-13 at 12 16 19 PM" src="https://user-images.githubusercontent.com/51464137/195689946-70076acf-d995-4755-89be-16c8a0bb1d2e.png">
<img width="948" alt="Screen Shot 2022-10-13 at 12 17 04 PM" src="https://user-images.githubusercontent.com/51464137/195689744-a12a0633-65c3-4331-87d5-2e16611909c3.png">
<img width="964" alt="Screen Shot 2022-10-13 at 12 17 27 PM" src="https://user-images.githubusercontent.com/51464137/195689746-e5b896b8-d89c-49de-8caa-1c81b35c05d4.png">
<img width="964" alt="Screen Shot 2022-10-13 at 12 17 27 PM" src="https://user-images.githubusercontent.com/51464137/195689974-cb89e1f6-cceb-4386-a657-fa91a5cf3944.png">




