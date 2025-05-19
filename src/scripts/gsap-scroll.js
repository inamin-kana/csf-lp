import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slideNum = 10;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".panelWrap");
  const steps = document.querySelectorAll(".step__flow");

  if (!container) return;

  gsap.to(container, {
    xPercent: -100 * (slideNum - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".flow",
      pin: true,
      scrub: 1,
      end: () => "+=" + container.offsetWidth,
      snap: {
        snapTo: 1 / (slideNum - 1), // 各スライドごとにスナップ
        duration: { min: 0.2, max: 0.6 }, // スナップアニメーション速度
        ease: "power1.inOut"
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const currentStep = Math.round(progress * (slideNum - 1));

        steps.forEach((step, i) => {
          step.classList.toggle("active", i === currentStep);
        });
      }
    },
  });
});
