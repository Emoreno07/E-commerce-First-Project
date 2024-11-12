export default function Categorias(){
   return new DOMParser().parseFromString(`
        <section id="categorias">
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/fantasy-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkfan" id="checkfan" class="checkbox">
                        <label for="checkfan" class="labelforcat">Fantasia</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/art-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkart" id="checkart" class="checkbox">
                        <label for="checkart" class="labelforcat">Arte</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/fiction-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkfic" id="checkfic" class="checkbox">
                        <label for="checkfic" class="labelforcat">Ficção</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/adventure-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkaven" id="checkaven" class="checkbox">
                        <label for="checkaven" class="labelforcat">Aventura</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/romance-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkfan" id="checkfan" class="checkbox">
                        <label for="checkfan" class="labelforcat">romance</label>
                    </div> 
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/horror-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkterror" id="checkterror" class="checkbox">
                        <label for="checkterror" class="labelforcat">terror</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/mistery-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkmis" id="checkmis" class="checkbox">
                        <label for="checkmis" class="labelforcat">Mistério</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/facts-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkfatos" id="checkfatos" class="checkbox">
                        <label for="checkfatos" class="labelforcat">Fatos Reais</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/action-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checkacao" id="checkacao" class="checkbox">
                        <label for="checkacao" class="labelforcat">Ação</label>
                    </div>
                </div>
                <div id="tipo_categoria">
                    <div class="checks">
                        <img src="/Images/suspense-icon.png" alt="" class="checkimgs">
                        <input type="checkbox" name="checksuspense" id="checksuspense" class="checkbox">
                        <label for="checksuspense" class="labelforcat">suspense</label>
                    </div>
                </div>
        </section>
    `,'text/html').body.firstChild;
}