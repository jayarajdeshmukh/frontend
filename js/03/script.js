
  const parent1= document.getElementById("my-ol");
  const inputBox= document.getElementById("my-input");
function addLi(){
    const newLi = document.createElement("li");

    newLi.innerText = inputBox.value;
    parent1.appendChild(newLi);
    inputBox.value="";
}