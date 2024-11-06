// como o header estava sendo repetido em cada decidi criar uma função pra isso
export default function makeHeader(){
    const location = window.location.href;
    // verifica qual o arquivo(ex. ...:5500/pages/page.html retornará 'page')
    const currentPage = location.match(/(?<=\/)\w+(?=.html)/g)[0];
    console.log(currentPage)

    const voltar = ` <div id="area_voltar" onclick='location.href = document.referrer'>
                        <img src="../Images/arrow-left.png" alt="" id="voltar_arrow">
                        <p id="voltar">Voltar</p>
                    </div>`
                    
    const carrinho = `  <div id="area_carrinho" onclick="location.href= '/pages/carrinho.html'">
                            <img src="/Images/carrinho.png" alt="" id="carrinho_img">
                            <p id="p_carrinho">Itens no carrinho: </p>
                        </div>
    `
    const lastSection = currentPage === 'carrinho' ? voltar : carrinho;
    //mais seguro que innerHTML
    return new DOMParser().parseFromString(`
        <header>
            <div id="Logo" onclick="window.location.href = '/index.html'">
                <img id="imglogo" src="/Images/logo.png">
                <p id="logo_name">EM-BOOKS</p>
            </div>
            <nav id="navigation">
                <div id="navigation_help">
                    <p class='${currentPage === 'devolução'? "current-page" : ''}'><a href="#">Devoluções e pedidos</a></p>
                    <p class='${currentPage === 'suporte'? "current-page" : ''}'><a href="#">suporte</a></p>
                </div>
                <div id="navigation_options">
                    <p class='${currentPage === 'vendidos'? "current-page" : ''}'><a href="#">Mais Vendidos</a></p>
                    <p class='${currentPage === 'Todos'? "current-page" : ''}'><a href="/pages/Todos.html">Todos os livros</a></p>
                    <p class='${currentPage === 'sobre'? "current-page" : ''}' onclick="true"><a href="/pages/sobre.html">Sobre nós</a></p>
                </div>
            </nav>
            <div class="login" onclick='location.href'>
                <div id="divimglogin">
                    <img src="/Images/user.png" alt="login">
                </div>
                <p><a href="/pages/Login.html">fazer login</a></p>
            </div>
            ${lastSection}
        </header>
        `, "text/html")
        .body.firstChild;
}