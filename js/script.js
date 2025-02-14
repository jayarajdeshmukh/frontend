function greet(){
    console.log("Good Morning");
}

 function sayGoodBye(){
    console.log("Bye")
 }

function sayHello(){
    alert("Hello how are you")
}

// prompt
function AskName(){
  const userName = prompt("Please enter your name")
  console.log("Hello how are you," + userName)
}

 function confirmUserAge(){
    const isAbove18 = confirm("are you above 18+")

    if(isAbove18){
        console.log("you can vote");
    }else{
        console.log("you can't vote");
     }   
    }

    function getRandomNumber(){
        const names = ["jay", "raj" , "sudip", "mahadev","ayub"];
        const random = Math.random()*10;
        let intRandom = Math.floor(Math, random);
        console.log(intRandom);
    }
 