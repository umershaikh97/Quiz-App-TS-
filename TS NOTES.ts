// run tsc main.ts to transpile the code into JS

// let count = 5;
// count = 'tt'; // error





// TYPE ANNOTATIONS
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, 'abc', true];

// enum Color { Red = 0, Green = 1, Blue = 2 }
// let backgroundColor = Color.Red;





// TYPE ASSERSIONS (To tell the Typescript compiler about the data type of the variable)
// let message; // Its type is 'any'
// message='abc'; // Its type is string now, but ts compiler dont know, we have to explicitly inform the compiler so we can use intellisense (its optional thou)
// let endsWithC = (<string>message).endsWith('c');
// OR
// let alternativeWay = (message as string).endsWith('c');





//INLINE ANNOTATION
// let fun = (x: number, y: string) // HERE, these parameters are MUST and REQUIRED
// let fun = (x?: number, y?: string) // HERE, these parameters are OPTIONAL
// let drawPoint = (point: { x: number, y: number }) => { // This function will accept an object with two keys X and Y of type number
//     //...
// }

// drawPoint({ x: 1, y: 2 }) // CORRECT
// drawPoint({ x: 1, y: 'abc' }) // ERROR
// drawPoint({ x: 1, z: 2 }) // ERROR
// drawPoint({ x: 1, y: 2, z: 3 }) // ERROR





//INTERFACE (alternative and better approact to inline annotation)
// interface Point {
//     x: number,
//     y: number,
// }

// let drawPoint = (point: Point) => {
//     //...
// }

// drawPoint({ x: 1, y: 2 })




// CLASSES WITHOUT ACCESS MODIFIERS
// class Point {
//     x: number;
//     y: number;

//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     draw = () => {
//         console.log('X: ' + this.x + ' Y: ' + this.y)
//     }
// }

// let point = new Point();
// point.x =  5; // VALID
// point.draw();




// ACCESS MODIFIERS to prevent the updation of properties of an object
// All properties and methods are PUBLIC by default
// ACCESS MODIFIERS: PUBLIC, PROTECTED, PRIVATE

// class Point {
//     private x: number;
//     private y: number;

//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     draw = () => {
//         console.log('X: ' + this.x + ' Y: ' + this.y)
//     }
// }

// OR

// class Point {
//     constructor(private x?: number, private y?: number) {  // IT WILL AUTOMATICALLY CREATE PROPERTIES AND ASSIGN VALUES
//     }

//     draw = () => {
//         console.log('X: ' + this.x + ' Y: ' + this.y)
//     }
// }

// let point = new Point();
// point.x = 5; // NOT VALID NOW (ERROR)
// point.draw();





// PROPERTY (GET SET)
// class Point {
//     private x: number;
//     private y: number;

//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     get X() {
//         return this.x;
//     }

//     set X(value) {
//         this.x = value;
//     }

//     draw = () => {
//         console.log('X: ' + this.x + ' Y: ' + this.y)
//     }
// }

// let point = new Point(1,2);
// let x = point.X; // get X
// point.X = 5; // set X
// // They are not methods, they are properties