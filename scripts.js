
const objLinks = document.getElementsByTagName("a");
function disableLinks(objLinks) {
    for (let i = 0; i < objLinks.length; i++) {
        objLinks[i].onclick = function () {
            return false;
        }
    }
}
disableLinks(objLinks)

const img = document.getElementsByTagName("img");
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        img[i].src = getRandom(gifs.img)
    }
}

const p = document.getElementsByTagName("p");
function color(p) {
    for (let i = 0; i < p.length; i++) {
        p[i].onclick = function () {
            p[i].style.color = "red"
            p[i].style.backgroundColor = "yellow"
        }
    }
}
color(p)

const articles = document.getElementsByTagName("articles");
const sections = document.getElementsByTagName("sections");
for (let i = 0; i < articles.length; i++) {
    articles[i].onclick = function () {
        articles[i].style.color = "lightblue";
    }
}
for (let i = 0; i < sections.length; i++) {
    sections[i].onclick = function () {
        sections[i].style.color = "lightgreen";
    }
}

const abracadabra = document.getElementsByTagName("img");
for (let i = 0; i < abracadabra.length; i++) {

    abracadabra[i].onmouseover = function () {

        abracadabra[i].src = "assets/abracadabra.gif"
    }
}


for (let i = 0; i < p.length; i++) {
    p[i].onmouseover = function () {

        p[i].style.background = getRandom(colors);
        p[i].style.color = getRandom(colors);
    }
}


const article = document.getElementsByTagName("article");
const section = document.getElementsByTagName("section");
for (let i = 0; i < article.length; i++) {
    article[i].onmouseover = function () {
        article[i].style.color = getRandom(colors);
    }
}
for (let i = 0; i < section.length; i++) {
    section[i].onmouseover = function () {
        section[i].style.color = getRandom(colors);
    }
}
const colors = ['#f6bd60', '#f7ede2', '#84a59d']
const gifs = {
    img: ["assets/magic-1.gif", "assets/magic-2.gif", "assets/magic-3.gif", "assets/magic-4.gif", "assets/magic-5.gif", "assets/magic-6.gif"]
}
const getRandom = (array) => {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}