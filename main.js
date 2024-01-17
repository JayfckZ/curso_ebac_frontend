$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault()

        $(`<li style="display: block">${$('#inpt-tarefa').val()}</li>`).appendTo('ol')
    })

    $('ol').on('click', 'li', function(){
        $(this).toggleClass('click')
    })

})