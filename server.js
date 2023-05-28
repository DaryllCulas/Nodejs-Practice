const express = require("express");
const sql = require("mssql/msnodesqlv8");

const app = express();
app.use("/assets", express.static("assets"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Lofin endpoint


const config = {
  user: "sa",
  password: "M@kar0v99",
  server: "localhost",
  database: "nodejs",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};


app.listen(2000, function () {
  console.log("Server is running on port 2000");
});
