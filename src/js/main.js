
import header from "../components/header.html?raw";
import footer from "../components/footer.html?raw";
import { router } from "./router.js";
import '../assets/styles.scss'


// // layout
document.querySelector("#app").innerHTML = `
  ${header}
  <div id="page-content"></div>
  ${footer}
`;

router(window.location.pathname);

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.history.pushState({}, "", href);
    router(href);
  }
});

// 브라우저 뒤로가기/앞으로가기 이벤트
window.addEventListener("popstate", () => {
  router(window.location.pathname);
});


// async function loadHTML(url) {
//   const res = await fetch(url);
//   return await res.text();
// }

// async function renderLayout() {
//   const header = await loadHTML('./components/header.html');
//   const footer = await loadHTML('./components/footer.html');

//   document.querySelector("#app").innerHTML = `
//     ${header}
//     <div id="page-content"></div>
//     ${footer}
//   `;

//   router(window.location.pathname);

//   // SPA 링크 클릭
//   document.addEventListener("click", (e) => {
//     if (e.target.matches("[data-link]")) {
//       e.preventDefault();
//       const href = e.target.getAttribute("href");
//       window.history.pushState({}, "", href);
//       router(href);
//     }
//   });

//   // 뒤로/앞으로가기
//   window.addEventListener("popstate", () => {
//     router(window.location.pathname);
//   });
// }

// renderLayout();