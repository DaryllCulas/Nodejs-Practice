const express = require("express");
const mssql = require("mssql");

const app = express();
app.use("/assets", express.static("assets"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Login endpoint
app.post("/loginForm.html", (req, res)=> {
  const { studentIdTF, studentEmailTF, studentPasswordTF } = req.body;

  const connection = new sql.ConnectionPool(config);
  connection.connect(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      const request = new sql.Request(connection);
      const query = `SELECT * FROM studentTable WHERE Username =
       '${studentIdTF}' AND '${studentEmailTF}' AND Password = '${studentPasswordTF}'`;

      request.query(query, function (err, recordset) {
        if (err) {
          console.log(err);
          res.status(500).send("Server error");
        } else {
          if (recordset.recordset.length > 0) {
            alert("successfully login!");
            res.redirect("/dashboard"); // Redirect to the dashboard page

          } else {
            alert("Login failed")
            res.redirect("/?error=1"); // Redirect back to the login page with an error notification
          }
        }

        connection.close();
      });
    }
  });
});