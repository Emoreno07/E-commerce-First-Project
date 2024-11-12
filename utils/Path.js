 // verifica qual o arquivo(ex. ...:5500/pages/page.html retornará 'page')
export default function GetCurrentLocationPath(){
    return window.location.href.match(/(?<=\/)\w+(?=.html)/g)[0];
}