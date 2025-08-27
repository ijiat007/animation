(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=`<main>
  <h2>Welcome Home</h2>
  <p>This is the home page.</p>
</main>`,l=`<main>
  <h2>About Us</h2>
  <p>This is the about page.</p>
</main>`,f=`<main>
  <h2>Contact Us</h2>
  <p>This is the contact page.</p>
</main>`,a={"/":d,"/about":l,"/contact":f};async function s(r){const n=a[r]||a["/"],o=await(await fetch(n)).text();document.querySelector("#page-content").innerHTML=o}async function u(r){return await(await fetch(r)).text()}async function p(){const r=await u("./components/header.html"),n=await u("./components/footer.html");document.querySelector("#app").innerHTML=`
    ${r}
    <div id="page-content"></div>
    ${n}
  `,s(window.location.pathname),document.addEventListener("click",i=>{if(i.target.matches("[data-link]")){i.preventDefault();const o=i.target.getAttribute("href");window.history.pushState({},"",o),s(o)}}),window.addEventListener("popstate",()=>{s(window.location.pathname)})}p();
