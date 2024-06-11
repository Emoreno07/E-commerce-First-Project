document.querySelector('body').onload = () => {
    document.querySelector('#p_carrinho').innerHTML = 'Itens no carrinho: ' +
    ((localStorage.getItem('carrinho') === null) ? 0 : JSON.parse(localStorage.getItem('carrinho')).items.length)
    document.querySelector('#imglogo').addEventListener('click',()=>{
            location.href = '../pages/index.html'
        })
    document.querySelector('#carrinho_img').addEventListener('click', ()=>{
        location.href = '../pages/carrinho.html'
    })
}