const express = require('express');

function configureMiddlewares(app) {
    app.use(express.json());
}

module.exports = configureMiddlewares;
