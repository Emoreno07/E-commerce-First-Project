import GetCurrentLocationPath from "../../../utils/Path.js";
import CreateStars from "../../../utils/stars.js";
export default function MakeBook(imgSource, title, author,rating = 0, qtaPaginas = 0, prize = 0){
    const path = GetCurrentLocationPath();
    const livroComum = `<div class="livro" id="${qtaPaginas}">
                            <span class="rating">${rating}</span>
                            <span class="paginas">${qtaPaginas}</span>
                            <img src="${imgSource}" class="imglivro"   alt="" srcset="">
                            <div class="estrelas">
                                ${CreateStars(rating)}
                            </div>
                            <p class="titulo">${title}</p>
                            <p class="autor">${author}</p>
                        </div>` ;

    const livroCarrinho = `<div class="products_carrinho">
                                <img class="imgs_carrinho" src="${imgSource}" alt="" srcset="">
                                <p class="descricao_carrinho">${title} : ${author} </p>
                                <p class="preco_carrinho">preco: ${prize}R$</p>
                            </div>`;

    const livroUnico = `<div id="livro">
                        <section id="conjunto_de_livro">
                            <div id="livro_produto">
                                <img id="img_livro_produto" src="${imgSource}" alt="" srcset="">
                                <div id="estrelas">
                                    ${CreateStars(rating)}
                                </div>
                                <p id="avaliações">avaliações: 0</p>
                                <p id="preco"><strong>Preço: ${prize}R$</strong></p>               
                            </div>
                            <div id="info_livro">
                                <p id="titulo">${title}</p>
                                <p id="autor">${author}</p>
                                <p id="Paginas">${qtaPaginas} Páginas</p>
                                <p id="Sinopse"><strong>SINOPSE</strong> 
                                     uhuuuuuu</p>                                
                            </div>
                        <button id="add_carrinho">Adicionar ao carrinho</button>
                        </section>`
    const whichBook = () =>{
        if(path === 'carrinho'){
            return livroCarrinho
        }
        else if(path === 'product'){
            return livroUnico
        }
        else{
            return livroComum
        }
    }
    return new DOMParser().parseFromString(whichBook(),'text/html').body.firstChild;
}