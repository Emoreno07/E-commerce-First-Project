// como o header estava sendo repetido em cada decidi criar uma função pra isso
export default function makeHeader(){
    const location = window.location.href;

    const currentPage = location.match(/(?<=\d{4})\\/);
    console.log(currentPage)
    return new DOMParser().parseFromString(`
        <header>
            <div id="Logo">
                <img id="imglogo" src="./Images/logo.png">
                <p id="logo_name">EM-BOOKS</p>
            </div>
            <nav id="navigation">
                <div id="navigation_help">
                    <p><a href="#">Devoluções e pedidos</a></p>
                    <p><a href="#">suporte</a></p>
                </div>
                <div id="navigation_options">
                    <p><a href="#">Mais Vendidos</a></p>
                    <p><a href="../pages/Todos.html">Todos os livros</a></p>
                    <p onclick="true"><a href="sobre.html">Sobre nós</a></p>
                </div>
            </nav>
            <div id="login">
                <div id="divimglogin">
                    <img src="./Images/user.png" alt="login">
                </div>
                <p><a href="./pages/Login.html">fazer login</a></p>
            </div>
            <div id="area_carrinho">
                <img src="../Images/carrinho.png" alt="" id="carrinho_img">
                <p id="p_carrinho">Itens no carrinho: </p>
            </div>
        </header>
        `, "text/html")
        .body.firstChild;
}