  // DOM = to select an element with given Id

const selectedH1 = document.getElementById("my-h1");
console.log(selectedH1);

const selectedH2 = document.getElementById("my-h2");
console.log(selectedH2);

  // to select elements using class 


  // create a function which will change innnerHTML of heading
  function changeText(){
    const selectedH1 = document.getElementById("my-h1");
    selectedH1.innerHTML = "12345";
  }