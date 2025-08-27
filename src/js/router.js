import home from "../pages/home.html?raw";
import about from "../pages/about.html?raw";
import contact from "../pages/contact.html?raw";

const routes = {
  "/": home,
  "/about": about,
  "/contact": contact,
};

export function router(path) {
  const view = routes[path] || routes["/"];
  document.querySelector("#page-content").innerHTML = view;
}

// const routes = {
//   "/": './pages/home.html',
//   "/about": './pages/about.html',
//   "/contact": './pages/contact.html',
// };

// export async function router(path) {
//   const url = routes[path] || routes["/"];
//   const res = await fetch(url);
//   const view = await res.text();
//   document.querySelector("#page-content").innerHTML = view;
// }
