import GetCurrentLocationPath from "../../../utils/Path.js";
import CreateStars from "../../../utils/stars.js";
export default function MakeBook(imgSource, title, author,rating = 0, qtaPaginas = 0, prize = 0){
    const path = GetCurrentLocationPath();
    //livro colocado nas páginas de index e todos.hmtl
    const livroComum = `<div class=" flex-container flex-center flex-column livro" id="${qtaPaginas}">
                            <span class="price">${Math.round(prize)}</span>
                            <span class="rating">${rating}</span>
                            <span class="paginas">${qtaPaginas}</span>
                            <img src="${imgSource}" class="imglivro"   alt="" srcset="">
                            <div class="flex-container flex-center estrelas">
                                ${CreateStars(rating)}
                            </div>
                            <p class="titulo">${title}</p>
                            <p class="autor">${author}</p>
                        </div>` ;
//livro do carrinho
    const livroCarrinho = `<div class="flex-container flex-center product-carrinho">
                                <img class="imgs_carrinho" src="${imgSource}" alt="" srcset="">
                                <p class="flex-container flex-center descricao_carrinho">${title} : ${author} </p>
                                <p class="flex-container flex-center preço-item-carrinho">preço: ${prize}R$</p>
                            </div>`;
    //livro do product.html
    const livroUnico = `<section class="flex-container flex-center area-livro-unico">
                            <div class="flex-container flex-center flex-column livro" id="livro-unico">
                                <img id="img-livro-produto" src="${imgSource}" srcset="">
                                
                                <div class="flex-container flex-center estrelas ">
                                ${CreateStars(rating)}
                                </div>
                                <p id="avaliações">avaliações: 0</p>
                                <p id="preco"><strong>Preço: ${prize}R$</strong></p>               
                            </div>
                            <div class="flex-container info-livro">
                                <h2>${title}</h2>
                                <div class="flex-container">
                                    <p class="info-livro-special-p">${author}</p>
                                    <p class="info-livro-special-p">${qtaPaginas} Páginas</p>
                                </div>
                                
                                <p id="Sinopse">
                                <strong>SINOPSE</strong> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium et error velit, iure assumenda odit minus? Ratione corrupti aspernatur, nam iste id eveniet, mollitia aut aliquid excepturi sed voluptatem?
                                </p>    
                                <button id="add-carrinho">Adicionar ao Carrinho</button>                            
                            </div>
                            
                        </section> 
                        `
     //verifica que livro a função retornará de acordo com o a páagina
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