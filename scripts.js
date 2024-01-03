<script>
    // Função para verificar se todos os campos estão preenchidos e habilitar o botão
    function verificarCamposPreenchidos() {
      var nome = document.getElementById('FNAME').value;
      var email = document.getElementById('EMAIL').value;
      var telefone = document.getElementById('PHONE').value;

      // Habilita o botão se todos os campos obrigatórios estiverem preenchidos
      if (nome && email && telefone) {
        document.getElementById('submitBtn').disabled = false;
      } else {
        // Desabilita o botão se algum campo estiver vazio
        document.getElementById('submitBtn').disabled = true;
      }
    }

    // Adiciona ouvintes de eventos para os campos do formulário
    document.getElementById('FNAME').addEventListener('input', verificarCamposPreenchidos);
    document.getElementById('EMAIL').addEventListener('input', verificarCamposPreenchidos);
    document.getElementById('PHONE').addEventListener('input', verificarCamposPreenchidos);
  
  
  
  <!-- função ajax -->
  
  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function onSubmitForm() {
    // Obtenha os dados do formulário (se necessário)
    var nome = document.getElementById('FNAME').value;
    var email = document.getElementById('EMAIL').value;
    var telefone = document.getElementById('PHONE').value;

    // Realize a lógica de envio do formulário via Ajax aqui (use a biblioteca Fetch ou XMLHttpRequest)
    // ...

    // Oculta o popup após o envio do formulário
    fecharPopup();
  }
  
  
  </script>