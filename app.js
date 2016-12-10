'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: true
});

app.defineController(require('slet-viewcontroller'))

app.router('/', require('./viewctrl') )  

app.start(3000) 