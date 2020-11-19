let controller;
let slideScene;

controller = new ScrollMagic.Controller();

const sliders = document.querySelectorAll('.slide');

sliders.forEach(slide => {
  const coverImg = slide.querySelector(".cover-img");
  const coverText = slide.querySelector(".cover-text");
  
  const slideTimeLine = gsap.timeline({
    defaults: {
      duration:1,
      ease: "power2.easeOut"
    }
  });
  
  slideTimeLine.fromTo(coverImg, {x: "0%"}, {x:"100%"});
  slideTimeLine.fromTo(coverText, {x: "0%"}, {x:"100%"});

  slideScene = new ScrollMagic.Scene({
    triggerElement: slide,
    triggerHook: 0.5 //0〜1の値を取れる
  })
  .setTween(slideTimeLine)
  .addTo(controller);
  // .addIndicators({
  //   name: "slider"
  // });
})  
//1.Save クリックイベント
$('#save').on('click', function () { 
  var title=$('#input').val();
  var text=$('#title_area').val();
  var obj ={
      "title":title,
      "text":text
  };
  var json=JSON.stringify(obj);
  localStorage.setItem('memo02',json)
});


