const express = require("express");
const mssql = require("mssql");
const router = express.Router();
const app = express();
const port = 5000;

// Middleware for serving static assets
app.use("/assets", express.static("assets"));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server Config
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

// Redirect to loginForm
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/loginForm.html");
});

// Login endpoint
router.post('/login', (req, res) => {
  const { studentID, studentFirstName, Email, StudentPassword } = req.body;

  const pool = new mssql.ConnectionPool(config);
  pool.connect((err) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Server error');
    }

    const request = new mssql.Request(pool);

    const query = `SELECT * FROM studentTable WHERE studentID = '${studentID}' AND Email = '${Email}' AND StudentPassword = '${StudentPassword}'`;

    request.query(query, (err, recordset) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Server error');
      }

      if (recordset.recordset.length > 0) {
        res.send(`
        <script>
        alert("Login successfully");
        window.location.href = "/dashboard";
          </script>
          `);
          
        //  return res.redirect("/dashboard"); // Redirect to the dashboard page
        // res.json({ success: true, message: 'Login successful' });
        // return res.redirect("/dashboard"); // Redirect to the dashboard page
      } else {
        //  return res.status(401).send('Login failed');
        return res.redirect("/?error=1");
        // res.status(401).json({ success: false, message: 'Login failed' });
      }
    });
  });
});


// Logout Endpoint


app.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

app.use("/", router);

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});

module.exports = router;
