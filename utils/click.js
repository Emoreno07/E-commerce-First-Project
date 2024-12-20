export default function addClickOnLivro(livros){
    livros.forEach((element) =>{
        element.addEventListener('click', function(){
            var json = {
                'livroimg' : '',
                'titulo' : '',
                "autor" : '',
                'rating' : 0,
                'paginas': 0,
                'preco' : 0,
            }

            //não consegui desenvolver uma melhor lógica que esta
            for (const children of this.children) {
                
                if(children.className === 'imglivro')
                    {
                        json.livroimg = children.src
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
                else if(children.className === 'paginas')
                    {
                        json.paginas = children.innerHTML
                    }
                else if(children.className === 'price'){
                    json.preco = children.innerHTML
                }
            }
            //guarda as informações e deixa na página de produto
            localStorage.setItem('CurrentProduct',JSON.stringify(json))
            location.href = '../pages/product.html'
        })
       })
}