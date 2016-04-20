/**
 * Created by Admin on 4/19/16.
 */
var moment = require('moment');
module.exports = function(params, res) {

    var operation = params[0];
    var age = moment().diff(operation, 'years');
    res.write(age.toString());
    res.end('\n');
};

