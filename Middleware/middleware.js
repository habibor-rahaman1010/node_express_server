const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const middleWare = () => {
    express().use(bodyParser.urlencoded({ extended: false }));
    express().use(bodyParser.json());
    express().use(cors());
}

module.exports = { middleWare }