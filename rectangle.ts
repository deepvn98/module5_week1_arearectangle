export class Rectangle {
    private _width: number;
    private _height: number;

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
   
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }

    constructor(x : number, y: number){
        this.width = x;
        this.height = y;
    }

}
