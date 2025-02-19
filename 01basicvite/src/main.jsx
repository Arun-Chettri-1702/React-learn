import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";


const reactElement = {
  type: "a",
  Attr: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App </h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// this is what react expects while rendering
// first is tag second is attribute third is child
const aReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click to visit google"
  
);

createRoot(document.getElementById("root")).render(<App />);
