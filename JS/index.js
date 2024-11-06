//banco dos livros
//paro casos de teste, as avaliações, rating e paginas estão usando Math.Random e não são fixas
import makeHeader from "./components/header.js";
import Categorias from "./components/categorias.js";
import { bancoDeLivros } from "./banco.js";
const ImagesNovidades = {
    images: [
    '../Images/A 5 passos de Voce.jpg',
    '../Images/A_marca_de_atena.png',
    '../Images/A_socidade_do_anel.png',
    '../Images/a_torre_de_nero.png',
    '../Images/A-maldicao_do_tita.jpg'],
    autores: [
        'unknown',
        'Rick Iordan',
        'sei la',
        'Rick Iordan',
        'Rick Iordan',
    ],
    nome : [
        'A 5 passos de você',
        'A marca de atena',
        'A sociedade do anel',
        'A torre de nero',
        'A maldição do tita'
    ],
    Paginas: [
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
    ]
}

const ImagesMaisVendidos = {
    images :[
        '../Images/as_provacoes_de-apollo.png',
        '../Images/batalha_do_labirinto.png',
        '../Images/DUNA.jpg',
        '../Images/É assim que acaba.png',
        '../Images/harry potter e a pedra.png'

    ],
    autores :[
        'Rick Iordan',
        'Rick Iordan',
        'Alguém',
        'Alguém também',
        'J.K Rowling'
    ],
    nome: [
        'as provações de Apollo',
        'A batalha do labirinto',
        'DUNA',
        'É assim que acaba',
        'Harry potter e a pedra filosofal'
    ],
    Paginas: [
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
    ]
}

const ImagesInternacionais = {
    images :[
        '../Images/labirinto_de-fogo.png',
        '../Images/mais_esperto_que_o_diabo.png',
        '../Images/menino_pijama.png',
        '../Images/O_filho_de_netuno.jfif',
        '../Images/o_gambito_da_rainha.webp'

    ],
    autores :[
        'Rick Iordan',
        'Napoleon Hill',
        'John Boyne',
        'Rick Iordan',
        'Walter'
    ],
    nome: [
        'O Labirinto de fogo',
        'Mais esperto que o diabo',
        'o Menino do pijamas listrado',
        'O filho de Netuno',
        'O gambito da rainha'
    ],
    Paginas: [
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
    ]
}
const ImagesPodeSerDoSeuInteresse = {
    images :[
        '../Images/o_pequeno_principe.webp',
        '../Images/O_ultimo_olimpiano.png',
        '../Images/quem_mexeu_no_meu_queijo.png',
        '../Images/reliquias da morte.png',
        '../Images/the_house_of_hades.png'

    ],
    autores :[
        'Antonie',
        'Rick Iordan',
        'Spencer Jhonson',
        'J.K Rowling',
        'Rick Iordan'
    ],
    nome: [
        'O pequeno Príncipe',
        'O ultimo Olimpiano',
        'Quem mexeu no meu queijo',
        'Harry Potter e as reliquias da morte',
        'A casa de Hades'
    ],
    Paginas: [
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
        Math.trunc(Math.random() * 450),
    ]
}

//funcção para criar e colocar um livro na categoria.

 function CreateBook(img, rating, name, author,qtaPaginas)
{
    const livro = document.createElement('div')
    livro.setAttribute('class','livro')
    const imgLivro = document.createElement('img')
    imgLivro.src = img
    imgLivro.setAttribute('class','imglivro')
    livro.appendChild(imgLivro)
    const stars = document.createElement('div')
    stars.setAttribute('class','estrelas')

    //colocando as estrelas de acordo com o rating(avaliações)
    //coloca as primeiras x. estrelas do rating  (eg 4.6 rating = 4)

    for(let i = 0; i < Math.trunc(rating); i++){
        const star = document.createElement('img')
        star.src = '../Images/estrela-cheia.png'
        stars.appendChild(star)
    }
    //adiciona uma estrela pela metade se o rating for decimal

    if(Math.trunc(rating) < rating)
        {
            let star_middle = document.createElement('img')
            star_middle.src = '../Images/estrela_metade.png'
            stars.appendChild(star_middle)
        }
    //completa o resto das 5 estrelas com estrelas em branco, se houver

    for(let i = 0; i < Math.abs(Math.trunc(rating) - 4); i++)
        {
            let star_empty = document.createElement('img')
            star_empty.src = '../Images/star.png'
            stars.appendChild(star_empty)
        }
        //informações adicionais
    const aux = document.createElement('p')
    aux.style.display = 'none'
    aux.setAttribute('class','rating')
    aux.innerHTML = Math.round(rating * 10) / 10
    const paginas = document.createElement('p')
    paginas.style.display = 'none'
    paginas.setAttribute('class',"Paginas")
    paginas.innerHTML = qtaPaginas
    livro.appendChild(stars)
    const autor = document.createElement('p')
    const nome = document.createElement('p')
    autor.innerHTML = author
    autor.setAttribute('class','autor')
    nome.innerHTML = name
    nome.setAttribute('class','titulo')

    //aux é apenas referência do rating para estar no onClickListener do livro

    livro.appendChild(nome)
    livro.appendChild(autor)
    livro.appendChild(aux)
    livro.appendChild(paginas)
    return livro
}




    document.getElementsByTagName('body')[0].onload = function(){
        document.querySelector('.container')
        .insertBefore(makeHeader(), document.querySelector('.container').firstChild);
        document.querySelector('#main_content')
        .insertBefore(Categorias(), document.querySelector('#main_content').firstChild);
        
        document.querySelector('#p_carrinho').innerHTML = 'Itens no carrinho: ' +
        ((localStorage.getItem('carrinho') === null) ? 0 : JSON.parse(localStorage.getItem('carrinho')).items.length)

        document.querySelector('#imglogo').addEventListener('click',()=>{
            location.href = '../pages/index.html'
        })

        document.querySelector('#carrinho_img').addEventListener('click', ()=>{
            location.href = '../pages/carrinho.html'
        })

        
        //colocando os produtos nas categorias de livros
        
        ImagesNovidades.images.forEach((element, index) =>{
            document.querySelector("#Novidades").appendChild(
                CreateBook(
                    element,
                    ((Math.random() + 1) * 2),
                    ImagesNovidades.nome[index],
                    ImagesNovidades.autores[index],
                    ImagesNovidades.Paginas[index]))
        })

        ImagesMaisVendidos.images.forEach((element, index ) =>{
            document.querySelector('#MaisVendidos').appendChild(
                CreateBook(
                    element,
                    ((Math.random() + 1) * 2),
                    ImagesMaisVendidos.nome[index],
                    ImagesMaisVendidos.autores[index],
                    ImagesMaisVendidos.Paginas[index]
                )
            )
            
        })
        ImagesInternacionais.images.forEach((element, index) =>{
            document.querySelector('#LivrosInternacionais').appendChild(
                CreateBook(
                    element,
                    ((Math.random() + 1) * 2),
                    ImagesInternacionais.nome[index],
                    ImagesInternacionais.autores[index],
                    ImagesInternacionais.Paginas[index]
                )
            )
        })
        ImagesPodeSerDoSeuInteresse.images.forEach((element, index) =>{
            document.querySelector('#Interesse').appendChild(
                CreateBook(
                    element,
                    ((Math.random() + 1) * 2),
                    ImagesPodeSerDoSeuInteresse.nome[index],
                    ImagesPodeSerDoSeuInteresse.autores[index],
                    ImagesPodeSerDoSeuInteresse.Paginas[index]
                )
            )
        })

        //colocando o click de enviar o livro para a página de produto
       const livros = document.querySelectorAll('.livro')
       livros.forEach((element) =>{
        element.addEventListener('click', function(){
            var json = {
                'livroimg' : '',
                'estrelasimgs' : [],
                'titulo' : '',
                "autor" : '',
                'rating' : 0,
                'paginas': 0
            }

            //não consegui desenvolver uma melhor lógica que esta
            for (const children of this.children) {
                
                if(children.className === 'imglivro')
                    {
                        json.livroimg = children.src
                    }
                else if(children.className === 'estrelas')
                    {
                        for (const estrela of children.children) {
                            json.estrelasimgs.push(estrela.src)
                        }
                    }
                else if(children.className === 'titulo')
                    {
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
                else if(children.className === 'Paginas')
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
