const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user.js");
const passport = require("passport");
const middleware = require("../middleware/index.js")

router.get("/auth/signup", middleware.ensureNotLoggedIn, (req,res) => {
	res.render("auth/signup", { title: "User Signup" });
});


router.post("/auth/signup", middleware.ensureNotLoggedIn, async (req,res) => {
	
	const { firstName, lastName, email, password1, password2 } = req.body;
	let errors = [];
	
	if (!firstName || !lastName || !email || !password1 || !password2) {
		errors.push({ msg: "Please fill in all the fields" });
	}
	if (password1 != password2) {
		errors.push({ msg: "Passwords are not matching" });
	}
	if (password1.length < 4) {
		errors.push({ msg: "Password length should be atleast 4 characters" });
	}
	if(errors.length > 0) {
		return res.render("auth/signup", {
			title: "User Signup",
			errors, firstName, lastName, email, password1, password2
		});
	}
	
	try
	{	console.log("hi4");
		const user = await User.findOne({ email: email });
		console.log("hi5");
		if(user)
		{
			errors.push({msg: "This Email is already registered. Please try another email."});
			return res.render("auth/signup", {
				title: "User Signup",
				firstName, lastName, errors, email, password1, password2
			});
		}
		console.log("i");
		const newUser = new User({ firstName, lastName, email, password:password1, role });	
		console.log("hi");
		const salt = bcrypt.genSaltSync(10);
		console.log("hi2");
		const hash = bcrypt.hashSync(newUser.password, salt);
		console.log("hi3");
		newUser.password = hash;
		await newUser.save();
		req.flash("success", "You are successfully registered and can log in.");
		res.redirect("/auth/login");
		
	}
	catch(err)
	{
		console.log(err);
		req.flash("error", "Some error occurred on the server.")
		res.redirect("back");
	}
	
});

router.get("/auth/login", middleware.ensureNotLoggedIn, (req,res) => {
	res.render("auth/login", { title: "User login" });
});

router.post("/auth/login", middleware.ensureNotLoggedIn,
	passport.authenticate('local', {
		failureRedirect: "/auth/login",
		failureFlash: true,
		successFlash: true
	}), (req,res) => {
		res.redirect(req.session.returnTo || `/${req.user.role}/dashboard`);
	}
);

router.get("/auth/logout", (req,res) => {
	req.logout(function(err) {
		if (err) { return next(err); }
		res.redirect('/');
	  });
});

module.exports = router;