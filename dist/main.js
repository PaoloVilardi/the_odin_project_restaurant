(()=>{console.log("HERE WE ARE!");let e=0;!function l(){let s,t=document.getElementsByClassName("mySlides"),a=document.getElementsByClassName("dot");for(s=0;s<t.length;s++)t[s].style.display="none";for(e++,e>t.length&&(e=1),s=0;s<a.length;s++)a[s].className=a[s].className.replace(" active","");t[e-1].style.display="block",a[e-1].className+=" active",setTimeout(l,2e3)}()})();