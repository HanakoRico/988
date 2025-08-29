// sparkle.js
(function(){
  const canvas=document.createElement("canvas");
  canvas.id="sparkles";
  canvas.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;";
  document.body.appendChild(canvas);
  const ctx=canvas.getContext("2d");
  let w,h,particles=[];
  function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;}
  resize(); window.addEventListener("resize",resize);

  document.addEventListener("mousemove",e=>{
    for(let i=0;i<3;i++){
      particles.push({
        x:e.clientX,y:e.clientY,
        dx:(Math.random()-0.5)*2,
        dy:(Math.random()-1)*2,
        life:60
      });
    }
  });

  function draw(){
    ctx.clearRect(0,0,w,h);
    particles.forEach((p,i)=>{
      p.x+=p.dx; p.y+=p.dy; p.life--;
      ctx.fillStyle=`rgba(255,255,255,${p.life/60})`;
      ctx.fillRect(p.x,p.y,2,2);
      if(p.life<=0)particles.splice(i,1);
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
