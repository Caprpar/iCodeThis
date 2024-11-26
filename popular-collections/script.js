// Recieve data from
const url = "data.json";

/* fetch data and build elements in document */
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Remove placeholder divs when fetch suceeds
    removeElementByClassName("placeholder-card");
    setTitle(data.filter);
    buildTags(data.tags);
    for (let item of data.collections) {
      buildCard(item.urls, item.category);
    }
  });
/*
fetch(urls[1])
  .then((response) => response.json())
  .then((result) => {
    let myArr = [];
    let items = result.results;

    for (let item of items) {
      myArr.push(item.urls.regular);
    }

    console.log(myArr);
  });
 */

function removeElementByClassName(className) {
  let elements = document.querySelectorAll(".placeholder");
  for (let element of elements) {
    element.style.display = "none";
  }
}

function setTitle(titleName) {
  const headerEl = document.querySelector("h1");
  headerEl.innerText = titleName;
}

function buildTags(tags) {
  // [] fetch tags
  const tagEl = document.querySelector("#tags");
  for (let tagname of tags) {
    const listEl = document.createElement("li");
    listEl.innerText = tagname;
    tagEl.appendChild(listEl);
  }

  // [] for each tag
  // [] append to header > ul
  // []
  // []
  // []
}

function buildCard(images, category) {
  const mainEl = document.querySelector("main");
  const cardContainer = document.querySelector("#card-container");

  const cardEl = document.createElement("div");
  cardEl.classList = "card";

  const imgContainerEl = document.createElement("div");
  imgContainerEl.classList = "img-container";

  cardEl.appendChild(imgContainerEl);
  // Lägger till fyra första bilder från images till card
  let imageCount = 0;
  for (const imageUrl of images) {
    if (imageCount === 4) break;
    const img = document.createElement("img");
    img.src = imageUrl;
    images.shift();
    imgContainerEl.appendChild(img);
    imageCount++;
  }

  cardEl.appendChild(imgContainerEl);

  const collectionInfoEl = document.createElement("div");
  collectionInfoEl.classList = "collection-info";

  const categoryEl = document.createElement("p");
  categoryEl.classList = "category";
  categoryEl.innerText = `category`;
  const galleryIcon = document.createElement("img");
  galleryIcon.src = "icons/gallery-icon.svg";
  const countEl = document.createElement("p");
  countEl.classList = "count";
  countEl.innerText = `+${images.length}`;

  collectionInfoEl.appendChild(categoryEl);
  collectionInfoEl.appendChild(galleryIcon);
  collectionInfoEl.appendChild(countEl);

  cardEl.appendChild(collectionInfoEl);
  cardContainer.appendChild(cardEl);
}
