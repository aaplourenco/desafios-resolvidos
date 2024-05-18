const saldoClosedImg = document.querySelector('.img--top--closed');
const saldoConta = document.getElementById('saldo--conta--');
const limiteDisponivel = document.getElementById('limite--conta--');
    
let isOpen = false;
    
saldoClosedImg.addEventListener('click', () => {
    if (!isOpen) {
        saldoClosedImg.src = 'img/open.png';
        saldoConta.innerHTML = '<span class="saldo-aberto">R$100,00</span>';
        limiteDisponivel.innerHTML = '<span class="limite-aberto">R$100,00</span>';
        isOpen = true; 
    } else {
        saldoClosedImg.src = 'img/closed.png';
        saldoConta.innerHTML = '<h4 class="saldo--conta--pontos" alt="Itaú">....</h4>';
        saldoConta.classList.remove('saldo-aberto');
        limiteDisponivel.innerHTML = '<h4 id="saldo--gray" alt="Itaú">....</h4>';
        limiteDisponivel.classList.remove('limite-aberto');
        isOpen = false;
    }
});