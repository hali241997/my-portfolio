export const animate = (elem: HTMLElement, animation: string) => {
  return new Promise((resolve, reject) => {
    function handleAnimationEnd() {
      resolve(elem);
    }
    elem.addEventListener("animationend", handleAnimationEnd, { once: true });
    elem.classList.add(animation);
  });
};
