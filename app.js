document.addEventListener("DOMContentLoaded", function() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.animated-element',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            markers: true,
        }
    });

    tl.to(".animated-element", {
        x: 800
    });

    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        console.log(e);
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
});
