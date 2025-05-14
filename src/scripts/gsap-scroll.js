import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTriggerを登録
gsap.registerPlugin(ScrollTrigger);

const slideNum = 8;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".panelWrap");
  const steps = document.querySelectorAll(".step__flow");

  // 横スクロールアニメーション
  gsap.to(container, {
    xPercent: -100 * (slideNum - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".flow",
      pin: true,
      scrub: 1,
      end: () => "+=" + container.offsetWidth,
      onUpdate: (self) => {
        const progress = self.progress; // スクロール進捗を取得 (0 ~ 1)
        const currentStep = Math.round(progress * (slideNum - 1));

        steps.forEach((step, i) => {
          step.classList.toggle("active", i === currentStep);
        });
      }
    },
  });
});
