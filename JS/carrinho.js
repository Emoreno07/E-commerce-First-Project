function makeItemCarrinho(img,titulo,valor)
{
    const item_carrinho = document.createElement('div')
    item_carrinho.setAttribute('class','products_carrinho')
    const img_livro = document.createElement('img')
    img_livro.src = img
    img_livro.setAttribute('class','imgs_carrinho')
    const tituloEAutor = document.createElement('p')
    tituloEAutor.setAttribute('class','descricao_carrinho')
    tituloEAutor.innerHTML = titulo
    const preco = document.createElement('p')
    preco.setAttribute('class','preco_carrinho')
    preco.innerHTML = 'Preco: ' + valor + 'R$'
    item_carrinho.appendChild(img_livro)
    item_carrinho.appendChild(tituloEAutor)
    item_carrinho.appendChild(preco)
    return item_carrinho
}
document.querySelector('body').onload = () =>{
    document.querySelector('#imglogo').addEventListener('click',()=>{
        location.href = '../pages/index.html'
    })

    document.querySelector('#voltar_arrow').addEventListener('click', ()=>{
        location.href = document.referrer
    })
    const carrinho = JSON.parse(localStorage.getItem('carrinho'))
    if(carrinho === null)
        {
            const nolivros = document.createElement('p')
            nolivros.innerHTML = 'Você não possui Itens no momento!'
            nolivros.setAttribute('id','nolivro')
            document.querySelector('#main_content').appendChild(nolivros)
        }
    else
    {
        for(let i = 0; i < carrinho.items.length; i++)
            {
                const livro = (carrinho.items[i])
                document.querySelector('#main_content').appendChild(
                    makeItemCarrinho(
                        livro.livroimg,
                        livro.titulo,
                        Math.round(Math.random() * 250)
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
    }, true)
}