let url = require('url');
let path = require('path');
let fs = require('fs');
let baseHandler = require('./baseHandler');



module.exports = function(app) {
    app.get('/xxx/yyy/zzz', function(req, res) {

    });







    
    app.get('*', function (req, res) {
        baseHandler(req, res);
    });
}