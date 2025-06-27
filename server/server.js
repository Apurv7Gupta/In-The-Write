const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "https://apurv7gupta.github.io/In-The-Write/",
  })
);

app.use(express.json());

//env setup
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/In-The-WriteDB?retryWrites=true&w=majority`;
// MongoDB setup
mongoose
  .connect(uri)
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
