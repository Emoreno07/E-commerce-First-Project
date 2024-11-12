import Categorias from "./components/categorias/categorias.js"
import makeHeader from "./components/header/header.js";
import { bancoDeLivros } from "./banco.js";
document.querySelector('body').onload = () => {
    document.querySelector('.container')
    .insertBefore(makeHeader(), document.querySelector('.container').firstChild);
    document.querySelector('#main_content')
    .insertBefore(Categorias(), document.querySelector('#main_content').firstChild);
}