// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker(obj) {
    //Instantiating Elements

    let card = document.createElement('div');
    let headline = document.createElement('div');
    let authorContainer = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorName = document.createElement('span');

    // Element Classes

    card.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    // Element Appendages

    card.append(headline);
    card.append(authorContainer);
    authorContainer.append(imgContainer);
    imgContainer.append(img);
    authorContainer.append(authorName);

    // Element Attributes

    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorName.textContent = obj.authorName;

    card.addEventListener('click', (event) => {
        console.log(obj.headline)
    });

    return card;
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        let javaArticles = res.data.articles.javascript;
        let bootArticles = res.data.articles.bootstrap;
        let techArticles = res.data.articles.technology;
        let jqueryArticles = res.data.articles.jquery;
        let nodeArticles = res.data.articles.node;

        let allArticles = javaArticles.concat(bootArticles, techArticles, jqueryArticles, nodeArticles);

        allArticles.forEach((article) => {
            let card = cardMaker(article);

            let cardContainer = document.querySelector('.cards-container');

            cardContainer.append(card);
        })
    })
    .catch((er) => {
        console.log('Got an error there bud.')
    })