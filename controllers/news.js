var importio = require("import-io").client;
var io = new importio("bcaab5d5-5da7-4571-b44d-744263458dda", "p4Rzm1SM1G7YiJj+1rjbvDNP2YlfrceY3zk5CUb5p1jDLQB48FlEgv8Jg6G9jm6g1KDj69BOzqa+lavaCVyRXA==", "import.io");


// Once we have started the client and authenticated, we need to connect it to the server:
io.connect(function(connected) {
  // Make sure that your code to use the library only runs after this callback has returned, 
  // as prior to this the library is still connecting and may not yet be ready to issue queries

  // Once the callback is called, we need to check whether the connection request was successful
  if (!connected) {
    console.error("Unable to connect");
    return;
  }

  // Define here a variable that we can put all our results in to when they come back from
  // the server, so we can use the data later on in the script
  var data = [];

  // In order to receive the data from the queries we issue, we need to define a callback method
  // This method will receive each message that comes back from the queries, and we can take that
  // data and store it for use in our app
  var callback = function(finished, message) {
    // Disconnect messages happen if we disconnect the client library while a query is in progress
    if (message.type == "DISCONNECT") {
      console.error("The query was cancelled as the client was disconnected");
    }
    // Check the message we receive actually has some data in it
    if (message.type == "MESSAGE") {
      if (message.data.hasOwnProperty("errorType")) {
        // In this case, we received a message, but it was an error from the external service
        console.error("Got an error!", message.data);
      } else {
        // We got a message and it was not an error, so we can process the data
        console.log("Got data!", message.data);
        data = data.concat(message.data.results);
      }
    }
    if (finished) {
      // When the query is finished, show all the data that we received
      console.log("Done single query");
      console.log(data);
    }
  }

  // Issue a query to a single data source with a set of inputs
  // You can modify the inputs and connectorGuids so as to query your own sources

  io.query({
    "input": {
        "webpage/url": "http://timesofindia.indiatimes.com/"
    }
}, callback);
});