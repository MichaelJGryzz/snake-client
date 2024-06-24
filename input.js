// import four movement constants and "MESSAGES" object from constants.js
const { MOVE_UP , MOVE_LEFT, MOVE_DOWN , MOVE_RIGHT, MESSAGES } = require("./constants");

// stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn; // store the provided connection object in the global variable
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); // lisen for "data" (input) events and call "handleUserInput" function when input is received
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function(key) {
  // "\u0003" maps to ctrl + c input
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write(MOVE_UP); // send move up command to the server
  } else if (key === "a") {
    connection.write(MOVE_LEFT); // send move left command to the server
  } else if (key === "s") {
    connection.write(MOVE_DOWN); // send move down command to the server
  } else if (key === "d") {
    connection.write(MOVE_RIGHT); // send move right command to the server
  } else if (MESSAGES[key]) {
    connection.write(MESSAGES[key]); // send corresponding message to the server
  }
};

// export "setupInput" and "handleUserInput" function
module.exports = { setupInput };