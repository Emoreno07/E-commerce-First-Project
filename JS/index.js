const ImagesNovidades = {
    images: [
    '../Images/A 5 passos de Voce.jpg',
    '../Images/A_marca_de_atena.png',
    '../Images/A_socidade_do_anel.png',
    '../Images/a_torre_de_nero.png',
    '../Images/A-maldicao_do_tita.jpg'],

}

const ImagesMaisVendidos = {}
 function CreateBook(img, rating, name, author)
{
    const livro = document.createElement('div')
    livro.setAttribute('class','livro')
    const imgLivro = document.createElement('img')
    imgLivro.src = img
    imgLivro.setAttribute('class','imglivro')
    livro.appendChild(imgLivro)
    const stars = document.createElement('div')
    stars.setAttribute('class','estrelas')
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
    livro.appendChild(stars)
    const autor = document.createElement('p')
    const nome = document.createElement('p')
    autor.innerHTML = author
    autor.setAttribute('class','autor')
    nome.innerHTML = name
    nome.setAttribute('class','titulo')
    livro.appendChild(nome)
    livro.appendChild(autor)
    
    return livro
}




    document.getElementsByTagName('body')[0].onload = () =>{
        document.querySelector('#imglogo').addEventListener('click',()=>{
            location.href = '../pages/index.html'
        })
        ImagesNovidades.images.forEach((element, index) =>{
            document.querySelector("#Novidades").appendChild(
                CreateBook(
                    element,
                    ((Math.random() + 1) * 2),
                    'titulo '+(index+1),
                    'autor '+(index+1)))
        })
        
       const livros = document.querySelectorAll('.livro')
       livros.forEach((element) =>{
        element.addEventListener('click', function(){
            var json = {
                'livroimg' : '',
                'estrelasimgs' : [],
                'titulo' : '',
                "autor" : ''
            }
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
            }
            localStorage.setItem('CurrentProduct',JSON.stringify(json))
            // location.href = '../pages/product.html'
        })
       })
    }
