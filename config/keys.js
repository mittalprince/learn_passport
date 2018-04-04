require('dotenv').config();
module.exports = {
    google: {
        clientID:process.env.clientID,
        clientSecret:process.env.clientSecret
    },
    mongodb: {
        dbURI: `mongodb://${process.env.username}:${process.env.password}@ds235169.mlab.com:35169/social-authentication`
    },
    session: {
        cookieKey: 'mittalprinceawesome'
    }
};