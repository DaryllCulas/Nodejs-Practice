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
  const { studentID, Email, StudentPassword } = req.body;

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
        alert("Login Successfully Login");
        window.location.href = "/dashboard";
          </script>
          `);
          
      } else {
      
        return res.redirect("/?error=1");
      }
    });
  });
});


// Logout Endpoint
app.get("/logout",(req,res)=>{
  res.redirect("/");
});


app.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

app.use("/", router);

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});

module.exports = router;
