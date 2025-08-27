(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=`<main>
  <h2>Welcome Home</h2>
  <p>This is the home page.</p>
</main>`,l=`<main>
  <h2>About Us</h2>
  <p>This is the about page.</p>
</main>`,p=`<main>
  <h2>Contact Us</h2>
  <p>This is the contact page.</p>
</main>`,a={"/":d,"/about":l,"/contact":p};function s(o){const n=a[o]||a["/"];document.querySelector("#page-content").innerHTML=n}async function u(o){return await(await fetch(o)).text()}async function f(){const o=await u("./components/header.html"),n=await u("./components/footer.html");document.querySelector("#app").innerHTML=`
    ${o}
    <div id="page-content"></div>
    ${n}
  `,s(window.location.pathname),document.addEventListener("click",r=>{if(r.target.matches("[data-link]")){r.preventDefault();const i=r.target.getAttribute("href");window.history.pushState({},"",i),s(i)}}),window.addEventListener("popstate",()=>{s(window.location.pathname)})}f();
