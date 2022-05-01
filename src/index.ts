type Attributes = Record<string, any>;

declare class SVGConstructor {
    public constructor(attrs: Attributes, minimized?: boolean);
    public readonly attributes: Attributes;
    private readonly elements: string[];
    public minimized: boolean;
    public setAttribute(name: string, value: any): void;
    public text(text: string, attrs: any): this;
    public rect(attrs: any): this;
    public circle(attrs: any): this;
    public line(attrs: any): this;
    public path(path: SVGPath): this;
    public a(attrs: any, ...elements: string[]): this;
    public g(attrs: any, ...elements: string[]): this;
    public clear(): this;
    public buildElement(name: string, attrs: any, content?: string): string;
    public buildSelfClosingElement(name: string, attrs: any): string;
    public mapAttributes(attrs: any): string;
    public build(): string;
}

declare class SVGPath {
    public constructor(attrs: Attributes);
    private path: string;
    public readonly attributes: Attributes;
    public moveTo(x: number, y: number, absolute?: boolean): void;
    public lineTo(x: number, y: number, absolute?: boolean): void;
    public bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number, absolute?: boolean): void;
    public quadraticCurveTo(cx: number, cy: number, x: number, y: number, absolute?: boolean): void;
    public closePath(): void;
    public buildAttributes(): Object & { d: string; };
}

export {
    SVGConstructor,
    SVGPath
}
