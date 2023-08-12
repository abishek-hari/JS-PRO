import sublinks from "./data.js";

const bar = document.querySelector(".bar");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar-wrapper");
const sideBarLinks = document.querySelector(".sidebar-links");
const linkBtn = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

bar.addEventListener("click", () => {
  sideBar.classList.add("show");
});

close.addEventListener("click", () => {
  sideBar.classList.remove("show");
});

sideBarLinks.innerHTML = sublinks
  .map((item) => {
    const { page, links } = item;
    return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
     ${links
       .map((link) => {
         const { label, icon, url } = link;
         return `<a href="${url}">
           <i class="${icon}"></i>${label}
           </a>`;
       })
       .join("")}
    </div>
    </article>`;
  })
  .join("");

linkBtn.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 18;
    console.log(bottom);

    const tempPage = sublinks.find((pages) => {
      const { page } = pages;
      return page === text;
    });

    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      submenu.innerHTML = `<section>
      <h4>${page}</h4>
      <div class="submenu-center col-2">
      ${links
        .map((link) => {
          const { url, icon, label } = link;
          return `<a href="${url}">
           <i class="${icon}"></i>${label}
           </a>`;
        })
        .join("")}
      </div>
      </section>`;
    }
  });
});

hero.addEventListener("mouseover", function () {
  submenu.classList.remove("show");
});

nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
