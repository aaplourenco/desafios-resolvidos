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
        saldoConta.innerHTML = '<img class="retorno--icone" src="img/more-gray.png" alt="Saldo">';
        saldoConta.classList.remove('saldo-aberto');
        limiteDisponivel.innerHTML = '<img class="retorno--icone" src="img/more-black.png" alt="Limite Disponível">';
        limiteDisponivel.classList.remove('limite-aberto');
        isOpen = false;
    }
});