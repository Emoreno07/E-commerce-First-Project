//banco dos livros
//paro casos de teste, as avaliações, rating e paginas estão usando Math.Random e não são fixas
import Categorias from "./components/categorias/categorias.js"
import makeHeader from "./components/header/header.js";
import { bancoDeLivros } from "./banco.js";
import MakeBook from "./components/livro/makelivro.js";
const imagesNovidades = bancoDeLivros[0];

const imagesMaisVendidos = bancoDeLivros[1];

const imagesInternacionais = bancoDeLivros[2];
const imagesPodeSerDoSeuInteresse = bancoDeLivros[3];

//funcção para criar e colocar um livro na categoria.

    document.getElementsByTagName('body')[0].onload = function(){
        document.querySelector('.container')
        .insertBefore(makeHeader(), document.querySelector('.container').firstChild);
        document.querySelector('#main_content')
        .insertBefore(Categorias(), document.querySelector('#main_content').firstChild);
         
        //colocando os produtos nas categorias de livros
        
        imagesNovidades.images.forEach((element, index) =>{
            document.querySelector("#Novidades").appendChild(
                MakeBook(
                    element,
                    imagesNovidades.nome[index],
                    imagesNovidades.autores[index],
                    ((Math.random() + 1) * 2),
                    imagesNovidades.Paginas[index]
                )
            )
        })

        imagesMaisVendidos.images.forEach((element, index ) =>{
            document.querySelector('#MaisVendidos').appendChild(
                MakeBook(
                    element,
                    imagesMaisVendidos.nome[index],
                    imagesMaisVendidos.autores[index],
                    ((Math.random() + 1) * 2),
                    imagesMaisVendidos.Paginas[index]
                )
            )
            
        })
        imagesInternacionais.images.forEach((element, index) =>{
            document.querySelector('#LivrosInternacionais').appendChild(
                MakeBook(
                    element,
                    imagesInternacionais.nome[index],
                    imagesInternacionais.autores[index],
                    ((Math.random() + 1) * 2),
                    imagesInternacionais.Paginas[index]
                )
            )
        })
        imagesPodeSerDoSeuInteresse.images.forEach((element, index) =>{
            document.querySelector('#Interesse').appendChild(
                MakeBook(
                    element,
                    imagesPodeSerDoSeuInteresse.nome[index],
                    imagesPodeSerDoSeuInteresse.autores[index],
                    ((Math.random() + 1) * 2),
                    imagesPodeSerDoSeuInteresse.Paginas[index]
                )
            )
        })

        //colocando o click de enviar o livro para a página de produto

       const livros = document.querySelectorAll('.livro')
       livros.forEach((element) =>{
        element.addEventListener('click', function(){
            var json = {
                'livroimg' : '',
                'titulo' : '',
                "autor" : '',
                'rating' : 0,
                'paginas': 0,
                'preco' : (Math.trunc(Math.random() * 100))
            }

            //não consegui desenvolver uma melhor lógica que esta
            for (const children of this.children) {
                
                if(children.className === 'imglivro')
                    {
                        json.livroimg = children.src
                    }
                else if(children.className === 'titulo')
                    {
                        console.log("AA: " + children.innerHTML)
                        json.titulo = children.innerHTML
                    }
                else if(children.className === 'autor')
                    {
                        json.autor = children.innerHTML
                    }
                else if(children.className === 'rating')
                    {
                        json.rating = children.innerHTML
                    }
                else if(children.className === 'paginas')
                    {
                        json.paginas = children.innerHTML
                    }
            }
            //guarda as informações e deixa na página de produto
            localStorage.setItem('CurrentProduct',JSON.stringify(json))
            location.href = '../pages/product.html'
        })
       })
    }
