export default function MakeFooter(){
    return new DOMParser().parseFromString(`
        <footer class="flex-container">
            <div class="flex-container flex-column grow fale-conosco">
                <p id="fale-conosco-title">Fale Conosco</p>
                <img src="../Images/whatsapp.png" alt="" srcset="">
                <p id="fale-conosco-wpp">(19) 99999-9999</p>
                <img src="../Images/instagram.png" alt="">
                <p id="fale-conosco-insta">@EMBOOKS</p>
                <img src="../Images/facebook.png" alt="">
                <p id="fale-conosco-face">EMBOOKS</p>
            </div>
            <div class=" flex-container flex-center grow segurança">
                <p id="seguranca-title">Informações Importantes</p>
            </div>
            <div id="direitos">
                <p>Copyright&copy; 2024 | Todos os Direitos Reservados</p>
            </div>
        </footer>
        `,'text/html').body.firstChild
}