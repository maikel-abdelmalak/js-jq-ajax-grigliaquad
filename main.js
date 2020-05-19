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
                quadrato.addClass('rosso');
                quadrato.text(numero)
            }else{
                quadrato.addClass('verde');
                quadrato.text(numero)
            }

        },
        error : function () {
        alert("E' avvenuto un errore.");
        }
    });
})


})
