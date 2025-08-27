import '../assets/styles.scss';

const app = document.querySelector("#app");

// GitHub Pages 배포 시 base 포함 경로
const BASE = "/animation";

// home.html fetch 후 렌더링
async function loadHome() {
  try {
    const res = await fetch(`${BASE}/src/pages/home.html`);
    const html = await res.text();
    app.innerHTML = html;
  } catch (err) {
    console.error("Failed to load home.html:", err);
    app.innerHTML = "<h1>Failed to load page</h1>";
  }
}

// 초기 페이지 로드
loadHome();