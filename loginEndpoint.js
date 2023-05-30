const express = require('express');
const mssql = require('mssql');

const router = express.Router();

// Configuration for MSSQL connection
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

// Login endpoint
router.post('/login', (req, res) => {
  const { studentId, studentEmail, studentPassword } = req.body;

  mssql.connect(config, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Server error');
    }

    const request = new mssql.Request();

    const query = `SELECT * FROM studentTable WHERE StudentId = '${studentId}' AND StudentEmail = '${studentEmail}' AND StudentPassword = '${studentPassword}'`;

    request.query(query, (err, recordset) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Server error');
      }

      if (recordset.recordset.length > 0) {
        return res.send('Login successful');
      } else {
        return res.send('Login failed');
      }
    });
  });
});

module.exports = router;
