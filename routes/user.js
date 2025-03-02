const Router = require('express');
const User = require('../models/user');
const multer = require('multer');
const path = require('path');

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/images`));
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage })

router.get("/signin", (req, res) => {
    return res.render("signin");
});

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.post("/signup", upload.single("profileImage"), async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // https://mongoosejs.com/docs/api/model.html#Model.create()
        const newUser = new User({
            fullName,
            email,
            password
        });

        if (req.file) {
            newUser.profileImageURL = `/images/${req.file.filename}`;
        }

        await newUser.save();

        return res.redirect("/user/signin");
    } catch (error) {
        return res.render("signup", { error: "All fields are mandatory (except profile image)" });
    }
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        // console.log("Token: ", token)

        return res.cookie("token", token).redirect("/");
    } catch (error) {
        return res.render("signin", { error: "Incorrect Email or Password" });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("token").redirect("/");
});

module.exports = router;