const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        application: "Logistics API",
        version: "1.0.0",
        status: "running"
    });
});

module.exports = app;

app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

// Hola DAniboi =)