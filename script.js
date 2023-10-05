const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  " https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,sexist,explicit";

let getJoke = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  jokeContainer.innerText =
    data.joke || data?.setup + " " + data?.delivery;
};

btn.addEventListener("click", getJoke);