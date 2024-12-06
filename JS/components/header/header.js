// como o header estava sendo repetido em cada decidi criar uma função pra isso
import GetCurrentLocationPath from "../../../utils/Path.js";
export default function makeHeader(){
    const currentPage = GetCurrentLocationPath();
    const carrinhoItems = (localStorage.getItem('carrinho') === null) ? 0 : JSON.parse(localStorage.getItem('carrinho')).items.length

    const voltar = ` <div class="flex-container flex-center flex-column last-area" onclick='location.href = document.referrer'>
                        <img src="../Images/arrow-left.png" alt="">
                        <p>Voltar</p>
                    </div>`
                    
    const carrinho = `  <div class="flex-container flex-center flex-column last-area" onclick="location.href= '/pages/carrinho.html'">
                            <img src="/Images/carrinho.png" alt="" id="carrinho_img">
                            <p><strong>Itens no carrinho: </strong>${carrinhoItems}</p>
                        </div>
    `
    //caso a página seja o carrinho, coloca o botão de voltar,se não coloca o de carrinho
    const lastSection = currentPage === 'carrinho' ? voltar : carrinho;
    //mais seguro que innerHTML
    return new DOMParser().parseFromString(`
        <header class="flex-container">
            <div class="hamburguer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                onclick="document.querySelector('.barra-mobile').style.transform = 'translateX(0%)'; document.querySelector('body').style.overflowY = 'hidden'"
                fill="currentColor"
                class="bi bi-list hamburguer"
                viewBox="0 0 16 16">
                    <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <div class="flex-container flex-center grow logo" onclick="window.location.href = '/index.html'">
                <img src="/Images/logo.png">
                <h1>EM-BOOKS</h1>
            </div>
            <nav class="flex-container flex-column flex-center navigation">
                <div class=" flex-container flex-center grow navigation_options">
                    <p class='${currentPage === 'devolução'? "current-page" : ''}'><a href="#">Devoluções e pedidos</a></p>
                    <p class='${currentPage === 'suporte'? "current-page" : ''}'><a href="#">suporte</a></p>
                </div>
                <div class="flex-container flex-center grow navigation_options">
                    <p class='${currentPage === 'vendidos'? "current-page" : ''}'><a href="#">Mais Vendidos</a></p>
                    <p class='${currentPage === 'Todos'? "current-page" : ''}'><a href="/pages/Todos.html">Todos os livros</a></p>
                    <p class='${currentPage === 'sobre'? "current-page" : ''}'><a href="/pages/sobre.html">Sobre nós</a></p>
                </div>
            </nav>
            <div class="flex-container flex-center flex-column login">
                <img src="/Images/user.png" alt="login">
                <p><a href="/pages/Login.html">fazer login</a></p>
            </div>
            ${lastSection}
        </header>
        `, "text/html")
        .body.firstChild;
}