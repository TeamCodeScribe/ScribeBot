// module.exports = {
//     name: 'hackathon',
//     description: 'hackathon',
//     execute(message, args, unirest, fs) {

const unirest = require("unirest");
const url = "https://api.hackclub.com/v1/events/";
const fs = require("fs");

// var req = unirest("GET", url);

// req.headers({
//   "Accept-Encoding": "gzip, deflate, br",
//   "Accept-Language": "en-US,en;q=0.5",
//   "Upgrade-Insecure-Requests": "1",
//   "User-Agent":
//     "Mozilla/5.0 (Windows NT 10.0; rv:68.0) Gecko/20100101 Firefox/68.0"
// });

const reqHead = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.5",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:68.0) Gecko/20100101 Firefox/68.0"
};

unirest
    .get(url)
    .headers(reqHead)
    .end(function (response) {
        // console.log(response.body);
        //let parseJson = JSON.parse(response.body);
        let data = response.body;
        fs.writeFile("output.json", data, "utf8", err => {
            // In case of a error throw err.
            if (err) throw err;
        });
    });

const path = "output.json";

// fs.readFile(
//     "output.json",
//     // callback function that is called when reading file is done
//     function (err, data) {
//         // json data
//         var jsonData = data;

//         // parse json
//         var jsonParsed = JSON.parse(jsonData);

//         //const hackCA = jsonParsed.find(parsed => jsonParsed.parsed_state === "California");

//         jsonParsed.forEach(parseJSON => {
//             if (parseJSON.parsed_state === "California") {
//                 //console.log(hackCA);

//                 if (parseJSON.start.includes("2020")) {
//                     console.log(
//                         parseJSON.name +
//                         ", " +
//                         parseJSON.parsed_address +
//                         ", " +
//                         parseJSON.website + ", " +
//                         parseJSON.start +
//                         ", " +
//                         parseJSON.end
//                     );
//                 }
//             }
//         });

//         //console.log(hackCA);
//     }
// );

// "Connection": "keep-alive",
//   "DNT": "1",
//   "Host": "api.hackclub.com",
// "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp",