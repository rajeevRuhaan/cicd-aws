const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send("James");
  
});

app.listen(5000, () => {
  console.log("Server is runnung on prot 5000");
});
