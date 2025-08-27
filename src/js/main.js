import { router } from "./router.js";
import '../assets/styles.scss';

// 최초 렌더링
router(window.location.pathname);

// 네비게이션 이벤트
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.history.pushState({}, "", href);
    router(href);
  }
});

// 브라우저 뒤/앞 이동 대응
window.addEventListener("popstate", () => {
  router(window.location.pathname);
});