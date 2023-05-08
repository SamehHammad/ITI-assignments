const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create an Express app
const app = express();

// Set the port the app will listen on
const port = process.env.PORT || 7002;

// Use body-parser to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/assets"));

// Define a route for the root path

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/Bank");

// Define a schema for students
let bankSchema = new mongoose.Schema({
  CLIENTNUM: Number,
  Attrition_Flag: String,
  Customer_Age: Number,
  Gender: String,
  Dependent_count: Number,
  Education_Level: String,
  Marital_Status: String,
  Income_Category: String,
  Card_Category: String,
  Months_on_book: Number,
  Total_Relationship_Count: Number,
});

// Create a model for students
const bankModel = mongoose.model("creditcardcustomers", bankSchema);

mongoose.connection.on("error", () => {
  console.log("7asal Error");
});

// Listen for the connection to open
mongoose.connection.once("open", () => {
  console.log("connected successfully to database ");

  app.get("/", async (req, res) => {
    const data = await bankModel.find();
    res.render("home.ejs", { data });
  });
});
app.get("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/css/style.css");
});
// add new customer

app.post("/", async (req, res) => {
  let newCustomer = new bankModel(req.body);
  await newCustomer.save();
  console.log(req.body);
  res.send("your req posted");
});

//Task 2
// update customer by id
app.put("/", async (req, res) => {
  console.log(req.body);
  await bankModel.findByIdAndUpdate(
    { _id: "644a9b37e5a1f4dc1395a1a2" },
    req.body
  );
  res.send("updated successfully");
});
// Start the app
app.listen(port, () => {
  console.log("server stared => http://localhost:"+port);
});

