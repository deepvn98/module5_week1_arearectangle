import { Rectangle } from './rectangle';
let rectangle1= new Rectangle(10, 20);
function getArea(hcn: Rectangle): number {
       return (hcn.width*hcn.height);

   }
console.log(getArea(rectangle1));