module.exports = {
    google: {
        clientID:process.env.clientID,
        clientSecret:process.env.clientSecret
    },
    mongodb: {
        dbURI: `mongodb://${process.env.username}:${password}@ds235169.mlab.com:35169/social-authentication`
    },
    session: {
        cookieKey: 'mittalprinceawesome'
    }
};