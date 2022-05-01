SVGConstructor
===

### About
Help to easily build Scalable Vector Graphics.
This project is in beta, it is not finished and probably contains bugs.

### Example usage
```js
const svg = new SVGConstructor({
    width: 1000,
    height: 1000
});

svg.rect({
    x: 0,
    y: 0,
    width: svg.attributes.width,
    height: svg.attributes.height,
    fill: "#2f3136"
}).circle({
    cx: 500,
    cy: 35,
    r: 10,
    fill: "#ffffff", // same as style: "fill: #ffffff"
}).text("Hello world", {
    x: 500,
    y: 500,
    "text-anchor": "middle",
    "font-family": "Calibri", // same as style: "font-family: Calibri"
    "font-size": 50,
    fill: "#ffffff",
    stroke: "#000000",
    "stroke-width": 2
});

// Draw a path
const path = new SVGPath({
    style: "fill: none; stroke-width: 3; stroke: #ffffff"
});

path.moveTo(500, 50);
path.lineTo(50, 950);
path.lineTo(950, 950);
path.closePath();

svg.path(path);

svg.a({ href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a" },
    svg.buildElement("text", {
        x: 500, y: 600, fill: "#ffffff", "text-anchor": "middle", "font-family": "Calibri", "font-size": 50,
    }, "docs")
);

// Logs result
const result = svg.build();
console.log(result);

// Write the result in a file
const { writeFileSync } = require("node:fs");
writeFileSync("yourfilepath.svg", result);
```
