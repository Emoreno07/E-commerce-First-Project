//banco dos livros
//paro casos de teste, as avaliações, rating e paginas estão usando Math.Random e não são fixas
//Import estava dando problemas, então decidi copiar o banco
import Categorias from "./components/categorias/categorias.js"
import makeHeader from "./components/header/header.js";
import { bancoDeLivros } from "./banco.js";
import addClickOnLivro from "../utils/click.js";
import MakeBook from "./components/livro/makelivro.js";
import MakeFooter from "./components/footer/footer.js";
import BarraMobile from "./components/barraMobile/barraMobile.js";
const todosOsLivros = bancoDeLivros;

document.querySelector('body').onload = () =>{
    document.querySelector('.container')
    .insertBefore(makeHeader(), document.querySelector('.container').firstChild);
    document.querySelector('body')
    .insertBefore(BarraMobile(), document.querySelector('body').firstChild);
    document.querySelector('main')
    .insertBefore(Categorias(), document.querySelector('main').firstChild);
    
    for(let i = 0; i < todosOsLivros.length; i++)
        {
            for(let j = 0; j < todosOsLivros[i].images.length; j++)
                {
                    document.querySelector('#todos-os-livros').appendChild(
                        MakeBook(
                            todosOsLivros[i].images[j],               
                            todosOsLivros[i].nome[j],
                            todosOsLivros[i].autores[j],
                            ((Math.random() + 1) * 2),
                            todosOsLivros[i].Paginas[j],
                            ((Math.random() + 1) * 100)
                        )
                    )
                }
        }
        const livros = document.querySelectorAll('.livro')
        addClickOnLivro(livros)
        document.querySelector('body')
        .appendChild(MakeFooter())
}

