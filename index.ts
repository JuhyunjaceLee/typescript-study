// number
// string
// boolean
// null
// undefined
// any

let a: number = 3;
// a = "abc"
a = 10;

let b: string = "hello";
// b = true;
b = "hi";

let c: any = 10;
c = "hello";

let d: number | string = "hello";
d = 100;
// d = false;

let e: string[] = ["apple", "banana"];
e.push("carrot");
// e.push(100);

function addNumber(a: number, b: number): number {
  return a + b;
}
addNumber(3, 7);
