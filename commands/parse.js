module.exports = {
  name: "parse",
  description: "parse",
  execute(message, args, unirest, fs) {
    let previousMsgs;
    message.channel.fetchMessages({

      })
      .then(messages => previousMsgs = messages)
      .catch(console.error);

    try {
      fs.readFile(
        "../../output.json",
        // callback function that is called when reading file is done
        function (err, data) {
          // json data
          var jsonData = data;

          // parse json
          var jsonParsed = JSON.parse(jsonData);

          //const hackCA = jsonParsed.find(parsed => jsonParsed.parsed_state === "California");

          jsonParsed.forEach(parseJSON => {
            if (parseJSON.parsed_state === "California") {
              //console.log(hackCA);

              if (parseJSON.start.includes("2020-03" || "2020-04")) {
                if (message.channel.send !== previousMsgs) {
                  message.channel.send(
                    "Name: " +
                    parseJSON.name +
                    "\n" +
                    "Location: " +
                    parseJSON.parsed_address +
                    "\n" +
                    "Date: " +
                    parseJSON.start +
                    "-" +
                    parseJSON.end +
                    "\n" +
                    "Website: " +
                    parseJSON.website +
                    "\n" +
                    " " +
                    "_ \n_"
                  );
                }
              }
            }
          });
        }
      );
    } catch (error) {
      console.log("Good?");
    }
  }
};