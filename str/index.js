/**
 * Created by Admin on 4/19/16.
 */
module.exports = function(params, res) {

    var operation = params.shift();  // math, pow, etc.

    switch(operation) {
        case 'Count':
            var sum = params.length;
            console.log(sum);
            res.write(sum.toString());
            break;
        case 'Characters':
            var chars = params.reduce(function(it,word){return it+word});
            var len = chars.length;
            console.log(len);
            res.write(len.toString());
            break;
        case 'Average':
            var sum = params.length;
            var chars = params.reduce(function(it,word){return it+word});
            var len = chars.length;
            var avg = len/sum;
            console.log(avg);
            res.write(avg.toString());
            break;
    }
    res.end('\n');
};
