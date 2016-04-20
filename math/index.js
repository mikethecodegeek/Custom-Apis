/**
 * Created by Admin on 4/19/16.
 */
module.exports = function(params, res) {

    var operation = params.shift();  // math, pow, etc.
    console.log('Math loaded');
    console.log(operation);
    switch(operation) {
        case 'add':
            var sum = params.reduce(function(it,num){return parseInt(it)+parseInt(num)});
            console.log(sum);
            res.write(sum.toString());
            break;
        case 'Subtract':
            var min = params.reduce(function(it,num){return parseInt(it)-parseInt(num)});
            console.log(min);
            res.write(min.toString());
            break;
        case 'Multiply':
            var mult = params.reduce(function(it,num){return parseInt(it)*parseInt(num)});
            console.log(mult);
            res.write(mult.toString());
            break;
        case 'Divide':
            var div = params.reduce(function(it,num){return parseInt(it)/parseInt(num)});
            console.log(div);
            res.write(div.toString());
            break;
        case 'exponent':
            var exp = params.reduce(function(it,num){return Math.pow(parseInt(it),parseInt(num))});
            console.log(exp);
            res.write(exp.toString());
            break;
    }
    res.end('\n');
};

