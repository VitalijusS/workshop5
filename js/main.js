const paraDOM = document.querySelector('p');
const buttonDOM = document.querySelector('button');
const url = "https://api.chucknorris.io/jokes/random"

buttonDOM.addEventListener("click", getJoke);
getJoke();
function getJoke() {
    fetch(url).then((res) => res.json()).then(data => paraDOM.innerText = data.value);
}