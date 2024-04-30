const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (name.value && email.value && message.value) {
    alert('Mensagem enviada com sucesso');
    name.value = '';
    email.value = '';
    message.value = '';
  } else {
    alert('Preencha todos os campos');
  }
});