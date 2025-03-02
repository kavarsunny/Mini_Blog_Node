require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const { checkForAuthCookie } = require('./middlewares/authentication');
const Blog = require('./models/blog');

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));

mongoose.connect(process.env.MONGO_URL);

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({});

    res.render("home", { user: req.user, blogs: allBlogs });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
    console.log(`Server started at Port: ${PORT}`);
});