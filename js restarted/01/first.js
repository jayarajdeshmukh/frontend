console.log("Hello World");
console.log("this is javascript");
   
{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}
// let age = 23;
// let fullName = "Jay";
  
// add details in one object
const student  = {
    fullName:"Jayaraj",
    age:24,
    isPass: true,
};

// to increase or add
student["age"]=student["age"]+2;

// rename
student["fullName"] = "Yogesh";
  
console.log(student['fullName']);
//  OR    console.log(student.fullName);
console.log(student['age']);