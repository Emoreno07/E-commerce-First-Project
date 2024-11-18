import CreateStars from "../utils/stars.js";
import Categorias from "./components/categorias/categorias.js"
import MakeFooter from "./components/footer/footer.js";
import makeHeader from "./components/header/header.js";
import MakeBook from "./components/livro/makelivro.js";

document.getElementsByTagName('body')[0].onload = () =>{
    document.querySelector('.container')
    .insertBefore(makeHeader(), document.querySelector('.container').firstChild);
    document.querySelector('main')
    .insertBefore(Categorias(), document.querySelector('main').firstChild);
    const selected_product = JSON.parse(localStorage.getItem('CurrentProduct'))
    document.querySelector('main').insertBefore(
        MakeBook(
            selected_product.livroimg,
            selected_product.titulo,
            selected_product.autor,
            selected_product.rating,
            selected_product.paginas,
            Math.trunc(Math.random() * 100)
        )
    ,document.querySelector('.area-outros-livros'))
    let items = {
        'items' : []
    }
    //adiciona no carrinho

    document.querySelector('#add-carrinho').onclick = () =>{
        if(localStorage.getItem('carrinho') === null)
            localStorage.setItem('carrinho',JSON.stringify(items))
        const carrinho = JSON.parse(localStorage.getItem('carrinho'))
        carrinho.items.push(JSON.parse(localStorage.getItem('CurrentProduct')))
        localStorage.setItem('carrinho',JSON.stringify(carrinho))
        alert("O seu produto foi adicionado ao carrinho")
        location.reload()
    }
    document.querySelector('body')
    .appendChild(MakeFooter())
}