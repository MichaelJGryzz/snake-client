// import "connect" function
const { connect } = require("./client");

// import "connect" function
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();