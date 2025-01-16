

const getJoke = document.querySelector(".getJoke");
const jokeElement = document.querySelector(".joke");

async function generateJoke() {
    const url = "https://v2.jokeapi.dev/joke/Any";
    const response = await fetch(url);

    jokeElement.innerHTML = ""; // Clear the previous joke
    const result = await response.json();

    jokeElement.innerHTML = `${result.setup || result.joke}`; // Display the setup or single-line joke
}

getJoke.addEventListener("click", function () {
    generateJoke();
});


