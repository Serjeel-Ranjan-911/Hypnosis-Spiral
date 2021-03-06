const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const mainRoute = require('./routes/main');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use(mainRoute);

app.listen(process.env.PORT || 3000);