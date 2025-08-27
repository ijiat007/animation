const base = "/animation";

export async function router(pathname) {
  const cleanPath = pathname.replace(base, "") || "/";

  let pageFile = "";
  switch (cleanPath) {
    case "/":
      pageFile = "home.html";
      break;
    case "/about":
      pageFile = "about.html";
      break;
    case "/contact":
      pageFile = "contact.html";
      break;
    default:
      document.querySelector("#container").innerHTML = "<h1>404 Not Found</h1>";
      return;
  }

  // fetch 시 base 포함해서 호출
  const res = await fetch(`${base}/src/pages/${pageFile}`);
  const html = await res.text();
  document.querySelector("#container").innerHTML = html;
}