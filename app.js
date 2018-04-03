require('dotenv').config()
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

var port = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys:'thisisawesome'
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://'+process.env.username+':'+process.env.password+'@ds123499.mlab.com:23499/socialauthentication', () => {
    console.log('connected to mongodb');
});

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

app.listen(port, () => {
    console.log('app now listening for requests on port 4000');
});

module.exports ={
    google:{
        clientID:process.env.clientID,
        clientSecret:process.env.clientSecret
    }
};