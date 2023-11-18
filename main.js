gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal_type');

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: 'chars' });

  gsap.from(text.chars,{
    scrollTrigger:{
      trigger:char,
      start:"top 100%",
      end:"top 20%",
      scrub:true,
    },
    scaleY:0,
    y:20,
    opacity:0.2,
    TransformOrigin:"bottom",
    opacity:0,
    stagger:0.1,
  })
})

  
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
