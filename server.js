const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("NovaAI Server is Running!");
});

app.listen(3000, () => {
    console.log("NovaAI server started on port 3000");
});