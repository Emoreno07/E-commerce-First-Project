import GetCurrentLocationPath from "../../../utils/Path.js";
import CreateStars from "../../../utils/stars.js";
export default function MakeBook(imgSource, title, author,rating = 0, qtaPaginas = 0, prize = 0){
    const path = GetCurrentLocationPath();
    const livroComum = `<div class=" flex-container flex-center flex-column livro" id="${qtaPaginas}">
                            <span class="rating">${rating}</span>
                            <span class="paginas">${qtaPaginas}</span>
                            <img src="${imgSource}" class="imglivro"   alt="" srcset="">
                            <div class="flex-container flex-center estrelas">
                                ${CreateStars(rating)}
                            </div>
                            <p class="titulo">${title}</p>
                            <p class="autor">${author}</p>
                        </div>` ;

    const livroCarrinho = `<div class="flex-container flex-center product-carrinho">
                                <img class="imgs_carrinho" src="${imgSource}" alt="" srcset="">
                                <p class="descricao_carrinho">${title} : ${author} </p>
                                <p class="preço-item-carrinho">preço: ${prize}R$</p>
                            </div>`;

    const livroUnico = `<section class="flex-container flex-center area-livro-unico">
                            <div class="flex-container flex-center flex-column livro" id="livro-unico">
                                <img id="img-livro-produto" src="${imgSource}" srcset="">
                                
                                <div class="flex-container flex-center estrelas ">
                                ${CreateStars(rating)}
                                </div>
                                <p id="avaliações">avaliações: 0</p>
                                <p id="preco"><strong>Preço: ${prize}</strong></p>               
                            </div>
                            <div class="flex-container info-livro">
                                <h2>${title}</h2>
                                <p class="info-livro-special-p">${author}</p>
                                <p class="info-livro-special-p">${qtaPaginas} Páginas</p>
                                <p id="Sinopse"><strong>SINOPSE</strong> 
                                    UMa Sinopse Aqui</p>    
                                <button id="add-carrinho">Adicionar ao Carrinho</button>                            
                            </div>
                            
                        </section> 
                        `
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