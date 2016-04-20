/**
 * Created by Admin on 4/19/16.
 */

'use strict';

const PORT = 3000;

var http = require('http');
var md5 = require('md5');
var fs = require('fs');
var server = http.createServer((req, res) => {
        console.log(req.url);
        if (req.url === '/') {
            var data = fs.readFileSync('./index.html');
             res.end(data.toString());
            return;
    }
        else if (req.url === '/main.js') {
             var data = fs.readFileSync('./main.js');
             res.end(data.toString());
            return;
        }

        else {
        var params = req.url.split('/');
        params.shift();
            console.log(params);
            var hashed = 'https://s.gravatar.com/avatar/'+md5(params[1]);
            console.log(hashed);
        var task = params.shift().toLowerCase();
            switch(task) {

                case 'math': require('./math')(params, res); break;
                case 'str': require('./str')(params, res); break;
                case 'age': require('./age')(params, res); break;
                case 'grav': res.write(hashed);

                default:
                    res.statusCode=404;
                    res.write('Not FOund');
                    res.write('Default.');
                    res.end('\n');
            }

}

    function servePages(){
        
    }
res.end('\n');
});

server.listen(PORT, function(err) {
    if(err) return console.log('error!:', err);
    console.log(`Node server listening on port ${PORT}`);
});
