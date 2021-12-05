$(function () {

  $('#tipo-cadastro-pj').on('click', function(){
    $("#data-nasc").attr("disabled", true); //desabilita o campo 'data de nascimento'
    $("[for='cpf-cnpj']").html("<b>CNPJ:</b>"); //troca o label de CPF para CNPJ
    $("#data-nasc").val(""); //oculta o campo data de nasc
    $("#data-nasc").parent().hide(); //oculta a div que é uma tag pai dessa tag
    $("#estudante").parent().hide();
    $("#ies").parent().hide();
    $("#matricula").parent().hide();
  });

/* essa parte é para ajeitar, pra quando for clicado como PF, a entrada. 
  Tem que voltar as infos que foram escondidas/substituidas */
  $('#tipo-cadastro-pf').on('click', function(){
    $("#data-nasc").attr("disabled", false); //habilita de volta o campo 'data de nascimento'
    $("[for='cpf-cnpj']").html("<b>CPF:</b>"); //troca o label de CNPJ para CPF
    $("#data-nasc").parent().show(); //mostra novamente a div que é uma tag pai dessa tag
    $("#estudante").parent().show();
    $("#ies").parent().show();
    $("#matricula").parent().show();
  });
  // desabilita os campos "matrícula" e "IES" caso não seja estudante.
  $('#tipo-cadastro-nao-estudante').on('click', function(){
    $("#matricula").attr("disabled", true); 
    $("#matricula").val("");
    $("#ies").val("");
    $("#ies").attr("disabled", true);
  });

  // desabilita os campos "matrícula" e "IES" caso não seja estudante.
  $('#tipo-cadastro-estudante').on('click', function(){
    $("#matricula").attr("disabled", false); 
    $("#matricula").val("");
    $("#ies").val("");
    $("#ies").attr("disabled", false);
  });



  // Verificação de dados inseridos
  $("#btn-enviar").on("click", function(evento){
    if($("#senha-1").val() !== $("#senha-2").val()){ // verifica se as senhas são diferentes
      evento.preventDefault();
      alert("Senhas diferentes");
    };

    var cpfCnpj = $("#cpf-cnpj").val();

    if ($("#tipo-cadastro-pf").is(":checked")) {
      if (cpfCnpj.length != 11) { //faz a verificação para do CPF - cpfCnpj != 11
        evento.preventDefault();
        alert('O CPF digitado é inválido');
      };
      
    } else { //faz a verificação para o CNPJ - cpfCnpj != 14
      if (cpfCnpj.length != 14) {
        evento.preventDefault();
        alert('O CNPJ digitado é inválido');
      };
      
    };

      
  });

})