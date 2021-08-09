// const urlencoded = require('express')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv").config();
const { db, FieldValue } = require("./firebase");
const cors = require("cors");

app.use(cors());
app.listen(PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", async (req, res) => {
  var data, number;
  // await db
  //   .collection("questions")
  //   .get()
  //   .then((docSnap) => {
  //     number = docSnap.size;
  //     console.log(number);
  //   });
  // await db
  //   .collection("questions")
  //   .doc(`${Math.floor(Math.random() * number) + 1}`)
  //   .get()
  //   .then((docSnap) => {
  //     data = docSnap.data();
  //     console.log(data);
  //   });
  await db.collection('questions').doc('questions').get().then((docSnap)=>{
    const arr = docSnap.data().questions
    console.log(arr)
    data = arr[Math.floor(Math.random()*arr.length)]
  })
  res.send(data);
});

app.post("/new", (req, res) => {
  console.log(req.body);
  db.collection("contributed")
    .doc(req.body.name)
    .set(
      {
        name: req.body.name,
        questions: FieldValue.arrayUnion(req.body.question),
      },
      { merge: true }
    );
});
