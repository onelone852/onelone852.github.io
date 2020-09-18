
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('輸入你的名字~');
  if(！myName) {
  } else {
   setUserName();
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '嗨! ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = '嗨! ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
                
