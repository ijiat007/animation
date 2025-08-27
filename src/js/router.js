import home from "../pages/home.html?raw";
import about from "../pages/about.html?raw";
import contact from "../pages/contact.html?raw";

const routes = {
  "/": home,
  "/about": about,
  "/contact": contact,
};

// export function router(path) {
//   const view = routes[path] || routes["/"];
//   document.querySelector("#page-content").innerHTML = view;
// }


export async function router(path) {
  const url = routes[path] || routes["/"];
  const res = await fetch(url);
  const view = await res.text();
  document.querySelector("#page-content").innerHTML = view;
}

  // 페이지별 SCSS import (Vite가 CSS로 변환)
//   switch (path) {
//     case "/":
//       import('../pages/home.scss');
//       break;
//     case "/about":
//       import('../pages/about.scss');
//       break;
//   }
// }