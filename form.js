$(function(){
    $('input[type=submit]').click(sendData);
})
function sendData(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/clstnature@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            lastname: $('#lastname').val(),
        },
       dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
    });
}