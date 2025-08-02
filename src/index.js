import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ContextProvider } from "./context/Context"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)


document.addEventListener("DOMContentLoaded", function () {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(initGradient, { timeout: 2000 });
  } else {
    setTimeout(initGradient, 1500);
  }

  function initGradient() {
    const gradientBg = document.createElement("div");
    gradientBg.classList.add("gradient-bg");
    document.body.appendChild(gradientBg);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gradientBg.appendChild(svg);

    const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.id = "goo";
    svg.appendChild(filter);

    const feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
    feGaussianBlur.setAttribute("in", "SourceGraphic");
    feGaussianBlur.setAttribute("stdDeviation", "10");
    feGaussianBlur.setAttribute("result", "blur");
    filter.appendChild(feGaussianBlur);

    const feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
    feColorMatrix.setAttribute("in", "blur");
    feColorMatrix.setAttribute("mode", "matrix");
    feColorMatrix.setAttribute("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8");
    feColorMatrix.setAttribute("result", "goo");
    filter.appendChild(feColorMatrix);

    const feBlend = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
    feBlend.setAttribute("in", "SourceGraphic");
    feBlend.setAttribute("in2", "goo");
    filter.appendChild(feBlend);

    const gradientsContainer = document.createElement("div");
    gradientsContainer.classList.add("gradients-container");
    gradientBg.appendChild(gradientsContainer);

    const colors = [
      "rgba(18, 113, 255, 0.8)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(221, 74, 255, 0.8)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(100, 220, 255, 0.8)"
    ];

    for (let i = 1; i <= 5; i++) {
      const gradientCircle = document.createElement("div");
      gradientCircle.classList.add("g" + i);
      gradientCircle.style.background = `radial-gradient(circle at center, ${colors[i - 1]} 0, rgba(var(--color${i}), 0) 50%) no-repeat`;
      gradientsContainer.appendChild(gradientCircle);
    }

    const interactiveDiv = document.createElement("div");
    interactiveDiv.classList.add("interactive");
    gradientsContainer.appendChild(interactiveDiv);
  }
});


