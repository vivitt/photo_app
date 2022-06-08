const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require("connect-mongo");

const app = express()

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

const localhost = 'localhost';
const port = process.env.PORT || 3001;

/**
 * ========== CORS SETUP ==========
 */
 const cors = require('cors');
 app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
);
app.set("trust proxy", 1);





//passport
app.use(passport.initialize())


const sessionStore = new MongoStore({
    mongoUrl: process.env.MONGO_URL,
    collection: "sessions",
  });
  app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    unset: "destroy",
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: true,
      secure: false
    },
  }));
  
  app.use(passport.session())

mongoose.connect(process.env.DB_SERVER)
.then(() => console.log("Conected to DB server"))
.catch((err) => console.log(err));


app.use('/user', userRoutes);
app.use('/auth', authRoutes)



app.listen(port, localhost, (err) => {
    if (err) console.log(err);
    console.log(`Server running on port ${port}...`);
  })