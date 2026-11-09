// VC15 Tracker: one menu on every page. Include with <script src="nav.js"></script> right after <body>.
(function(){
  if(!document.body){document.addEventListener("DOMContentLoaded",arguments.callee);return}
  var page=(location.pathname.split("/").pop()||"index.html").toLowerCase();if(page==="")page="index.html";
  var mp=(location.search.match(/[?&]map=(\w+)/)||[])[1];var cur=page==="arena.html"?(mp==="ticket"||(!mp&&(function(){try{return localStorage.getItem("vcTmap")==="1"}catch(e){return false}})())?"arena.html?map=ticket":"arena.html?map=arena"):page;
  var GROUP={"index.html":"live","live.html":"live","arena.html":"supply","count.html":"supply","highmark.html":"supply","city.html":"supply","arena3d.html":"supply","stats.html":"stats","news.html":"news","games.html":"games","predict.html":"games","new.html":"new"};
  var g=GROUP[page]||"";
  var TABS=[["live","./","📡 Live"],["supply","arena.html","📊 Supply"],["stats","stats.html","📈 Stats"],["news","news.html","📰 News"],["games","games.html","🎮 Games"],["new","new.html","🆕 New here?"],["fast","#fast","⚡ Fast Break"]];
  var SUB={supply:[["arena.html?map=arena","🏟️ Arena"],["arena3d.html","🎥 Arena 3D"],["arena.html?map=ticket","🎟️ Ticket map"],["count.html","📉 Countdown"],["highmark.html","🦬 Highmark"],["city.html","🏙️ VC City"]],games:[["games.html","🦆 Races"],["predict.html","🏈 Score Predictor"]]};
  var css="#vcnav{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(11,13,20,.96);backdrop-filter:blur(8px);border-bottom:1px solid #2a3045;font-family:Barlow,system-ui,sans-serif}"+
  "#vcnav .r{max-width:1180px;margin:0 auto;display:flex;align-items:center;gap:12px;padding:8px 14px;height:52px}"+
  "#vcnav .lg{font:900 22px 'Barlow Condensed',system-ui,sans-serif;color:#f1ede4;text-decoration:none;white-space:nowrap;letter-spacing:.01em}#vcnav .lg b{color:#f2c94c}"+
  "#vcnav .t{display:flex;gap:3px;overflow-x:auto;scrollbar-width:none}#vcnav .t::-webkit-scrollbar{display:none}"+
  "#vcnav .t a{white-space:nowrap;text-decoration:none;font:700 14px Barlow,system-ui,sans-serif;color:#9aa0b4;padding:7px 11px;border-radius:9px}"+
  "#vcnav .t a:hover{color:#f1ede4;background:#1b2032}#vcnav .t a.on{color:#1b1608;background:#f2c94c}#vcnav .t a.soon{opacity:.55}"+
  "#vcnav .s{border-top:1px solid #1f2436}#vcnav .s .r{height:40px;padding-top:4px;padding-bottom:4px}"+
  "#vcnav .s a{white-space:nowrap;text-decoration:none;font:700 13px Barlow,system-ui,sans-serif;color:#9aa0b4;padding:5px 10px;border-radius:20px;border:1px solid transparent}"+
  "#vcnav .s a.on{color:#f1ede4;border-color:#3ee07f;background:#14261c}#vcnav .s a:hover{color:#f1ede4}#vcnav .s a i{font-style:normal;font-size:10px;font-weight:800;color:#f2c94c;margin-left:4px}"+
  "@media (max-width:640px){#vcnav .lg{font-size:18px}#vcnav .lg span{display:none}#vcnav .r{gap:8px;padding-left:10px;padding-right:10px}}"+
  "body.rec #vcnav{display:none}";
  var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
  var h='<div class="r"><a class="lg" href="./">VC15 <b>TRACKER</b></a><div class="t">';
  TABS.forEach(function(t){h+='<a href="'+t[1]+'" class="'+(t[0]===g?"on":"")+(t[0]==="fast"?" soon":"")+'">'+t[2]+'</a>'});
  h+="</div></div>";
  if(SUB[g]){h+='<div class="s"><div class="r">';SUB[g].forEach(function(s){var on=s[0]===cur;h+='<a href="'+s[0]+'" class="'+(on?"on":"")+'">'+s[1]+(s[0]==="#city"?"<i>SOON</i>":"")+'</a>'});h+="</div></div>"}
  var n=document.createElement("div");n.id="vcnav";n.innerHTML=h;document.body.insertBefore(n,document.body.firstChild);
  function setH(){var px=document.body.classList.contains("rec")?0:n.offsetHeight;document.documentElement.style.setProperty("--navh",px+"px");window.VC_NAVH=px}
  setH();window.addEventListener("resize",setH);
  n.addEventListener("click",function(e){var a=e.target.closest("a");if(!a)return;var hr=a.getAttribute("href");
    if(hr==="#fast"){e.preventDefault();alert("⚡ The Fast Break helper is coming soon!")}
    if(hr==="#city"){e.preventDefault();alert("🏙️ VC City is coming soon: every VC moment as a home in its own city, with Legendary hills, Rare suburbs and Common downtown.")}});
})();
