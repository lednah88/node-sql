"use strict";
require('dotenv').config();
const Pool = require("pg").Pool;
let pool = new Pool({
  user: process.env.DB_ADMIN_USERNAME,
  host: "localhost",
  database: "db",
  password: process.env.DB_ADMIN_PASSWORD,
  port: 5432,
});
class Visitor {
  constructor(
    visitorName,
    visitorAge,
    dateOfVisit,
    timeOfVisit,
    assistantName,
    comments
  ) {
    this.visitorName = visitorName;
    this.visitorAge = visitorAge;
    this.dateOfVisit = dateOfVisit;
    this.timeOfVisit = timeOfVisit;
    this.assistantName = assistantName;
    this.comments = comments;
  }
  async createTable() {
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
      (error) => {
        if (error) {
          throw error;
        }
      }
    )
  }

  async addNewVisitor() {
    pool.query(
      `INSERT INTO visitors(visitorName, visitorAge, dateOfVisit, timeOfVisit, assistantName,comments) values
        (${this.visitorName}, ${this.visitorAge}, ${this.dateOfVisit}, ${this.timeOfVisit}, ${this.assistantName}, ${this.comments})`,
      (error) => {
        if (error) {
          throw error;
        }
      }
    )
  }

  async listAllVisitors() {
    pool.query(`SELECT * from visitors`,
      (error) => {
        if (error) {
          throw error;
        }
      }
    )
  }

  async deleteVisitor() {
    pool.query(`DELETE from visitors WHERE fullname = ${this.visitorName}`,
      (error) => {
        if (error) {
          throw error;
        }
      }
    )
  }

  async updateVisitor(columnToUpdate, newInfo) {
    pool.query(
      `UPDATE visitors SET ${columnToUpdate} = $1 WHERE visitorName = $2`,
      [newInfo, this.visitorName],
      (error,results) => {
        if (error) {
          throw error;
        }
      console.log(results.rows)
      }
    )
  }

  async viewOneVisitor(visitorid) {
    pool.query(`SELECT * from visitors WHERE visitorid = $1`, [visitorid],
      (error,results) => {
        if (error) {
          throw error;
        }
      console.log(results.rows)
      }
    )
  }

  deleteAllVisitors() {
    pool.query(`DELETE from visitors`,
      (error) => {
        if (error) {
          throw error;
        }
      }
    )
  }
}
module.exports = { Visitor };