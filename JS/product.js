import makeHeader from "./components/header.js"



document.getElementsByTagName('body')[0].onload = () =>{
    document.querySelector('.container')
    .insertBefore(makeHeader(), document.querySelector('.container').firstChild)
    //quantidade de itens no carrinho
    document.querySelector('#p_carrinho').innerHTML = 'Itens no carrinho: ' +
    ((localStorage.getItem('carrinho') === null) ? 0 : JSON.parse(localStorage.getItem('carrinho')).items.length)
    document.querySelector('#imglogo').addEventListener('click',()=>{
            location.href = '../pages/index.html'
        })
    document.querySelector('#carrinho_img').addEventListener('click', ()=>{
        location.href = '../pages/carrinho.html'
    })
    //colocando as informações do livro
    //Import estava dando problemas portanto decidi optar por refazer(copiar e colar) codigo do CreateBook
    const selected_product = JSON.parse(localStorage.getItem('CurrentProduct'))
    const imgProduct = document.querySelector("#img_livro_produto")
    imgProduct.src = selected_product.livroimg
    const rating = selected_product.rating
    const stars = document.querySelector('#estrelas')
    const desc = document.querySelector('#titulo')
    desc.innerHTML = selected_product.titulo
    document.querySelector('#avaliações').innerHTML = 'Avaliações: ' + Math.round(Math.random()* 10)
    document.querySelector("#autor").innerHTML = selected_product.autor
    document.querySelector('#Paginas').innerHTML = selected_product.paginas + ' Páginas'
    for(let i = 0; i < Math.trunc(rating); i++){
        const star = document.createElement('img')
        star.src = '../Images/estrela-cheia.png'
        stars.appendChild(star)
    }
    if(Math.trunc(rating) < rating)
        {
            let star_middle = document.createElement('img')
            star_middle.src = '../Images/estrela_metade.png'
            stars.appendChild(star_middle)
        }
    for(let i = 0; i < Math.abs(Math.trunc(rating) - 4); i++)
        {
            let star_empty = document.createElement('img')
            star_empty.src = '../Images/star.png'
            stars.appendChild(star_empty)
        }
    var items = {
        'items' : []
    }
    //adiciona no carrinho

    document.querySelector('#add_carrinho').onclick = () =>{
        if(localStorage.getItem('carrinho') === null)
            localStorage.setItem('carrinho',JSON.stringify(items))
        const carrinho = JSON.parse(localStorage.getItem('carrinho'))
        carrinho.items.push(JSON.parse(localStorage.getItem('CurrentProduct')))
        localStorage.setItem('carrinho',JSON.stringify(carrinho))
        alert("O seu produto foi adicionado ao carrinho")
        location.reload()
    }
}