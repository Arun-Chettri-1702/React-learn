function customRender(reactElement, container) {
  /*
    

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute(href, reactElement.Attr.href);
    domElement.setAttribute(target, reactElement.Attr.target);


    container.appendChild(domElement);*/

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const attr in reactElement.Attr) {
    if (attr === "children") continue;
    domElement.setAttribute(attr, reactElement.Attr[attr]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  Attr: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
