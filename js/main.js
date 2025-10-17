
function toggleMenu(){const m=document.getElementById('menu');m.style.display=(m.style.display==='flex'||m.style.display==='block')?'none':'flex';}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.card').forEach((el,i)=>{
    el.style.opacity=0;el.style.transform='translateY(8px)';
    setTimeout(()=>{el.style.transition='all 420ms ease';el.style.opacity=1;el.style.transform='translateY(0)'},120*i);
  });
});
