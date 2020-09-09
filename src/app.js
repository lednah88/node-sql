"use strict";
require("dotenv").config();
const Pool = require("pg").Pool;
let pool = new Pool({
  user: process.env.DB_ADMIN_USERNAME,
  host: process.env.DB_ADMIN_HOST,
  database: "db",
  password: process.env.DB_ADMIN_PASSWORD,
  port: 5432,
});
function createTable() {
  pool.query(
    `CREATE TABLE visitors(
        visitorid SERIAL PRIMARY KEY,
        visitorName varchar(50) NOT NULL,
        visitorAge int, 
        dateOfVisit date,
        timeOfVisit time,
        assistantName varchar(50),
        comments varchar(200)
        )`,
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
    }
  );
}
createTable();
function addNewVisitor(
  visitorName,
  visitorAge,
  dateOfVisit,
  timeOfVisit,
  assistantName,
  comments
) {
  pool.query(
    `INSERT INTO visitors(visitorName, visitorAge, dateOfVisit, timeOfVisit, assistantName,comments) values
        ($1, $2, $3, $4, $5, $6) returning *`,
    [
      visitorName,
      visitorAge,
      dateOfVisit,
      timeOfVisit,
      assistantName,
      comments,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
    }
  );
}
addNewVisitor("Tumi", 20, "09-31-2020", "12:00", "Sizwe", "Thank you!");
function listAllVisitors() {
  pool.query(`SELECT * from visitors`, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
  });
}
listAllVisitors();
function deleteVisitor(fullname) {
  pool.query(
    `DELETE from visitors WHERE fullname = $2`,
    [fullname],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rowCount);
    }
  );
}
function updateVisitor(visitorName,columnToUpdate, newInfo) {
  pool.query(
    `UPDATE visitors SET ${columnToUpdate} = $1 WHERE visitorName = $2`,
    [newInfo, visitorName],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
    }
  );
}
function viewOneVisitor(visitorid) {
  pool.query(
    `SELECT * from visitors WHERE visitorid = $1`,
    [visitorid],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows);
    }
  );
}
viewOneVisitor(1);
function deleteAllVisitors() {
  pool.query(`DELETE from visitors`, (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
  });
}
deleteAllVisitors();
module.exports = {
  createTable,
  addNewVisitor,
  listAllVisitors,
  deleteVisitor,
  updateVisitor,
  viewOneVisitor,
  deleteAllVisitors
};
