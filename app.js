const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('nome-contato');
  const email = document.getElementById('email-contato');
  const message = document.getElementById('msg');

  if (name.value && email.value && message.value) {
    alert('Mensagem enviada com sucesso');
    name.value = '';
    email.value = '';
    message.value = '';
  } else {
    alert('Preencha todos os campos');
  }
});