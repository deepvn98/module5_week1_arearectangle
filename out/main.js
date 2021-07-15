"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
let rectangle1 = new rectangle_1.Rectangle(10, 20);
function getArea(hcn) {
    return (hcn.width * hcn.height);
}
console.log(getArea(rectangle1));
