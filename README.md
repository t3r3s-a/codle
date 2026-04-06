# Codle ⌨️

**Codle** is a programming-themed version of the popular Wordle game. Instead of general vocabulary, players are challenged to guess 5-letter keywords, functions, and concepts from the world of software development.

## 🚀 Features
*   **Tech Dictionary:** Features a custom list of programming terms (ARRAY, ASYNC, DEBUG, STACK, etc.).
*   **Hybrid Validation:** Uses an external dictionary API to validate that user inputs are real words.
*   **Visual Feedback:**
    *   🟩 **Green:** Letter is correct and in the right position.
    *   🟨 **Yellow:** Letter exists in the word but is in the wrong position.
    *   ⬜ **Gray:** Letter does not exist in the word.
*   **Interactive UI:** Automatic focus switching between tiles and pop-up screens for Victory or Defeat.

## 🛠️ Built With
*   **HTML5:** Semantic structure for the game grid and modals.
*   **CSS3:** Custom styling featuring Google Fonts and responsive layouts.
*   **JavaScript (ES6):** Core game logic, event listeners for keyboard input, and Fetch API for dictionary loading.

## 📂 Project Structure
*   `index.html`: The game board and UI elements.
*   `style.css`: The visual design, colors, and animations.
*   `script.js`: The game engine (input handling, word validation, and win/loss logic).

## 🔧 How to Run
1.  Clone the repository:
    ```bash
    git clone [https://github.com/t3r3s-a/codle.git](https://github.com/t3r3s-a/codle.git)
    ```
2.  Open `index.html` in any modern web browser.
3.  Start typing and press **Enter** to submit your guess!

## 🚧 Status
This project is currently under development to improve responsiveness and expand the coding dictionary.
