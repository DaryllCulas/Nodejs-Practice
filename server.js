const express = require("express");
const mssql = require("mssql");

const app = express();
app.use("/assets", express.static("assets"));

// Import the login endpoint router
const loginEndpoint = require('./loginEndpoint');

const port = 5000;


// Use the login endpoint router
app.use('/', loginEndpoint);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Server Config
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

  //Redirect to loginForm
  res.sendFile(__dirname + "/loginForm.html");
  try {
    // Establish a connection to the SQL Server database
    await mssql.connect(config);

    // Create a new request object
    const request = new mssql.Request();

    // Execute the query and store the result
    const result = await request.query("SELECT * FROM studentTable");

    // Send the recordset as the response
    res.send(result.recordset);
  } catch (err) {
    // Handle database connection or query errors
    console.log("Database connection error:", err);
    res.status(500).send("Database connection error");
  } finally {
    // Close the database connection
    mssql.close();
  }
});

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});
