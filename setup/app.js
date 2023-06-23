// on recupère l'url
const apiUrl = "https://api.chucknorris.io/jokes/random";
// on selectionne nos elements concernés par l'évenement duc click
const image = document.querySelector(".container img");
const btn = document.querySelector(".btn");
const jokesContent = document.querySelector(".content");
// on recupère les données de l'api
const fetchJokesRandom = async () => {
  try {
    const response = await fetch(apiUrl);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// on écoute l'évemenent
btn.addEventListener("click", (e) => {
  fetchJokesRandom().then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call

    jokesContent.textContent = data.value;
    image.classList.add("shake-img");
    setTimeout(() => {
      image.classList.remove("shake-img");
    }, Math.random() * 1000);
  });
});
