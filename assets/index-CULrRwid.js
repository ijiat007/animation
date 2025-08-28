(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s=`<div class="container">
  <h2>outline glow</h2>
  <div class="card">
    <h3>Animate Borders</h3>
    I was a ghost, I was alone, hah
    어두워진, hah, 앞길속에 (Ah)
    Given the throne, I didn't know how to believe
    I was the queen that I'm meant to be
    I lived two lives, tried to play both sides
    But I couldn't find my own place
    Called a problem child 'cause I got too wild
    But now that's how I'm getting paid, 끝없이 on stage
  </div>
</div>

<footer>
  © 2025 SJY
</footer>`,c=document.querySelector("#app");c.innerHTML=s;
