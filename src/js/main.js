
import header from "../components/header.html?raw";
import footer from "../components/footer.html?raw";
import { router } from "./router.js";
import '../assets/styles.scss'

// layout
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
