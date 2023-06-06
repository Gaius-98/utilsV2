const obServer = (el, src) => {
  let lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        el.src = src;
        lazyImageObserver.unobserve(el);
      }
    });
  });
  lazyImageObserver.observe(el);
};

const lazyImg = {
  name: "lazy-img",
  options: {
    bind(el, binding) {
      obServer(el, binding.value);
    },
  },
};
export default lazyImg;
