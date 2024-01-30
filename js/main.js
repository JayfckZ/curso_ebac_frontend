$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(xx)xxxxx-xxxx'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                minlength: 14
            },
            check: {
                required: true
            }
        },
        messages: {
            nome: 'O nome deve estar completo.',
            email: 'O email deve ser válido.',
            tel: 'O número deve ser válido.',
            check: 'Confirme que está de acordo.'
        },
        submitHandler: function(){
            $('#nome').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('.alert').show()
        }

    })
})