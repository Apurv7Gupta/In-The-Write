const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB setup
mongoose
  .connect("mongodb://localhost:27017/In-The-WriteDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const blogSchema = mongoose.Schema({ title: String, content: String });
const model = mongoose.model("blog", blogSchema);

app.post("/save", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newblog = model({ title, content });
    await newblog.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
    console.log("Error in app.post: ", err);
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
