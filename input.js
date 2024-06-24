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
    connection.write("Move: up"); // send move up command to the server
  } else if (key === "a") {
    connection.write("Move: left"); // send move left command to the server
  } else if (key === "s") {
    connection.write("Move: down"); // send move down command to the server
  } else if (key === "d") {
    connection.write("Move: right"); // send move right command to the server
  } else if (key === "1") {
    connection.write("Say: Hello!"); // send "Hello!" to the server
  } else if (key === "2") {
    connection.write("Say: Nice move!"); // send "Nice move!" to the server
  } else if (key === "3") {
    connection.write("Say: GG!"); // send "GG!" to the server
  } else if (key === "4") {
    connection.write("Say: Almost had you!"); // send "Almost had you!" to the server
  } else if (key === "5") {
    connection.write("Say: Better luck next time!"); // send "Better luck next time!" to the server
  } else if (key === "6") {
    connection.write("Say: Woohoo!"); // send "Woohoo!" to the server
  } else if (key === "7") {
    connection.write("Say: Yay!"); // send "Yay!" to the server
  } else if (key === "8") {
    connection.write("Say: Yeehaw!"); // send "Yeehaw!" to the server
  } else if (key === "9") {
    connection.write("Say: Oh no!"); // send "Oh no!" to the server
  } else if (key === "0") {
    connection.write("Say: I win!"); // send "I win!" to the server
  }
};

// export "setupInput" and "handleUserInput" function
module.exports = { setupInput };