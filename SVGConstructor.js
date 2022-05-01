// @ts-check
class SVGConstructor {
    constructor(attrs = {}, minimized) {
        this.attributes = Object.assign({ xmlns: "http://www.w3.org/2000/svg" }, attrs);
        this.elements = [];
        this.minimized = minimized;
    };

    setAttribute(name, value) {
        this.attributes[name] = value;
    };

    text(text, attrs) {
        this.elements.push(this.buildElement("text", attrs, text));
        return this;
    };

    rect(attrs) {
        this.elements.push(this.buildSelfClosingElement("rect", attrs));
        return this;
    };

    circle(attrs) {
        this.elements.push(this.buildSelfClosingElement("circle", attrs));
        return this;
    };

    line(attrs) {
        this.elements.push(this.buildSelfClosingElement("line", attrs));
        return this;
    };

    path(path) {
        this.elements.push(this.buildSelfClosingElement("path", path.buildAttributes()));
        return this;
    };

    a(attrs, ...elements) {
        this.elements.push(this.buildElement("a", attrs, elements.join(this.minimized ? "" : "\n")));
        return this;
    };

    g(attrs, ...elements) {
        this.elements.push(this.buildElement("g", attrs, elements.join(this.minimized ? "" : "\n")));
        return this;
    };

    clear() {
        this.elements = [];
        return this;
    };

    buildElement(name, attrs, content = "") {
        return `<${name} ${this.mapAttributes(attrs)}>${content}</${name}>`;
    };

    buildSelfClosingElement(name, attrs) {
        return `<${name} ${this.mapAttributes(attrs)}/>`;
    };

    mapAttributes(attrs) {
        return Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(" ");
    };

    build() {
        return `<svg ${this.mapAttributes(this.attributes)}>${this.elements.join(this.minimized ? "" : "\n")}</svg>`;
    };
};

module.exports = SVGConstructor;