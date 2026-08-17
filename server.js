const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

let complaints = [];

// Submit a complaint
app.post("/complaints", (req, res) => {
    const complaint = req.body;

    complaints.push(complaint);

    res.json({
        message: "Complaint submitted successfully",
        complaint: complaint
    });
});

// Get all complaints
app.get("/complaints", (req, res) => {
    res.json(complaints);
});

app.listen(4000, () => {
    console.log("Server started on port 4000");
});