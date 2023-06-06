let files = require.context("./components", false, /\.vue$/);
let components = files.keys().reduce((res, modulePath) => {
  let value = files(modulePath).default;
  res.push(value);
  return res;
}, []);
let directives = files.keys().reduce((res, modulePath) => {
  let value = files(modulePath).default;
  res.push(value);
  return res;
}, []);
const install = (app) => {
  components.forEach((comp) => {
    app.component(comp.name, comp);
  });
  directives.forEach((d) => {
    app.directive(d.name, d.options);
  });
};
export default install;
