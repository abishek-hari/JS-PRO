import articles from "./data.js";

const toggleBtn = document.querySelector(".btn");
const article = document.querySelector(".articles");
const post = document.querySelector(".post");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const showPost = () => {
  const newpost = articles
    .map((post) => {
      const { title, date, length, snippet } = post;

      const formatDate = moment(date).format("MMMM Do, YYYY");
      return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
      <span>${formatDate}</span>
      <span>${length} min read</span>
    </div>
    <p>
      ${snippet}
    </p>
  </article>`;
    })
    .join("");
  article.innerHTML = newpost;
};
showPost();
