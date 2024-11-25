import makeHeader from "./components/header/header.js";
import MakeBook from "./components/livro/makelivro.js";
import MakeFooter from "./components/footer/footer.js";

document.querySelector('body').onload = () =>{
    document.querySelector('body')
    .insertBefore(makeHeader(), document.querySelector('body').firstChild);

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
    var total_livros = 0
    document.querySelectorAll('.preco_carrinho').forEach((element,index) =>{
       total_livros += parseInt(element.innerHTML.replace('Preco: ','').replace('R$',''))
    })
    const valor = document.querySelector("#valor")
    valor.innerHTML += ` ${total_livros}R$`
    const frete = document.querySelector('#frete')
    frete.innerHTML +=  ` ${Math.round(Math.random() * 50)}R$`
    const total = parseInt(frete.innerHTML.replace('R$','').replace('Frete: ','')) + parseInt(valor.innerHTML.replace('R$','').replace('Valor: ',''))
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