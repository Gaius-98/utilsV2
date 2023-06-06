const copyText = (text) => {
  const inputDom = document.createElement("input");
  inputDom.value = text;
  document.body.appendChild(inputDom);
  inputDom.select();
  try {
    document.execCommand("Copy");
  } catch (error) {
    console.error(`复制失败:${error}`);
  }
  document.body.removeChild(inputDom);
};
const copy = {
  name: "copy",
  options: {
    bind(el, binding) {
      const { arg = "click", value } = binding;
      el.addEventListener(arg, () => {
        let text = value;
        copyText(text);
      });
    },
  },
};
export default copy;
