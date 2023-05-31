const express = require('express');
const mssql = require('mssql');

const router = express.Router();


// // Configuration for MSSQL connection
// const config = {
//   user: "sa",
//   password: "M@kar0v99",
//   server: "localhost",
//   database: "nodejs",
//   port: 1433,
//   options: {
//     trustServerCertificate: true,
//   },
// };

// // Login endpoint
// router.post('/login', (req, res) => {
//   const { studentID, Email, StudentPassword } = req.body;

//   const pool = new mssql.ConnectionPool(config);
//   pool.connect((err) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send('Server error');
//     }

//     const request = new mssql.Request(pool);

//     // const query = `SELECT * FROM studentTable WHERE StudentID = '${studentID}' AND Email = '${Email}' AND StudentPassword = '${StudentPassword}'`;
    

//     request.query(query, (err, recordset) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).send('Server error');
//       }

//       if (recordset.recordset.length > 0) {
//         return res.send('Login successful');
//       } else {
//         return res.send('Login failed');
//       }
//     });
//   });
// });


/// Login endpoint
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
        res.send('Login successful');
      } else {
        res.status(401).send('Login failed');
      }
    });
  });
});


 module.exports = router;
