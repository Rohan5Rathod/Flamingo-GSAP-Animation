var tl = gsap.timeline();

tl.from("#section",{
    stagger:.3,
    width:0,
    duration:2,
    opacity:0,
    ease:'Expo.easeInOut',
})
.from("nav a",{
    stagger:.1,
    x:30,
    duration:1.5,
    opacity:0,
    ease:'Expo.easeInOut',
},'-=1')
.from(".circle",{
    rotation:"90deg",
    opacity:0,
    duration:2,
    ease:'Expo.easeInOut',
},'-=2')
.from(".vmcircle",{
    rotation:"-90deg",
    duration:1,
    ease:'Expo.easeInOut',
},'-=.5')
.from(".circle img",{
    y:800,
    duration:1.5,
    ease:'Expo.easeInOut',
},'-=1')
.from(".list .elem",{
    opacity:0,
    stagger:.2,
    y:60,
    duration:3,
    ease:'Expo.easeInOut',
},'-=3')