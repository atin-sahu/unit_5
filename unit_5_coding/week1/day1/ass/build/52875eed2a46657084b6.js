(()=>{"use strict";document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();let t=document.getElementById("note").value;console.log(t);let n=document.createElement("p");n.textContent="",n.textContent=t,document.getElementById("para").append(n)}))})();