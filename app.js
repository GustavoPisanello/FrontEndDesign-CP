
function Comprar(){
    let cupom = document.getElementById("cupom").value
    let qty = document.getElementById("qtd").value
    let value = 55.9
    let discount = 0
    let result = qty * value
    let total = 0

    if (qty == 0){
        alert("Nenhum item foi adicionado ao carrinho :(")
    }
    else{
        if (cupom.toUpperCase() == "FIAP2024"){
            discount = 0.1
            total = result - (discount * result)
        }
        else{
            total = result
        }

            total = total.toString()
            total = total.replace(".", ",")

        alert(`Item(ns) adicionado(s) ao carrinho! O valor total ficou em: R$${total}.`)

        localStorage.setItem('valueText', total)
        window.location.replace("index.html")
    }

    
}

function mostraCarrinho(){
    
    let itemCarrinho = document.getElementById("itemCarrinho");
    let btnRemove = `<button class="removeItem" onClick="removeItem()"> <img class="imgDeleteItem" src="img/lixeira.png"></button>`
    
    if (itemCarrinho.classList.contains("visivel")){
        itemCarrinho.classList.add("invisivel")
        itemCarrinho.classList.remove("visivel")
        }
    else{
        itemCarrinho.classList.add("visivel")
        itemCarrinho.classList.remove("invisivel")
    }

    let total = localStorage.getItem('valueText')

    if(total == 0){
        itemCarrinho.innerHTML = `Você ainda não possui itens no carrinho...`
    }
    else{
        itemCarrinho.innerHTML = `Vinho FirstPress | Valor: R$${total} | ${btnRemove}`
    }
}

function removeItem(){
    localStorage.setItem('valueText', 0)
    location.reload()
}

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