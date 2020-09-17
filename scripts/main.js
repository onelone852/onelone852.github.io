
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.(but do not enter your real name.)');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hi!, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hi!, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
                
