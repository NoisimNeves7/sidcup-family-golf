var cursor = document.querySelector(".cursor");
var cursor_blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",function(val){
    cursor.style.left=val.x+30+"px"
    cursor.style.top=val.y+"px"
    cursor_blur.style.left=val.x-250+"px"
    cursor_blur.style.top=val.y-250+"px"
})

var h4all=document.querySelectorAll(".nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3.5
        cursor.style.backgroundColor="transparent"
        cursor.style.border="0.5px solid #fff"
    })

    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1
        cursor.style.backgroundColor="#afe223"
        cursor.style.border="0px "
    })
});



gsap.to(".nav",{
    backgroundColor:"#000",
    duration:"0.5",
    height:"110px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }

})

gsap.from((".about-us img, .about-us-in"),{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})

gsap.from((".card"),{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3

    }
})

gsap.from(("#green1"),{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#green1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from(("#green2"),{
    y:70,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger:"#green1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from((".page4 h1"),{
    y:50,
    duration:2,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 85%",
        scrub:4
    }

})

