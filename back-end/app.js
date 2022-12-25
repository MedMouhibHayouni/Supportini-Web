var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');
const cors=require('cors')
require('dotenv').config()

const usersRouter = require('./routes/users');
const authRouter= require('./routes/auth');

const suiviRouter= require('./routes/suivi')
const feedbackRouter= require('./routes/feedback');
const gymRouter= require('./routes/gym');
const equipmentGym = require('./routes/equipmentGym');
const annonceRouter= require('./routes/annonce');
const regimeRouter= require('./routes/regime');

const emailRouter= require('./routes/email');

const planingRouter= require('./routes/planing');
const trainingDayRouter= require('./routes/trainingday');

const panierRouter=require('./routes/panier')
const lignePanierRouter =require('./routes/lignePanier')
const categorieRouter=require('./routes/categorie')
const produitRouter=require('./routes/produit')
const eventRouter=require('./routes/event')





const db = require("./models/index");
var app = express();
db.sequelize
    .sync()
    .then(() => {
      console.log("Synced db.");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
    app.use(cors({
    origin: ["http://localhost:4200"], // "true" will copy the domain of the request back
    // to the reply. If you need more control than this
    // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));

app.use('/imageVitrine' , express.static('./public/images'))
app.use('/users', usersRouter);
app.use('/gym', gymRouter);

app.use('/suivi', suiviRouter);
app.use('/suivi/feedback', feedbackRouter);

app.use('/equipmentGym', equipmentGym);
app.use('/auth',authRouter  );
app.use('/annonce',annonceRouter);
app.use('/regime',regimeRouter);
app.use('/email',emailRouter);

app.use('/planing',planingRouter);
app.use('/trainingday',trainingDayRouter);

app.use('/categorie',categorieRouter);
app.use('/auth',authRouter  );

app.use('/produit',produitRouter);
app.use('/panier',panierRouter);
app.use('/lignePanier',lignePanierRouter);
app.use('/events',eventRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
    res.json({ error: err })
});
const port=process.env.PORT || 3000;
const server= http.createServer(app);
server.listen(port,function() {
  console.log(`server started at ${port}`);
})

