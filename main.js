/**
 * Created by Admin on 4/19/16.
 */
$(document).ready(function() {init()});
function init() {
   $('#getgrav').on('click',function() {
       var email = ($('#email').val());
       console.log('grav/'+email);
       $.get( 'grav/'+email, function( data ) {
           var img = $('<img>',{src:data});
           $('#gravitar').append(img);
       });
   });
    $('.arith').on('click',function() {
        var num1 = $('#num1').val();
        var num2= $('#num2').val();
        var op = ($(this).text());
        $.get( 'math/'+op+'/'+num1+'/'+num2, function( data ) {
            var ans = $('<div>',{text:data});
            $('#arithanswer').text(data);
        });
    });
    $('#getexp').on('click',function() {
        var num1 = $('#num1').val();
        var num2= $('#num2').val();
        $.get( 'math/exponent/'+num1+'/'+num2, function( data ) {
            var ans = $('<div>',{text:data});
            $('#arithanswer').text(data);
        });
    });
    $('.words').on('click',function() {
        var sentence = $('#sentence').val().split(' ').join('/');
        $.get( 'str/'+$(this).text()+'/'+sentence, function( data ) {
            var ans = $('<div>',{text:data});
            $('#wordanswer').text(data);
        });
    });
    $('#getage').on('click',function() {
        var month = $('#month').val();
        if (month<10){month = '0'+ month.toString()}
        var day = $('#day').val();
        if (day <10){day = '0'+ day.toString()}
        var year = $('#year').val().toString();
        var age = year+'-'+month+'-'+day;
      //  console.log(age);
        if (age.length === 10) {
            $.get('age/' + age, function (data) {
                var ans = $('<div>', {text: data});
                $('#ageanswer').text(data);
            });
        }
    })
}

