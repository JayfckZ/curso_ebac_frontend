$(document).ready(function(){
    $('#celular').mask('(00)00000-0000', {
        placeholder: '(xx)xxxxx-xxxx'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
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
            celular:{
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true,
                minlength: 6
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: 'O nome deve estar completo.',
            email: 'O email deve ser válido.',
            celular: 'O número deve ser válido.',
            cpf: 'O CPF deve ser válido.',
            endereco: 'O endereço deve estar completo.',
            cep: 'O CEP deve ser válido.'            
        },
        submitHandler: function(){
            $('#formulario').hide()
            $('#feito').show()
        },
        invalidHandler: function(e, validador){
            const camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos){
                alert(`Há ${camposIncorretos} campos incorretos.`)
            }
        }
    })




})