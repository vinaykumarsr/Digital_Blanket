const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const socketIo = require("socket.io");
const EnergyData = require("./models/EnergyData");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/energyDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

io.on("connection", (socket) => {
    console.log("Client connected");

    
    setInterval(async () => {
        const latestData = await EnergyData.find().sort({ timestamp: -1 }).limit(1);
        socket.emit("energyData", latestData);
    }, 5000);

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

app.get("/", (req, res) => {
    res.send("Energy Monitoring API is running...");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
