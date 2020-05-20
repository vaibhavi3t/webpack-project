export function writeToScreen() {
  document.write("Hello World from webpack !!!");
}

if (module && module.hot) module.hot.accept();