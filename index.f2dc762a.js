async function t(t){try{return await fetch(`https://hp-api.herokuapp.com/api/characters/house/${t}`).then((t=>t.json()))}catch(t){console.log(t)}}const e=document.querySelector(".list"),n=document.querySelector(".cards"),a=document.querySelector(".list");let c;document.querySelector(".buttons").addEventListener("click",(function(n){t(n.target.textContent).then((t=>{!function(t){let n="";for(i=1;i<=t;i++)1===i?n+=`<button class="for_pagination active">${i}</button>`:n+=`<button class="for_pagination">${i}</button>`;e.innerHTML=n,a.addEventListener("click",o)}(Math.ceil(t.length/9)),c=t,r(0,9)}))}));function o(t){const e=t.target.textContent,n=9*Number(e);r(n-9,n);[...t.currentTarget.children].find((t=>t.classList.contains("active"))).classList.remove("active"),t.target.classList.add("active")}function r(t=0,e){let i="";e=e<c.length?e:c.length;for(let n=t;n<e;n++)i+=`<div><img src="${c[n].image?c[n].image:"https://aif-s3.aif.ru/images/025/611/46e179ca51577524e8a295748abbdbc1.jpg"}" alt="${c[n].name}" width='250'>\n    <p>Имя: ${c[n].name}</p>\n    <p>День рождения: ${c[n].dateOfBirth?c[n].dateOfBirth:"непонятно"}</p>\n    <p>Патронус: ${c[n].patronus?c[n].patronus:"непонятно"}</p>\n    </div>`;n.innerHTML=i}
//# sourceMappingURL=index.f2dc762a.js.map
