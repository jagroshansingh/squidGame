# Green Light Red Light Game

This is a simple web application built using Vite, React, Redux, and React Router DOM to create a game called "Green Light Red Light." The game has three difficulty levels: Easy, Medium, and Hard, each with different criteria for winning. The goal of the game is to click on the green box as many times as required within a specified time limit without clicking on the red box.

## Table of Contents

- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

# Usage
<ul>
<li>The game has three difficulty levels: Easy, Medium, and Hard, each with different criteria for winning.</li>
<li>Screen display a box that changes its color randomly between green and red at intervals between 1 to 2 seconds.</li>
<li>The player's objective is to click on the green box as many times as required within the specified time limit without clicking on the red box.</li>
<li>If the player clicks on the red box or if the time limit expires, the game will end, and a "Game Over" message will be displayed.</li>
<li>If the player successfully clicks on the green box the required number of times within the time limit, a "You Win!" message will be displayed.</li>
</ul>

**Difficulty Levels:**

* **Easy:**

    Click the green box 10 times within 40 seconds.

* **Medium:**

    Click the green box 15 times within 40 seconds.

* **Hard:**

    Click the green box 25 times within 40 seconds.

**Project Structure**

The project follows a clean and organized directory structure:

* `src/`: Contains the source code of the application.
* `components/`: Contains React components.
* `redux/`: Contains Redux actions, reducers, and store configuration.
* `routes/`: Defines the routes using React Router DOM.
* `styles/`: Contains CSS styles for the components.
* `App.js`: The main application component.
* `public/`: Contains public assets and the HTML template.
* `vite.config.js`: Configuration file for Vite.

**Technologies Used**

* Vite: A fast development build tool for modern web apps.
* React: A JavaScript library for building user interfaces.
* Redux: A predictable state container for managing application state.
* React Router DOM: A library for handling client-side routing in React applications.