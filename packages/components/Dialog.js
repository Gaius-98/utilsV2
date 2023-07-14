import GuDialog from "./GuDialog.vue";
import Vue from "vue";
class Dialog {
  title;

  size;

  width;

  height;

  footer;

  content;

  componentProps;

  modal;

  cb;

  constructor(obj) {
    const { title, size, width, height, footer, content, componentProps, cb } =
      obj;
    this.title = title;
    this.size = size || "default";
    this.width = width;
    this.height = height;
    this.footer = footer || true;
    this.content = content;
    this.componentProps = componentProps;
    this.cb = cb;
  }

  create() {
    let Comp = Vue.extend(GuDialog);
    this.modal = new Comp({
      propsData: this.getOption(),
    }).$mount(document.createElement("div")).$el;
    document.body.appendChild(this.modal);
  }

  destroyed() {
    document.body.removeChild(this.modal);
  }

  getOption() {
    return {
      title: this.title,
      size: this.size,
      width: this.width,
      height: this.height,
      footer: this.footer,
      content: this.content,
      componentProps: this.componentProps,
      cb: this.cb,
    };
  }
}
export default Dialog;
