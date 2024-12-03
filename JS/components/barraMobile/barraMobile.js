export default function BarraMobile(){
    return new DOMParser().parseFromString(`
        <section class="flex-container flex-center barra-mobile">
        <img src="/Images/seta-left.png" 
        onclick="document.querySelector('.barra-mobile').style.transform = 'translateX(-100%)';
            document.querySelector('body').style.overflowY = 'auto'"
            alt="">
        <h1>EM-BOOKS</h1>
        <nav class="flex-container flex-column">
            <h2><a href="/pages/sobre.html">Sobre Nós</a></h2>
            <h2><a href="/pages/todos.html">Todos os Livros</a></h2>
            <h2><a href="">Suporte</a></h2>
            <h2><a href="">Devoluções e Pedidos</a></h2>
            <h2><a href="/pages/login.html">Fazer login</a></h2>

        </nav>

    </section>
        `,'text/html').body.firstChild;
}