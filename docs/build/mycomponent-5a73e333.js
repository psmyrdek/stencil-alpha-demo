const e=window,n=document,t={t:"/",o:0,l:!1,s:!1},o=e=>console.error(e),l=[],s=[],i=[],c=e=>n=>{e.push(n),t.l||(t.l=!0,requestAnimationFrame(a))},r=(e,n)=>{let t,l=0;for(;l<e.length&&(t=performance.now())<n;)try{e[l++](t)}catch(e){o(e)}l===e.length?e.length=0:0!==l&&e.splice(0,l)},a=()=>{t.o++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(e){o(e)}e.length=0})(l);const e=t.s?performance.now()+7*Math.ceil(t.o*(1/22)):1/0;r(s,e),r(i,e),s.length>0&&(i.push(...s),s.length=0),(t.l=l.length+s.length+i.length>0)?requestAnimationFrame(a):t.o=0},f=c(s),u={},$=e=>null!=e,m=e=>e.toLowerCase(),p=[];function y(e,n){let t,o=null,l=!1,s=!1,i=arguments.length;for(;i-- >2;)p.push(arguments[i]);for(;p.length>0;){let n=p.pop();if(n&&void 0!==n.pop)for(i=n.length;i--;)p.push(n[i]);else"boolean"==typeof n&&(n=null),(s="function"!=typeof e)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(s=!1)),s&&l?o[o.length-1].i+=n:null===o?o=[s?{u:0,i:n}:n]:o.push(s?{u:0,i:n}:n),l=s}if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(i in n.class)n.class[i]&&p.push(i);n.class=p.join(" "),p.length=0}null!=n.key&&(t=n.key)}if("function"==typeof e)return e(n,o||[],h);const c={$:e,p:o,h:void 0,u:0};return c.g=n,c.i=void 0,c.v=t,c}const d={},h={forEach:(e,n)=>e.map(w).forEach(n),map:(e,n)=>e.map(w).map(n).map(g)},w=e=>({vattrs:e.g,vchildren:e.p,vkey:e.v,vname:e._,vtag:e.$,vtext:e.i}),g=e=>({u:0,g:e.vattrs,p:e.vchildren,v:e.vkey,_:e.vname,$:e.vtag,i:e.vtext}),v=(e,n,t,o,l,s)=>{if("class"!==n||l)if("style"===n){for(const n in t)o&&null!=o[n]||(/-/.test(n)?e.style.removeProperty(n):e.style[n]="");for(const n in o)t&&o[n]===t[n]||(/-/.test(n)?e.style.setProperty(n,o[n]):e.style[n]=o[n])}else if("key"===n);else if("ref"===n);else if(n.startsWith("on")&&!B(e,n))n=B(e,m(n))?m(n.substring(2)):m(n[2])+n.substring(3),t&&e.removeEventListener(n,t),o&&e.addEventListener(n,o);else{const t=B(e,n),i=["object","function"].includes(typeof o);if((t||i&&null!==o)&&!l)try{e[n]=null==o&&-1===e.tagName.indexOf("-")?"":o}catch(e){}null==o||!1===o?e.removeAttribute(n):(!t||4&s||l)&&!i&&(o=!0===o?"":o.toString(),e.setAttribute(n,o))}else if(t!==o){const n=b(t),l=b(o),s=n.filter(e=>!l.includes(e)),i=b(e.className).filter(e=>!s.includes(e)),c=l.filter(e=>!n.includes(e)&&!i.includes(e));i.push(...c),e.className=i.join(" ")}},b=e=>null==e||""===e?[]:e.split(" "),_=(e,n,t,o)=>{const l=11===n.h.nodeType&&n.h.host?n.h.host:n.h,s=e&&e.g||u,i=n.g||u;for(o in s)i&&null!=i[o]||null==s[o]||v(l,o,s[o],void 0,t,n.u);for(o in i)o in s&&i[o]===("value"===o||"checked"===o?l[o]:s[o])||v(l,o,s[o],i[o],t,n.u)};let k;const j=(e,t,o)=>{const l=t.p[o];let s,i,c=0;if($(l.i))l.h=n.createTextNode(l.i);else if(s=l.h=n.createElement(l.$),_(null,l,!1),l.p)for(c=0;c<l.p.length;++c)(i=j(e,l,c,s))&&s.appendChild(i);return l.h},U=(e,n,t,o,l,s)=>{let i,c=e;for(;l<=s;++l)o[l]&&(i=j(null,t,l,e))&&(o[l].h=i,c.insertBefore(i,n))},x=(e,n,t)=>{for(;n<=t;++n)$(e[n])&&e[n].h.remove()},L=(e,n)=>e.$===n.$&&e.v===n.v,R=(e,n)=>{const t=n.h=e.h,o=e.p,l=n.p;$(n.i)?e.i!==n.i&&(t.textContent=n.i):(_(e,n,!1),$(o)&&$(l)?((e,n,t,o)=>{let l,s,i=0,c=0,r=0,a=0,f=n.length-1,u=n[0],m=n[f],p=o.length-1,y=o[0],d=o[p];for(;i<=f&&c<=p;)if(null==u)u=n[++i];else if(null==m)m=n[--f];else if(null==y)y=o[++c];else if(null==d)d=o[--p];else if(L(u,y))R(u,y),u=n[++i],y=o[++c];else if(L(m,d))R(m,d),m=n[--f],d=o[--p];else if(L(u,d))R(u,d),e.insertBefore(u.h,m.h.nextSibling),u=n[++i],d=o[--p];else if(L(m,y))R(m,y),e.insertBefore(m.h,u.h),m=n[--f],y=o[++c];else{for(r=-1,a=i;a<=f;++a)if(n[a]&&$(n[a].v)&&n[a].v===y.v){r=a;break}r>=0?((s=n[r]).$!==y.$?l=j(n&&n[c],t,r,e):(R(s,y),n[r]=void 0,l=s.h),y=o[++c]):(l=j(n&&n[c],t,c,e),y=o[++c]),l&&u.h.parentNode.insertBefore(l,u.h)}i>f?U(e,null==o[p+1]?null:o[p+1].h,t,o,c,p):c>p&&x(n,i,f)})(t,o,n,l):$(l)?($(e.i)&&(t.textContent=""),U(t,null,n,l,0,l.length-1)):$(o)&&x(o,0,o.length-1))},q=(e,n)=>{e&&(e.g&&e.g.ref&&e.g.ref(n?null:e.h),e.p&&e.p.forEach(e=>{q(e,n)}))},F=async(e,n,t)=>{n.k|=16;const o=n.j;f(()=>M(e,n,t,!0,o))},M=(e,n,t,l,s)=>{n.k&=-17,n.k|=4;try{((e,n,t,o)=>{const l=n.U||{u:0};k=m(e.tagName),(e=>e&&e.$===d)(o)?o.$=null:o=y(null,null,o),o.u|=4,n.U=o,o.h=l.h=e,R(l,o),q(o)})(e,n,0,s.render())}catch(e){o(e)}n.k&=-5,n.k|=2,A(e,n)},A=(e,o)=>{if(!e["s-al"]){const l=o.L;512&o.k||(o.k|=512,o.R(e),l||(n.documentElement.classList.add("hydrated"),setTimeout(()=>t.s=!0,999)))}},C=(e,n,t,o)=>(n.q&&Object.entries(n.q).forEach(([t,[l]])=>{o&&32&l&&Object.defineProperty(e.prototype,t,{get(){return((e,n)=>P(e).F.get(n))(this,t)},set(e){((e,n,t,o)=>{const l=P(this),s=l.M,i=l.F.get(n),c=l.k;(t=((e,n)=>null!=e&&"object"!=typeof e&&"function"!=typeof e?4&n?"false"!==e&&(""===e||!!e):2&n?parseFloat(e):1&n?String(e):e:e)(t,o.q[n][0]))===i||8&c&&void 0!==i||(l.F.set(n,t),l.j&&2==(22&c)&&F(s,l,o))})(0,t,e,n)},configurable:!0,enumerable:!0})}),e),E=(l,s={})=>{const i=s.exclude||[],c=e.customElements;s.resourcesUrl&&(t.t=new URL(s.resourcesUrl,n.baseURI).href),l.forEach(e=>e[1].forEach(n=>{const t={u:n[0],A:n[1],q:n[2],C:n[3]},l=t.A;t.O=e[0],i.includes(l)||c.get(l)||c.define(l,C(class extends HTMLElement{constructor(e){super(e),this["s-lr"]=!1,this["s-rc"]=[],T(e=this)}connectedCallback(){((e,n)=>{const t=P(e);1&t.k||(t.k|=1,(async(e,n,t,l,s)=>{if(!(256&n.k)){n.k|=256;try{(s=await H(t,n,void 0)).isProxied||(C(s,t,0,1),s.isProxied=!0),n.k|=8,new s(n),n.k&=-9}catch(e){o(e)}}F(e,n,t)})(e,t,n))})(this,t)}disconnectedCallback(){}"s-init"(){const e=P(this);e.j&&A(this,e)}"s-hmr"(e){}forceUpdate(){F(this,P(this),t)}componentOnReady(){return P(this).P}},t,0,0))}))},O=new WeakMap,P=e=>O.get(e),S=(e,n)=>O.set(n.j=e,n),T=e=>{{const n={k:0,M:e};return n.P=new Promise(e=>n.R=e),n.F=new Map,O.set(e,n)}},B=(e,n)=>n in e,H=e=>__sc_import_mycomponent(`./${e.O}.entry.js`).then(n=>n[e.A.replace(/-/g,"_")],o),N=async()=>{const e=Array.from(n.querySelectorAll("script")).find(e=>e.src.includes("mycomponent")),t=new URL(".",new URL(e?e.src:"",n.baseURI));return V(t.href),window.customElements||await __sc_import_mycomponent("./chunk-d27b1ac9.js"),t.pathname},V=t=>{const o=`__sc_import_${"mycomponent".replace(/\s|-/g,"_")}`;try{e[o]=new Function("w","return import(w);")}catch(l){const s=new Map;e[o]=(l=>{const i=new URL(l,t).href;let c=s.get(i);if(!c){const t=n.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window[${o}].m = m;`],{type:"application/javascript"})),c=new Promise(n=>{t.onload=(()=>{n(e[o].m),t.remove()})}),s.set(i,c),n.head.appendChild(t)}return c})}},W=(e,n)=>{E([["p-tm6rcunl",[[0,"invalid-component",{value:[32],isValid:[32]}]]]],n)};export{N as a,W as b,S as c,y as d};