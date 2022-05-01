// @ts-check
class SVGPath {
    constructor(attrs = {}) {
        this.path = "";
        this.attributes = attrs;
    };

    moveTo(x, y, absolute = true) {
        this.path += ` ${absolute ? "M" : "m"} ${x} ${y}`;
    };

    lineTo(x, y, absolute = true) {
        this.path += ` ${absolute ? "L" : "l"} ${x} ${y}`;
    };

    bezierCurveTo(x1, y1, x2, y2, x, y, absolute = true) {
        this.path += ` ${absolute ? "C" : "c"} ${x1} ${y1}, ${x2} ${y2}, ${x}, ${y}`;
    };

    quadraticCurveTo(cx, cy, x, y, absolute = true) {
        this.path += ` ${absolute ? "Q" : "q"} ${cx},${cy} ${x},${y}`;
    };

    closePath() {
        this.path += " Z";
    };

    buildAttributes() {
        return Object.assign(this.attributes, { d: this.path.slice(1) });
    };
};

module.exports = SVGPath;