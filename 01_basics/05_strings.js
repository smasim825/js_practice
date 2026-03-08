//string interpolation

const name="asim" //normal string
const repocount= 50
console.log(`Hello my name is ${name} and my total repo is ${repocount}.`); //${...} is called string interpolation.
console.log(name.toUpperCase());
const gameName = new String("aimtron"); // object type string

let s = "Asim";
console.log(s.length); // 4
console.log(s[0]);      // "A"
console.log(s.charAt(1)); // "s"
console.log(s.toUpperCase()); // "ASIM"
console.log(s.toLowerCase()); // "asim"
let x = "  hello  ";
console.log(x.trim());      // "hello"
console.log(x.trimStart()); // "hello  "
console.log(x.trimEnd());   // "  hello"
let t = "hello world";

console.log(t.includes("world")); // true
console.log(t.startsWith("he"));  // true
console.log(t.endsWith("ld"));    // true
console.log(t.indexOf("o"));      // 4
console.log(t.lastIndexOf("o"));  // 7
console.log(t.slice(0, 5));      // "hello"
console.log(t.substring(0, 5));  // "hello"
console.log(t.slice(-5)); // "world" slice support negative index
console.log(t.replace("world", "JS")); // "hello JS"
console.log("a a a".replaceAll("a", "b")); // "b b b"
console.log("a,b,c".split(",")); // ["a","b","c"]
console.log(["a","b","c"].join("-")); // "a-b-c"
console.log("ha".repeat(3)); // "hahaha"
console.log("hello".concat(" world")); // "hello world"

