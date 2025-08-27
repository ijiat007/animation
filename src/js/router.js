const base = "/animation";

export async function router(pathname) {
  // base 제거
  const cleanPath = pathname.replace(base, "") || "/";

  let pageFile;
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
      document.querySelector("#app").innerHTML = "<h1>404 Not Found</h1>";
      return;
  }

  try {
    const res = await fetch(`${base}/src/pages/${pageFile}`);
    const html = await res.text();
    document.querySelector("#app").innerHTML = html;
  } catch (err) {
    console.error("Router fetch error:", err);
    document.querySelector("#app").innerHTML = "<h1>404 Not Found</h1>";
  }
}