import makeHeader from "./components/header/header.js";
import MakeFooter from "./components/footer/footer.js";
import BarraMobile from "./components/barraMobile/barraMobile.js";

document.querySelector('body').onload = () => {
    document.querySelector('body')
    .insertBefore(makeHeader(), document.querySelector('body').firstChild);
    document.querySelector('body')
    .insertBefore(BarraMobile(), document.querySelector('body').firstChild);
    document.querySelector('body')
    .appendChild(MakeFooter());
}