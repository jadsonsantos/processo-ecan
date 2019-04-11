/** Oculta a estrutura para preço antigo no HTML, caso ele não exista */
function verificaSeExistePrecoAntigo() {

    var precoSemDesconto = document.getElementsByClassName('preco-sem-desconto');

    for (var i = 0; i < precoSemDesconto.length; i++) {

        var texto = precoSemDesconto[i].innerText;

        if (texto.length == 0) {
            precoSemDesconto[i].classList.add('inactive');
        }
    }
}

function menuMobile() {

    var x = document.querySelector('.mobile-btn');

    x.onclick = function () {
        this.classList.toggle("active");
        document.querySelector('.menu-mb').classList.toggle("active");
    }
}


verificaSeExistePrecoAntigo();
menuMobile();
