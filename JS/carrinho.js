import makeHeader from "./components/header/header.js";
import MakeBook from "./components/livro/makelivro.js";
import MakeFooter from "./components/footer/footer.js";
import BarraMobile from "./components/barraMobile/barraMobile.js";

document.querySelector('body').onload = () =>{
    document.querySelector('body')
    .insertBefore(makeHeader(), document.querySelector('body').firstChild);
    document.querySelector('body')
    .insertBefore(BarraMobile(), document.querySelector('body').firstChild);

    const carrinho = JSON.parse(localStorage.getItem('carrinho'))
    if(carrinho === null)
        {
            const nolivros = "<p><strong>Você não possui Itens no momento!</strong></p>"
            document.querySelector('.itens-carrinho').appendChild(new DOMParser().parseFromString(nolivros,'text/html').body.firstChild)
        }
    else
    {
        for(let i = 0; i < carrinho.items.length; i++)
            {
                const livro = (carrinho.items[i])
                document.querySelector('.itens-carrinho').appendChild(
                    MakeBook(
                        livro.livroimg,
                        livro.titulo,
                        livro.autor,
                        undefined,
                        undefined,
                        livro.preco
                    )
                )
            }
    }
    let total_livros = 0
    document.querySelectorAll('.preço-item-carrinho').forEach((element) =>{
        //pega o número dentro do texto: Preço: x.xR$
       total_livros += parseFloat(element.innerHTML.match(/\d+(\.\d{0,2})?/g)[0])
    })
    const valor = document.querySelector("#valor")
    console.log(total_livros)
    valor.innerHTML += ` ${total_livros}R$`
    const frete = document.querySelector('#frete')
    frete.innerHTML +=  ` ${Math.round(Math.random() * 50)}R$`
    const total = parseInt(frete.innerHTML.match(/\d+(\.\d{0,2})?/g)[0]) + parseInt(valor.innerHTML.match(/\d+(\.\d{0,2})?/g)[0])
    document.querySelector('#valor_total').innerHTML += `${total}R$`
    
    document.querySelector('#button-pagar').addEventListener('click', function(event){
        event.stopImmediatePropagation()
        event.preventDefault()
        localStorage.removeItem('carrinho')
        alert("O seu pedido foi feito")
        location.reload()
    })
    document.querySelector('body')
    .appendChild(MakeFooter())
}