// operators
   // arithmetic operators

   let a = 10;
   let b=4;
   let c = a + b;
console.log("a + b  =", a + b);
console.log("a + b  =", c );
console.log("a + b  =", a - b);
console.log("a + b  =", a * b);
console.log("a + b  =", a / b);
console.log("a + b  =", a % b);

console.log(a ** b ); // 10 * 10 * 10 = 1000
   
// unary operators
console.log(" a = ", a++); // 10
console.log(" a = ", a++); // 11
console.log(" a = ", a--); // 12
console.log(" a = ", --a); // 10

// assignment operators = +=, -=, *=, /=, %=
a += 4; // a = a + 4
console.log("a = ", a); // 14
  
a -= 4; // a = a - 4
console.log("a = ", a); // 10

b *= 3; // b = b * 3
console.log("b = ", b); // 12

b /= 4; // b = b / 4
console.log("b = ", b); // 3

b %= 4; // b = b % 4
console.log("b = ", b); // 3

// comparison operators 
    // ==equal to
    // != not equal to
c = 5;
d = 4;
console.log("c == d ", c==d);
console.log("c != d ", c!=d);
     // > , <, >=, =<
console.log("c>d", c>d);
console.log("c<d", c<d);
console.log("c<=d", c<=d);
console.log("c>=d", c>=d);

 // logical operator
     // && (AND) operator
     // || (OR) operator
     // !  (NOT) operator
 let p = 7;
 let q = 8;
 console.log("p && q", p > q && p < q);
 console.log("p || q", p > q || p < q);
 let cond1 =p<q;
 let cond2= p>q;
 console.log("cond1 && cond2", cond1 && cond2);
 console.log("cond1 || cond2", cond1 || cond2);
 console.log("! cond1", !cond1);
 console.log(" ! cond2", !cond2);

      // conditional statements
// if-else
let age = 17;
  if(age >=18){
    console.log("you can vote ");
  }
    else{
        console.log("you cannot vote");
    }
  
let mode = "dark";
let color;

 if(mode === "dark"){
    color = "black";
 }
 if(mode === "light"){
    color = "white";
 }
console.log(color);

             // odd even check
let num = 32;
if(num % 2 === 0){
    console.log("number is even");
}
  else{
    console.log("number is odd");
  }

           // ternary operator
let age1 = 32;
let result = age1 >= 18 ? "is adult" : "not adult";
console.log(result);

  // switch
let expression = "mango";
switch(expression){
    case "oranges":
        console.log("orange is 150rs");
    break;
    case "mango":
        console.log(" mangoes are 200rs kg");
    break;
    default:
        console.log("sorry we are not found");
    } 

                // prompt = user input
    let name = prompt("hello");
    console.log(name);

