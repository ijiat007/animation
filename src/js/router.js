export async function router(pathname) {

  // const cleanPath = pathname.replace("/animation", "") || "/";
  let cleanPath = pathname; 

  let pageFile;
  switch (cleanPath) {
    case "/animation/":
    case "/animation":
      pageFile = "home.html";
      break;
    case "/animation/about":
      pageFile = "about.html";
      break;
    case "/animation/contact":
      pageFile = "contact.html";
      break;
    default:
      document.querySelector("#app").innerHTML = "<h1>404 Not Found</h1>";
      return;
  }

  try {
    const res = await fetch(`/animation/src/pages/${pageFile}`);
    const html = await res.text();
    document.querySelector("#app").innerHTML = html;
  } catch (err) {
    console.error("Router fetch error:", err);
    document.querySelector("#app").innerHTML = "<h1>404 Not Found</h1>";
  }
}