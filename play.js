// import "connect" function
const { connect } = require("./client");

// import "setUpInput" function
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

setupInput(connection);