$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000"); // plugin de mascara para o telefone

    $("form").validate({ // colocando a validação obrigatoria nos campos
        rules: {
            nome: {
                required: true
            },
            mensagem: {
                required: true
            },
            telefone: {
                required: false
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: { // alterando a mensagem padrão
            nome: "Por favor, insira seu nome",
            mensagem: "Por favor, complete este campo com a sua notícia",
            email: "Por favor, insira um e-mail válido"
        },
        submitHandler: function(form) {
            alert("Notícia enviada com sucesso!");
            $("#nome").val("");
            $("#mensagem").val("");
            $("#telefone").val("");
            $("#email").val("");
        },
        invalidHandler: function(evento, validador) { // colocando um alerta para o usuario saber quantos campos ele não preencheu
            let campos_incorretos = validador.numberOfInvalids();
            if (campos_incorretos) {
                alert(`Existem ${campos_incorretos} campos incorretos`);
            }
        }
    });
});