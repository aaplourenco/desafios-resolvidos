const balao = document.querySelector(".balao--container");

balao.onclick = function(event) {
    const destruirBalao = event.currentTarget;
    destruirBalao.remove();
}