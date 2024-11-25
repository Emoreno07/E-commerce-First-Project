import makeHeader from "./components/header/header.js";
import MakeFooter from "./components/footer/footer.js";

document.querySelector('body').onload = () => {
    document.querySelector('body')
    .insertBefore(makeHeader(), document.querySelector('body').firstChild);
    document.querySelector('body')
    .appendChild(MakeFooter());
}