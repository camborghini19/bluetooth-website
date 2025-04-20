document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate all fade-in scenes
  gsap.utils.toArray(".fade-in").forEach(section => {
    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Animate diagram zoom-in
  gsap.fromTo(".diagram",
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".diagram",
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none none reverse"
      }
    }
  );
});
