(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=`<header>
  <h1>animation</h1>
  <nav>
    <a href="/" data-link>Home</a>
    <a href="/about" data-link>About</a>
    <a href="/contact" data-link>Contact</a>
  </nav>
</header>`,u=`<footer>
  footer
</footer>`,f=`<main>
  <h2>Welcome Home</h2>
  <p>This is the home page.</p>
</main>`,h=`<main>
  <h2>About Us</h2>
  <p>This is the about page.</p>
</main>`,l=`<main>
  <h2>Contact Us</h2>
  <p>This is the contact page.</p>
</main>`,c={"/":f,"/about":h,"/contact":l};function i(o){const n=c[o]||c["/"];document.querySelector("#page-content").innerHTML=n}document.querySelector("#app").innerHTML=`
  ${d}
  <div id="page-content"></div>
  ${u}
`;i(window.location.pathname);document.addEventListener("click",o=>{if(o.target.matches("[data-link]")){o.preventDefault();const n=o.target.getAttribute("href");window.history.pushState({},"",n),i(n)}});window.addEventListener("popstate",()=>{i(window.location.pathname)});
