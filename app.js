const { createPool } = require("mysql2")

const config = {
  host: "127.0.0.1",
  user: "root",
  password: "passwordpassword",
  port: 3307,
  database: "survely"
}

const pool = createPool(config)

pool.getConnection((err) => {
  if (err) {
    console.error("error connecting to database: " + err);
  } else {
      console.log("Connected to Database: \n" + JSON.stringify(config))
  }
})


















/*
  
  Example Queries: 
  
  const sql = `INSERT INTO users (username, fname, lname, password, email, age) VALUES ('${nu.username}', '${nu.fName}', '${nu.lName}', '${nu.password}', '${nu.email}', '${nu.age}')`;
  pool.query(sql, (err, rows, fields) => {
    out = { err, rows, fields };
    res.status(200).json(out);
  });

*/ 