import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import Task from "./models/Task.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://swetakumari0553:sweta04@cluster0.du5hsbg.mongodb.net/TMS?retryWrites=true&w=majority&appName=cluster0"
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.get("/api/user", (req, res) => {
  User.find().then((users) => res.json(users));
});

app.post("/api/user", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});

app.post("/api/user/auth", async (req, res) => {
  await User.findOne(req.body)
  .then((user) =>
    res.json(user && `Welcome ${user.username}`)
  )
  .catch((err) => console.log(err))
});

app.post("/api/task", (req, res) => {
  Task.create(req.body)
    .then((task) => res.json(task))
    .catch((err) => console.log(err));
});

const PORT = "3000";

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/api/task", (req, res) => {
  Task.find().then((tasks) => res.json(tasks));
});

app.get("/getAllTask", async(req,res)=>{
  try {
    const allTask = await Task.find({});
    res.send({status:"ok",data:allTask});
  } catch (error) {
    console.log(error);
  }
})

app.get("/getAllUser", async(req,res)=>{
  try {
    const allUser = await User.find({});
    res.send({status:"ok",data:allUser});
  } catch (error) {
    console.log(error);
  }
})

app.post("/deleteTask", async (req, res) => {
  const { taskid } = req.body;
  try {
      await Task.deleteOne({ _id: taskid });
      res.send({ status: "Ok", data: "Deleted Successfully" });
  } catch (error) {
      console.log(error);
      res.status(500).send({ error: "An error occurred while deleting task" });
  }
});
