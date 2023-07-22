const url = "https://icanhazdadjoke.com/";
const jokeBtn = document.querySelector(".btn");
const result = document.querySelector(".result");

jokeBtn.addEventListener("click", () => {
  dadJoke();
});

const dadJoke = async () => {
  // Set Loading
  result.textContent = "Loading...";
  //  try/catch block
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning-app",
      },
    });
    if (!response.ok) {
      throw new Error("whoops");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There was an error...";
  }
};
dadJoke();
