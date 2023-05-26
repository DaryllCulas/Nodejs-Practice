const sql  = require('mssql/msnodesqlv8');
// Database Configuration

  var config =  {
    user: 'sa',
    password: 'M@kar0v99',
    database: 'nodejs', // name of selected database
    server: '172.17.0.1', // name of server
    driver: 'msnodesqlv8',
    options: {
      trustedConnection: true
    }

  };

  // Connect to database

  sql.connect(config,function(err){
      if(err) {
        console.log(err);
      }

  //create the request object
  var request = new sql.Request();

  // database query
  request.query('select * from studentTable', function(err,recordSet) {
      if(err) {
        console.log(err);
      }
      else {
        console.log(recordSet);
      }
  });
});