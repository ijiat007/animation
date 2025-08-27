import "../assets/styles.scss"; // SCSS import → Vite가 CSS로 번들링

const BASE = "/animation"; // GitHub Pages repo base
const app = document.querySelector("#app");

// 초기화 후 home.html 로드
async function loadHome() {
  if (!app) return;
  app.innerHTML = ""; // 기존 내용 제거

  try {
    const res = await fetch(`${BASE}/src/pages/home.html`);
    const html = await res.text();
    app.innerHTML = html;
  } catch (err) {
    console.error("Failed to load home.html:", err);
    app.innerHTML = "<h1>Failed to load page</h1>";
  }
}

// DOMContentLoaded에서 실행
document.addEventListener("DOMContentLoaded", loadHome);