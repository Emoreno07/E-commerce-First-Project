import Categorias from "./components/categorias/categorias.js"
import makeHeader from "./components/header/header.js";
import { bancoDeLivros } from "./banco.js";
document.querySelector('body').onload = () => {
    document.querySelector('.container')
    .insertBefore(makeHeader(), document.querySelector('.container').firstChild);
    document.querySelector('#main_content')
    .insertBefore(Categorias(), document.querySelector('#main_content').firstChild);
    document.querySelector('#p_carrinho').innerHTML = 'Itens no carrinho: ' +
    ((localStorage.getItem('carrinho') === null) ? 0 : JSON.parse(localStorage.getItem('carrinho')).items.length)
    
    document.querySelector('#carrinho_img').addEventListener('click', ()=>{
        location.href = '/pages/carrinho.html'
    })
}