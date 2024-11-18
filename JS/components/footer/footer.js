export default function MakeFooter(){
    return new DOMParser().parseFromString(`
        <footer class="flex-container">
            <div class="flex-container flex-center grow fale-conosco">
                <h2 class="titulo-fale-conosco">Fale Conosco</h2>
                <img src="../Images/whatsapp.png" alt="" srcset="">
                <p class="redes">(19) 99999-9999</p>
                <img src="../Images/instagram.png" alt="">
                <p class="redes">@EMBOOKS</p>
                <img src="../Images/facebook.png" alt="">
                <p class="redes">EMBOOKS</p>
            </div>
            <div class=" flex-container flex-center grow segurança">
                <h2>Informações Importantes</h2>
            </div>
            <div class="flex-container flex-center direitos">
                <p><strong>Copyright&copy; 2024 | Todos os Direitos Reservados</strong></p>
            </div>
        </footer>
        `,'text/html').body.firstChild
}