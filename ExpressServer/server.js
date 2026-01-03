// const express=require('express');
// const http=require('http');

// const app=express();

// app.get('/',(req,res)=>{
//     return res.send("Hello From Home Pge");
// })
// app.get("/about",(req,res)=>{
//     res.send("hello from about page")
// })

// // app.listen((5000),()=>{
// //     console.log("listening on port 5000");
// // })

// const server=http.createServer(app)
// server.listen(5000,()=>{
//     console.log("server started");
// })

const express = require("express");
const users = require("./data.json");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = 8000;

app.get("/api/users", (req, res) => {
  res.json(users);
});
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
  res.send(html);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    res.send({ stauts: "success" });
  });
});

app.patch("/api/users/:id", (req, res) => {
  const body = req.body;
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id == id);
  users[userIndex] = { ...users[userIndex], ...body };
  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    res.json({ stauts: "Updated Successfully" });
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  users.pop(user.id);

  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "Deleted Successfully" });
  });
});

app.listen(PORT, () => console.log("server started"));
