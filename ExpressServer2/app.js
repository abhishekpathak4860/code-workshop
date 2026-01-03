import express from "express";
import users from "./data.json" assert { type: "json" };
import fs from "fs";

const app = express();
// app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}:${req.method}:${req.path}`,
    (err, data) => {
      next();
    }
  );
});

app.get("/api/users", (req, res) => {
  //   console.log("i am get route", req.myname);
  res.setHeader("X-Myname", "Abhi");
  res.send(users);
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
  const user_id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === user_id);
  if (index === -1) {
    return res.send({ status: "user not found" });
  }
  const User_Data = users.find((user) => user.id == user_id);
  res.send(User_Data);
});
//post request
app.post("/api/users", (req, res) => {
  const data = req.body;
  users.push({ ...data, id: users.length + 1 });
  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    res.send({ status: "Success" });
  });
});
// update
app.put("/api/users/:id", (req, res) => {
  const body = req.body;
  const user_id = Number(req.params.id);
  const index = users.findIndex((user) => user.id == user_id);
  users[index] = { ...users[index], ...body };
  fs.writeFile("./data.json", JSON.stringify(users), (err, data) => {
    res.send({ status: "data updated" });
  });
});
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index == -1) {
    return res.status(404).send({ status: "No user found" });
  }
  users.splice(index, 1);

  fs.writeFile("./data.json", JSON.stringify(users, null, 2), (err, data) => {
    if (err) {
      return res.status(500).send({ status: "error deleting data" });
    }
    return res.send({ status: "Deleted Successfully" });
  });
});
app.listen(5000, () => {
  console.log("Server listening");
});
