const express = require("express");
const mongoose = require("mongoose");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api-routes");
const authRoutes = require("./routes/auth-routes");
const config = require("../nuxt.config.js");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook");
const keys = require("../config/keys");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);

// Session-persisted message middleware
// app.use(function(req, res, next) {
//   var err = req.session.error,
//     msg = req.session.notice,
//     success = req.session.success;

//   delete req.session.error;
//   delete req.session.success;
//   delete req.session.notice;

//   if (err) res.locals.error = err;
//   if (msg) res.locals.notice = msg;
//   if (success) res.locals.success = success;

//   next();
// });

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:3000/auth/google/redirect"
    },
    accessToken => {
      console.log("access token: ", accessToken);
    }
  )
);
// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== "production";

async function start() {
  const db = `${keys.mongodb.dbURI}?retryWrites=true&w=majority`;

  mongoose.connect(
    db,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, res) => {
      if (err) {
        console.log("Failed to connected to " + db);
      } else {
        console.log("Connected to " + db);
      }
    }
  );

  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();

module.exports = { app };
