const connection = require("../db")
const bcrypt = require("bcrypt")
const express = require('express');
const app = express();
require("dotenv").config()
const register = async (req, res) => {
    const { first_name, last_name, address, city, region, phone_number, email, password,
        image_profile, payment_id, role_id, store_id } = req.body
    console.log("SALT", process.env.SALT);
    const hashedPassword = await bcrypt.hash(password,process.env.SALT, (err, res) => {
        if (err) throw err
        console.log(res);
    })
    console.log(hashedPassword);
    const data = [first_name, last_name, address, city, region, phone_number, email, hashedPassword,
        image_profile, store_id]
    const query = `INSERT INTO users (first_name,last_name,address,city,region,phone_number,email,password,
        image_profile,store_id)
    VALUES (?,?,?,?,?,?,?,?,?,?) `
    connection.query(query, data, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
        res.json(results)
    })
}
module.exports = { register }