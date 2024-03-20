import p5 from "p5";

let angle = 0;

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(400, 400, p.WEBGL);
    };

    p.draw = () => {
        p.background(200);
        p.rotateX(angle);
        p.rotateY(angle * 0.5);
        p.box(100);
        angle += 0.01;
    };
};

new p5(sketch);