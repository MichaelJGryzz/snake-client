const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // "data" event handler handles incoming data and console.logs it for the player
  conn.on("data", (data) => {
    console.log("The server says: ", data);
  });

  // "error" event handler handles potential connection errors
  conn.on('error', (error) => {
    console.error('Connection error:', error);
  });

  // "connect" event handler to print a message when connected to server successfully
  conn.on('connect', () => {
    console.log("Successfully connected to the game server");

    // send player initials to the server
    conn.write("Name: MJG");

    // send move up command to the server
    // conn.write("Move: up");
    
  });

  return conn;
};

// export "connect" function
module.exports = connect;