const express = require("express");
const fs = require("fs");
const PORT = 8800;
const middlewareCustom1 = require("./middleware/middlewareCustom1")
const middlewareCustom2 = require("./middleware/middlewareCustom2");

const server = express();
// server.use(express.json());



const logger = (req, res, next) => {
    fs.appendFileSync("./1.txt", `url is ${req.url} method id ${req.method} date is ${new Date().toISOString()}`);
    next()
}

const timeCount = (req, res, next) => {
    let startTime = new Date().getTime();
    next()
    let endTime = new Date().getTime();
    console.log(`Time required is ${endTime - startTime} ms`)
}



server.use(timeCount);



server.get("/", (req, res) => {
    res.send("get request");
})


// const custommiddleware3 = (req, res, next) => {
//     if (req.headers["content-type"] == "application/json") {
//         let data = "";
//         req.on("data", (chunks) => {
//             data += chunks;
//         })

//         req.on("end", () => {
//             try {
//                 req.body = JSON.parse(data);
//                 next()
//             } catch (error) {
//                 res.send(error)
//             }
//         })
//     }
//     else {
//         next();
//     }

// }

// const villain = (req, res, next) => {
//     console.log("Inside middleware",req.body);
//     req.body.type = "evil"
//     next();
//     // console.log(res);
// }

// server.get("/testing", [middlewareCustom1, middlewareCustom2], (req, res) => {
//     console.log(3);
//     res.send("get request");
// })

server.post("/dataget", (req, res) => {
    console.log(req.body);
    res.send("post request");
})



server.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
})