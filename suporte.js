document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const responses = {
      'reembolso': '1. Faça login na sua conta da MicroWaved Games 2. Clique em "Compras" e localize o jogo ou item que você deseja reembolsar. 3. Selecione a compra e clique na opção "Gostaria de solicitar um reembolso". 4. Escolha o motivo do reembolso e adicione uma breve descrição. 5. Você receberá o valor de volta no método de pagamento original que você usou na compra',
      'erro no jogo': 'Use esses métodos para reparar o erro "1. Verifique a integridade dos arquivos do jogo" "2. Atualize os drivers da placa de vídeo" "3. Execute o jogo como administrador" "4. Reinstalar o jogo"',
      'problemas na compra':'1. Verifique o saldo do cartão de crédito/débito, 2. Verifique se há problemas de conexão, 3. Tente reiniciar o site.',
      'default': 'Desculpe, não entendi. Por favor, escolha uma das opções: Reembolso, Erro no Jogo ou Problemas na Compra.',
    };
  
    const addMessage = (message, sender) => {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
      messageDiv.innerHTML = message;
      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
    };
  
    const getBotResponse = (userMessage) => {
      const msg = userMessage.toLowerCase().trim();
      return responses[msg] || responses['default'];
    };
  
    const handleSend = () => {
      const userMessage = userInput.value;
      if (userMessage.trim() === '') return;
      addMessage(userMessage, 'user');
      userInput.value = '';
      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addMessage(botResponse, 'bot');
      }, 500)
    };
  
    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSend();
      }
    });
  });