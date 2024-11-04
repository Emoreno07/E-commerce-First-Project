//banco dos livros
//paro casos de teste, as avaliações, rating e paginas estão usando Math.Random e não são fixas
//Import estava dando problemas, então decidi copiar o banco


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


document.querySelector('body').onload = () =>{
    document.querySelector('#login').addEventListener('click', ()=>{
        location.href = '../pages/Login.html'
    })
    document.querySelector('#p_carrinho').innerHTML = 'Itens no carrinho: ' +
    ((localStorage.getItem('carrinho') === null) ? 0 : JSON.parse(localStorage.getItem('carrinho')).items.length)

    document.querySelector('#imglogo').addEventListener('click',()=>{
        location.href = '../pages/index.html'
    })

    document.querySelector('#carrinho_img').addEventListener('click', ()=>{
        location.href = '../pages/carrinho.html'
    })
    for(let i = 0; i < todosOsLivros.length; i++)
        {
            for(let j = 0; j < todosOsLivros[i].images.length; j++)
                {
                    document.querySelector('#todos-os-livros').appendChild(
                        CreateBook(
                            todosOsLivros[i].images[j],
                            ((Math.random() + 1) * 2),
                            todosOsLivros[i].nome[j],
                            todosOsLivros[i].autores[j],
                            todosOsLivros[i].Paginas[j]
                        )
                    )
                }
        }
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

