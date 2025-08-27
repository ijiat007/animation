
// import header from "../components/header.html?raw";
// import footer from "../components/footer.html?raw";
import '../assets/styles.scss'
import { router } from "./router.js";

async function loadHTML(url) {
  const res = await fetch(url);
  return await res.text();
}

async function renderLayout() {
  const header = await loadHTML('./components/header.html');
  const footer = await loadHTML('./components/footer.html');
  document.querySelector('#app').innerHTML = `
    ${header}
    <div id="page-content"></div>
    ${footer}
  `;

  // 초기 페이지 렌더링
  router(window.location.pathname);

  // SPA 링크 클릭
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      const href = e.target.getAttribute("href");
      window.history.pushState({}, "", href);
      router(href);
    }
  });

  // 뒤로/앞으로가기
  window.addEventListener("popstate", () => {
    router(window.location.pathname);
  });
}

renderLayout();