const app = require("express")();
const PORT = process.env.PORT || 8000;
const db = require("./firebase");

app.listen(PORT);

app.get("/", async (req, res) => {
  var data,number;
  await db
    .collection("questions")
    .get()
    .then((docSnap) => {
      number=docSnap.size;
      console.log(number)
    });
  await db
    .collection("questions")
    .doc(`${Math.floor(Math.random()*number)+1}`)
    .get()
    .then((docSnap) => {
      data = docSnap.data();
      console.log(data);
    });
  res.send(data);
});
