const express = require("express");
const mssql = require("mssql");

const app = express();
const port = 5000;

// Middleware for serving static assets
app.use("/assets", express.static("assets"));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import the login endpoint router
 const loginEndpoint = require('./loginEndpoint');

// Use the login endpoint router
 app.use('/', loginEndpoint);

// Server Config
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
    // Establish a connection to the SQL server database
    await mssql.connect(config);

    // Create a new request object
    const request = new mssql.Request();

    // Execute the query and store the result
    const result = await request.query("SELECT * FROM studentTable");

    // Send the recordset as the response 
    res.send(result.recordset);
  }catch(err) {
    // Handle database connection or query errors
    console.log("Database connection error: ", err);
    res.status(500).send("Database connection error");
  }finally {
    // Close the database connection
    mssql.close();
  }
   // Redirect to loginForm
   res.sendFile(__dirname + "/loginForm.html");
});

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});
