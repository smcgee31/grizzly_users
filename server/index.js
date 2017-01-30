// EXTERNAL MODULES
const express    = require('express')
    , bodyParser = require('body-parser')
    , session    = require('express-session')
    , mongoose   = require('mongoose')
// CONFIG
    , config     = require('./config')
// CONTROLLERS
    , UserCtrl   = require('./controllers/UserCtrl')
    , JobsCtrl   = require('./controllers/JobsCtrl')
// SERVICES
    , passport   = require('./services/passport')

// POLICIES
const isAuthed = (req, res, next) => {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// EXPRESS
const app = express();
app.use(express.static(__dirname + './../public'));
// app.use(favicon( __dirname + './../public/assets/favicon.ico' ));
app.use(bodyParser.json());

// SESSION AND PASSPORT
app.use(session({
  secret            : config.SESSION_SECRET,
  saveUninitialized : false,
  resave            : false
}));
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT ENDPOINTS
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
 }));
app.get('/logout', (req, res, next) => {
  req.logout();
  return res.status(200).send('logged out');
});

// USER ENDPOINTS
app.post('/register', UserCtrl.register);
app.get('/user', UserCtrl.read);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/user/:_id', isAuthed, UserCtrl.update);

// JOB ENDPOINTS
app.post('/addJob/:id', JobsCtrl.addJob);
app.get('/viewJobs/:phone', JobsCtrl.getJobsByPhone);

// CONNECTIONS
const mongoURI = config.MONGO_URI;
const port     = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log( `Connected to MongoDB at ${mongoURI}` );
  app.listen(port, () => {
    console.log( `!!! PARTY TIME !!!\nServer running on port ${port}` );
  });
});