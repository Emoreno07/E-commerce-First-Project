export default function MakeItem(...params){
    return new DOMParser().parseFromString(`
        <div class="livro">
            <img src="../Images/harry potter e a pedra.png" class="imglivro"   alt="" srcset="">
            <div class="estrelas">
                <img src="../Images/star.png" alt="" srcset="">
                <img src="../Images/star.png" alt="" srcset="">
                <img src="../Images/star.png" alt="" srcset="">
                <img src="../Images/star.png" alt="" srcset="">
                <img src="../Images/star.png" alt="" srcset="">
            </div>
            <p class="titulo">titulo</p>
            <p class="autor">autor</p>
        </div>
        `,'text/html')
}