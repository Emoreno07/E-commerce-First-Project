export default function CreateStars(rating){
    let stars = '';
    //colocando as estrelas de acordo com o rating(avaliações)
    //coloca as primeiras x. estrelas do rating  (eg 4.6 rating = 4)

    for(let i = 0; i < Math.trunc(rating); i++){
        const star = '<img src="../Images/estrela-cheia.png" alt="" srcset="">';
        stars += star;

    }
    //adiciona uma estrela pela metade se o rating for decimal

    if(Math.trunc(rating) < rating)
        {
            let star_middle = '<img src="../Images/estrela_metade.png" alt="" srcset="">';
            stars += star_middle;
        }
    //completa o resto das 5 estrelas com estrelas em branco, se houver

    for(let i = 0; i < Math.abs(Math.trunc(rating) - 4); i++)
        {
            let star_empty = '<img src="../Images/star.png" alt="" srcset="">';
            stars += star_empty;
        }
    return stars
}