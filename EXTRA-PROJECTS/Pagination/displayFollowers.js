const container = document.querySelector(".container");
const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { login, avatar_url, html_url } = person;
      return `<article class="card">
         <img src="${avatar_url} alt="${login}"/>
         <h4>${login}</h4>
         <a href="${html_url}">view profile</a>
        </article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};
console.log(container);
export default display;
