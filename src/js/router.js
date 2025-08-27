import home from "@/pages/home.html?raw";
import about from "@/pages/about.html?raw";
import contact from "@/pages/contact.html?raw";

const routes = {
  "/": home,
  "/about": about,
  "/contact": contact,
};

export function router(path) {
  const view = routes[path] || routes["/"];
  document.querySelector("#page-content").innerHTML = view;
}
