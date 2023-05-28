const express = require("express");
const mssql = require("mssql");

const app = express();
app.use("/assets", express.static("assets"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async function (req, res) {
  const config = {
    user: "sa",
    password: "M@kar0v99",
    server: "localhost",
    database: "nodejs",
    port: 1433,
    options: {
      trustServerCertificate: true,
    },
  };

  try {
    await mssql.connect(config);
    const request = new mssql.Request();
    const result = await request.query("SELECT * FROM studentTable");
    res.send(result.recordset);
  } catch (err) {
    console.log("Database connection error:", err);
    res.status(500).send("Database connection error");
  } finally {
    mssql.close();
  }
});

app.listen(5000, function () {
  console.log("Server is running on port 5000...");
});
