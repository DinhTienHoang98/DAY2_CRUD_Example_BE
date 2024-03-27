const express = require("express");

const router = express.Router();

// Read
router.get("/employee/get-all", (req, res) => {
    res.json(items);
});

// Sample data
let items = [
    {
        id: 1,
        fullName: "John Doe",
        emailId: "johndoe@example.com",
        salary: 5000,
        city: "New York",
    },
    {
        id: 2,
        fullName: "Jane Smith",
        emailId: "janesmith@example.com",
        salary: 6000,
        city: "Los Angeles",
    },
    {
        id: 3,
        fullName: "Mike Johnson",
        emailId: "mikejohnson@example.com",
        salary: 4500,
        city: "Chicago",
    },
];
module.exports = router;git