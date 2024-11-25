 // verifica qual o arquivo(ex. ...:5500/pages/page.html retornará 'page')
export default function GetCurrentLocationPath(){
    const path = window.location.href.match(/(?<=\/)\w+(?=.html)/g)
    if(path)
        return path[0];
    return "não é possivel obter o caminho, pois é um index"
}