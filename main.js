$(document).ready(function(){

    var fonte = $('#grill').html()
    var template = Handlebars.compile(fonte);
    var html = template()

    for(var i=0; i<36; i++){
        $('.griglia').append(html)
    }

$('.quadrato').click(function(){
    var quadrato = $(this);


    $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : 'GET',
        success : function(data) {
            var numero = data.response
            if(numero <= 5){
                quadrato.removeClass('verde');
                quadrato.addClass('rosso');
                quadrato.find('p').text(numero)
            }else{
                quadrato.removeClass('rosso');
                quadrato.addClass('verde');
                quadrato.find('p').text(numero)
            }

        },
        error : function () {
        alert("E' avvenuto un errore.");
        }
    });
})


})
