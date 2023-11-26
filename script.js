console.log('connecté');
// je sélectionne et je stocke la DIV posts
const postsContainer = document.querySelector(".posts");
console.log(postsContainer);

const post = {
    titre: "SEO, les bonnes pratiques",
    hashtag: "#SEO",
    extrait: "Ceci est un extrait de l'article SEO les bonnes pratiques."
}
//const valeur = post.propriete;
//j'accède à la valeur de la propriété titre
const t = post.titre;
console.log(t);

//Initialisation d'un tableau (array)
const posts = [
    {
        titre: "SEO, les bonnes pratiques",
        hashtag: "#SEO",
        extrait: "Ceci est un extrait de l'article SEO les bonnes pratiques."
    }, {
        titre: "Bien débuter en référencement payant",
        hashtag: "#SEO",
        extrait: "Ceci est un extrait de l'article SEO les bonnes pratiques."
    }, {
        titre: "Content marketing, les bons arguments",
        hashtag: "#SEO",
        extrait: "Ceci est un extrait de l'article SEO les bonnes pratiques."
    }
];
console.log(posts);

//je pass en revu chaque élément du tableau
posts.forEach(item => {
    //console.log(item);

    //création d'une DIV avec Template Strings
    const article =
        `
            <div class="post">
                <div class="post-titre"> ${item.titre}</div>
                <div class="post-hashtag"> ${item.hashtag}</div>
                <div class="post-extrait"> ${item.extrait}</div>
            </div>
        `
    console.log(article);
    //Ajout de article dans la DIV dédiée postContainer
    postsContainer.innerHTML += article;
});

